import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroMedia } from "@/components/ui/hero-media";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLdSchema } from "@/components/schema-json-ld";
import { getAllPosts, formatDate } from "@/lib/mdx";
import { schemas } from "@/lib/schemas";
import { SITE, IMAGES } from "@/lib/site-data";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Movement & Rehab Blog",
  description: "Expert insights on movement health, rehabilitation, and longevity from Dr. Joseph Hugunin at Move Muscle & Joint in Overland Park, KS.",
  alternates: {
    canonical: "/blog",
  },
    openGraph: {
      title: "Movement & Rehab Blog",
      description: "Expert insights on movement health, rehabilitation, and longevity from Dr. Joseph Hugunin.",
    url: `${SITE.url}/blog`,
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: `${SITE.url}${IMAGES.assessment}`,
        width: 1200,
        height: 630,
        alt: "Move Muscle & Joint Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movement & Rehab Blog",
    description: "Expert insights on movement health, rehabilitation, and longevity.",
    images: [`${SITE.url}${IMAGES.assessment}`],
    creator: "@movemuscleandjoint",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* LocalBusiness JSON-LD for GMB consistency */}
      <JsonLdSchema data={schemas.localBusinessChiropractor()} />
      
      {/* Hero - matches homepage hero style */}
      <HeroMedia
        imageSrc={IMAGES.assessment}
        alt="Movement assessment and rehabilitation insights"
        overlayOpacity="bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/30"
        minHeight="min-h-[calc(100svh-5rem)] sm:min-h-[calc(100vh-5rem)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
          <div className="max-w-2xl">
            <Breadcrumbs items={[{ label: "Blog", path: "/blog" }]} />
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-softblue mb-6">
              Insights & Education
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Movement, Rehab & Longevity Insights
            </h1>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl">
              Expert guidance on movement health, rehabilitation, and longevity 
              from Dr. Joseph Hugunin in Overland Park, KS.
            </p>
          </div>
        </div>
      </HeroMedia>

      {/* Blog Posts Grid */}
      <SectionWrapper>
        <SectionHeading
          tag="Latest Articles"
          title="Stay Informed, Move Better"
          subtitle="Practical tips and evidence-based insights to help you understand your body, prevent injury, and maintain lasting results."
        />

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-steel text-lg">No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-lightgray flex items-center justify-center">
                      <span className="text-steel text-sm">No image</span>
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-softblue mb-3 block">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-charcoal leading-snug group-hover:text-navy transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-steel text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-steel">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper bg="bg-charcoal" className="text-center">
        <SectionHeading
          tag="Ready to Move Better?"
          title="Book Your First Visit"
          subtitle="Get personalized care from Dr. Joseph Hugunin and start your journey to lasting relief."
          align="center"
          light
        />
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton href="/book" label="Book Now" variant="white" size="lg" showArrow />
          <CTAButton href="/contact" label="Contact Us" variant="outlineWhite" size="lg" />
        </div>
      </SectionWrapper>
    </>
  );
}
