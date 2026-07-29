'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, ProductItem } from '@/lib/data';
import { ArrowRight, CheckCircle, Info, Sparkles, ExternalLink, ChevronDown } from 'lucide-react';

interface ProductCatalogProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProductDetails, setSelectedProductDetails] = useState<ProductItem | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    'All',
    'Base Oils',
    'Fuels & Solvents',
    'Specialty Hydrocarbons',
    'Industrial Solvents',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  // Show 2 rows maximum by default (8 items in 4-column grid)
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="products" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative z-20 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5221F]">
              Global Supply Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F172A] mt-2">
              Comprehensive Petrochemical Product Range
            </h2>
            <p className="text-[#475569] text-sm mt-3">
              Engineered to meet international ASTM, IP, and ISO standards with full batch quality certification.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-sm'
                    : 'bg-white text-[#475569] border-[#E2E8F0] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Cards Grid (2 rows = 8 cards max initially) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div>
                <Link href={`/products/${product.id}`} className="relative h-48 w-full block overflow-hidden bg-slate-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#C5221F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{product.badge}</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-white text-[#0F172A] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#E2E8F0] shadow-sm">
                    {product.category}
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <Link href={`/products/${product.id}`} className="block">
                    <h3 className="text-base font-bold font-display text-[#0F172A] group-hover:text-[#C5221F] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Key Spec Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {product.specs.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] px-2 py-0.5 rounded-md font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedProductDetails(product)}
                    className="w-full bg-[#F8FAFC] hover:bg-slate-100 text-[#0F172A] text-[11px] font-semibold py-2.5 rounded-lg border border-[#E2E8F0] transition-colors flex items-center justify-center space-x-1"
                  >
                    <Info className="w-3 h-3 text-[#2563EB]" />
                    <span>Quick Spec</span>
                  </button>
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Full Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(product.name)}
                  className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center space-x-1.5"
                >
                  <span>Request RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Fewer Toggle Button */}
        {filteredProducts.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 bg-white hover:bg-[#F8FAFC] text-[#0F172A] text-xs font-bold px-8 py-3.5 rounded-full border border-[#E2E8F0] shadow-sm transition-all hover:border-[#C5221F]"
            >
              <span>{showAll ? 'Show Fewer Products (2 Rows)' : `View All ${filteredProducts.length} Products`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180 text-[#C5221F]' : ''}`} />
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Spec Modal */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#E2E8F0] p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProductDetails(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#0F172A] p-2 text-xl"
            >
              ×
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase font-bold text-[#C5221F] tracking-wider bg-red-50 px-3 py-1 rounded-md border border-red-100">
                {selectedProductDetails.category}
              </span>
              <span className="text-xs text-[#475569]">Refined Quality Standard</span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-[#0F172A]">
                {selectedProductDetails.name}
              </h3>
              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                {selectedProductDetails.fullDesc}
              </p>
            </div>

            {/* Spec Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-[#475569] tracking-wider">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProductDetails.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-xs text-[#0F172A] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Applications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase text-[#475569] tracking-wider">
                Industrial Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProductDetails.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#F8FAFC] text-[#0F172A] px-3 py-1 rounded-md border border-[#E2E8F0] font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E2E8F0]">
              <Link
                href={`/products/${selectedProductDetails.id}`}
                onClick={() => setSelectedProductDetails(null)}
                className="w-full sm:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors text-center flex items-center justify-center space-x-2"
              >
                <span>Go to Product Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => {
                  const pName = selectedProductDetails.name;
                  setSelectedProductDetails(null);
                  onOpenQuoteModal(pName);
                }}
                className="flex-1 w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold py-3 rounded-xl transition-colors text-center shadow-sm"
              >
                Request Quotation & SDS Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
