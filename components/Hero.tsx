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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white text-[#0F172A] border-b border-[#E2E8F0]">
      {/* High-Visibility Refinery Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_light_oil_refinery.png"
          alt="Vibrant Petrochem Oil Refinery Background"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Gradient Overlay for Maximum Corporate Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Clean Corporate Hero Content */}
        <div className="max-w-3xl space-y-8">
          {/* Corporate Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C5221F]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Leading Commodity Trader • UAE Est. {COMPANY_INFO.established}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#0F172A] tracking-tight leading-[1.1]">
              Transforming Petrochemical Supply in the{' '}
              <span className="text-[#C5221F]">Gulf Region</span> & Globally
            </h1>
            <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed max-w-2xl">
              {COMPANY_INFO.coreStatement}
            </p>
          </div>

          {/* Double CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#C5221F] hover:bg-[#A31B19] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-sm transition-colors duration-200 flex items-center space-x-3 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#products"
              className="bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-bold text-sm px-8 py-4 rounded-xl border border-[#E2E8F0] shadow-sm transition-colors duration-200 flex items-center space-x-2"
            >
              <Fuel className="w-4 h-4 text-[#2563EB]" />
              <span>Explore 12+ Product Lines</span>
            </a>
          </div>

          {/* Corporate Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0] max-w-3xl">
            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">Ethical & Transparent</div>
                <div className="text-xs text-[#475569] font-medium">Strict Quality Standards</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">Global Distribution</div>
                <div className="text-xs text-[#475569] font-medium">FOB / CIF Global Terms</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-sm">
              <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">Custom Blends</div>
                <div className="text-xs text-[#475569] font-medium">Tailor-made Specs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
