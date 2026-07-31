import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INDUSTRIES } from '@/lib/data';
import { Ship, Plane, FlaskConical, Car, Zap, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Industries Served | Vibrant Petrochem FZE',
  description: 'Vibrant Petrochem FZE supplies essential energy & chemical products across Marine & Bunker, Aviation Logistics, Chemical Processing, Automotive & Industrial, and Power Generation sectors.',
};

export default function IndustriesPage() {
  const getIndustryIcon = (iconName: string) => {
    const iconClasses = "w-6 h-6 text-[#1E40AF]";
    switch (iconName) {
      case 'Ship':
        return <Ship className={iconClasses} />;
      case 'Plane':
        return <Plane className={iconClasses} />;
      case 'FlaskConical':
        return <FlaskConical className={iconClasses} />;
      case 'Car':
        return <Car className={iconClasses} />;
      case 'Zap':
        return <Zap className={iconClasses} />;
      default:
        return <Building2 className={iconClasses} />;
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
            <span className="text-slate-700 font-bold">Industries</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Global Sectors
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Industries Served
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
            Empowering critical global infrastructure with certified petroleum products, specialized solvents, base oils, and energy solutions across key industrial verticals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top 5 Industries Quick Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_INDUSTRIES.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#C5221F] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getIndustryIcon(ind.iconName)}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#C5221F] transition-colors leading-snug">
                {ind.title}
              </h3>
              <p className="text-[11px] text-[#475569] font-medium mt-1 line-clamp-2">
                {ind.subtext}
              </p>
              <div className="mt-3 flex items-center text-[11px] font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Detailed Industry Sections */}
        <div className="space-y-16 pt-8">
          {/* 1. Marine & Bunker */}
          <section id="marine" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Ship className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Maritime Sector</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Marine & Bunker
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We supply international shipping operators, container lines, and port bunkering terminals with fully ISO 8217 compliant marine fuel oil and trunk piston engine oils. Direct vessel loading facilities in Fujairah and key Middle Eastern ports guarantee rapid laycan turnarounds.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>IMO 2020 compliant Very Low Sulfur Fuel Oil (VLSFO) & Marine Gas Oil (MGO)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>High TBN marine cylinder lubricants for 2-stroke and 4-stroke engines</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Bunker delivery notes (BDN) and independent lab analysis verification</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/oil_trading_vessel.png"
                    alt="Marine & Bunker Fuel Supply"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 2. Aviation Logistics */}
          <section id="aviation" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/hero_oil_refinery.png"
                    alt="Aviation Jet Fuel Logistics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Plane className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Aviation Fueling</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Aviation Logistics
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Supplying certified Jet A-1 aviation turbine fuel to airlines, charter fleets, and regional refueling hubs. Our aviation supply chain follows strict JTAGG and AFQRJPOS specifications from refinery off-take through dedicated tank farm handling.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>DEF STAN 91-091 & ASTM D1655 certified Jet A-1 aviation turbine fuel</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Specialized aircraft degreasing solvents and synthetic hydraulic fluids</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Dedicated quality control and water detector testing prior to discharge</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Chemical Processing */}
          <section id="chemical" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <FlaskConical className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Chemical Manufacturing</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Chemical Processing
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Delivering high-purity solvents, aromatic hydrocarbons, aliphatic compounds, and polymer feedstocks to chemical synthesis plants, paint manufacturers, and pharmaceutical formulators worldwide.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Toluene, Xylene, White Spirit, and specialized hydrocarbon solvents</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Polyethylene (HDPE/LDPE), Polypropylene (PP), and PET polymer granules</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>ISO tank container loading and drum packaging options for pure chemicals</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/hero_light_oil_refinery.png"
                    alt="Chemical Processing & Solvents"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Automotive & Industrial */}
          <section id="automotive" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/warehouse_worker.png"
                    alt="Automotive Base Oils & Industrial Lubricants"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Car className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Industrial & Automotive</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Automotive & Industrial
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Supplying premium Group I, Group II, and Group III virgin base oils to lubricant blending plants, automotive factories, and heavy machinery operators. Our base oils deliver exceptional thermal stability and oxidation resistance.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>SN 150, SN 500, BS 150 base oils for engine & gear lubricant blenders</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Industrial hydraulic oils, turbine oils, and compressor lubricants</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Bulk flexitank shipments and IBC tote containers for factory delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Power Generation */}
          <section id="power" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
                  <Zap className="w-4 h-4 text-[#1E40AF]" />
                  <span className="text-xs font-bold text-[#1E40AF]">Energy Generation</span>
                </div>
                <h2 className="text-3xl font-bold font-display text-[#0F172A]">
                  Power Generation
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fuel supply contracts for utility-scale thermal power plants, industrial captive power facilities, and emergency diesel generator networks. We ensure uninterrupted fuel deliveries under fixed long-term supply terms.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Heavy Fuel Oil (HFO 180 CST & 380 CST) for utility power stations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Low-sulfur gasoil / diesel fuel for industrial gas turbine plants</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5221F] shrink-0" />
                    <span>Strategic fuel reserve management and emergency tanker dispatch</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/about_oil_storage.png"
                    alt="Power Generation Fuel Supply"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Commercial Inquiry Callout */}
        <div className="bg-[#F8FAFC] text-[#0F172A] p-10 rounded-2xl text-center space-y-6 border border-[#E2E8F0] shadow-sm">
          <h3 className="text-2xl font-bold font-display text-[#0F172A]">Require Fuel or Chemical Supply for Your Industry?</h3>
          <p className="text-xs text-[#475569] max-w-xl mx-auto font-normal">
            Speak with our industrial desk specialists for bulk fuel pricing, specification matching, or customized supply contracts.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            Request Industry Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
