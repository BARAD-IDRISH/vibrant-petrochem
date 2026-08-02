'use client';

import React, { useState } from 'react';
import { MapPin, ExternalLink, Globe2 } from 'lucide-react';

export default function LocationMapCard() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200 space-y-3">
      <div className="flex items-center justify-between px-1 pt-1">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-900">
          <MapPin className="w-4 h-4 text-brand-red-vibrant shrink-0" />
          <span>Headquarters Location (UAE)</span>
        </div>
        <a
          href="https://maps.google.com/?q=25.2048,55.2708"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-brand-red-vibrant bg-red-50 hover:bg-red-100 px-3 py-1 rounded-full transition-colors flex items-center space-x-1"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 ml-0.5 inline" />
        </a>
      </div>

      <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-900 relative group">
        {!iframeError ? (
          <iframe
            title="Vibrant Petrochem FZE Location Map"
            src="https://maps.google.com/maps?q=25.2048,55.2708+(Vibrant+Petrochem+FZE)&hl=en&z=11&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            onError={() => setIframeError(true)}
            className="w-full h-full grayscale contrast-125 opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
          />
        ) : null}

        {/* Fallback Vector Map Card (Shows automatically if iframe is blocked by browser) */}
        {iframeError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe2 className="w-5 h-5 text-brand-red-vibrant animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-slate-200">
                  Middle East Hub
                </span>
              </div>
              <span className="text-[10px] bg-brand-red-vibrant/20 text-brand-red-vibrant border border-brand-red-vibrant/30 px-2 py-0.5 rounded-full font-bold">
                UAE Free Zone
              </span>
            </div>

            <div className="my-auto space-y-2 text-center">
              <div className="relative inline-block">
                <div className="w-4 h-4 bg-brand-red-vibrant rounded-full animate-ping absolute inset-0 opacity-75" />
                <MapPin className="w-8 h-8 text-brand-red-vibrant relative z-10 mx-auto" />
              </div>
              <h4 className="font-display font-bold text-sm text-white">
                Vibrant Petrochem FZE
              </h4>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Commercial Headquarters & Regional Energy Trading Operations
              </p>
            </div>

            <div className="text-center pt-2">
              <a
                href="https://maps.google.com/?q=25.2048,55.2708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold bg-brand-red-vibrant hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-all shadow-md"
              >
                <span>Launch Interactive Satellite Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
