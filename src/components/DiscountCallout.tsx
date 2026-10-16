import React from 'react';
import { IMAGES } from '../assets';
import { ShoppingCart } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

interface DiscountCalloutProps {
  onOrderClick: () => void;
}

export const DiscountCallout: React.FC<DiscountCalloutProps> = ({ onOrderClick }) => {
  return (
    <section className="bg-[#0e6c7d] py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Title above card */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
          Order Your Discounted GLPro <span className="font-black">Bottle Now!</span>
        </h2>

        {/* Card */}
        <div className="bg-[#f8fafc] rounded-lg shadow-xl p-6 sm:p-10 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Bottle Image */}
          <div className="w-full md:w-5/12 flex justify-center">
            <img
              src={IMAGES.sixBottles}
              alt="GLPro Discounted Bottles"
              className="max-h-64 object-contain drop-shadow-md"
            />
          </div>

          {/* Offer Details */}
          <div className="w-full md:w-7/12 space-y-4 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              Don't Wait Any Longer! Order Your Discounted Bottle Now!
            </h3>

            <div className="space-y-1">
              <p className="text-lg text-gray-700 font-bold">
                Regular Price: <span className="line-through decoration-red-600 decoration-2 text-gray-500 font-semibold">$99/bottle</span>
              </p>
              <p className="text-2xl font-black text-gray-900">
                Only for: <span className="text-emerald-700">$49/bottle</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={AFFILIATE_LINK}
                className="bg-[#20252b] hover:bg-black active:scale-95 text-white font-extrabold py-3.5 px-7 rounded shadow-md transition inline-flex items-center justify-center gap-2.5 cursor-pointer text-base sm:text-lg w-full sm:w-auto"
              >
                <span>Order Now GLPro Official Buy</span>
                <ShoppingCart className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
