'use client';

import React from 'react';
import { KEY_METRICS } from '@/lib/data';
import { Users, Clock, Globe, TrendingUp } from 'lucide-react';

export const Metrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6 text-brand-red-vibrant group-hover:text-white transition-colors duration-300";
    switch (iconName) {
      case 'Users':
        return <Users className={iconClasses} />;
      case 'Clock':
        return <Clock className={iconClasses} />;
      case 'Globe':
        return <Globe className={iconClasses} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClasses} />;
      default:
        return <TrendingUp className={iconClasses} />;
    }
  };

  return (
    <section id="metrics" className="py-20 bg-gradient-to-b from-sky-50 via-blue-50/70 to-slate-100 text-slate-900 relative z-20 border-y border-sky-100">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-white border border-sky-200 text-[11px] uppercase font-bold tracking-widest text-brand-red-vibrant shadow-sm mb-3">
            Proven Track Record
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Operational Scale & Market Power
          </h3>
          <p className="text-slate-600 text-sm mt-3 font-medium">
            Delivering consistency, safety, and operational excellence across global energy markets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`bg-white/90 rounded-2xl p-6 relative overflow-hidden group border border-sky-100 shadow-xl hover:shadow-2xl hover:border-brand-red-vibrant/40 backdrop-blur-md transition-all duration-300 ${
                idx === 0 || idx === 3 ? 'lg:scale-[1.02]' : ''
              }`}
            >
              {/* Top Row: Icon & Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/60 group-hover:bg-brand-red-vibrant transition-colors duration-300 shadow-sm">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Verified Metric
                </span>
              </div>

              {/* Number Stat */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800">{metric.label}</div>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed font-medium">
                {metric.subtext}
              </p>

              {/* Background Soft Blue/Red Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-sky-200/40 rounded-full blur-xl group-hover:bg-brand-red-vibrant/15 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
