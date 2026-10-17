/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Flavours } from './components/Flavours';
import { Ingredients } from './components/Ingredients';
import { OrderBuilder } from './components/OrderBuilder';
import { HowToOrderAndFaq } from './components/HowToOrderAndFaq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { JAM_PRODUCTS } from './data/jams';

export default function App() {
  // Quantities for each jam flavour
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    JAM_PRODUCTS.forEach((j) => {
      initial[j.id] = 0;
    });
    return initial;
  });

  const handleUpdateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAddJarToOrder = (flavourId: string) => {
    handleUpdateQuantity(flavourId, 1);
    // Smoothly scroll down to the order builder
    const orderSection = document.querySelector('#order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearOrder = () => {
    const reset: Record<string, number> = {};
    JAM_PRODUCTS.forEach((j) => {
      reset[j.id] = 0;
    });
    setQuantities(reset);
  };

  const totalOrderCount = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C3528] selection:bg-[#D4E79F] selection:text-[#1E300B] font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Heartfelt Story Section */}
        <OurStory />

        {/* 4 Signature Flavours Showcase */}
        <Flavours onAddJarToOrder={handleAddJarToOrder} />

        {/* Ingredients & Pet Safety */}
        <Ingredients />

        {/* Interactive Order Builder */}
        <OrderBuilder
          quantities={quantities}
          onUpdateQuantity={handleUpdateQuantity}
          onClearOrder={handleClearOrder}
        />

        {/* How to Order & FAQ */}
        <HowToOrderAndFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp orderCount={totalOrderCount} />
    </div>
  );
}
