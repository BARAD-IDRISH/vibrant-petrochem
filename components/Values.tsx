'use client';

import React from 'react';
import { COMPANY_VALUES } from '@/lib/data';
import { ShieldCheck, Cpu, Users, Sliders, Globe2 } from 'lucide-react';

export const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-8 h-8 text-brand-red-vibrant group-hover:text-white transition-colors duration-300";
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
    <section id="values" className="py-24 bg-gradient-to-b from-[#0A1224] to-[#060C18] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red-vibrant">
            Core Strengths & Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Built on Trust, Precision, and Ethical Execution
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We focus on the needs of our counterparties to provide tailor-made solutions. Our fairness and dedication to
            developing long-term equitable relationships have earned us trust across global energy markets.
          </p>
        </div>

        {/* 5-Card Grid (3 top, 2 bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {COMPANY_VALUES.slice(0, 3).map((val) => (
            <div
              key={val.id}
              className="bg-slate-900/80 rounded-2xl p-8 border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 space-y-4 relative group hover:-translate-y-1 hover:border-white/20"
            >
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 w-fit group-hover:bg-brand-red-vibrant transition-colors duration-300">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-red-vibrant transition-colors">
                {val.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_VALUES.slice(3, 5).map((val) => (
            <div
              key={val.id}
              className="bg-slate-900/80 rounded-2xl p-8 border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 space-y-4 relative group hover:-translate-y-1 hover:border-white/20"
            >
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 w-fit group-hover:bg-brand-red-vibrant transition-colors duration-300">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-red-vibrant transition-colors">
                {val.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
