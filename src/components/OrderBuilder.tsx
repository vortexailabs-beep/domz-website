import React, { useState } from 'react';
import { JAM_PRODUCTS, BRAND_INFO } from '../data/jams';
import { MessageCircle, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, MapPin, Sparkles, AlertCircle } from 'lucide-react';

interface OrderBuilderProps {
  quantities: Record<string, number>;
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearOrder: () => void;
}

export function OrderBuilder({
  quantities,
  onUpdateQuantity,
  onClearOrder,
}: OrderBuilderProps) {
  const [deliveryType, setDeliveryType] = useState<'collection' | 'delivery'>('collection');
  const [customerName, setCustomerName] = useState('');
  const [customerSuburb, setCustomerSuburb] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const totalJars = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  // Pricing calculation with automatic artisanal bundle discount
  const calculateTotal = () => {
    if (totalJars === 0) return 0;
    // If exactly 4 jars and 1 of each or just 4 jars: R280 tasting pack pricing applies for every set of 4
    // 3 jars bundle = R210 (R70/jar)
    // 4 jars set = R280 (R70/jar)
    // individual = R75
    let remaining = totalJars;
    let cost = 0;
    
    // Apply R70 rate if 3 or more jars
    if (remaining >= 3) {
      cost = remaining * 70;
    } else {
      cost = remaining * 75;
    }
    return cost;
  };

  const totalPrice = calculateTotal();
  const savings = totalJars >= 3 ? (totalJars * 75) - totalPrice : 0;

  const buildWhatsappMessage = () => {
    let msg = `Hi Dominique! I'd like to place an order for Magic Mig Jams:\n\n`;
    
    if (customerName.trim()) {
      msg += `👤 Name: ${customerName.trim()}\n`;
    }

    msg += `📦 Order Selection:\n`;
    JAM_PRODUCTS.forEach((jam) => {
      const q = quantities[jam.id] || 0;
      if (q > 0) {
        msg += `• ${q}x ${jam.name} (R${jam.price} each)\n`;
      }
    });

    msg += `\n jars Total: ${totalJars} jar${totalJars === 1 ? '' : 's'}\n`;
    msg += `💰 Total Amount: R${totalPrice}${savings > 0 ? ` (Includes R${savings} bundle savings)` : ''}\n`;
    
    msg += `📍 Fulfillment: ${
      deliveryType === 'collection'
        ? 'Collection in Sunnydale, Cape Town'
        : `Local delivery / courier inquiry${customerSuburb ? ` for ${customerSuburb}` : ''}`
    }\n`;

    if (specialNote.trim()) {
      msg += `📝 Note / Gift Request: ${specialNote.trim()}\n`;
    }

    msg += `\nPlease let me know your banking details for EFT payment and when this can be ready. Thank you!`;

    return encodeURIComponent(msg);
  };

  const whatsappHref = `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${buildWhatsappMessage()}`;

  return (
    <section id="order" className="py-20 md:py-28 bg-[#F4EFE6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5DEC9] text-[#44503F] text-xs font-semibold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5 text-[#84A836]" />
            <span>Interactive Order Builder</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#232B20] tracking-tight">
            Select Your Jars & Order
          </h2>
          <p className="text-base text-[#556350]">
            Customize your combination of flavours below. When ready, tap the green button to send your exact order straight to Dominique on WhatsApp.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Jam Selection List */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E0D9CB] p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFEAE1]">
              <span className="font-display text-xl font-bold text-[#232B20]">
                Choose Quantities (290g Jars)
              </span>
              {totalJars > 0 && (
                <button
                  onClick={onClearOrder}
                  className="text-xs text-[#9C1E2D] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear all</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {JAM_PRODUCTS.map((jam) => {
                const count = quantities[jam.id] || 0;
                return (
                  <div
                    key={jam.id}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all ${
                      count > 0
                        ? 'border-[#84A836] bg-[#FAFDF3]'
                        : 'border-[#EAE4D7] bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                        style={{ backgroundColor: jam.color.light, color: jam.color.primary }}
                      >
                        {count > 0 ? `${count}x` : '0'}
                      </div>
                      <div>
                        <div className="font-bold text-sm sm:text-base text-[#232B20]">
                          {jam.name}
                        </div>
                        <div className="text-xs text-[#757968]">
                          R{jam.price} · {jam.size}
                        </div>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(jam.id, -1)}
                        disabled={count <= 0}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                          count <= 0
                            ? 'bg-[#EAE4D7] text-[#9A9B93] cursor-not-allowed opacity-50'
                            : 'bg-[#E5DEC9] hover:bg-[#84A836] text-[#2C3528] hover:text-white'
                        }`}
                        aria-label={`Decrease quantity of ${jam.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center font-bold text-sm text-[#232B20]">
                        {count}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(jam.id, 1)}
                        className="w-8 h-8 rounded-full bg-[#9EC643] hover:bg-[#84A836] text-[#1E300B] hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                        aria-label={`Increase quantity of ${jam.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bundle incentive callout */}
            <div className="p-3.5 rounded-xl bg-[#EAF2D7] border border-[#C6DE8C] text-xs text-[#3A4E16] flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#84A836] shrink-0" />
              <span>
                <strong>Small-batch bundle perk:</strong> Order 3 or more jars and enjoy special artisanal pricing at only <strong>R70 per jar</strong>!
              </span>
            </div>

            {/* Optional Customer Inputs */}
            <div className="pt-2 border-t border-[#EFEAE1] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B6755] block">
                Your Details & Notes (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5CDC0] bg-[#FAF8F5] focus:outline-none focus:border-[#84A836]"
                />
                <input
                  type="text"
                  placeholder="Your Suburb / Area (e.g. Fish Hoek, Noordhoek)"
                  value={customerSuburb}
                  onChange={(e) => setCustomerSuburb(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5CDC0] bg-[#FAF8F5] focus:outline-none focus:border-[#84A836]"
                />
              </div>
              <textarea
                placeholder="Any special notes or gift requests? (e.g. ribbon wrapping, preferred pickup time)"
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                rows={2}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5CDC0] bg-[#FAF8F5] focus:outline-none focus:border-[#84A836] resize-none"
              />
            </div>

          </div>

          {/* Right Column: Order Summary & WhatsApp Action */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E0D9CB] p-6 sm:p-8 shadow-sm space-y-6 lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-bold text-[#232B20]">
              Order Summary
            </h3>

            {/* Fulfillment choice */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5B6755] block">
                Collection or Delivery
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('collection')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex flex-col cursor-pointer ${
                    deliveryType === 'collection'
                      ? 'border-[#84A836] bg-[#FAFDF3] text-[#2C3528]'
                      : 'border-[#E0D9CB] bg-[#FAF8F5] text-[#5C6856]'
                  }`}
                >
                  <span className="font-bold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#84A836]" /> Sunnydale Collection
                  </span>
                  <span className="text-[10px] text-[#757968]">Southern Peninsula · Free</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left flex flex-col cursor-pointer ${
                    deliveryType === 'delivery'
                      ? 'border-[#84A836] bg-[#FAFDF3] text-[#2C3528]'
                      : 'border-[#E0D9CB] bg-[#FAF8F5] text-[#5C6856]'
                  }`}
                >
                  <span className="font-bold">Courier / Delivery</span>
                  <span className="text-[10px] text-[#757968]">Arrange with Dominique</span>
                </button>
              </div>
            </div>

            {/* Line items list */}
            <div className="space-y-2 py-3 border-y border-[#EFEAE1] text-xs">
              {totalJars === 0 ? (
                <p className="text-[#8B9182] italic text-center py-4">
                  Select at least one jar from the left to start your order.
                </p>
              ) : (
                <>
                  {JAM_PRODUCTS.map((jam) => {
                    const q = quantities[jam.id] || 0;
                    if (q <= 0) return null;
                    return (
                      <div key={jam.id} className="flex justify-between items-center text-[#3B4737]">
                        <span>
                          {q}x {jam.name}
                        </span>
                        <span className="font-semibold text-[#232B20]">
                          R{q * jam.price}
                        </span>
                      </div>
                    );
                  })}
                  {savings > 0 && (
                    <div className="flex justify-between items-center text-[#4B6700] font-semibold pt-1">
                      <span>Bundle Savings (R70/jar rate):</span>
                      <span>-R{savings}</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Total Row */}
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#556350] block">
                  Total ({totalJars} {totalJars === 1 ? 'jar' : 'jars'})
                </span>
                <span className="text-[11px] text-[#757968]">
                  EFT payment upon order confirmation
                </span>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-bold text-[#232B20]">
                  R{totalPrice}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <a
              href={totalJars > 0 ? whatsappHref : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 px-6 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
                totalJars > 0
                  ? 'bg-[#9EC643] hover:bg-[#84A836] text-[#1E300B] hover:text-white cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5'
                  : 'bg-[#DDD6C7] text-[#8C8F84] cursor-not-allowed opacity-60'
              }`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {totalJars > 0
                  ? 'Send Order to Dominique on WhatsApp'
                  : 'Select Jars to Order'}
              </span>
            </a>

            {/* Peace of Mind guarantees */}
            <div className="space-y-2 pt-2 text-[11px] text-[#697564]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84A836] shrink-0" />
                <span>Chat directly with Dominique (065 902 3126)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84A836] shrink-0" />
                <span>Small batch made fresh — immediate response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84A836] shrink-0" />
                <span>Safe pickup in Sunnydale or delivery arrangement</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
