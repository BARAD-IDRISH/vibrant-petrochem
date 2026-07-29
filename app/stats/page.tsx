import React from 'react';
import Link from 'next/link';
import { KEY_METRICS } from '@/lib/data';
import { TrendingUp, ShieldCheck, Globe, Users, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Key Operational Metrics | Vibrant Petrochem FZE',
  description: 'Verified operational statistics, 55,000 MT monthly export volume, and trading capacity of Vibrant Petrochem FZE.',
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-slate-100 text-slate-900 border-b border-sky-100 py-16 mb-12 relative">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md space-y-4"
            >
              <div className="text-4xl font-extrabold font-display text-slate-900 text-brand-red-vibrant">
                {metric.value}
              </div>
              <div className="text-base font-bold text-slate-800">{metric.label}</div>
              <p className="text-xs text-slate-500">{metric.subtext}</p>
            </div>
          ))}
        </div>

        {/* Detailed Operational Breakdown */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Supply Chain & Port Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Direct Port Terminal Access</div>
              <p>Strategically situated within major UAE free zone ports enabling rapid laycan chartering and flexitank loading.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Pre-Shipment Quality Testing</div>
              <p>Independent 3rd party laboratory sampling (SGS, Intertek) conducted on every export batch before vessel departure.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Risk Management</div>
              <p>Hedging and structured trade finance protocols protecting counterparties against market volatility.</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            <span>Request Commercial Rate Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
