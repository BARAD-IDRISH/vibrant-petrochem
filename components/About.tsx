'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, Award, Truck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Corporate Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] w-full rounded-xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/about_oil_storage.png"
                alt="Vibrant Petrochem Storage Terminal in UAE"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white rounded-xl text-slate-900 border border-slate-200 shadow-lg">
                <div className="text-xs uppercase font-bold text-brand-red-vibrant tracking-wider mb-1">
                  Strategic Hub
                </div>
                <div className="text-base font-bold font-display text-slate-900">
                  United Arab Emirates Free Zone Enterprise
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Direct port loading & international vessel chartering facilities.
                </div>
              </div>
            </div>

            {/* Corporate Badge "Since 2018 | UAE" */}
            <div className="absolute -top-6 -right-4 sm:right-6 bg-[#1E3A8A] text-white p-5 rounded-xl shadow-lg border-2 border-white">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-200">Established</div>
              <div className="text-3xl font-extrabold font-display leading-none mt-1">2018</div>
              <div className="text-[11px] font-medium text-blue-100 mt-1">Gulf Region • UAE</div>
            </div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red-vibrant">
                Company Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mt-2 leading-tight">
                Empowering Global Industries with Premium Petrochemical Solutions
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {COMPANY_INFO.name} actively engages in international commodity trading with a strategic global presence.
              We are committed to providing safe industrial solutions to factories, power plants, and maritime operators
              worldwide.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              From our headquarters in the UAE, we bridge key supply routes between the Middle East, Europe, Asia, and Africa.
              Our long-standing partnerships with tier-1 refineries ensure steady access to high-demand hydrocarbons,
              base oils, and specialty solvents.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Unwavering Safety</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Strict adherence to chemical handling & environmental protocols.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Quality Assured</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Batch-tested ASTM certification for every export volume.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Flexible Logistics</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    FOB, CIF, and CFR terms with guaranteed laycan schedules.
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Client Centric</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Tailor-made formulation and custom packaging options.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
