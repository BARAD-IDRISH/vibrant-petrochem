'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO, PRODUCTS, CATEGORY_INFO } from '@/lib/data';
import { Menu, X, ArrowRight, Shield, PhoneCall, ChevronDown, Sparkles, Flame, Droplets, FlaskConical, Boxes, ArrowUpRight, ShieldCheck, RotateCw } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const targetUrl = new URL(anchor.href);
        if (targetUrl.pathname !== window.location.pathname) {
          setIsNavigating(true);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

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
      case 'Energy & Petroleum':
        return <Flame className="w-3.5 h-3.5 text-[#C5221F]" />;
      case 'Base Oils & Lubricant Stocks':
        return <Droplets className="w-3.5 h-3.5 text-blue-600" />;
      case 'Chemicals & Solvents':
        return <Boxes className="w-3.5 h-3.5 text-emerald-600" />;
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
                <Shield className="w-3.5 h-3.5" />
                <span>ISO & Security Compliant Commodity Trading</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">HQ: {COMPANY_INFO.headquarters}</span>
            </div>

            <div className="flex items-center space-x-5 text-slate-600 font-medium">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#C5221F] transition-colors flex items-center space-x-1"
              >
                <PhoneCall className="w-3 h-3 text-[#C5221F]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-[#C5221F] transition-colors"
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
          <Link href="/" className="flex items-center space-x-3 group" onClick={() => setIsNavigating(true)}>
            <div className="relative h-12 w-48 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.jpg"
                alt="Vibrant Petrochem Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            {/* Browser-style spinning refresh loading icon */}
            <div
              title={isNavigating ? 'Navigating...' : 'System Ready'}
              className={`p-1 rounded-full transition-all duration-300 ${
                isNavigating
                  ? 'bg-red-500/10 opacity-100 scale-100'
                  : 'opacity-0 scale-90 pointer-events-none'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 text-[#C5221F] ${isNavigating ? 'animate-spin' : ''}`} />
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

            {/* Products Mega Dropdown Container Trigger */}
            <div
              className="static"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
            >
              <Link
                href="/products"
                onClick={() => setIsProductsDropdownOpen(false)}
                className={`text-xs flex items-center space-x-1.5 py-1 px-3 rounded-full transition-all duration-200 ${
                  isActive('/products') || isProductsDropdownOpen
                    ? 'bg-[#C5221F] text-white font-bold shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isProductsDropdownOpen || isActive('/products') ? 'text-white' : 'text-[#C5221F]'}`} />
                <span>Products Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180 text-white' : 'text-slate-500'}`} />
              </Link>
            </div>

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

      {/* Berghaus-Style Full-Width Edge-to-Edge Desktop Mega Menu Panel */}
      {isProductsDropdownOpen && (
        <div
          className="hidden md:block absolute top-full left-0 right-0 w-full bg-white text-[#0F172A] border-t border-slate-100 border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={() => setIsProductsDropdownOpen(true)}
          onMouseLeave={() => setIsProductsDropdownOpen(false)}
        >
          {/* Main Mega Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8 items-stretch">
              
              {/* Left Section (~25-30% Width - Featured Visual Banner) */}
              <div className="col-span-12 md:col-span-4 lg:col-span-3 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col justify-between p-6 min-h-[380px] group/banner">
                <Image
                  src="/products/jet_a1.png"
                  alt="Global Petrochemical Catalog"
                  fill
                  className="object-cover group-hover/banner:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/20" />

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#C5221F] text-white text-[10px] font-bold uppercase rounded-full tracking-wider shadow-sm">
                    <ShieldCheck className="w-3 h-3 text-white" />
                    <span>17 Product Lines</span>
                  </span>
                </div>

                {/* Bottom Promo Content & CTA */}
                <div className="relative z-10 space-y-3 pt-12">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight leading-snug">
                    Global Petrochemical Catalog
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Primary distillates, base oils, industrial polymers, GTL synthetic fuels & specialty solvents.
                  </p>
                  <Link
                    href="/products"
                    onClick={() => setIsProductsDropdownOpen(false)}
                    className="inline-flex items-center justify-center space-x-2 w-full bg-white hover:bg-slate-100 text-[#0F172A] text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md group/btn mt-2"
                  >
                    <span>View All 17 Products</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5221F] group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Section (~70-75% Width - Structured Categories Grid) */}
              <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => {
                  const categoryProducts = PRODUCTS.filter((p) => p.category === category);
                  const categorySubtitle = CATEGORY_INFO[category] || '';
                  return (
                    <div key={category} className="space-y-4">
                      {/* Category Header with Divider */}
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1E40AF] font-display">
                          {category}
                        </h3>
                        {categorySubtitle && (
                          <p className="text-[11px] text-slate-500 font-normal leading-relaxed mt-1">
                            {categorySubtitle}
                          </p>
                        )}
                      </div>

                      {/* Products List */}
                      <div className="space-y-2">
                        {categoryProducts.map((prod) => (
                          <div key={prod.id} className="space-y-1">
                            <Link
                              href={`/products/${prod.id}`}
                              onClick={() => setIsProductsDropdownOpen(false)}
                              className="group/item flex items-center justify-between py-1 text-xs font-bold text-slate-800 hover:text-[#C5221F] transition-colors"
                            >
                              <span className="group-hover/item:translate-x-0.5 transition-transform truncate max-w-[180px]">
                                {prod.name}
                              </span>
                              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/item:text-[#C5221F] opacity-0 group-hover/item:opacity-100 transition-all shrink-0" />
                            </Link>

                            {/* Sub-hierarchy bullet items */}
                            {prod.subItems && prod.subItems.length > 0 && (
                              <div className="ml-3 pl-3 border-l-2 border-slate-200 space-y-1.5 my-1.5">
                                {prod.subItems.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={`/products/${sub.id}`}
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                    className="flex items-center space-x-2 text-[11px] text-slate-500 hover:text-[#C5221F] font-medium py-0.5 transition-colors group/sub"
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
          </div>

          {/* Bottom Bar - Full Width Footer Strip */}
          <div className="border-t border-slate-200 bg-slate-50 py-3.5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-3 text-xs font-medium text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-bold text-[#0F172A]">FOB / CIF Global Terms</span>
                </span>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsProductsDropdownOpen(false)}
                className="text-[#C5221F] hover:text-[#A31B19] font-bold text-xs flex items-center space-x-1.5 group/quote transition-colors"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/quote:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

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
