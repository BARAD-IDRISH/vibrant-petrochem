import React from 'react';

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Top Banner Skeleton */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="h-3 w-28 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-36 bg-slate-200 rounded animate-pulse" />
          <div className="h-8 w-2/3 max-w-xl bg-slate-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Centered Loading Spinner */}
      <div className="flex flex-col items-center justify-center py-8 space-y-3">
        <div className="relative w-12 h-12">
          <div className="w-12 h-12 rounded-full border-4 border-slate-200" />
          <div className="w-12 h-12 rounded-full border-4 border-[#C5221F] border-t-transparent animate-spin absolute top-0 left-0" />
        </div>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
          Loading Petrochemical Catalog...
        </span>
      </div>

      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-pulse">
              <div className="h-44 bg-slate-100 rounded-xl" />
              <div className="h-5 w-3/4 bg-slate-200 rounded" />
              <div className="h-3 w-full bg-slate-100 rounded" />
              <div className="h-3 w-2/3 bg-slate-100 rounded" />
              <div className="h-10 bg-slate-100 rounded-xl pt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
