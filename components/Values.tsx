'use client';

import React from 'react';
import { COMPANY_VALUES } from '@/lib/data';
import { ShieldCheck, Cpu, Users, Sliders, Globe2 } from 'lucide-react';

export const Values: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6 text-[#2563EB]";
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
    <section id="values" className="py-24 bg-[#F8FAFC] text-[#0F172A] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Core Strengths & Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A]">
            Built on Trust, Precision, and Ethical Execution
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            We focus on the needs of our counterparties to provide tailor-made solutions. Our fairness and dedication to
            developing long-term equitable relationships have earned us trust across global energy markets.
          </p>
        </div>

        {/* 5-Card Grid (3 top, 2 bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {COMPANY_VALUES.slice(0, 3).map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F172A]">
                {val.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed font-normal">{val.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {COMPANY_VALUES.slice(3, 5).map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                {getIcon(val.iconName)}
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F172A]">
                {val.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed font-normal">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
