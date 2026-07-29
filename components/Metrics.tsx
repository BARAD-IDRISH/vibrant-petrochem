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
    <section id="metrics" className="py-20 bg-[#1E3A8A] text-white relative z-20 border-y border-blue-900/60">
      {/* Ambient Red & Soft Sunlight Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-red-vibrant/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#172e6e] border border-blue-700/60 text-[11px] uppercase font-bold tracking-widest text-brand-red-vibrant shadow-sm mb-3">
            Proven Track Record
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Operational Scale & Market Power
          </h3>
          <p className="text-blue-100 text-sm mt-3 font-medium">
            Delivering consistency, safety, and operational excellence across global energy markets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`bg-[#172e6e]/90 rounded-2xl p-6 relative overflow-hidden group border border-blue-700/60 shadow-2xl hover:border-brand-red-vibrant/60 backdrop-blur-md transition-all duration-300 ${
                idx === 0 || idx === 3 ? 'lg:scale-[1.02]' : ''
              }`}
            >
              {/* Top Row: Icon & Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#1e3880] border border-blue-600/50 group-hover:bg-brand-red-vibrant transition-colors duration-300 shadow-sm">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200">
                  Verified Metric
                </span>
              </div>

              {/* Number Stat */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-white group-hover:text-brand-red-vibrant transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-blue-100">{metric.label}</div>
              </div>

              {/* Subtext */}
              <p className="text-xs text-blue-200/80 mt-3 pt-3 border-t border-blue-700/50 leading-relaxed font-normal">
                {metric.subtext}
              </p>

              {/* Background Soft Red Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-500/10 rounded-full blur-xl group-hover:bg-brand-red-vibrant/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
