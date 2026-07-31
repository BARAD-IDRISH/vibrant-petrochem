import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_SERVICES } from '@/lib/data';
import { Database, ShieldCheck, Truck, Wrench, ArrowRight, CheckCircle2, Building2, Globe } from 'lucide-react';

export const metadata = {
  title: 'Commercial Services & Operational Desks | Vibrant Petrochem FZE',
  description: 'Explore Vibrant Petrochem FZE commercial services: Sourcing & Procurement, Energy Trading, Maritime Logistics & Distribution, and Port Storage Solutions in UAE.',
};

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6 text-[#1E40AF]";
    switch (iconName) {
      case 'Database':
        return <Database className={iconClasses} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Truck':
        return <Truck className={iconClasses} />;
      case 'Wrench':
        return <Wrench className={iconClasses} />;
      default:
        return <Database className={iconClasses} />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0F172A] pt-28 pb-20">
      {/* Soft Slate Header Block */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-700 font-bold">Services</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Operational Desks
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Commercial Services & Capabilities
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
            End-to-end commodity trading, maritime vessel chartering, port storage infrastructure, and raw material procurement across global energy markets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top 4 Core Desks Banner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#C5221F] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getServiceIcon(service.iconName)}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#C5221F] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-[#475569] font-medium mt-1">
                {service.subtext}
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-16 pt-8">
          {/* 1. Sourcing & Procurement */}
          <section id="sourcing" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Database className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Commodity Sourcing Desk</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Sourcing & Procurement
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our sourcing desk connects industrial manufacturers and energy buyers directly with primary refineries and petrochemical producers. We manage supply contracts, quality verification, and volume guarantees to protect our clients against market volatility.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Direct refinery contracts ensuring origin transparency and competitive pricing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Strict ASTM & DEF STAN specification verification with COA documentation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Tailored supply agreements to support continuous plant operations</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/hero_oil_refinery.png"
                    alt="Refinery Sourcing & Procurement Desk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Energy Trading */}
          <section id="trading" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/hero_light_oil_refinery.png"
                    alt="Energy Trading Desk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <ShieldCheck className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Trading Desk</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Energy Trading
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialized trading desk for refined petroleum products, aviation fuel, diesel, base oils, polymers, and specialty industrial solvents. We handle spot trades, long-term off-take agreements, and risk management strategies.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Global coverage across Middle East, Europe, Asia-Pacific, and Africa</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Flexible trade structures tailored to market conditions and client requirements</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Dedicated trading managers providing real-time market insights</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Logistics & Distribution */}
          <section id="logistics" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Truck className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Maritime & Land Transport</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Logistics & Distribution
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Full-scope logistics execution including ocean vessel chartering, ISO tank containers, flexitanks, and overland road transport. We operate under standardized international commercial terms (FOB, CIF, CFR) with complete insurance coverage.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Chartering of chemical tankers, product carriers, and specialized ISO tanks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Customs clearance, port documentation, and laycan scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Real-time shipment tracking and dedicated operations coordination</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/oil_trading_vessel.png"
                    alt="Maritime Logistics & Vessel Chartering"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Storage Solutions */}
          <section id="storage" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/about_oil_storage.png"
                    alt="UAE Bulk Liquid Tank Farm Storage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Wrench className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Port Infrastructure</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Storage Solutions
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Strategic access to deepwater bulk liquid tank storage facilities in key UAE free zone ports. Our storage infrastructure enables inventory buffering, product blending, rapid truck loading, and seamless vessel loading.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>State-of-the-art bulk liquid storage terminals in major UAE trade hubs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Dedicated pipeline connections to vessel berths for rapid loading</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Flexible short-term and long-term tank leasing options for trade partners</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
