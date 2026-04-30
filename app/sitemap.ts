import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://movemuscleandjoint.com';
  
  // Static routes
  const staticRoutes = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/our-approach`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/chiropractic-care`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/myofascial-release-therapy`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/shockwave-therapy`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/targeted-rehab`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/conditions/sciatica`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/neck-pain`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/low-back-pain`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/headaches-tension`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/hip-pain`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/knee-pain`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/plantar-fasciitis`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/shoulder-pain`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/conditions/sports-injuries`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/book`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  // Dynamic blog post routes
  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: new Date(post.dateModified || post.date),
  }));

  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map(route => ({
      url: route.url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
      priority: route.priority,
    })),
    ...blogRoutes.map(route => ({
      url: route.url,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
      priority: route.priority,
    })),
  ];

  return allRoutes;
}
