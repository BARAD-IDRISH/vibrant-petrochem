import { PRODUCTS } from '@/lib/data';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibrantpetro.com';

  const staticRoutes = [
    '',
    '/products',
    '/services',
    '/industries',
    '/about',
    '/contact',
  ];

  const urls = [
    ...staticRoutes.map((route) => `${baseUrl}${route}`),
    ...PRODUCTS.map((p) => `${baseUrl}/products/${p.id}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
