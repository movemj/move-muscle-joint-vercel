import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AreasWeServe } from "@/components/blog/areas-we-serve";
import { ServiceLink } from "@/components/blog/service-link";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, formatDate } from "@/lib/mdx";
import { schemas } from "@/lib/schemas";
import { SITE, IMAGES } from "@/lib/site-data";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const canonicalUrl = `${SITE.url}/blog/${slug}`;
  const ogImageUrl = post.ogImage
    ? post.ogImage.startsWith("http")
      ? post.ogImage
      : `${SITE.url}${post.ogImage}`
    : `${SITE.url}${IMAGES.clinic}`;

  return {
    title: `${post.title} | ${SITE.name} Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      url: canonicalUrl,
      siteName: SITE.name,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
      creator: "@movemuscleandjoint",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// MDX components using your existing typography
const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal mt-12 mb-6"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-charcoal mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-semibold text-charcoal mt-6 mb-2" {...props} />
  ),
  p: (props: any) => (
    <p className="text-lg leading-relaxed text-steel mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-lg text-steel" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-lg text-steel" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => (
    <a
      className="text-navy font-medium hover:text-navy/70 underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-softblue pl-6 py-2 my-6 italic text-steel bg-lightgray/50 rounded-r-lg"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-lightgray px-1.5 py-0.5 rounded text-sm font-mono text-charcoal"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-charcoal text-white p-6 rounded-lg overflow-x-auto mb-6 text-sm"
      {...props}
    />
  ),
  img: (props: any) => (
    <span className="block my-8">
      <img className="rounded-lg w-full" {...props} />
    </span>
  ),
  hr: () => <hr className="my-10 border-border" />,
  strong: (props: any) => <strong className="font-semibold text-charcoal" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  // Custom MDX components for internal linking
  ServiceLink,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts ? getRelatedPosts(post.relatedPosts) : [];

  // Article JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.ogImage
      ? post.ogImage.startsWith("http")
        ? post.ogImage
        : `${SITE.url}${post.ogImage}`
      : `${SITE.url}${IMAGES.clinic}`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE.url}/about`,
      jobTitle: "Chiropractor",
      worksFor: {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#organization`,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${slug}`,
    },
  };

  // Breadcrumb JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE.url}/blog/${slug}`,
      },
    ],
  };

  // Estimate reading time (avg 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <JsonLdSchema data={articleSchema} />
      <JsonLdSchema data={breadcrumbSchema} />
      <JsonLdSchema data={schemas.localBusinessChiropractor()} />

      {/* Header with Breadcrumbs */}
      <section className="bg-charcoal pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", path: "/blog" },
              { label: post.title, path: `/blog/${slug}` },
            ]}
          />
          {post.category && (
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-softblue mb-4 block">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.ogImage && (
        <div className="relative -mt-8 mb-12 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={post.ogImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-lightgray text-steel text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio with NAP */}
        <AuthorBio author={post.author} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* Areas We Serve */}
        <AreasWeServe />

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </article>

      {/* CTA */}
      <SectionWrapper bg="bg-charcoal" className="text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-softblue mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Your First Visit
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Get personalized care from Dr. Joseph Hugunin and take the first step toward moving better.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/book" label="Book Now" variant="white" size="lg" showArrow />
            <CTAButton href="/contact" label="Contact Us" variant="outlineWhite" size="lg" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
