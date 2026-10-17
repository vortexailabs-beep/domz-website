import React, { useState } from 'react';
import { BRAND_INFO } from '../data/jams';
import { MessageCircle, Sparkles, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  orderCount?: number;
}

export function FloatingWhatsApp({ orderCount = 0 }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hi Dominique! I would like to ask about Magic Mig Jams availability and orders.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#2C3528] px-3.5 py-2 rounded-2xl shadow-lg border border-[#E0D9CB] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Sparkles className="w-3.5 h-3.5 text-[#84A836] shrink-0" />
          <span>Chat directly with Dominique</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9C9E93] hover:text-[#2C3528] ml-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat with Dominique on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          WhatsApp Dominique
        </span>

        {/* If order basket has items */}
        {orderCount > 0 && (
          <span className="absolute -top-1.5 -left-1.5 bg-[#B8283E] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
            {orderCount}
          </span>
        )}

        {/* Fairy Sparkle animation */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F7DE7C] animate-ping" />
      </a>
    </div>
  );
}
