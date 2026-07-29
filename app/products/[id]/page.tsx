import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, ArrowLeft, Fuel, CheckCircle2, PackageCheck, Truck, ShieldAlert, Award, FileText } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return { title: 'Product Not Found | Vibrant Petrochem' };

  return {
    title: `${product.name} | Vibrant Petrochem FZE`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 py-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-red-vibrant transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-brand-red-vibrant transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">{product.name}</span>
          </div>

          <Link
            href="/#products"
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-brand-red-vibrant transition-colors bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Product Media Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {product.badge && (
                <div className="absolute top-4 left-4 bg-brand-red-vibrant text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.badge}
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl text-slate-900 border border-slate-200 shadow-xl flex justify-between items-center">
                <div>
                  <div className="text-[11px] font-bold uppercase text-brand-red-vibrant tracking-wider">Category</div>
                  <div className="text-sm font-bold text-slate-900">{product.category}</div>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md border border-emerald-200">
                  In Stock & Ready for Export
                </span>
              </div>
            </div>

            {/* Packaging Options */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                <PackageCheck className="w-4 h-4 text-brand-red-vibrant" />
                <span>Available Shipping & Packaging Modes</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">ISO Tank Containers</div>
                  <div className="text-[10px] text-slate-500 mt-1">24,000 Liters</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">Flexitanks</div>
                  <div className="text-[10px] text-slate-500 mt-1">Bulk Liquid 24 MT</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">IBC Totes</div>
                  <div className="text-[10px] text-slate-500 mt-1">1,000 Liter Cages</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900">Steel Drums</div>
                  <div className="text-[10px] text-slate-500 mt-1">208 Liter Drums</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Overview & Action Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-md bg-red-50 text-brand-red-vibrant text-xs font-bold border border-red-100">
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {product.shortDesc}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-sm font-bold text-slate-900 font-display">Full Product Overview</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Quick Specs Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider">Technical Specifications</span>
                <span className="text-[10px] text-red-300 font-semibold">Certified ASTM Standard</span>
              </div>
              <div className="divide-y divide-slate-100 p-6 space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center text-xs py-1.5">
                    <span className="text-slate-500 font-medium">Specification Grade #{index + 1}</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold">Request Technical Specification Sheet</div>
                  <div className="text-xs text-slate-400">Direct loading from UAE ports (FOB / CIF)</div>
                </div>
                <Award className="w-6 h-6 text-brand-red-vibrant" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-center shadow-lg flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Custom Quote & COA</span>
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all duration-300 text-center border border-white/20 flex items-center justify-center space-x-2"
                >
                  <span>Call Trading Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Applications & Quality Control Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Applications */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-red-50 text-brand-red-vibrant">
                <Fuel className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900">Target Industrial Applications</h3>
                <p className="text-xs text-slate-500">Key manufacturing & energy sectors</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.applications.map((app, index) => (
                <div key={index} className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality & Assurance */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-red-50 text-brand-red-vibrant">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900">Quality Assurance & Compliance</h3>
                <p className="text-xs text-slate-500">Every shipment batch tested prior to laycan loading</p>
              </div>
            </div>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-brand-red-vibrant shrink-0" />
                <span>Certificate of Analysis (COA) issued by SGS / Intertek for every batch.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-brand-red-vibrant shrink-0" />
                <span>Full compliance with IMO, REACH, and international maritime transport codes.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-red-vibrant shrink-0" />
                <span>Strict temperature & moisture control during storage and vessel loading.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold font-display text-slate-900">Related Products in {product.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase text-brand-red-vibrant mb-1">{rel.category}</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                      {rel.name}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{rel.shortDesc}</p>
                  </div>
                  <div className="text-xs font-bold text-brand-red-vibrant mt-4 flex items-center space-x-1">
                    <span>View Specifications</span>
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
