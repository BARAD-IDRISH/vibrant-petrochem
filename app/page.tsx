'use client';

import React from 'react';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { About } from '@/components/About';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Values } from '@/components/Values';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => {}} />

      {/* Key Metrics Bento Grid */}
      <Metrics />

      {/* About Company & Floating Legacy Badge */}
      <About />

      {/* Interactive 4-Column Product Catalog */}
      <ProductCatalog onOpenQuoteModal={() => {}} />

      {/* Values & Core Strengths */}
      <Values />
    </main>
  );
}
