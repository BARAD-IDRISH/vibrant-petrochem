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
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Header Banner */}
      <div className="bg-[#1E56A0] text-white py-16 mb-12 relative overflow-hidden border-b border-blue-700/50">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero_light_oil_refinery.png"
            alt="Refinery Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-100">
            Global Supply Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display">
            Refined Petrochemical & Hydrocarbon Portfolio
          </h1>
          <p className="text-blue-100 text-base max-w-2xl font-normal">
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
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={prod.imageUrl}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase rounded-full shadow-sm">
                    {prod.category}
                  </span>
                  {prod.badge && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-brand-red-vibrant text-white font-bold text-[10px] uppercase rounded-full shadow-md">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold font-display text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                    {prod.name}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prod.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    {prod.specs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="flex justify-between text-slate-700">
                        <span className="text-slate-400">Spec #{index + 1}:</span>
                        <span className="font-semibold">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <Link
                  href={`/products/${prod.id}`}
                  className="w-full bg-slate-900 hover:bg-brand-red-vibrant text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                >
                  <span>View Product Details & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}`}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all duration-300 text-center block"
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
