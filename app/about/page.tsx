import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO, COMPANY_VALUES } from '@/lib/data';
import { ShieldCheck, Award, Truck, CheckCircle2, Globe, Building2, Star, Cpu, Users, Sliders, Globe2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us, Core Strengths & Values | Vibrant Petrochem FZE',
  description: 'Learn about Vibrant Petrochem FZE, our core strengths, corporate values, ethical trading practices, and custom formulation capabilities in UAE.',
};

export default function AboutPage() {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-5 h-5 text-[#2563EB]";
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Cpu':
        return <Cpu className={iconClasses} />;
      case 'Users':
        return <Users className={iconClasses} />;
      case 'Sliders':
        return <Sliders className={iconClasses} />;
      case 'Globe2':
        return <Globe2 className={iconClasses} />;
      default:
        return <ShieldCheck className={iconClasses} />;
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
            <span className="text-slate-700 font-bold">About Us</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Corporate Profile
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            About Vibrant Petrochem FZE
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Bridging international energy supply chains from our strategic headquarters in the United Arab Emirates since {COMPANY_INFO.established}.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
              <Image
                src="/about_oil_storage.png"
                alt="Vibrant Petrochem Storage Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-[#0F172A] p-6 rounded-2xl shadow-md hidden sm:block border border-[#E2E8F0]">
              <div className="text-3xl font-extrabold font-display text-[#2563EB]">FOB / CIF</div>
              <div className="text-xs font-semibold text-[#475569] mt-1">Global Shipping Terms</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold font-display text-[#0F172A]">
              Transforming Petrochemical Supply Across the Gulf & Worldwide
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              {COMPANY_INFO.name} actively engages in international commodity trading with a strategic global presence.
              We are committed to providing safe industrial solutions to factories, power plants, and maritime operators
              worldwide.
            </p>
            <p className="text-[#475569] text-sm leading-relaxed">
              From our headquarters in the UAE, we bridge key supply routes between the Middle East, Europe, Asia, and Africa.
              Our long-standing partnerships with tier-1 refineries ensure steady access to high-demand hydrocarbons,
              base oils, and specialty solvents.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <Building2 className="w-6 h-6 text-[#2563EB] mb-2" />
                <div className="text-sm font-bold text-[#0F172A]">UAE Free Zone Hub</div>
                <div className="text-xs text-[#475569] mt-1">Direct port loading & storage</div>
              </div>
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <Globe className="w-6 h-6 text-[#2563EB] mb-2" />
                <div className="text-sm font-bold text-[#0F172A]">Global Logistics</div>
                <div className="text-xs text-[#475569] mt-1">FOB, CIF, and CFR terms</div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VALUES SECTION (Exact Content from Official Website) */}
        <section id="our-values" className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge with Red Star */}
              <div className="inline-flex items-center space-x-2 border-b-2 border-[#C5221F] pb-1">
                <Star className="w-4 h-4 text-[#C5221F] fill-[#C5221F]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5221F]">
                  Our Values
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#0F172A] leading-tight">
                {COMPANY_INFO.valuesStatement.heading}
              </h2>

              {/* Paragraph 1 */}
              <p className="text-[#475569] text-sm leading-relaxed font-normal">
                {COMPANY_INFO.valuesStatement.paragraph1}
              </p>

              {/* Paragraph 2 */}
              <p className="text-[#475569] text-sm leading-relaxed font-normal">
                {COMPANY_INFO.valuesStatement.paragraph2}
              </p>
            </div>

            {/* Right Image/Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden border-4 border-[#C5221F]/20 shadow-md">
                <Image
                  src="/warehouse_worker.png"
                  alt="Vibrant Petrochem Reliable & Sustainable Industrial Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2E8F0] shadow-md">
                  <div className="text-xs font-bold uppercase text-[#C5221F] tracking-wider mb-1">
                    Core Commitment
                  </div>
                  <div className="text-sm font-bold text-[#0F172A]">
                    Reliable • Efficient • Safe • Sustainable
                  </div>
                  <div className="text-xs text-[#475569] mt-1">
                    Building long-term trust-based relationships with clients & associates worldwide.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Core Values Cards Grid */}
          <div className="mt-12 pt-12 border-t border-[#E2E8F0]">
            <h3 className="text-lg font-bold font-display text-[#0F172A] mb-6 text-center">
              Our Core Operational Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_VALUES.map((val) => (
                <div
                  key={val.id}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:border-[#C5221F] transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
                    {getIcon(val.iconName)}
                  </div>
                  <h4 className="text-base font-bold font-display text-[#0F172A]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Custom Formulations & Specification Blending Callout Box */}
            <div className="mt-8 p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F172A]">
                Custom Formulations & Specification Blending
              </h3>
              <p className="text-xs text-[#475569] max-w-2xl mx-auto leading-relaxed">
                Our technical team works directly with industrial clients to deliver customized viscosity index, pour points, and flash point parameters tailored for extreme climate operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
              >
                <span>Inquire Custom Blends</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-[#F8FAFC] text-[#0F172A] p-10 rounded-2xl text-center space-y-6 border border-[#E2E8F0] shadow-sm">
          <h3 className="text-2xl font-bold font-display text-[#0F172A]">Ready to Partner with Vibrant Petrochem?</h3>
          <p className="text-xs text-[#475569] max-w-xl mx-auto font-normal">
            Contact our commercial trading desk today for custom product formulations, vessel chartering, or specification quotes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-8 py-4 rounded-xl shadow-sm transition-colors"
          >
            Contact Commercial Trading Desk
          </Link>
        </div>
      </div>
    </main>
  );
}
