'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      {/* Multi-Column Links Section & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-44">
                <Image
                  src="/logo.jpg"
                  alt="Vibrant Petrochem Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
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
