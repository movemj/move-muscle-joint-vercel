import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta, formatDate } from "@/lib/mdx";
import { ArrowRight, Calendar } from "lucide-react";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-charcoal mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article
            key={post.slug}
            className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              {post.ogImage ? (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.ogImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] bg-lightgray flex items-center justify-center">
                  <span className="text-steel text-sm">No image</span>
                </div>
              )}
              <div className="p-5">
                {post.category && (
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-softblue mb-2 block">
                    {post.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-charcoal leading-snug group-hover:text-navy transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="flex items-center gap-1.5 text-xs text-steel">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
