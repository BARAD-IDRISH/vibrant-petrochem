'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '@/lib/data';
import { QuoteRequestSchema, QuoteRequestData } from '@/lib/schemas';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState<QuoteRequestData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    product: initialProduct || PRODUCTS[0].name,
    volumeMT: '500 MT',
    destinationPort: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = QuoteRequestSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          formattedErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('/api/send-email', {
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
    } catch (err) {
      console.error('Quote modal dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 p-6 md:p-8 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 text-xl focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900">
              Quote Request Transmitted
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our commercial trading desk
              will analyze your RFQ for <span className="text-brand-red-vibrant font-semibold">{formData.product}</span> and send a formal proforma quote within 24 hours.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Reference ID: RFQ-VP-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <button
              onClick={handleReset}
              className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-8 py-3 rounded-xl transition-colors shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red-vibrant">
                  Formal RFQ
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  Secure 256-Bit Encrypted
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Request Product Quote
              </h3>
              <p className="text-xs text-slate-500">
                Provide specifications to receive tailor-made pricing and laycan terms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Product Selection */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-slate-700">Product Line *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant font-medium"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </span>
                )}
              </div>

              {/* Company Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="e.g. Gulf Energy Corp"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.companyName && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.companyName}</span>
                  </span>
                )}
              </div>

              {/* Business Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </span>
                )}
              </div>

              {/* Volume MT */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Volume (MT or Barrels) *</label>
                <input
                  type="text"
                  name="volumeMT"
                  value={formData.volumeMT}
                  onChange={handleChange}
                  placeholder="e.g. 1,000 MT"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.volumeMT && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.volumeMT}</span>
                  </span>
                )}
              </div>

              {/* Destination Port */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Destination Port / Country *</label>
                <input
                  type="text"
                  name="destinationPort"
                  value={formData.destinationPort}
                  onChange={handleChange}
                  placeholder="e.g. Jebel Ali / Singapore"
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                />
                {errors.destinationPort && (
                  <span className="text-[10px] text-red-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.destinationPort}</span>
                  </span>
                )}
              </div>

              {/* Additional Notes */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-slate-700">Additional Specs / Notes</label>
                <textarea
                  name="additionalNotes"
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder="Specify viscosity requirements, packing terms (bulk/drum/flexitank)..."
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-bold text-xs py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sanitizing & Transmitting RFQ...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Official RFQ Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
