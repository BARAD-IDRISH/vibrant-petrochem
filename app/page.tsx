'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { About } from '@/components/About';
import { ProductCatalog } from '@/components/ProductCatalog';
import { HomeDirectInquiry } from '@/components/HomeDirectInquiry';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Hero Section */}
      <Hero />

      {/* Key Metrics Bento Grid */}
      <Metrics />

      {/* About Company & Floating Legacy Badge */}
      <About />

      {/* Interactive 4-Column Product Catalog */}
      <ProductCatalog />

      {/* Direct Inquiry Form Section (Home Page Only) */}
      <HomeDirectInquiry />
    </main>
  );
}
