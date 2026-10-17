import React from 'react';
import { ShieldCheck, Heart, Sparkles, AlertTriangle, Apple, Leaf, Droplets, CheckCircle2 } from 'lucide-react';

export function Ingredients() {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2D7] text-[#3B5216] text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-[#84A836]" />
            <span>Pure Fruit & Wholesome Sweetness</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232B20] tracking-tight">
            Thoughtfully Crafted Ingredients
          </h2>
          <p className="text-base sm:text-lg text-[#556350]">
            We believe honest jam should taste like the orchard it came from, without cups of white sugar dulling the fruit’s natural glory.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Pillar 1: Birchwood Xylitol */}
          <div className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-7 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2D7] text-[#4E6B18] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#232B20]">
                100% Birchwood Xylitol
              </h3>
              <p className="text-sm text-[#4E5B4B] leading-relaxed">
                A naturally occurring, plant-based sweetener that tastes just like traditional sugar without the sugar rush. It has a near-zero glycemic impact (GI 7 vs sugar’s 68), making it ideal for diabetics and keto lovers.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EBE0] text-xs text-[#719225] font-semibold">
              40% fewer calories · Dental-friendly
            </div>
          </div>

          {/* Pillar 2: Over 70% Real Cape Fruit */}
          <div className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-7 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F2] text-[#B8283E] flex items-center justify-center">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#232B20]">
                Real, Whole Local Fruit
              </h3>
              <p className="text-sm text-[#4E5B4B] leading-relaxed">
                Commercial jams often contain barely 35% fruit padded with sugar syrup. Magic Mig Jams contain over 70% real, hand-selected fruit for vibrant colour, intense berry flavour, and soft, luxurious fruit pieces.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EBE0] text-xs text-[#B8283E] font-semibold">
              Hand-sliced & gently simmered
            </div>
          </div>

          {/* Pillar 3: Clean & Honest */}
          <div className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-7 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF6ED] text-[#C97322] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#232B20]">
                Zero Artificial Additives
              </h3>
              <p className="text-sm text-[#4E5B4B] leading-relaxed">
                No high-fructose corn syrup, no artificial red dyes, no synthetic preservatives, and no cane sugar. Just fruit, natural plant sweetener, fresh lemon juice, and pure citrus pectin.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EBE0] text-xs text-[#C97322] font-semibold">
              Naturally gluten-free & vegan
            </div>
          </div>

        </div>

        {/* Nutritional Comparison Card */}
        <div className="rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-8 shadow-xs mb-12">
          <h3 className="font-display text-2xl font-bold text-[#232B20] text-center mb-6">
            The Magic Mig Difference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#3E4A3B]">
              <thead>
                <tr className="border-b border-[#E8E2D5] text-xs uppercase tracking-wider text-[#757968]">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 font-bold text-[#4B6700] bg-[#FAFDF3] rounded-t-xl">Magic Mig Jams</th>
                  <th className="py-3 px-4 text-[#8C9184]">Standard Commercial Jam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE1]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#232B20]">Sweetener Source</td>
                  <td className="py-3.5 px-4 bg-[#FAFDF3] font-semibold text-[#3B5216]">100% Birchwood Xylitol (Natural)</td>
                  <td className="py-3.5 px-4 text-[#757968]">Refined White Cane Sugar or Glucose Syrup</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#232B20]">Fruit Content</td>
                  <td className="py-3.5 px-4 bg-[#FAFDF3] font-semibold text-[#3B5216]">&gt; 70% Real Handpicked Fruit</td>
                  <td className="py-3.5 px-4 text-[#757968]">Usually 35% – 45% fruit mash</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#232B20]">Glycemic Index (GI)</td>
                  <td className="py-3.5 px-4 bg-[#FAFDF3] font-semibold text-[#3B5216]">Very Low (GI ~ 7) — No sugar spikes</td>
                  <td className="py-3.5 px-4 text-[#757968]">High (GI ~ 65 – 70)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#232B20]">Diabetic & Keto Friendly</td>
                  <td className="py-3.5 px-4 bg-[#FAFDF3] font-semibold text-[#3B5216]">Yes — specifically made for healthy living</td>
                  <td className="py-3.5 px-4 text-[#757968]">No — high in refined carbohydrates</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-[#232B20]">Batch Scale</td>
                  <td className="py-3.5 px-4 bg-[#FAFDF3] font-semibold text-[#3B5216]">Artisanal small-pot home kitchen batches</td>
                  <td className="py-3.5 px-4 text-[#757968]">Industrial automated factory vats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CRITICAL PET SAFETY NOTICE */}
        <div className="rounded-3xl bg-[#FFF6F0] border-2 border-[#F5C2A5] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#E85C27]/15 text-[#C94715] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-md bg-[#FCE8DC] text-[#B83E10] font-bold text-xs uppercase tracking-wider">
                Important Household Notice · Canine Health
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#8A2B06]">
                Pet Safety Notice: Xylitol is Toxic to Dogs
              </h3>
              <p className="text-sm sm:text-base text-[#6E2A0E] leading-relaxed">
                While birchwood xylitol is an exceptionally healthy, natural, and doctor-recommended sweetener for human consumption (especially for diabetics), 
                <strong className="font-bold underline decoration-wavy"> it is strictly toxic and dangerous to dogs</strong> even in very small quantities.
              </p>
              <p className="text-xs sm:text-sm text-[#7D3819] pt-1">
                Please always store your jars of Magic Mig Jams safely inside closed kitchen cupboards or your refrigerator, and ensure curious paws cannot reach dropped spoons or open jars. We love our pets dearly, and your dog’s safety comes first!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
