import React from 'react';

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="h-3 w-28 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
          <div className="h-8 w-2/3 max-w-lg bg-slate-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200" />
          <div className="w-12 h-12 rounded-full border-4 border-[#C5221F] border-t-transparent animate-spin absolute top-0 left-0" />
        </div>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
          Loading Corporate Overview...
        </span>
      </div>
    </div>
  );
}
