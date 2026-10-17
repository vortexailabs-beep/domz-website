import React from 'react';
import { BrandFairyLogo } from './JamIllustrations';
import { BRAND_INFO } from '../data/jams';
import { Heart, Sparkles, Sun, Home, CheckCircle2 } from 'lucide-react';

export function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Delicate background ambiance */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#EBF3DA]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FCECEE]/40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEAE1] text-[#556350] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#B8283E] fill-current" />
            <span>A Loving Mother’s Tribute</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232B20] tracking-tight">
            The Story Behind the Magic
          </h2>
          <p className="font-handwriting text-2xl sm:text-3xl text-[#719225]">
            &ldquo;In honour of Migale — our forever Magic Mig.&rdquo;
          </p>
        </div>

        {/* Story Card */}
        <div className="relative rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-10 md:p-14 shadow-sm">
          
          {/* Subtle Fairy Seal Top Right */}
          <div className="hidden sm:block absolute top-6 right-8 opacity-20 hover:opacity-40 transition-opacity">
            <BrandFairyLogo className="w-24 h-24" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Inspiring quote & vignette */}
            <div className="md:col-span-5 flex flex-col justify-between h-full bg-[#F7F4EE] rounded-2xl p-6 sm:p-8 border border-[#E5DEC9] space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#9EC643]/30 flex items-center justify-center text-[#4B6700]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <blockquote className="font-display italic text-lg sm:text-xl text-[#2C3528] leading-relaxed">
                  &ldquo;Migale had an uncanny way of brightening every room he stepped into. He showed us that love isn’t grand speeches — it is found in small, thoughtful moments that bring a smile to someone’s face.&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#DFD6C2] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#84A836]/20 flex items-center justify-center font-handwriting text-2xl text-[#4A6417]">
                  D
                </div>
                <div>
                  <p className="font-bold text-sm text-[#2C3528]">Dominique</p>
                  <p className="text-xs text-[#757968]">Mother & Maker of Magic Mig Jams · Sunnydale</p>
                </div>
              </div>
            </div>

            {/* Right: Narrative Details */}
            <div className="md:col-span-7 space-y-5 text-[#374235] text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#1F261D] font-semibold">Magic Mig Jams</strong> was born from a mother’s deepest love. 
                Migale, fondly called <span className="font-semibold text-[#638421]">&ldquo;Magic Mig&rdquo;</span> by his family and close circle of friends, was a beacon of pure kindness, radiant laughter, and an infectious wonder for the world.
              </p>
              
              <p>
                As a newly founded, small-batch artisanal start-up, every single batch is gently prepared right here in our home kitchen in 
                <span className="font-semibold text-[#1F261D]"> Sunnydale</span>, nestled in Cape Town’s scenic Southern Peninsula. We don’t run a factory and never mass-produce; we make our preserves one bubbling pot at a time.
              </p>

              <p>
                Because Migale’s memory is rooted in celebration, sweetness, and light, we wanted our preserves to be something everyone could enjoy freely — including diabetics, health-conscious families, and those watching their sugar intake. That is why we chose to sweeten naturally with 
                <strong className="text-[#1F261D] font-semibold"> 100% birchwood xylitol</strong> instead of cane sugar.
              </p>

              {/* Three sincere commitments */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4E5B4B]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84A836] mt-0.5 shrink-0" />
                  <span>Small-batch authenticity in every single jar</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84A836] mt-0.5 shrink-0" />
                  <span>Diabetic-friendly birchwood xylitol</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84A836] mt-0.5 shrink-0" />
                  <span>Local Cape Town fruit hand-picked in season</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84A836] mt-0.5 shrink-0" />
                  <span>Zero artificial colours, flavours, or cane sugar</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Banner inside Card */}
          <div className="mt-10 pt-8 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Home className="w-5 h-5 text-[#84A836]" />
              <span className="text-sm font-medium text-[#556350]">
                Handmade with care in Sunnydale, Cape Town (Southern Peninsula)
              </span>
            </div>
            <div className="font-handwriting text-2xl text-[#84A836]">
              &ldquo;Made with Love, One Jar at a Time&rdquo;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
