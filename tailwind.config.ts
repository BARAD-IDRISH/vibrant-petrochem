import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy-deep': '#0F172A',
        'brand-navy-light': '#1E293B',
        'brand-red-vibrant': '#C5221F',
        'brand-red-hover': '#A31B19',
        'steel-blue': '#2563EB',
        'steel-blue-light': '#EFF6FF',
        'surface-light': '#FFFFFF',
        'surface-gray': '#F8FAFC',
        'surface-card': '#FFFFFF',
        'border-subtle': '#E2E8F0',
        'on-surface': '#0F172A',
        'on-surface-variant': '#475569',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-hanken)', 'sans-serif'],
      },
      boxShadow: {
        'glass-light': '0 8px 30px 0 rgba(0, 0, 0, 0.06)',
        'card-light': '0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.03)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
