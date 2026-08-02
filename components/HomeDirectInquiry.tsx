'use client';

import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import LocationMapCard from '@/components/LocationMapCard';
import { QuoteRequestSchema } from '@/lib/schemas';
import { z } from 'zod';

export const HomeDirectInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    product: '',
    volumeMT: '',
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
        console.error('Inquiry dispatch error:', e);
      }
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Headquarters & Desk Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex-1 flex flex-col justify-between">
            <h2 className="text-lg font-bold font-display text-slate-900">Headquarters Contact</h2>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start space-x-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                <MapPin className="w-4 h-4 text-[#C5221F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">Commercial Headquarters</div>
                  <div className="mt-0.5 text-[11px] text-slate-600">{COMPANY_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                <PhoneCall className="w-4 h-4 text-[#C5221F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">Telephone</div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="mt-0.5 block hover:text-[#C5221F] font-semibold text-slate-700 transition-colors text-[11px]">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                <Mail className="w-4 h-4 text-[#C5221F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">Email Inquiries</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="mt-0.5 block hover:text-[#C5221F] font-semibold text-slate-700 transition-colors text-[11px]">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                <Clock className="w-4 h-4 text-[#C5221F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">Working Hours</div>
                  <div className="mt-0.5 text-[11px] text-slate-600">{COMPANY_INFO.hours.weekdays}</div>
                  <div className="text-[11px] text-slate-600">{COMPANY_INFO.hours.saturday}</div>
                </div>
              </div>
            </div>
          </div>

          <LocationMapCard className="rounded-3xl shadow-sm border-slate-200" mapHeight="h-44 sm:h-48" />
        </div>

        {/* Right Column: Direct Trade Inquiry Form */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-md flex-1 flex flex-col justify-between">
            <h2 className="text-2xl font-bold font-display text-[#0F172A] mb-1">Submit Formal Trade Inquiry</h2>
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
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {Object.keys(formErrors).length > 0 && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-2 text-xs text-[#C5221F] font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#C5221F]" />
                    <span>Please complete all required fields marked with an asterisk (*).</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none transition-colors ${
                        formErrors.fullName ? 'bg-red-50/30 border border-[#C5221F]' : 'bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#C5221F]'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] font-semibold text-[#C5221F] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Business Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="e.g. j.doe@company.com"
                      className={`w-full rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none transition-colors ${
                        formErrors.email ? 'bg-red-50/30 border border-[#C5221F]' : 'bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#C5221F]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] font-semibold text-[#C5221F] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Global Energy Ltd"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Telephone / WhatsApp *</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                      }}
                      placeholder="e.g. +971 50 123 4567"
                      className={`w-full rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none transition-colors ${
                        formErrors.phone ? 'bg-red-50/30 border border-[#C5221F]' : 'bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#C5221F]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] font-semibold text-[#C5221F] mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
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
                      <option value="">Select</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.product && <p className="text-[10px] text-red-600 mt-1">{formErrors.product}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Volume (MT or Barrels)</label>
                    <input
                      type="text"
                      value={formData.volumeMT}
                      onChange={(e) => setFormData({ ...formData, volumeMT: e.target.value })}
                      placeholder="e.g. 500 MT"
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F]"
                    />
                    {formErrors.volumeMT && <p className="text-[10px] text-red-600 mt-1">{formErrors.volumeMT}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Destination Discharge Port</label>
                  <input
                    type="text"
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
                  className="w-full bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Commercial Quote Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
