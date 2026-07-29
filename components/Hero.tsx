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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-100 text-slate-900">
      {/* High-Visibility AI Oil Refinery Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_light_oil_refinery.png"
          alt="Vibrant Petrochem AI Generated Oil Refinery Background"
          fill
          priority
          className="object-cover object-center opacity-85 scale-105"
        />
        {/* Crisp Subtle Gradient Overlay - Preserves High Background Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-slate-100" />
      </div>

      {/* Decorative Red & Soft Sunlight Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-red-vibrant/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Headline & CTAs Card Container */}
        <div className="space-y-8 bg-white/85 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-2xl">
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red-vibrant animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Leading Commodity Trader • UAE Est. {COMPANY_INFO.established}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.1]">
              Transforming Petrochemical Supply in the{' '}
              <span className="text-brand-red-vibrant">Gulf Region</span> & Globally
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {COMPANY_INFO.coreStatement}
            </p>
          </div>

          {/* Double CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group scale-105"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#products"
              className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-8 py-4 rounded-xl border border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-2"
            >
              <Fuel className="w-4 h-4 text-brand-red-vibrant" />
              <span>Explore 12+ Product Lines</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Ethical & Transparent</div>
                <div className="text-xs text-slate-600 font-medium">Strict Quality Standards</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Global Distribution</div>
                <div className="text-xs text-slate-600 font-medium">55,000 MT / Month</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Custom Blends</div>
                <div className="text-xs text-slate-600 font-medium">Tailor-made Specifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
