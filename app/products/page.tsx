import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS, CATEGORY_INFO } from '@/lib/data';
import { Fuel, ArrowRight, ShieldCheck, Filter, Search } from 'lucide-react';

export const metadata = {
  title: 'All Petrochemical Products | Vibrant Petrochem FZE',
  description: 'Explore our complete portfolio of 17+ refined petrochemical products, base oils, synthetic GTL fuels, polymers, glycols, and industrial solvents.',
};

export default function ProductsPage() {
  const categories: Array<'Energy & Petroleum' | 'Base Oils & Lubricant Stocks' | 'Chemicals & Solvents'> = [
    'Energy & Petroleum',
    'Base Oils & Lubricant Stocks',
    'Chemicals & Solvents',
  ];

  return (
    <main className="min-h-screen bg-white text-[#0F172A] pt-28 pb-20">
      {/* Soft Slate Header Block */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-700 font-bold">Products</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Global Supply Catalog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Refined Petrochemical & Hydrocarbon Portfolio
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Browse our full catalog of ASTM-tested base oils, gas-to-liquid synthetic fuels, glycols, and industrial solvents ready for export from UAE ports.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Hierarchy Overview (Matching User Reference Image) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-16 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold font-display text-[#0F172A]">
              Catalog Category Index
            </h2>
            <p className="text-xs text-slate-500">
              Structured product hierarchy across Energy, Base Stocks, and Specialty Solvents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryProducts = PRODUCTS.filter((p) => p.category === category);
              const subtitle = CATEGORY_INFO[category] || '';
              return (
                <div key={category} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1E40AF] font-display">
                      {category}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal mt-1">
                      {subtitle}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {categoryProducts.map((prod) => (
                      <div key={prod.id} className="space-y-1">
                        <Link
                          href={`/products/${prod.id}`}
                          className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#C5221F] transition-colors block"
                        >
                          {prod.name}
                        </Link>

                        {/* Sub-items (Liquid & Solid Polymers hierarchy) */}
                        {prod.subItems && prod.subItems.length > 0 && (
                          <div className="ml-3 pl-3 border-l-2 border-slate-200 space-y-1 my-1.5">
                            {prod.subItems.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={`/products/${sub.id}`}
                                className="flex items-center space-x-2 text-[11px] text-slate-500 hover:text-[#C5221F] font-medium transition-colors group/sub"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 group-hover/sub:bg-[#C5221F] shrink-0 transition-colors"></span>
                                <span className="group-hover/sub:translate-x-0.5 transition-transform">{sub.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
                  <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md text-[#0F172A] font-bold text-[10px] uppercase rounded-full shadow-sm border border-[#E2E8F0]">
                    {prod.category}
                  </span>
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

        {/* Page-Specific Commercial Inquiry Callout Banner */}
        <div className="bg-[#F8FAFC] text-[#0F172A] p-10 rounded-2xl text-center space-y-6 border border-[#E2E8F0] shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5221F]">
            Product Sourcing
          </span>
          <h3 className="text-2xl font-bold font-display text-[#0F172A]">
            Looking for Custom Product Specifications or Spot Quotes?
          </h3>
          <p className="text-xs text-[#475569] max-w-xl mx-auto font-normal leading-relaxed">
            Contact our trade desk for Certificates of Analysis (COA), bulk loading terms (FOB/CIF), or custom blending inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            Request Custom Product Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
