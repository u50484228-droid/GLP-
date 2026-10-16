import React, { useState, useEffect } from 'react';
import { PaymentIcons } from './TrustBadges';
import { Flame, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface PricingSectionProps {
  onSelectPackage?: (packageName: string, bottles: number, pricePerBottle: number, total: number, freeShipping: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 48); // 14m 48s countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 30));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <section id="pricing" className="bg-[#eef3f6] py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Special Offer Pricing Ribbon */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            {/* Left ribbon tail */}
            <div className="hidden sm:block absolute -left-7 top-2 w-0 h-0 border-t-[24px] border-t-[#8c0e0e] border-b-[24px] border-b-[#8c0e0e] border-l-[16px] border-l-transparent z-0"></div>
            {/* Main banner */}
            <div className="relative z-10 bg-gradient-to-r from-[#b51414] via-[#cc1a1a] to-[#b51414] text-white px-8 sm:px-14 py-3 text-center shadow-lg rounded-sm border-y-2 border-[#820707]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase drop-shadow-sm">
                SPECIAL OFFER PRICING
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-red-100 mt-0.5">
                * Special Pricing Not Guaranteed Past Today!
              </p>
            </div>
            {/* Right ribbon tail */}
            <div className="hidden sm:block absolute -right-7 top-2 w-0 h-0 border-t-[24px] border-t-[#8c0e0e] border-b-[24px] border-b-[#8c0e0e] border-r-[16px] border-r-transparent z-0"></div>
          </div>
        </div>

        {/* High Conversion Urgency & Scarcity Callout Box */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-5 sm:p-6 shadow-md text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 animate-pulse">
            <Flame className="w-4 h-4 fill-white" />
            <span>LIMITED INVENTORY • FINAL DISCOUNTED UNITS</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
            Attention: High Demand On Today's Promotional Batch!
          </h3>

          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mb-4 leading-relaxed">
            Due to heavy demand across the USA, only <span className="font-extrabold text-red-600 underline">11 units remain</span> at the special discounted rate of <strong>$49/bottle</strong>. Claim yours now before this inventory batch sells out!
          </p>

          {/* Scarcity Bar & Live Countdown */}
          <div className="max-w-md mx-auto bg-white rounded-lg p-3 border border-amber-200 mb-5 shadow-xs">
            <div className="flex justify-between items-center text-xs font-bold text-gray-700 mb-1.5">
              <span className="flex items-center gap-1 text-red-600">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Remaining Stock: 94% Claimed</span>
              </span>
              <span className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Expires in: <strong className="text-red-600 font-mono text-sm">{formattedTime}</strong></span>
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-red-600 h-full w-[94%] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Urgency CTA Button */}
          <div className="flex items-center justify-center">
            <a
              href={AFFILIATE_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#fed156] hover:bg-[#f6c646] active:scale-95 border-2 border-yellow-600 text-gray-950 font-black text-base sm:text-lg md:text-xl px-8 py-4.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <Flame className="w-6 h-6 text-red-600 animate-bounce" />
              <span>EXPLORE SPECIAL OFFERS & CLAIM REMAINING UNITS</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">👉</span>
            </a>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2">
            <PaymentIcons className="my-1" />
            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-gray-500 flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                60-Day 100% Money-Back Guarantee
              </span>
              <span>•</span>
              <span>Fast Priority USA Shipping</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
