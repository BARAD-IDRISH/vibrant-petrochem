import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://lh3.googleusercontent.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      // Core pages legacy .php redirects
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/about.php', destination: '/about', permanent: true },
      { source: '/services.php', destination: '/services', permanent: true },
      { source: '/industries.php', destination: '/industries', permanent: true },
      { source: '/products.php', destination: '/products', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },

      // Legacy product .php URLs
      { source: '/base_oil.php', destination: '/products/base-oil', permanent: true },
      { source: '/gtl_fuel.php', destination: '/products/gtl-fuel', permanent: true },
      { source: '/n_parafin.php', destination: '/products/n-paraffin', permanent: true },
      { source: '/n_paraffins.php', destination: '/products/n-paraffin', permanent: true },
      { source: '/fuel_oil.php', destination: '/products/fuel-oil', permanent: true },
      { source: '/glycols.php', destination: '/products/glycols', permanent: true },
      { source: '/mineral_oil.php', destination: '/products/mineral-oil', permanent: true },
      { source: '/jet_a1.php', destination: '/products/jet-a1', permanent: true },
      { source: '/gpso.php', destination: '/products/spindle-oil', permanent: true },
      { source: '/distillate_oil.php', destination: '/products/distillate-oil', permanent: true },
      { source: '/recidual_oil.php', destination: '/products/process-oil', permanent: true },
      { source: '/thinner.php', destination: '/products/thinner', permanent: true },
      { source: '/thinners.php', destination: '/products/thinner', permanent: true },
      { source: '/degreasing_solvent.php', destination: '/products/degreasing-solvent', permanent: true },
      { source: '/degreasing_solvents.php', destination: '/products/degreasing-solvent', permanent: true },
      { source: '/naphtha_oil.php', destination: '/products/naphtha-oil', permanent: true },
      { source: '/naphtha.php', destination: '/products/naphtha-oil', permanent: true },
      { source: '/lubricants.php', destination: '/products/lubricant-raw-materials', permanent: true },
      { source: '/lubricant_raw_materials.php', destination: '/products/lubricant-raw-materials', permanent: true },
      { source: '/polymers.php', destination: '/products/liquid-solid-polymers', permanent: true },

      // Alternative URL slug aliases (Plural / Variations)
      { source: '/products/n-paraffins', destination: '/products/n-paraffin', permanent: true },
      { source: '/products/degreasing-solvents', destination: '/products/degreasing-solvent', permanent: true },
      { source: '/products/thinners-diluents', destination: '/products/thinner', permanent: true },
      { source: '/products/thinners', destination: '/products/thinner', permanent: true },
      { source: '/products/gtl-fuels', destination: '/products/gtl-fuel', permanent: true },
      { source: '/products/base-oils', destination: '/products/base-oil', permanent: true },
      { source: '/products/mineral-oils', destination: '/products/mineral-oil', permanent: true },
      { source: '/products/process-oils', destination: '/products/process-oil', permanent: true },
      { source: '/products/spindle-oils', destination: '/products/spindle-oil', permanent: true },
      { source: '/products/naphtha', destination: '/products/naphtha-oil', permanent: true },
      { source: '/products/lubricants', destination: '/products/lubricant-raw-materials', permanent: true },
      { source: '/products/polymers', destination: '/products/liquid-solid-polymers', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
