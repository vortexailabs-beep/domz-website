import React from 'react';
import { HeroJamDisplaySVG, FairytaleGardenSilhouette } from './JamIllustrations';
import { BRAND_INFO } from '../data/jams';
import { Sparkles, MessageCircle, ArrowDown, Heart, ShieldCheck, MapPin } from 'lucide-react';

export function Hero() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hi Dominique! I would love to find out more and order some Magic Mig Jams.'
  )}`;

  const scrollToFlavours = () => {
    document.querySelector('#flavours')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5]">
      {/* Whimsical Fairytale Silhouette Header Backdrop */}
      <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none opacity-40">
        <FairytaleGardenSilhouette className="w-full h-full object-cover" />
      </div>

      {/* Soft Glow Elements */}
      <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-[#EAF2D7]/60 blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 rounded-full bg-[#FCECEE]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill-free artisanal badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2D7] text-[#364A12] border border-[#C6DE8C] text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#84A836] animate-pulse" />
              <span>Small-Batch Artisanal Preserves · Sunnydale, Cape Town</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#232B20] tracking-tight leading-[1.12]">
                A Little Jar of{' '}
                <span className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-[#719225] font-normal inline-block hover:scale-105 transition-transform origin-left">
                  Magic.
                </span>
              </h1>
              <p className="font-display italic text-lg sm:text-xl text-[#5F6D59]">
                Made with Love, One Jar at a Time.
              </p>
            </div>

            {/* Sincere Narrative Copy */}
            <p className="text-base sm:text-lg text-[#3E4A3B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Handcrafted in our Sunnydale kitchen nestled in Cape Town’s Southern Peninsula. 
              <strong className="font-semibold text-[#232B20]"> Magic Mig Jams</strong> is a loving tribute to Dominique’s late son, Migale — affectionately known as <em>&ldquo;Magic Mig&rdquo;</em>. 
              Every jar is gently simmered with real fruit, zero cane sugar, and 100% natural birchwood xylitol for a diabetic-friendly sweetness that lets the fruit shine.
            </p>

            {/* Core Badges Row */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-[#4E5B4B]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#E8E2D5] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#84A836]" />
                <span className="font-medium">Diabetic & Keto-Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#E8E2D5] shadow-2xs">
                <Heart className="w-4 h-4 text-[#B8283E]" />
                <span className="font-medium">Naturally Sweetened (Xylitol)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#E8E2D5] shadow-2xs">
                <MapPin className="w-4 h-4 text-[#C97322]" />
                <span className="font-medium">Cape Town Southern Peninsula</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp ({BRAND_INFO.whatsappDisplay})</span>
              </a>

              <button
                onClick={scrollToFlavours}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base text-[#2C3528] bg-white/90 hover:bg-[#FAF8F5] border border-[#D5CDC0] hover:border-[#84A836] shadow-2xs transition-all duration-200 cursor-pointer"
              >
                <span>View Our 4 Flavours</span>
                <ArrowDown className="w-4 h-4 text-[#84A836]" />
              </button>
            </div>

            {/* Price mention & tribute link */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs text-[#757968]">
              <span className="font-medium text-[#2C3528]">Artisanal 290g glass jars · R75 each</span>
              <span className="hidden sm:inline text-[#D5CDC0]">|</span>
              <button
                onClick={scrollToStory}
                className="hover:text-[#84A836] underline underline-offset-2 transition-colors cursor-pointer"
              >
                Read Migale’s heartfelt tribute story &rarr;
              </button>
            </div>

          </div>

          {/* Right Column: Handcrafted SVG Jars Artwork */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md mx-auto p-4 sm:p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#E8E2D5] shadow-sm group hover:shadow-md transition-shadow">
              
              {/* Floating fairy label */}
              <div className="absolute -top-3 -right-3 z-10 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#84A836] text-[#4A6417] text-xs font-semibold shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#84A836]" />
                <span className="font-handwriting text-base leading-none">Freshly Made</span>
              </div>

              {/* Bespoke Jar Showcase SVG */}
              <HeroJamDisplaySVG className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.01]" />

              <div className="mt-3 text-center">
                <p className="font-handwriting text-xl text-[#2C3528]">
                  Strawberry · Blueberry · Apricot · Orange Marmalade
                </p>
                <p className="text-[11px] uppercase tracking-widest text-[#84A836] font-bold mt-0.5">
                  Handcrafted · Naturally Delicious · Diabetic-Friendly
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
