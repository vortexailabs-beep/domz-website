import React, { useState } from 'react';
import { BRAND_INFO } from '../data/jams';
import {
  MessageCircle,
  Sparkles,
  ChevronDown,
  ShoppingBag,
  CreditCard,
  MapPin,
  HelpCircle,
  PhoneCall,
  Clock,
  Heart,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'Where can I collect my order in Sunnydale?',
    answer:
      'Collection is arranged directly from our Sunnydale home kitchen in the Southern Peninsula (close to Noordhoek, Kommetjie, and Fish Hoek). Once Dominique confirms your order, she will send the collection address and agree on a convenient time with you.',
  },
  {
    question: 'Do you deliver across Cape Town?',
    answer:
      'Yes! For local Southern Peninsula orders (Noordhoek, Kommetjie, Fish Hoek, Simon’s Town, Kalk Bay, Muizenberg) and wider Cape Town, we can arrange local drop-off or courier delivery for an additional courier fee. Chat with Dominique on WhatsApp to calculate the best option.',
  },
  {
    question: 'Why choose 100% Birchwood Xylitol over regular cane sugar?',
    answer:
      'Traditional jams are frequently over 50% cane sugar, which spikes blood glucose levels and masks the true taste of the fruit. Birchwood xylitol is a natural plant-based sweetener with 40% fewer calories, zero sugar spikes (Glycemic Index of 7), and dental health benefits. It enables diabetics and keto dieters to enjoy real fruit jam without compromise.',
  },
  {
    question: 'How should I store my Magic Mig Jam, and what is its shelf life?',
    answer:
      'Unopened jars can be stored in a cool, dark pantry for up to 6 months. Once opened, because we do not use artificial chemical preservatives, keep your jar in the refrigerator and enjoy within 4 to 6 weeks. Always use a clean, dry spoon to preserve fresh flavours.',
  },
  {
    question: 'Can you prepare custom gift hampers, wedding favours, or corporate gifts?',
    answer:
      'Absolutely! We love preparing custom storybook gift boxes tied with rustic twine, botanical sprigs, and personalized tribute cards. Message Dominique on WhatsApp with your event or gifting ideas.',
  },
  {
    question: 'Can children and diabetics safely enjoy Magic Mig Jams?',
    answer:
      'Yes! Our preserves are naturally formulated to be gentle on blood glucose, making them wonderful for diabetics, keto lifestyles, and children. (A friendly reminder: Xylitol is healthy for humans, but must never be given to dogs).',
  },
];

export function HowToOrderAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const steps = [
    {
      num: '01',
      title: 'Pick Your Flavours',
      desc: 'Choose from Strawberry Sunrise, Blueberry Moonlight, Apricot Meadow, or Orange Marmalade.',
      icon: ShoppingBag,
    },
    {
      num: '02',
      title: 'Chat on WhatsApp',
      desc: 'Tap through to chat directly with Dominique on 065 902 3126 with your selection.',
      icon: MessageCircle,
    },
    {
      num: '03',
      title: 'Easy EFT Payment',
      desc: 'Dominique will confirm batch readiness and share instant banking details for simple payment.',
      icon: CreditCard,
    },
    {
      num: '04',
      title: 'Collect or Delivered',
      desc: 'Collect from Sunnydale (free) or arrange courier delivery across Cape Town to your doorstep.',
      icon: MapPin,
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Steps Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAF2D7] text-[#3B5216] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#84A836]" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232B20] tracking-tight">
            How to Order from Dominique
          </h2>
          <p className="text-base text-[#556350]">
            As a boutique artisanal kitchen, we love personal contact with each customer. No complex carts or account logins required.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-[#E8E2D5] p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold text-[#84A836]">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#2C3528]">
                      <Icon className="w-5 h-5 text-[#84A836]" />
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#232B20] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#525E4F] leading-relaxed">{s.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0EBE0] text-[11px] text-[#757968]">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Callout Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FAF6EE] via-[#F4EFE6] to-[#FAF6EE] border border-[#E0D9CB] p-8 sm:p-10 mb-20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#719225]">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Maker Communication</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#232B20]">
              Ready to chat or ask a question?
            </h3>
            <p className="text-sm text-[#4E5B4B]">
              Dominique is always happy to answer questions about flavours, ingredients, dietary needs, or arrange custom gift jars.
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hi Dominique! I have a question about Magic Mig Jams.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-[#1E300B] bg-[#9EC643] hover:bg-[#84A836] hover:text-white shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp ({BRAND_INFO.whatsappDisplay})</span>
          </a>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEAE1] text-[#556350] text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#84A836]" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#232B20]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E8E2D5] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#232B20] hover:text-[#84A836] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#84A836] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4E5B4B] leading-relaxed border-t border-[#F0EBE0] bg-[#FAF8F5]/50 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
