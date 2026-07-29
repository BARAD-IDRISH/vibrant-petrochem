import React from 'react';
import Link from 'next/link';
import { Metrics } from '@/components/Metrics';

export const metadata = {
  title: 'Key Operational Stats | Vibrant Petrochem FZE',
  description: 'Verified operational statistics, monthly distribution volumes, global trade partners, and supply capabilities of Vibrant Petrochem FZE.',
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] pt-28 pb-20">
      {/* Soft Slate Header Block */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-700 font-bold">Stats</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Verified Performance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Operational Scale & Market Footprint
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Key operational metrics highlighting our 10+ years industry experience, 12+ refined product lines, and global logistics network.
          </p>
        </div>
      </div>

      <Metrics />
    </main>
  );
}
