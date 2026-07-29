import React from 'react';
import { Metrics } from '@/components/Metrics';

export const metadata = {
  title: 'Key Operational Stats | Vibrant Petrochem FZE',
  description: 'Verified operational statistics, monthly distribution volumes, global trade partners, and supply capabilities of Vibrant Petrochem FZE.',
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-[#F8FAFC] text-[#0F172A] border-b border-[#E2E8F0] py-16 mb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB]">
            Verified Performance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#0F172A]">
            Operational Scale & Market Footprint
          </h1>
          <p className="text-[#475569] text-base max-w-2xl font-normal">
            Key operational metrics highlighting our 55,000 MT monthly distribution volume, 12+ refined product lines, and global logistics network.
          </p>
        </div>
      </div>

      <Metrics />
    </main>
  );
}
