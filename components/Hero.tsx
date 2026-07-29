'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, ArrowRight, Layers, Globe, Fuel } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-100 text-slate-900 border-b border-slate-200">
      {/* High-Visibility AI Oil Refinery Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_light_oil_refinery.png"
          alt="Vibrant Petrochem Oil Refinery Background"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Crisp Gradient Overlay for Maximum Corporate Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-slate-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Clean Corporate Hero Content */}
        <div className="max-w-3xl space-y-8">
          {/* Corporate Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red-vibrant" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Leading Commodity Trader • UAE Est. {COMPANY_INFO.established}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1]">
              Transforming Petrochemical Supply in the{' '}
              <span className="text-brand-red-vibrant">Gulf Region</span> & Globally
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              {COMPANY_INFO.coreStatement}
            </p>
          </div>

          {/* Double CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-all duration-200 flex items-center space-x-3 group"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#products"
              className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-8 py-4 rounded-xl border border-slate-300 shadow-sm transition-all duration-200 flex items-center space-x-2"
            >
              <Fuel className="w-4 h-4 text-brand-red-vibrant" />
              <span>Explore 12+ Product Lines</span>
            </a>
          </div>

          {/* Corporate Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-300/70 max-w-3xl">
            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Ethical & Transparent</div>
                <div className="text-xs text-slate-600 font-medium">Strict Quality Standards</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Global Distribution</div>
                <div className="text-xs text-slate-600 font-medium">55,000 MT / Month</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Custom Blends</div>
                <div className="text-xs text-slate-600 font-medium">Tailor-made Specs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
