'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuoteModal } from '@/components/QuoteModal';

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string>('');

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedQuoteProduct(productName);
    } else {
      setSelectedQuoteProduct('');
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedQuoteProduct('');
  };

  return (
    <>
      {/* Global Glassmorphic Header Navbar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Content */}
      {children}

      {/* Global Footer */}
      <Footer />

      {/* Global RFQ Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={selectedQuoteProduct}
      />
    </>
  );
};
