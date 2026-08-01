'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, PRODUCTS, COMPANY_SERVICES, COMPANY_INDUSTRIES } from '@/lib/data';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 text-slate-900 border-t border-slate-200 relative z-20">
      {/* Multi-Column Links Section & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
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

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Contact Desk
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5221F] shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5221F] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#C5221F] transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5221F] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C5221F] transition-colors font-medium">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center sm:text-left text-xs text-slate-500">
          <div>
            © {COMPANY_INFO.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
