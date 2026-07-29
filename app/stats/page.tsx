import React from 'react';
import { Metrics } from '@/components/Metrics';

export const metadata = {
  title: 'Key Operational Stats | Vibrant Petrochem FZE',
  description: 'Verified operational statistics, monthly distribution volumes, global trade partners, and supply capabilities of Vibrant Petrochem FZE.',
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-[#F8FAFC] text-slate-900 border-b border-slate-200 py-16 mb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-red-vibrant">
            Verified Performance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900">
            Operational Scale & Market Footprint
          </h1>
          <p className="text-slate-600 text-base max-w-2xl font-normal">
            Key operational metrics highlighting our 55,000 MT monthly distribution volume, 12+ refined product lines, and global logistics network.
          </p>
        </div>
      </div>

      <Metrics />
    </main>
  );
}
