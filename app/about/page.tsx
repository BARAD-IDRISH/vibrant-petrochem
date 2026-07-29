import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/data';
import { ShieldCheck, Award, Truck, CheckCircle2, Globe, Building2, Layers } from 'lucide-react';

export const metadata = {
  title: 'About Us | Vibrant Petrochem FZE',
  description: 'Learn about Vibrant Petrochem FZE, a premier commodity & petrochemical trading partner based in the United Arab Emirates since 2018.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      {/* Hero Banner */}
      <div className="bg-[#1E56A0] text-white py-16 mb-16 relative overflow-hidden border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-100">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display">
            About Vibrant Petrochem FZE
          </h1>
          <p className="text-blue-100 text-base max-w-2xl font-normal">
            Bridging international energy supply chains from our strategic headquarters in the United Arab Emirates since {COMPANY_INFO.established}.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/about_oil_storage.png"
                alt="Vibrant Petrochem Storage Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1E56A0] text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-blue-700/50">
              <div className="text-3xl font-extrabold font-display">55,000 MT</div>
              <div className="text-xs font-semibold text-blue-100">Monthly Supply Capacity</div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Transforming Petrochemical Supply Across the Gulf & Worldwide
            </h2>
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

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <Building2 className="w-6 h-6 text-brand-red-vibrant mb-2" />
                <div className="text-sm font-bold text-slate-900">UAE Free Zone Hub</div>
                <div className="text-xs text-slate-500 mt-1">Direct port loading & storage</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <Globe className="w-6 h-6 text-brand-red-vibrant mb-2" />
                <div className="text-sm font-bold text-slate-900">Global Logistics</div>
                <div className="text-xs text-slate-500 mt-1">FOB, CIF, and CFR terms</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1E56A0] text-white p-10 rounded-2xl text-center space-y-6 border border-blue-700/50 shadow-lg">
          <h3 className="text-2xl font-bold font-display">Ready to Partner with Vibrant Petrochem?</h3>
          <p className="text-xs text-blue-100/90 max-w-xl mx-auto font-normal">
            Contact our commercial trading desk today for custom product formulations, vessel chartering, or specification quotes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-8 py-4 rounded-xl shadow-md transition-colors"
          >
            Contact Commercial Trading Desk
          </Link>
        </div>
      </div>
    </main>
  );
}
