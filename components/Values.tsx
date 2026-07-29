'use client';

import React from 'react';
import { COMPANY_VALUES } from '@/lib/data';
import { ShieldCheck, Cpu, Users, Sliders, Globe2 } from 'lucide-react';

export const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6 text-white";
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Cpu':
        return <Cpu className={iconClasses} />;
      case 'Users':
        return <Users className={iconClasses} />;
      case 'Sliders':
        return <Sliders className={iconClasses} />;
      case 'Globe2':
        return <Globe2 className={iconClasses} />;
      default:
        return <ShieldCheck className={iconClasses} />;
    }
  };

  return (
    <section id="values" className="py-24 bg-[#1E3A8A] text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-300">
            Core Strengths & Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Built on Trust, Precision, and Ethical Execution
          </h2>
          <p className="text-blue-100/90 text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            We focus on the needs of our counterparties to provide tailor-made solutions. Our fairness and dedication to
            developing long-term equitable relationships have earned us trust across global energy markets.
          </p>
        </div>

        {/* 5-Card Grid (3 top, 2 bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {COMPANY_VALUES.slice(0, 3).map((val) => (
            <div
              key={val.id}
              className="bg-white/10 rounded-xl p-8 border border-white/15 hover:border-white/30 transition-colors duration-200 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {val.title}
              </h3>
              <p className="text-xs text-blue-100/80 leading-relaxed font-normal">{val.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_VALUES.slice(3, 5).map((val) => (
            <div
              key={val.id}
              className="bg-white/10 rounded-xl p-8 border border-white/15 hover:border-white/30 transition-colors duration-200 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {val.title}
              </h3>
              <p className="text-xs text-blue-100/80 leading-relaxed font-normal">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
