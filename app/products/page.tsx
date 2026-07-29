import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { Fuel, ArrowRight, ShieldCheck, Filter, Search } from 'lucide-react';

export const metadata = {
  title: 'All Petrochemical Products | Vibrant Petrochem FZE',
  description: 'Explore our complete portfolio of 13+ refined petrochemical products, base oils, gas-to-liquid fuels, glycols, and industrial solvents.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-[#F8FAFC] text-[#0F172A] py-16 mb-12 relative overflow-hidden border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB]">
            Global Supply Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#0F172A]">
            Refined Petrochemical & Hydrocarbon Portfolio
          </h1>
          <p className="text-[#475569] text-base max-w-2xl font-normal">
            Browse our full catalog of ASTM-tested base oils, gas-to-liquid synthetic fuels, glycols, and industrial solvents ready for export from UAE ports.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={prod.imageUrl}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-[#0F172A] font-bold text-[10px] uppercase rounded-full shadow-sm border border-[#E2E8F0]">
                    {prod.category}
                  </span>
                  {prod.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#C5221F] text-white font-bold text-[10px] uppercase rounded-full shadow-sm">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold font-display text-[#0F172A] group-hover:text-[#C5221F] transition-colors">
                    {prod.name}
                  </h2>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {prod.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0] text-xs">
                    {prod.specs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="flex justify-between text-[#0F172A]">
                        <span className="text-[#475569]">Spec #{index + 1}:</span>
                        <span className="font-semibold">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <Link
                  href={`/products/${prod.id}`}
                  className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                >
                  <span>View Product Details & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}`}
                  className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-300 text-center block shadow-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
