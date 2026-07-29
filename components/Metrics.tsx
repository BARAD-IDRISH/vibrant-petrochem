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
    <section id="metrics" className="py-20 bg-[#0B1528] text-white relative z-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase font-bold tracking-widest text-brand-red-vibrant mb-2">
            Proven Track Record
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Operational Scale & Market Power
          </h3>
          <p className="text-slate-300 text-sm mt-3">
            Delivering consistency, safety, and operational excellence across global energy markets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`bg-slate-900/90 rounded-2xl p-6 relative overflow-hidden group border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 ${
                idx === 0 || idx === 3 ? 'lg:scale-[1.02]' : ''
              }`}
            >
              {/* Top Row: Icon & Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 group-hover:bg-brand-red-vibrant transition-colors duration-300">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Verified Metric
                </span>
              </div>

              {/* Number Stat */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-white group-hover:text-brand-red-vibrant transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-200">{metric.label}</div>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/10 leading-relaxed">
                {metric.subtext}
              </p>

              {/* Background Red Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl group-hover:bg-brand-red-vibrant/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
