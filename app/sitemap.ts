import type { MetadataRoute } from 'next';
import { SITE_URL, COMPETITORS, INDUSTRIES } from '@/lib/config';
import { getAllBlogSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/download`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const vsRoutes: MetadataRoute.Sitemap = COMPETITORS.map((c) => ({
    url: `${SITE_URL}/vs/${c.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const forRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${SITE_URL}/for/${i.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...vsRoutes, ...forRoutes, ...blogRoutes];
}
