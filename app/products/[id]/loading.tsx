import React from 'react';

export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Top Breadcrumb Header Skeleton */}
      <div className="bg-white border-b border-slate-200 py-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-64 bg-slate-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Centered Spinner & Product Details Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col items-center justify-center py-6 space-y-3">
          <div className="relative w-12 h-12">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200" />
            <div className="w-12 h-12 rounded-full border-4 border-[#C5221F] border-t-transparent animate-spin absolute top-0 left-0" />
          </div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
            Loading Product Specification Sheet...
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-pulse">
            <div className="h-[360px] bg-slate-100 rounded-xl" />
            <div className="h-6 w-1/2 bg-slate-200 rounded" />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-pulse">
              <div className="h-8 w-3/4 bg-slate-200 rounded" />
              <div className="h-4 w-full bg-slate-100 rounded" />
              <div className="h-4 w-5/6 bg-slate-100 rounded" />
              <div className="h-12 bg-slate-200 rounded-xl mt-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
