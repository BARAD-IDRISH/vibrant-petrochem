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
  output: 'standalone',
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
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/base_oil.php', destination: '/products/base-oil', permanent: true },
      { source: '/gtl_fuel.php', destination: '/products/gtl-fuel', permanent: true },
      { source: '/n_parafin.php', destination: '/products/n-paraffins', permanent: true },
      { source: '/fuel_oil.php', destination: '/products/fuel-oil', permanent: true },
      { source: '/glycols.php', destination: '/products/glycols', permanent: true },
      { source: '/mineral_oil.php', destination: '/products/mineral-oil', permanent: true },
      { source: '/jet_a1.php', destination: '/products/jet-a1', permanent: true },
      { source: '/gpso.php', destination: '/products/spindle-oil', permanent: true },
      { source: '/distillate_oil.php', destination: '/products/distillate-oil', permanent: true },
      { source: '/recidual_oil.php', destination: '/products/process-oil', permanent: true },
      { source: '/thinner.php', destination: '/products/thinners-diluents', permanent: true },
      { source: '/degreasing_solvent.php', destination: '/products/degreasing-solvents', permanent: true },
      { source: '/naphtha_oil.php', destination: '/products/naphtha-oil', permanent: true },
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
