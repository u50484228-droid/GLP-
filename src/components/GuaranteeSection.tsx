import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface GuaranteeSectionProps {
  onOrderClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-[#0e6c7d] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left: Large 60-Day Guarantee Circular Badge */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-white flex items-center justify-center p-3 relative shadow-2xl">
              <div className="w-full h-full rounded-full border-2 border-dashed border-white/80 flex flex-col items-center justify-center text-center p-4">
                <span className="text-xs tracking-[0.2em] font-extrabold uppercase text-white/95">
                  ★ MONEY BACK ★
                </span>
                <span className="text-6xl sm:text-7xl font-black text-white leading-none my-1 tracking-tight drop-shadow-sm">
                  60
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-widest uppercase text-white">
                  DAYS
                </span>
                <span className="text-xs tracking-[0.25em] font-extrabold uppercase text-white/95 mt-1">
                  GUARANTEE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text content & CTA */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              GLPro: 100% Money Back Guarantee
            </h2>

            <p className="text-sm sm:text-base text-teal-50 leading-relaxed">
              <strong className="font-extrabold text-white">100% Money-Back Guarantee –</strong> Simply return your <strong className="font-extrabold text-white">GLPro</strong> bottles, even if they’re empty, and receive a full refund with no questions asked. Your satisfaction is fully protected for 60 days, ensuring complete satisfaction.
            </p>

            <p className="text-sm sm:text-base text-teal-50 leading-relaxed">
              <strong className="font-extrabold text-white">Natural Blood Sugar Support –</strong> GLPro is carefully formulated to help support healthy blood sugar, improve metabolism, and maintain balanced glucose levels. Our team is available to assist you from day one with any questions or guidance.
            </p>

            <p className="text-sm sm:text-base text-teal-50 leading-relaxed">
              <strong className="font-extrabold text-white">Give Back Guarantee –</strong> Every order of GLPro supports initiatives that promote wellness and metabolic health. Even if your order is refunded, your purchase contributes to helping others improve their health, allowing you to give back while taking care of your blood sugar and overall well-being.
            </p>

            <div className="pt-2">
              <a
                href={AFFILIATE_LINK}
                className="bg-[#fed156] hover:bg-[#f6c646] active:scale-95 text-gray-900 font-extrabold px-6 py-3.5 rounded-md shadow-md transition inline-flex items-center gap-2 cursor-pointer text-base"
              >
                <span>Get Your Bottle Today</span>
                <ShoppingCart className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
