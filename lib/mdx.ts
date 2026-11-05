import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  author: string;
  ogImage?: string;
  category?: string;
  tags?: string[];
  relatedPosts?: string[];
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  author: string;
  ogImage?: string;
  category?: string;
  tags?: string[];
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const topic = inferTopic(String(data.title || ''), Array.isArray(data.tags) ? data.tags.map(String) : [], slug);
  const assignedImages = getAssignedImages();

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    dateModified: data.dateModified,
    author: data.author || 'Dr. Joseph Hugunin',
    ogImage: data.ogImage || assignedImages.get(slug),
    category: data.category || topic.category,
    tags: data.tags || [],
    relatedPosts: data.relatedPosts || [],
    content,
  };
}

/**
 * Get all blog posts with metadata (no content)
 */
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        dateModified: post.dateModified,
        author: post.author,
        ogImage: post.ogImage,
        category: post.category,
        tags: post.tags,
      } as BlogPostMeta;
    })
    .filter((post) => post !== null) as BlogPostMeta[];

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get related posts by slugs
 */
export function getRelatedPosts(slugs: string[]): BlogPostMeta[] {
  return slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        dateModified: post.dateModified,
        author: post.author,
        ogImage: post.ogImage,
        category: post.category,
        tags: post.tags,
      } as BlogPostMeta;
    })
    .filter((post) => post !== null) as BlogPostMeta[];
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const COVER_IMAGE_POOL = [
  '/images/shockwave.webp',
  '/images/myofascial.webp',
  '/images/rehab.webp',
  '/images/chiropractic.webp',
  '/images/handsOn.webp',
  '/images/lifestyle.webp',
  '/images/our-approach-movement-treatment.webp',
  '/images/overland-park-movement-hero.webp',
  '/images/about-movement-facility-hero.webp',
  '/images/clinic.webp',
];

function inferTopic(title: string, tags: string[], slug: string): { images: string[]; category?: string } {
  const haystack = `${title} ${tags.join(' ')} ${slug}`.toLowerCase();
  if (/shockwave|eswt|acoustic wave/.test(haystack)) return { images: ['/images/shockwave.webp'], category: 'Shockwave Therapy' };
  if (/myofascial|trigger point/.test(haystack)) return { images: ['/images/myofascial.webp', '/images/handsOn.webp'], category: 'Myofascial Release' };
  if (/sciatica/.test(haystack)) return { images: ['/images/chiropractic.webp', '/images/rehab.webp'], category: 'Sciatica' };
  if (/rehab|exercise|mobility|strength/.test(haystack)) return { images: ['/images/rehab.webp', '/images/our-approach-movement-treatment.webp', '/images/overland-park-movement-hero.webp'], category: 'Rehab' };
  return { images: ['/images/clinic.webp', '/images/lifestyle.webp', '/images/about-movement-facility-hero.webp'] };
}

let coverCache: { fingerprint: string; images: Map<string, string> } | undefined;

function imageKey(image: string): string {
  return new URL(image, 'https://blog.local').pathname;
}

function getAssignedImages(): Map<string, string> {
  if (coverCache && process.env.NODE_ENV === 'production') return coverCache.images;

  const slugs = getAllPostSlugs().sort();
  // Reuse the build-worker cache; invalidate in development when MDX files change.
  const fingerprint = slugs.map((slug) => {
    const stat = fs.statSync(path.join(BLOG_DIR, `${slug}.mdx`));
    return `${slug}:${stat.mtimeMs}:${stat.size}`;
  }).join('|');
  if (coverCache?.fingerprint === fingerprint) return coverCache.images;

  const posts = slugs.map((slug) => {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8'));
    const timestamp = new Date(data.date || 0).getTime();
    return {
      slug,
      date: Number.isFinite(timestamp) ? timestamp : 0,
      explicitImage: data.ogImage ? String(data.ogImage) : undefined,
      topic: inferTopic(String(data.title || ''), Array.isArray(data.tags) ? data.tags.map(String) : [], slug),
    };
  }).sort((a, b) => a.date - b.date || (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));

  const images = new Map<string, string>();
  const usage = new Map(COVER_IMAGE_POOL.map((image) => [image, 0]));
  // Reserve explicit covers before assigning defaults, including future-dated posts.
  for (const post of posts) {
    if (!post.explicitImage) continue;
    images.set(post.slug, post.explicitImage);
    const key = imageKey(post.explicitImage);
    if (usage.has(key)) usage.set(key, usage.get(key)! + 1);
  }

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (post.explicitImage) continue;
    const previousImage = index > 0 ? images.get(posts[index - 1].slug) : undefined;
    const nextImage = posts[index + 1]?.explicitImage;
    const eligible = COVER_IMAGE_POOL.filter((image) =>
      image !== (previousImage && imageKey(previousImage)) &&
      image !== (nextImage && imageKey(nextImage))
    );
    const unused = eligible.filter((image) => usage.get(image) === 0);
    const image = post.topic.images.find((candidate) => unused.includes(candidate))
      ?? unused[0]
      ?? eligible.reduce((best, candidate) => usage.get(candidate)! < usage.get(best)! ? candidate : best);
    images.set(post.slug, image);
    usage.set(image, usage.get(image)! + 1);
  }

  coverCache = { fingerprint, images };
  return images;
}

/**
 * Pick related posts automatically (shared tags and title words) when a post
 * does not list relatedPosts in its frontmatter.
 */
export function getAutoRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);
  const words = (s: string) => s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 4);
  const currentTags = new Set((current.tags || []).map((t) => t.toLowerCase()));
  const currentWords = new Set(words(current.title));
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tagScore = (p.tags || []).filter((t) => currentTags.has(t.toLowerCase())).length * 2;
      const wordScore = words(p.title).filter((w) => currentWords.has(w)).length;
      return { post: p, score: tagScore + wordScore };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, limit)
    .map((x) => x.post);
}
