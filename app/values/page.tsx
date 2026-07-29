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
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-[#F8FAFC] text-slate-900 py-16 mb-12 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-red-vibrant">
            Core Commitments
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900">
            Strengths, Ethics & Quality Commitments
          </h1>
          <p className="text-slate-600 text-base max-w-2xl font-normal">
            Building long-term equitable relationships across global energy markets through transparency, technical precision, and safety.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4"
            >
              <div className="p-3 rounded-xl bg-red-50 text-brand-red-vibrant w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-display text-slate-900">{val.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-slate-900">Custom Formulations & Specification Blending</h3>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto">
            Our technical team works directly with industrial clients to deliver customized viscosity index, pour points, and flash point parameters tailored for extreme climate operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            <span>Inquire Custom Blends</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
