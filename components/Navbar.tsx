'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { Menu, X, ArrowRight, Shield, PhoneCall, ChevronDown, Sparkles, Flame, Droplets, FlaskConical, Boxes, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Base Oils':
        return <Droplets className="w-3.5 h-3.5 text-brand-red-vibrant" />;
      case 'Fuels & Solvents':
        return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'Specialty Hydrocarbons':
        return <FlaskConical className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Industrial Solvents':
        return <Boxes className="w-3.5 h-3.5 text-sky-500" />;
      default:
        return <Droplets className="w-3.5 h-3.5 text-brand-red-vibrant" />;
    }
  };

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl py-2.5 shadow-md border-b border-slate-200'
          : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-200/80'
      }`}
    >
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 hidden md:block">
        <div className="flex items-center justify-between text-xs text-slate-600 pb-1.5 border-b border-slate-200/80">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-emerald-700 font-semibold">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>ISO & Security Compliant Commodity Trading</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">HQ: {COMPANY_INFO.headquarters}</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 text-slate-700 hover:text-brand-red-vibrant transition-colors font-medium"
              rel="noopener noreferrer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-red-vibrant" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-brand-red-vibrant transition-colors text-slate-700 font-medium"
              rel="noopener noreferrer"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-red-vibrant to-red-700 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <span className="text-lg font-bold font-display text-brand-red-vibrant">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-display tracking-tight text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                VIBRANT <span className="text-brand-red-vibrant">PETROCHEM</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">
                FZE • UAE EST. 2018
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link href="/about" className="text-xs font-semibold text-slate-700 hover:text-brand-red-vibrant transition-colors">
              About Us
            </Link>
            <Link href="/stats" className="text-xs font-semibold text-slate-700 hover:text-brand-red-vibrant transition-colors">
              Stats
            </Link>

            {/* Compact Glassmorphic Mega Dropdown Container */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                className={`text-xs font-semibold transition-colors flex items-center space-x-1.5 py-1 px-3 rounded-full border ${
                  isProductsDropdownOpen
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'text-slate-700 border-transparent hover:text-brand-red-vibrant hover:bg-slate-100/60'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isProductsDropdownOpen ? 'text-brand-red-vibrant' : 'text-slate-400'}`} />
                <span>Products Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180 text-brand-red-vibrant' : ''}`} />
              </Link>

              {/* Compact Sleek Mega Dropdown Panel */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-slate-900/95 text-white border border-slate-800 rounded-2xl shadow-xl p-4 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Compact Left Feature Panel */}
                    <div className="col-span-4 relative rounded-xl overflow-hidden p-3.5 border border-white/10 flex flex-col justify-between group">
                      <Image
                        src="/hero_light_oil_refinery.png"
                        alt="Refinery Operations"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-25"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                      <div className="relative z-10 space-y-2">
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-brand-red-vibrant/90 text-white text-[9px] font-bold uppercase rounded-full tracking-wider shadow-sm">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>13 ASTM Lines</span>
                        </span>
                        <h4 className="text-sm font-bold font-display leading-tight">
                          Global Petrochemical Catalog
                        </h4>
                        <p className="text-[10px] text-slate-300 leading-relaxed font-normal line-clamp-3">
                          Refined base oils, synthetic GTL fuels, glycols, and solvents ready for export.
                        </p>
                      </div>

                      <div className="relative z-10 pt-3">
                        <Link
                          href="/products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="w-full bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-[10px] font-bold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-1 shadow-md"
                        >
                          <span>All 13 Products</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Categorized Products Grid */}
                    <div className="col-span-8 grid grid-cols-2 gap-3">
                      {categories.map((category) => {
                        const categoryProducts = PRODUCTS.filter((p) => p.category === category);
                        return (
                          <div
                            key={category}
                            className="bg-white/5 border border-white/10 rounded-xl p-2.5 space-y-1.5 hover:border-brand-red-vibrant/40 transition-colors"
                          >
                            <div className="flex items-center justify-between border-b border-white/10 pb-1">
                              <div className="flex items-center space-x-1.5">
                                {getCategoryIcon(category)}
                                <span className="text-[10px] font-bold font-display uppercase tracking-wider text-slate-200">
                                  {category}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-0.5">
                              {categoryProducts.map((prod) => (
                                <Link
                                  key={prod.id}
                                  href={`/products/${prod.id}`}
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                  className="group/item flex items-center justify-between p-1 rounded-md hover:bg-white/10 transition-all duration-150"
                                >
                                  <div className="text-[11px] font-semibold text-slate-200 group-hover/item:text-brand-red-vibrant group-hover/item:translate-x-0.5 transition-all duration-150 truncate max-w-[160px]">
                                    {prod.name}
                                  </div>
                                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover/item:text-brand-red-vibrant opacity-0 group-hover/item:opacity-100 transition-all shrink-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mega Menu Bottom Bar */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                    <div className="flex items-center space-x-3 text-[10px]">
                      <span className="flex items-center space-x-1 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>55,000 MT Volume</span>
                      </span>
                      <span>•</span>
                      <span>FOB / CIF UAE</span>
                    </div>

                    <Link
                      href="/contact"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="text-brand-red-vibrant hover:text-white font-bold text-[10px] flex items-center space-x-1 transition-colors"
                    >
                      <span>Custom Quote</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/values" className="text-xs font-semibold text-slate-700 hover:text-brand-red-vibrant transition-colors">
              Strengths
            </Link>
            <Link href="/contact" className="text-xs font-semibold text-slate-700 hover:text-brand-red-vibrant transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-1.5 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium text-sm text-slate-700">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-red-vibrant py-1 border-b border-slate-100"
            >
              About Us
            </Link>
            <Link
              href="/stats"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-red-vibrant py-1 border-b border-slate-100"
            >
              Key Metrics
            </Link>

            <div className="space-y-2 py-1 border-b border-slate-100">
              <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-brand-red-vibrant">
                Products Catalog ({PRODUCTS.length})
              </div>
              <div className="pl-2 space-y-1">
                {PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-700 hover:text-brand-red-vibrant py-1"
                  >
                    • {prod.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/values"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-red-vibrant py-1 border-b border-slate-100"
            >
              Values & Strengths
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-red-vibrant py-1 border-b border-slate-100"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-semibold text-xs py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md block text-center"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
