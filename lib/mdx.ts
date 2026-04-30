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

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    dateModified: data.dateModified,
    author: data.author || 'Dr. Joseph Hugunin',
    ogImage: data.ogImage,
    category: data.category,
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
      };
    })
    .filter((post): post is BlogPostMeta => post !== null);

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
      };
    })
    .filter((post): post is BlogPostMeta => post !== null);
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
