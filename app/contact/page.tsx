'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
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

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const payload = {
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        productInterest: formData.product,
        estimatedVolume: formData.volumeMT,
        destinationPort: formData.destinationPort,
        message: formData.additionalNotes,
      };

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        await fetch('/send-email.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      try {
        await fetch('/send-email.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: formData.fullName,
            companyName: formData.companyName,
            email: formData.email,
            phone: formData.phone,
            productInterest: formData.product,
            estimatedVolume: formData.volumeMT,
            destinationPort: formData.destinationPort,
            message: formData.additionalNotes,
          }),
        });
      } catch (e) {
        console.error('Contact inquiry dispatch error:', e);
      }
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
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

        <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200 space-y-3">
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
              <MapPin className="w-4 h-4 text-brand-red-vibrant" />
              <span>Headquarters Location (UAE)</span>
            </div>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              Free Zone Estate
            </span>
          </div>
          <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Vibrant Petrochem FZE Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2834024328515!2d55.3855!3d25.2769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xb12b4e7b15802263!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="lg:col-span-7">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xl">
          <h2 className="text-2xl font-bold font-display text-[#0F172A] mb-2">Submit Formal Trade Inquiry</h2>
          <p className="text-xs text-[#475569] mb-6">
            Complete the specification request form below and our trading team will respond within 4 business hours.
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
                        {p.name}
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
    <main className="min-h-screen bg-white text-[#0F172A] pt-28 pb-20">
      {/* Soft Slate Header Block */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-700 font-bold">Contact</span>
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5221F]">
              Commercial Trading Desk
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Contact Vibrant Petrochem FZE
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
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
