'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { QuoteRequestSchema } from '@/lib/schemas';
import { z } from 'zod';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams ? searchParams.get('product') || '' : '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    product: initialProduct,
    volumeMT: '25 MT',
    destinationPort: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    const validation = QuoteRequestSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue: z.ZodIssue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setFormErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Direct Contact Info */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
          <h2 className="text-xl font-bold font-display text-slate-900">Headquarters & Desk Contact</h2>

          <div className="space-y-4 text-xs text-slate-600">
            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <MapPin className="w-5 h-5 text-brand-red-vibrant shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Commercial Headquarters</div>
                <div className="mt-0.5">{COMPANY_INFO.address}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <PhoneCall className="w-5 h-5 text-brand-red-vibrant shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Telephone</div>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-red-vibrant transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <Mail className="w-5 h-5 text-brand-red-vibrant shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Email Inquiries</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-red-vibrant transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <Clock className="w-5 h-5 text-brand-red-vibrant shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Desk Operating Hours</div>
                <div className="mt-0.5">{COMPANY_INFO.hours.weekdays}</div>
                <div>{COMPANY_INFO.hours.saturday}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] text-[#0F172A] p-6 rounded-2xl shadow-sm space-y-3 border border-[#E2E8F0]">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#2563EB] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Security Assurance</span>
          </div>
          <p className="text-xs text-[#475569] leading-relaxed">
            All commercial transactions and trade documents are protected by strict corporate data security and ISO 9001 compliance standards.
          </p>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-7">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xl">
          <h2 className="text-2xl font-bold font-display text-[#0F172A] mb-2">Submit Formal Trade Inquiry</h2>
          <p className="text-xs text-[#475569] mb-6">
            Complete the specification request form below and our trading team will respond within 2 business hours.
          </p>

          {submitSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold font-display">Inquiry Received Successfully</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Thank you for contacting Vibrant Petrochem FZE. Our commercial trading desk has received your request and will transmit product specification sheets shortly.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  />
                  {formErrors.fullName && <p className="text-[10px] text-red-600 mt-1">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. j.doe@company.com"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  />
                  {formErrors.email && <p className="text-[10px] text-red-600 mt-1">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Global Energy Ltd"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  />
                  {formErrors.companyName && <p className="text-[10px] text-red-600 mt-1">{formErrors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Telephone / WhatsApp *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +971 50 123 4567"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  />
                  {formErrors.phone && <p className="text-[10px] text-red-600 mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Product Line *</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  >
                    <option value="">General Product Inquiry</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.category})
                      </option>
                    ))}
                  </select>
                  {formErrors.product && <p className="text-[10px] text-red-600 mt-1">{formErrors.product}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Volume (MT or Barrels) *</label>
                  <input
                    type="text"
                    required
                    value={formData.volumeMT}
                    onChange={(e) => setFormData({ ...formData, volumeMT: e.target.value })}
                    placeholder="e.g. 500 MT"
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                  />
                  {formErrors.volumeMT && <p className="text-[10px] text-red-600 mt-1">{formErrors.volumeMT}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Destination Discharge Port *</label>
                <input
                  type="text"
                  required
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  placeholder="e.g. Jebel Ali / Rotterdam / Singapore / Mumbai Port"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                />
                {formErrors.destinationPort && <p className="text-[10px] text-red-600 mt-1">{formErrors.destinationPort}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">Specification Notes / Message</label>
                <textarea
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Specify required ASTM parameters, target laycan dates, or packaging preferences..."
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Commercial Quote Request'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] pt-28 pb-20">
      {/* Compact Dark Header Banner */}
      <div className="bg-[#0F172A] text-white py-12 mb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-red-400">
            Commercial Trading Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Contact Vibrant Petrochem FZE
          </h1>
          <p className="text-[#94A3B8] text-sm max-w-2xl font-normal leading-relaxed">
            Inquire product specifications, request official Certificates of Analysis (COA), or receive a custom freight rate quote for international delivery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading Form...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </main>
  );
}
