'use client';

import React from 'react';
import { KEY_METRICS } from '@/lib/data';
import { Users, Clock, Globe, TrendingUp } from 'lucide-react';

export const Metrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-5 h-5 text-brand-red-vibrant";
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
    <section id="metrics" className="py-20 bg-[#F8FAFC] text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-red-vibrant block mb-2">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Operational Scale & Market Power
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-normal max-w-2xl mx-auto leading-relaxed">
            Delivering consistency, safety, and operational excellence across global energy markets.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                {getIcon(metric.iconName)}
              </div>

              {/* Number Stat & Label */}
              <div className="space-y-1">
                <div className="text-4xl font-bold font-display text-slate-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-800">{metric.label}</div>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100 leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
