'use client';

import React from 'react';
import { KEY_METRICS } from '@/lib/data';
import { Users, Clock, Globe, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

export const Metrics: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-5 h-5 text-blue-600";
    switch (iconName) {
      case 'Users':
        return <Users className={iconClasses} />;
      case 'Clock':
        return <Clock className={iconClasses} />;
      case 'Globe':
        return <Globe className={iconClasses} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClasses} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Cpu':
        return <Cpu className={iconClasses} />;
      default:
        return <ShieldCheck className={iconClasses} />;
    }
  };

  return (
    <section id="metrics" className="py-20 bg-[#F8FAFC] text-slate-900 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Corporate Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Operational Scale & Market Power
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-normal max-w-2xl mx-auto leading-relaxed">
            Delivering consistency, safety, and operational excellence across global energy markets.
          </p>
        </div>

        {/* Corporate Grid (4 Metric Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm hover:border-red-500 hover:shadow-md transition-all duration-200"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                {getIcon(metric.iconName)}
              </div>

              {/* Number Stat & Label */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold font-display text-blue-600 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-900">{metric.label}</div>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-[#E2E8F0] leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
