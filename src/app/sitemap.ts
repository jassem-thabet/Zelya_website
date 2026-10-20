import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://zelya.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/contact', '/mentions-legales', '/confidentialite', '/conditions'];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date('2026-10-19'),
    changeFrequency: route === '' ? 'weekly' : 'yearly',
    priority: route === '' ? 1 : 0.5,
  }));
}
