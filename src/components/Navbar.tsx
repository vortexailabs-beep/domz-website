import React, { useState, useEffect } from 'react';
import { BrandFairyLogo } from './JamIllustrations';
import { BRAND_INFO } from '../data/jams';
import { MessageCircle, Menu, X, Sparkles, Heart } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Flavours', href: '#flavours' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'How to Order', href: '#order' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappDirectUrl = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hi Dominique! I would like to order some Magic Mig Jams. Could you please share current availability?'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md shadow-sm border-b border-[#E8E2D5] py-2.5'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#E8E2D5]/50 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left"
        >
          <div className="relative">
            <BrandFairyLogo className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#84A836] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-handwriting text-2xl sm:text-[1.7rem] text-[#2C3528] leading-none tracking-tight group-hover:text-[#638421] transition-colors">
              Magic Mig
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#84A836] uppercase leading-tight mt-0.5">
              JAMS · SUNNYDALE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#465342]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#1F261D] transition-colors relative py-1 cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#84A836] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
            title="Chat with Dominique on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#9EC643] text-[#1E300B] hover:bg-[#84A836] hover:text-white transition-colors"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2C3528] hover:bg-[#EFEAE1] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-base font-medium text-[#2C3528] hover:text-[#84A836] border-b border-[#EFEAE1]/70"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white shadow-sm transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Dominique ({BRAND_INFO.whatsappDisplay})</span>
              </a>
              <p className="text-center text-xs text-[#757968] flex items-center justify-center gap-1 mt-1">
                <Heart className="w-3 h-3 text-[#B8283E] fill-current" />
                <span>Sunnydale, Cape Town</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
