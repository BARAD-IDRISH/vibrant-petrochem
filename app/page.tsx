'use client';

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { About } from '@/components/About';
import { ProductCatalog } from '@/components/ProductCatalog';

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

      {/* Page-Specific Commercial Inquiry Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#F8FAFC] text-[#0F172A] p-10 sm:p-12 rounded-3xl text-center space-y-6 border border-[#E2E8F0] shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5221F]">
            Commercial Trading Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
            Connect With Our Energy & Petrochemical Specialists
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto font-normal leading-relaxed">
            Reach out to our Dubai commercial team for real-time spot pricing, vessel chartering, custom product blending, or long-term off-take agreements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            Request Trade Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
