'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, PRODUCTS, COMPANY_SERVICES, COMPANY_INDUSTRIES } from '@/lib/data';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 text-slate-900 border-t border-slate-200 relative z-20">
      {/* Multi-Column Links Section & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.jpg"
                  alt="Vibrant Petrochem Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leading commodity trader in the Gulf region with expansive product range and unwavering commitment to safety.
            </p>
            <div className="text-[10px] text-slate-500">
              Est. 2018 • United Arab Emirates Free Zone Enterprise
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Products
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`} className="hover:text-brand-red-vibrant transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/products" className="text-brand-red-vibrant font-semibold hover:underline flex items-center space-x-1">
                  <span>All Products</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Services
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {COMPANY_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-brand-red-vibrant transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Industries
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {COMPANY_INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link href={`/industries#${ind.id}`} className="hover:text-brand-red-vibrant transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-800">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-800">Security Specs</span>
            <span>•</span>
            <span className="hover:text-slate-800">Terms of Trading</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
