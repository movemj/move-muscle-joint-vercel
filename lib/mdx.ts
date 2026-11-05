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

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    dateModified: data.dateModified,
    author: data.author || 'Dr. Joseph Hugunin',
    ogImage: data.ogImage || topic.image,
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

/**
 * Pick a default cover image and category for posts that do not set them
 * (for example posts written automatically by AI SEO Crew).
 */
function inferTopic(title: string, tags: string[], slug: string): { image: string; category?: string } {
  const haystack = `${title} ${tags.join(' ')} ${slug}`.toLowerCase();
  if (/shockwave|eswt|acoustic wave/.test(haystack)) return { image: '/images/shockwave.webp', category: 'Shockwave Therapy' };
  if (/myofascial|trigger point/.test(haystack)) return { image: '/images/myofascial.webp', category: 'Myofascial Release' };
  if (/sciatica/.test(haystack)) return { image: '/images/sciatica-relief.jpg', category: 'Sciatica' };
  if (/rehab|exercise|mobility|strength/.test(haystack)) return { image: '/images/rehab.webp', category: 'Rehab' };
  return { image: '/images/clinic.webp' };
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
