import React from 'react';
import { BrandFairyLogo } from './JamIllustrations';
import { BRAND_INFO } from '../data/jams';
import { Heart, MessageCircle, MapPin, Sparkles, AlertTriangle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hi Dominique! I would like to order some Magic Mig Jams.'
  )}`;

  return (
    <footer className="bg-[#242C21] text-[#E5E0D5] pt-16 pb-12 relative overflow-hidden border-t border-[#343F30]">
      {/* Delicate background decorative accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#3B4834]/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#384434]">
          
          {/* Col 1: Brand & Tribute */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandFairyLogo className="w-10 h-10" />
              <div>
                <span className="font-handwriting text-3xl text-white block leading-none">
                  Magic Mig Jams
                </span>
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#9EC643] uppercase block mt-1">
                  SUNNYDALE · CAPE TOWN
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8C0B2] leading-relaxed max-w-sm">
              A loving tribute to Dominique’s late son, Migale — fondly known as &ldquo;Magic Mig&rdquo;. Small-batch artisanal preserves naturally sweetened with birchwood xylitol and made with genuine heart.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#9EC643]">
              <Sparkles className="w-4 h-4" />
              <span className="font-handwriting text-xl text-[#D8EAA5]">&ldquo;A Little Jar of Magic&rdquo;</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8B3A2]">
              <li>
                <button
                  onClick={() => handleNavClick('#story')}
                  className="hover:text-[#9EC643] transition-colors cursor-pointer"
                >
                  Our Heartfelt Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#flavours')}
                  className="hover:text-[#9EC643] transition-colors cursor-pointer"
                >
                  Four Signature Flavours
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#ingredients')}
                  className="hover:text-[#9EC643] transition-colors cursor-pointer"
                >
                  Ingredients & Birchwood Xylitol
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#order')}
                  className="hover:text-[#9EC643] transition-colors cursor-pointer"
                >
                  Interactive Order Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-[#9EC643] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Maker Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Order & Inquiries
            </h4>
            <p className="text-xs text-[#A8B3A2] leading-relaxed">
              Contact Dominique directly for small-batch availability, custom gift sets, or local Sunnydale pickup.
            </p>

            <div className="pt-1 space-y-2 text-xs sm:text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#9EC643] transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#9EC643]" />
                <span>WhatsApp: {BRAND_INFO.whatsappDisplay}</span>
              </a>

              <div className="flex items-start gap-2 text-[#A8B3A2]">
                <MapPin className="w-4 h-4 text-[#9EC643] shrink-0 mt-0.5" />
                <span>Sunnydale, Cape Town (Southern Peninsula), South Africa</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Message Dominique</span>
              </a>
            </div>
          </div>

        </div>

        {/* Pet Safety Small Notice */}
        <div className="my-6 p-3.5 rounded-xl bg-[#2D3629] border border-[#3E4C38] flex items-center gap-3 text-xs text-[#E1D8C5]">
          <AlertTriangle className="w-4 h-4 text-[#E58237] shrink-0" />
          <span>
            <strong>Pet Safety Reminder:</strong> While birchwood xylitol is wonderfully healthy for people and diabetics, it is strictly toxic to dogs. Please store your jars safely away from pets!
          </span>
        </div>

        {/* Bottom Credits & Heart */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9583] text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E04D5F] fill-current" />
            <span>in Sunnydale in loving memory of Migale (&ldquo;Magic Mig&rdquo;)</span>
          </div>
          <div>
            &copy; {currentYear} Magic Mig Jams. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
