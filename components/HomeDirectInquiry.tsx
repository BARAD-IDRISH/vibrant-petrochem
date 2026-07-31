'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/lib/data';
import { Send, CheckCircle2, ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { QuoteRequestSchema } from '@/lib/schemas';
import { z } from 'zod';

export const HomeDirectInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    product: '',
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
      <div className="bg-[#F8FAFC] text-[#0F172A] p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-md">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5221F]">
            Commercial Trading Desk
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#0F172A]">
            Direct Commercial Inquiry & Quote Request
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
            Reach out to our Dubai commercial team for real-time spot pricing, Certificates of Analysis (COA), vessel chartering, custom blending, or long-term off-take agreements.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 sm:p-12 rounded-2xl text-center space-y-4 max-w-2xl mx-auto shadow-sm">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h3 className="text-2xl font-bold font-display">Inquiry Transmitted Successfully</h3>
            <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
              Thank you for contacting Vibrant Petrochem FZE. Our commercial desk has logged your request and will transmit official product specification sheets & freight quotes shortly.
            </p>
            <button
              onClick={() => {
                setSubmitSuccess(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  companyName: '',
                  product: '',
                  volumeMT: '25 MT',
                  destinationPort: '',
                  additionalNotes: '',
                });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-8 py-3 rounded-xl transition-colors shadow-sm mt-2"
            >
              Submit Another Trade Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
                />
                {formErrors.fullName && <p className="text-[10px] text-red-600 mt-1">{formErrors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Business Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. j.doe@company.com"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
                />
                {formErrors.email && <p className="text-[10px] text-red-600 mt-1">{formErrors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Global Energy Traders"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
                />
                {formErrors.companyName && <p className="text-[10px] text-red-600 mt-1">{formErrors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Telephone / WhatsApp *</label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +971 50 123 4567"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
                />
                {formErrors.phone && <p className="text-[10px] text-red-600 mt-1">{formErrors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Product Category / Item *</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
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
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Quantity / Volume *</label>
                <input
                  type="text"
                  required
                  value={formData.volumeMT}
                  onChange={(e) => setFormData({ ...formData, volumeMT: e.target.value })}
                  placeholder="e.g. 500 MT / 1,000 Barrels"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
                />
                {formErrors.volumeMT && <p className="text-[10px] text-red-600 mt-1">{formErrors.volumeMT}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Destination Port *</label>
              <input
                type="text"
                required
                value={formData.destinationPort}
                onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                placeholder="e.g. Jebel Ali / Fujairah / Rotterdam / Singapore / Mumbai Port"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
              />
              {formErrors.destinationPort && <p className="text-[10px] text-red-600 mt-1">{formErrors.destinationPort}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-1.5">Specification Notes / Commercial Message</label>
              <textarea
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Specify required ASTM parameters, target laycan dates, or packaging preferences (ISO Tank / Flexitank / Drums)..."
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#0F172A] focus:outline-none focus:border-[#C5221F] transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center space-x-2 text-[11px] text-[#475569]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Protected by ISO 9001 quality data standards & strict confidentiality</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#C5221F] hover:bg-[#A31B19] text-white text-xs font-bold px-10 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Commercial Quote Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
