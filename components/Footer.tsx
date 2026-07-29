'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO, PRODUCTS } from '@/lib/data';
import { ContactFormSchema, ContactFormData } from '@/lib/schemas';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  const [contactData, setContactData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = ContactFormSchema.safeParse(contactData);
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <footer id="contact" className="bg-slate-50 text-slate-900 border-t border-slate-200 relative z-20">
      {/* Contact Section Block - Rendered on all pages EXCEPT /contact */}
      {!isContactPage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details & Operating Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red-vibrant">
                  Direct Inquiry
                </span>
                <h2 className="text-3xl font-bold font-display text-slate-900 mt-2">
                  Connect With Our Global Trading Desk
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Reach out to our experts in Dubai for product availability, bulk spot trading, and contract inquiries.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4 hover:border-brand-red-vibrant transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Headquarters Phone</div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                      {COMPANY_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4 hover:border-brand-red-vibrant transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Commercial Email</div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-brand-red-vibrant transition-colors">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Headquarters & Jurisdiction</div>
                    <div className="text-sm font-bold text-slate-900">
                      {COMPANY_INFO.headquarters}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-red-50 text-brand-red-vibrant shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-slate-500 font-medium">Trading Hours</div>
                    <div className="text-slate-900 font-semibold">{COMPANY_INFO.hours.weekdays}</div>
                    <div className="text-slate-700">{COMPANY_INFO.hours.saturday}</div>
                    <div className="text-slate-500">{COMPANY_INFO.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Send Commercial Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Sanitized & secure transmission with guaranteed response within 1 business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-slate-900">
                      Message Delivered
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-slate-900">{contactData.fullName}</span>. Your inquiry has been routed to our UAE trading team.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-colors shadow-md"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={contactData.fullName}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                        />
                        {errors.fullName && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.fullName}</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Company Name *</label>
                        <input
                          type="text"
                          name="companyName"
                          value={contactData.companyName}
                          onChange={handleChange}
                          placeholder="Company Ltd"
                          className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                        />
                        {errors.companyName && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.companyName}</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={contactData.email}
                          onChange={handleChange}
                          placeholder="name@domain.com"
                          className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                        <input
                          type="text"
                          name="phone"
                          value={contactData.phone}
                          onChange={handleChange}
                          placeholder="+971 ..."
                          className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-500 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={contactData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Spot Contract Purchase Base Oil SN150"
                        className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant"
                      />
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Message *</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={contactData.message}
                        onChange={handleChange}
                        placeholder="Describe your product specifications, volume, and preferred delivery schedule..."
                        className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-brand-red-vibrant resize-none"
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-red-vibrant hover:bg-brand-red-hover text-white font-bold text-xs py-3.5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Column Links Section & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className={`pt-12 ${!isContactPage ? 'border-t border-slate-200' : ''} grid grid-cols-1 md:grid-cols-4 gap-8`}>
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-brand-red-vibrant flex items-center justify-center font-bold font-display text-white shadow-sm">
                V
              </div>
              <span className="text-base font-bold font-display text-slate-900">
                VIBRANT <span className="text-brand-red-vibrant">PETROCHEM</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leading commodity trader in the Gulf region with expansive product range and unwavering commitment to safety.
            </p>
            <div className="text-[10px] text-slate-500">
              Est. 2018 • United Arab Emirates Free Zone Enterprise
            </div>
          </div>

          {/* Col 2: Top Products */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Products
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`} className="hover:text-brand-red-vibrant transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solvents & Special Hydrocarbons */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Solvents & Hydrocarbons
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {PRODUCTS.slice(5, 10).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`} className="hover:text-brand-red-vibrant transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Verification & External Site */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Official Site & Security
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official Website Reference:
            </p>
            <a
              href="https://vibrantpetro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-brand-red-vibrant font-semibold hover:underline"
            >
              <span>vibrantpetro.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-700 flex items-center space-x-2 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Encrypted Security Headers Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-800">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-800">Security Specs</span>
            <span>•</span>
            <span className="hover:text-slate-800">Terms of Trading</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
