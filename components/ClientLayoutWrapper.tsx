'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuoteModalProvider } from '@/lib/QuoteModalContext';

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QuoteModalProvider>
      {/* Global Header Navbar */}
      <Navbar />

      {/* Main Page Content */}
      {children}

      {/* Global Footer */}
      <Footer />
    </QuoteModalProvider>
  );
};
