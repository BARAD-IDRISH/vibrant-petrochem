'use client';

import React, { createContext, useContext, useState } from 'react';
import { QuoteModal } from '@/components/QuoteModal';

interface QuoteModalContextType {
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('');
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSelectedProduct('');
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        initialProduct={selectedProduct}
      />
    </QuoteModalContext.Provider>
  );
};
