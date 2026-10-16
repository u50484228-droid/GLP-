import React from 'react';
import { IMAGES } from '../assets';
import { AFFILIATE_LINK } from '../constants';

interface HeroSectionProps {
  onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column (approx 7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-gray-800 leading-relaxed">
            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
              GLPro Official Website
            </h1>

            <p className="text-base sm:text-[17px] text-gray-700 leading-relaxed">
              <strong className="font-extrabold text-gray-900">GLPro</strong> is a natural supplement made to help individuals maintain healthy blood sugar levels and support overall metabolic health. Many people experience sudden blood sugar spikes that can lead to fatigue, sugar cravings, and increase the risk of diabetes. GLPro works by supporting the body’s natural insulin function, helping regulate blood sugar and reduce fluctuations throughout the day. By keeping glucose levels stable, it can prevent energy crashes and improve focus, mood, and daily performance.
            </p>

            <p className="text-base sm:text-[17px] text-gray-700 leading-relaxed">
              GLPro is ideal for adults who want a safe and convenient way to take control of their blood sugar naturally. By promoting insulin balance and supporting metabolic health, GLPro helps the body manage energy more effectively and maintain steady glucose levels. It offers a effective approach for preventing blood sugar imbalances, enhancing overall wellness, and supporting a healthier lifestyle. In USA, GLPro provides a natural, reliable solution for those seeking consistent blood sugar support and long-term metabolic benefits.
            </p>

            <div className="pt-2">
              <a
                href={AFFILIATE_LINK}
                className="bg-[#fed156] hover:bg-[#f5c644] active:scale-95 text-gray-900 font-extrabold text-base sm:text-lg px-7 py-3.5 rounded-md shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Order Now Just For $49 Bottle</span>
                <span className="text-xl">👆</span>
              </a>
            </div>
          </div>

          {/* Right Image Column (approx 5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <img
                src={IMAGES.heroBottles}
                alt="GLPro Blood Sugar Support Bottles"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
