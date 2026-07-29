'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { Menu, X, ArrowRight, Shield, PhoneCall, ChevronDown, Sparkles, Flame, Droplets, FlaskConical, Boxes, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();
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

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Base Oils':
        return <Droplets className="w-3.5 h-3.5 text-[#C5221F]" />;
      case 'Fuels & Solvents':
        return <Flame className="w-3.5 h-3.5 text-amber-600" />;
      case 'Specialty Hydrocarbons':
        return <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />;
      case 'Industrial Solvents':
        return <Boxes className="w-3.5 h-3.5 text-[#2563EB]" />;
      default:
        return <Droplets className="w-3.5 h-3.5 text-[#C5221F]" />;
    }
  };

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1.5 text-emerald-700 font-semibold">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO & Security Compliant Commodity Trading</span>
              </span>
              <span className="text-slate-300">|</span>
              <span>HQ: {COMPANY_INFO.headquarters}</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-1.5 text-slate-600 hover:text-[#C5221F] transition-colors font-medium"
                rel="noopener noreferrer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C5221F]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-[#C5221F] transition-colors text-slate-600 font-medium"
                rel="noopener noreferrer"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5221F] to-red-700 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <span className="text-lg font-bold font-display text-[#C5221F]">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-display tracking-tight text-[#0F172A] group-hover:text-[#C5221F] transition-colors">
                VIBRANT <span className="text-[#C5221F]">PETROCHEM</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#475569] font-semibold">
                FZE • UAE EST. 2018
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link
              href="/about"
              className={`text-xs transition-colors py-1 ${
                isActive('/about')
                  ? 'text-[#C5221F] font-bold border-b-2 border-[#C5221F]'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/stats"
              className={`text-xs transition-colors py-1 ${
                isActive('/stats')
                  ? 'text-[#C5221F] font-bold border-b-2 border-[#C5221F]'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Stats
            </Link>

            {/* Mega Dropdown Container */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link
                href="/products"
                onClick={() => setIsProductsDropdownOpen(false)}
                className={`text-xs font-semibold transition-colors flex items-center space-x-1.5 py-1 px-3.5 rounded-full border ${
                  isProductsDropdownOpen || isActive('/products')
                    ? 'bg-[#C5221F] text-white border-[#C5221F] shadow-sm font-bold'
                    : 'text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isProductsDropdownOpen || isActive('/products') ? 'text-white' : 'text-[#C5221F]'}`} />
                <span>Products Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180 text-white' : 'text-slate-500'}`} />
              </Link>

              {/* Classic Corporate Light Mega Dropdown Panel */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] bg-white text-[#0F172A] border border-slate-200 rounded-2xl shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-12 gap-5">
                    {/* Featured Left Corporate Panel */}
                    <div className="col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-red-50 text-red-600 border border-red-200 text-[9px] font-bold uppercase rounded-full tracking-wider">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>13 ASTM Lines</span>
                        </span>
                        <h4 className="text-sm font-bold font-display text-[#0F172A] leading-tight">
                          Global Petrochemical Catalog
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                          Refined base oils, synthetic GTL fuels, glycols, and solvents ready for export.
                        </p>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-[11px] font-bold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                        >
                          <span>View All 13 Products</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Categorized Products Grid */}
                    <div className="col-span-8 grid grid-cols-2 gap-3.5">
                      {categories.map((category) => {
                        const categoryProducts = PRODUCTS.filter((p) => p.category === category);
                        return (
                          <div
                            key={category}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 hover:border-[#C5221F]/40 transition-colors"
                          >
                            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                              <div className="flex items-center space-x-1.5">
                                {getCategoryIcon(category)}
                                <span className="text-[10px] font-bold font-display uppercase tracking-wider text-[#0F172A]">
                                  {category}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-1">
                              {categoryProducts.map((prod) => (
                                <Link
                                  key={prod.id}
                                  href={`/products/${prod.id}`}
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                  className="group/item flex items-center justify-between p-1 rounded-md hover:bg-white transition-all duration-150"
                                >
                                  <div className="text-[11px] font-semibold text-slate-700 group-hover/item:text-[#C5221F] group-hover/item:translate-x-0.5 transition-all duration-150 truncate max-w-[160px]">
                                    {prod.name}
                                  </div>
                                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#C5221F] opacity-0 group-hover/item:opacity-100 transition-all shrink-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mega Menu Bottom Corporate Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                    <div className="flex items-center space-x-3 text-[11px]">
                      <span className="flex items-center space-x-1 text-[#0F172A] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>55,000 MT Monthly Capacity</span>
                      </span>
                      <span>•</span>
                      <span>FOB / CIF Global Terms</span>
                    </div>

                    <Link
                      href="/contact"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className="text-[#C5221F] hover:text-[#A31B19] font-bold text-[11px] flex items-center space-x-1 transition-colors"
                    >
                      <span>Request Custom Freight Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/values"
              className={`text-xs transition-colors py-1 ${
                isActive('/values')
                  ? 'text-[#C5221F] font-bold border-b-2 border-[#C5221F]'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Strengths
            </Link>

            <Link
              href="/contact"
              className={`text-xs transition-colors py-1 ${
                isActive('/contact')
                  ? 'text-[#C5221F] font-bold border-b-2 border-[#C5221F]'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#C5221F] hover:bg-[#A31B19] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-1.5 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0F172A] hover:text-[#C5221F] p-2 focus:outline-none"
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
          <div className="flex flex-col space-y-3 font-medium text-sm text-[#0F172A]">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 border-b border-slate-100 ${
                isActive('/about') ? 'text-[#C5221F] font-bold' : 'hover:text-[#C5221F] text-slate-600'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/stats"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 border-b border-slate-100 ${
                isActive('/stats') ? 'text-[#C5221F] font-bold' : 'hover:text-[#C5221F] text-slate-600'
              }`}
            >
              Key Metrics
            </Link>

            <div className="space-y-2 py-1 border-b border-slate-100">
              <div className="font-bold text-xs uppercase tracking-wider text-[#C5221F]">
                Products Catalog ({PRODUCTS.length})
              </div>
              <div className="pl-2 space-y-1">
                {PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/products/${prod.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-slate-600 hover:text-[#C5221F] py-1"
                  >
                    • {prod.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/values"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 border-b border-slate-100 ${
                isActive('/values') ? 'text-[#C5221F] font-bold' : 'hover:text-[#C5221F] text-slate-600'
              }`}
            >
              Values & Strengths
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 border-b border-slate-100 ${
                isActive('/contact') ? 'text-[#C5221F] font-bold' : 'hover:text-[#C5221F] text-slate-600'
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white font-semibold text-xs py-3 rounded-lg flex items-center justify-center space-x-2 shadow-sm block text-center"
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
