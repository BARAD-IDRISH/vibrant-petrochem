import type { Metadata } from 'next';
import { Hanken_Grotesk, Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ClientLayoutWrapper } from '@/components/ClientLayoutWrapper';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vibrant Petrochem FZE | Global Petrochemical & Commodity Trading Partner',
  description:
    'Vibrant Petrochem FZE is a premier UAE-based petrochemical trading firm established in 2018. Supplying Base Oils, GTL Fuel, N-Paraffin, Fuel Oils, Glycols, Mineral Oils, Jet A1, and Solvents across global markets.',
  keywords: [
    'Vibrant Petrochem FZE',
    'Base Oil UAE',
    'Group I II III Base Oil',
    'GTL Fuel',
    'Jet A1 Fuel Supplier',
    'Fuel Oil 180 360 CST',
    'Petrochemical Trading Dubai',
    'N-Paraffin',
    'Glycols MEG DEG',
    'Spindle Oil',
  ],
  authors: [{ name: 'Vibrant Petrochem FZE' }],
  metadataBase: new URL('https://vibrantpetro.com'),
  openGraph: {
    title: 'Vibrant Petrochem FZE | Global Petrochemical & Commodity Trading',
    description:
      'Transforming the petrochemical business in the Gulf region with an expansive product range and an unwavering commitment to quality, transparency, and safety.',
    url: 'https://vibrantpetro.com',
    siteName: 'Vibrant Petrochem FZE',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Vibrant Petrochem FZE Trading Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibrant Petrochem FZE | Petrochemical Trading Partner',
    description:
      'Transforming petrochemical trading in the Gulf region. High quality Base Oils, GTL Fuel, Jet A1, Fuel Oils, and Solvents.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/url_logo-removebg.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/url_logo-removebg.png',
    apple: '/url_logo-removebg.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://vibrantpetro.com/" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans selection:bg-brand-red-vibrant selection:text-white min-h-screen flex flex-col justify-between">
        <NextTopLoader
          color="#C5221F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #C5221F,0 0 5px #C5221F"
        />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
