import React from 'react';
import Link from 'next/link';
import { COMPANY_VALUES } from '@/lib/data';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Values & Strengths | Vibrant Petrochem FZE',
  description: 'Our core corporate values, ethical trading practices, innovation strength, and custom product blending capabilities.',
};

export default function ValuesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-28 pb-20">
      {/* Compact Dark Header Banner */}
      <div className="bg-[#0F172A] text-white py-12 mb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-red-400">
            Core Commitments
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Strengths, Ethics & Quality Commitments
          </h1>
          <p className="text-[#94A3B8] text-sm max-w-2xl font-normal leading-relaxed">
            Building long-term equitable relationships across global energy markets through transparency, technical precision, and safety.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm space-y-4"
            >
              <div className="p-3 rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-display text-[#0F172A]">{val.title}</h2>
              <p className="text-xs text-[#475569] leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-[#0F172A]">Custom Formulations & Specification Blending</h3>
          <p className="text-xs text-[#475569] max-w-2xl mx-auto">
            Our technical team works directly with industrial clients to deliver customized viscosity index, pour points, and flash point parameters tailored for extreme climate operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            <span>Inquire Custom Blends</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
