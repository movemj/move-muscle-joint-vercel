import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const baseUrl = "https://www.movemuscleandjoint.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date(process.env.VERCEL_GIT_COMMIT_TIMESTAMP ?? Date.now());
  const paths = [
    ["/", "weekly", 1], ["/our-approach", "monthly", 0.9], ["/about", "monthly", 0.9],
    ["/services", "monthly", 0.9], ["/services/chiropractic-care", "monthly", 0.8],
    ["/services/myofascial-release-therapy", "monthly", 0.8], ["/services/shockwave-therapy", "monthly", 0.8],
    ["/services/targeted-rehab", "monthly", 0.8], ["/sports-chiropractor-overland-park", "monthly", 0.9],
    ["/conditions", "monthly", 0.9], ["/conditions/sciatica", "monthly", 0.8], ["/conditions/neck-pain", "monthly", 0.8],
    ["/conditions/low-back-pain", "monthly", 0.8], ["/conditions/sports-injuries", "monthly", 0.8],
    ["/conditions/headaches-tension", "monthly", 0.8], ["/conditions/hip-pain", "monthly", 0.8],
    ["/conditions/knee-pain", "monthly", 0.8], ["/conditions/plantar-fasciitis", "monthly", 0.8],
    ["/conditions/shoulder-pain", "monthly", 0.8], ["/blog", "weekly", 0.9], ["/faq", "monthly", 0.8],
    ["/contact", "monthly", 0.8], ["/book", "weekly", 0.95], ["/new-patient-offer", "weekly", 0.95],
    ["/privacy", "yearly", 0.5],
  ] as const;

  const staticRoutes = paths.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: buildDate,
    changeFrequency,
    priority,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
