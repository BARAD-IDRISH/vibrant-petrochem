import React from 'react';

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 flex flex-col items-center justify-center space-y-6">
      {/* Dual Ring Animated Spinner */}
      <div className="relative w-14 h-14">
        <div className="w-14 h-14 rounded-full border-4 border-slate-200" />
        <div className="w-14 h-14 rounded-full border-4 border-[#C5221F] border-t-transparent animate-spin absolute top-0 left-0" />
      </div>

      <div className="text-center space-y-1">
        <div className="text-sm font-bold font-display text-[#0F172A] tracking-wider uppercase">
          Vibrant Petrochem FZE
        </div>
        <p className="text-xs text-slate-500 font-medium tracking-wide animate-pulse">
          Loading Page Content...
        </p>
      </div>
    </div>
  );
}
