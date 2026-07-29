'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { COMPANY_INFO, PRODUCTS, ProductItem } from '@/lib/data';
import { ShieldCheck, ArrowRight, Layers, Globe, Fuel, RefreshCw } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [highlightProduct, setHighlightProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [isRotating, setIsRotating] = useState(false);

  const getRandomProduct = () => {
    setIsRotating(true);
    const randomIndex = Math.floor(Math.random() * PRODUCTS.length);
    setHighlightProduct(PRODUCTS[randomIndex]);
    setTimeout(() => setIsRotating(false), 500);
  };

  useEffect(() => {
    getRandomProduct();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-100 text-slate-900">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Call To Actions with Glass Backdrop for High Legibility */}
          <div className="lg:col-span-8 space-y-8 bg-white/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red-vibrant animate-pulse" />
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Ethical & Transparent</div>
                  <div className="text-xs text-slate-600 font-medium">Strict Quality Standards</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Global Distribution</div>
                  <div className="text-xs text-slate-600 font-medium">55,000 MT / Month</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 col-span-2 sm:col-span-1">
                <div className="p-2.5 rounded-lg bg-red-50 text-brand-red-vibrant border border-red-100 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Custom Blends</div>
                  <div className="text-xs text-slate-600 font-medium">Tailor-made Specifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Card Overlay */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              {/* Outer Glowing Light Card */}
              <div className="bg-white/95 rounded-2xl p-6 border border-slate-200 space-y-6 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-red-vibrant">
                      Core Product Highlight
                    </span>
                    <button
                      onClick={getRandomProduct}
                      title="Shuffle Product"
                      className="text-slate-400 hover:text-slate-800 transition-colors p-1 rounded-full hover:bg-slate-100"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin text-brand-red-vibrant' : ''}`} />
                    </button>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {highlightProduct.badge || 'Active Stock'}
                  </span>
                </div>

                <div className="relative h-44 rounded-xl overflow-hidden group shadow-inner">
                  <Image
                    src={highlightProduct.imageUrl}
                    alt={highlightProduct.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-sm font-bold text-white line-clamp-1 pr-2">
                      {highlightProduct.name}
                    </span>
                    <span className="text-[10px] font-semibold text-red-200 bg-red-900/70 px-2 py-0.5 rounded shrink-0">
                      {highlightProduct.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Key Specification</span>
                    <span className="font-bold text-slate-900 truncate max-w-[170px]">
                      {highlightProduct.specs[0] || 'Standard Grade'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Refined Spec</span>
                    <span className="font-bold text-emerald-600 truncate max-w-[170px]">
                      {highlightProduct.specs[1] || 'Batch Verified'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Compliance</span>
                    <span className="font-bold text-slate-900">ISO & ASTM Certified</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(highlightProduct.name)}
                  className="w-full bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 text-center shadow-md"
                >
                  Inquire {highlightProduct.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
