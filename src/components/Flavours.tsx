import React, { useState } from 'react';
import { JAM_PRODUCTS, JamFlavour, BRAND_INFO } from '../data/jams';
import {
  StrawberryJarSVG,
  BlueberryJarSVG,
  ApricotJarSVG,
  OrangeMarmaladeJarSVG,
} from './JamIllustrations';
import { Sparkles, MessageCircle, Heart, Plus, Check, Utensils, Info } from 'lucide-react';

interface FlavoursProps {
  onAddJarToOrder?: (flavourId: string) => void;
}

export function Flavours({ onAddJarToOrder }: FlavoursProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  const renderJarIllustration = (id: string) => {
    switch (id) {
      case 'strawberry-sunrise':
        return <StrawberryJarSVG className="w-48 h-56 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />;
      case 'blueberry-moonlight':
        return <BlueberryJarSVG className="w-48 h-56 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />;
      case 'apricot-meadow':
        return <ApricotJarSVG className="w-48 h-56 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />;
      case 'orange-marmalade':
        return <OrangeMarmaladeJarSVG className="w-48 h-56 mx-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />;
      default:
        return null;
    }
  };

  const handleQuickAdd = (jam: JamFlavour) => {
    if (onAddJarToOrder) {
      onAddJarToOrder(jam.id);
      setAddedAnimation(jam.id);
      setTimeout(() => setAddedAnimation(null), 1200);
    }
  };

  const getWhatsappUrlForJam = (jam: JamFlavour) => {
    const text = `Hi Dominique! I'd like to order 1x jar of ${jam.name} (R${jam.price}). Could you let me know about pickup in Sunnydale or delivery?`;
    return `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  const filteredJams =
    activeTab === 'all'
      ? JAM_PRODUCTS
      : JAM_PRODUCTS.filter((jam) => jam.id === activeTab);

  return (
    <section id="flavours" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2D7] text-[#3B5216] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#84A836]" />
            <span>Four Handcrafted Creations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232B20] tracking-tight">
            Our Signature Preserves
          </h2>
          <p className="text-base sm:text-lg text-[#556350]">
            Each small batch is simmered with over 70% whole Cape fruit, natural citrus pectin, and sweetened purely with 100% birchwood xylitol.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#84A836] text-white shadow-xs'
                : 'bg-white text-[#4A5745] hover:bg-[#EFEAE1] border border-[#E0D9CB]'
            }`}
          >
            All 4 Flavours
          </button>
          {JAM_PRODUCTS.map((jam) => (
            <button
              key={jam.id}
              onClick={() => setActiveTab(jam.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === jam.id
                  ? 'bg-[#84A836] text-white shadow-xs'
                  : 'bg-white text-[#4A5745] hover:bg-[#EFEAE1] border border-[#E0D9CB]'
              }`}
            >
              {jam.name.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredJams.map((jam) => {
            const isAdded = addedAnimation === jam.id;
            return (
              <div
                key={jam.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-[#E8E2D5] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{ backgroundColor: jam.color.badgeBg, color: jam.color.badgeText }}
                      >
                        {jam.subtitle}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#232B20] mt-1.5 leading-snug">
                        {jam.name}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-display text-2xl font-bold text-[#232B20]">
                        R{jam.price}
                      </div>
                      <div className="text-[11px] text-[#757968] font-medium">{jam.size}</div>
                    </div>
                  </div>

                  {/* Artwork Showcase Area */}
                  <div className="py-4 my-2 flex items-center justify-center bg-[#FAF8F5] rounded-2xl border border-[#EFEAE1]">
                    {renderJarIllustration(jam.id)}
                  </div>

                  {/* Description & Tagline */}
                  <div className="space-y-3 mt-4">
                    <p className="font-handwriting text-xl text-[#719225] italic leading-tight">
                      &ldquo;{jam.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-[#4E5B4B] leading-relaxed">
                      {jam.description}
                    </p>
                  </div>

                  {/* Taste Profile Ratings */}
                  <div className="mt-5 p-3.5 rounded-xl bg-[#F7F5EF] border border-[#EAE3D4] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#3C4738]">Natural Sweetness:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div
                            key={lvl}
                            className={`w-4 h-2 rounded-xs ${
                              lvl <= jam.tasteProfile.sweetness
                                ? 'bg-[#84A836]'
                                : 'bg-[#DDD5C5]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#3C4738]">Fruit Tartness:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div
                            key={lvl}
                            className={`w-4 h-2 rounded-xs ${
                              lvl <= jam.tasteProfile.tartness
                                ? 'bg-[#BF5E12]'
                                : 'bg-[#DDD5C5]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="pt-1 text-[#667261]">
                      <strong className="text-[#3C4738]">Texture:</strong> {jam.tasteProfile.texture}
                    </div>
                  </div>

                  {/* Key Ingredients */}
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B6755] mb-1.5 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#84A836]" />
                      <span>Key Ingredients:</span>
                    </h4>
                    <p className="text-xs text-[#525E4F] leading-relaxed">
                      {jam.keyIngredients.join(' · ')}
                    </p>
                  </div>

                  {/* Best Paired With */}
                  <div className="mt-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5B6755] mb-1.5 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-[#B85800]" />
                      <span>Delicious Pairings:</span>
                    </h4>
                    <ul className="text-xs text-[#525E4F] space-y-1">
                      {jam.bestPairedWith.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#84A836]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions Bottom Bar */}
                <div className="mt-6 pt-5 border-t border-[#E8E2D5] flex items-center gap-3">
                  <button
                    onClick={() => handleQuickAdd(jam)}
                    className={`flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#4B6700] text-white'
                        : 'bg-[#9EC643] hover:bg-[#84A836] text-[#1E300B] hover:text-white shadow-xs'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added to Order!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Order Basket</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsappUrlForJam(jam)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-[#D5CDC0] text-[#344031] hover:text-[#25D366] hover:border-[#25D366] transition-colors flex items-center justify-center"
                    title={`Order ${jam.name} directly on WhatsApp`}
                    aria-label={`Order ${jam.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Tasting bundle callout */}
        <div className="mt-12 rounded-2xl bg-[#EAF2D7] border border-[#C6DE8C] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#3D5417]">
              <Sparkles className="w-4 h-4 text-[#84A836]" />
              <span>The Complete Storybook Tasting Set</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#232B20]">
              Can’t decide on just one? Take all 4 flavours for R280
            </h3>
            <p className="text-sm text-[#4E5B4B]">
              Experience Strawberry Sunrise, Blueberry Moonlight, Apricot Meadow, and Orange Marmalade together. Wrapped with twine and a handwritten note.
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hi Dominique! I would like to order the complete 4-jar Magic Mig Tasting Set for R280. How can we arrange this?'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full font-bold text-sm text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white shadow-sm transition-all whitespace-nowrap"
          >
            Order 4-Jar Set on WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
