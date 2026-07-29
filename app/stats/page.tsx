import React from 'react';
import { Metrics } from '@/components/Metrics';

export const metadata = {
  title: 'Key Operational Stats | Vibrant Petrochem FZE',
  description: 'Verified operational statistics, monthly distribution volumes, global trade partners, and supply capabilities of Vibrant Petrochem FZE.',
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-28 pb-20">
      {/* Compact Dark Header Banner */}
      <div className="bg-[#0F172A] text-white py-12 mb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-red-400">
            Verified Performance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Operational Scale & Market Footprint
          </h1>
          <p className="text-[#94A3B8] text-sm max-w-2xl font-normal leading-relaxed">
            Key operational metrics highlighting our 10+ years industry experience, 12+ refined product lines, and global logistics network.
          </p>
        </div>
      </div>

      <Metrics />
    </main>
  );
}
