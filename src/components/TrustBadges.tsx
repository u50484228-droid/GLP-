import React from 'react';

export const PaymentIcons: React.FC<{ className?: string }> = ({ className = "h-5" }) => {
  return (
    <div className={`flex items-center justify-center gap-1.5 flex-wrap ${className}`}>
      {/* Visa */}
      <div className="bg-[#1a1f71] text-white font-extrabold text-[10px] tracking-wider px-2 py-0.5 rounded border border-gray-300 shadow-xs flex items-center justify-center font-sans">
        VISA
      </div>
      {/* Mastercard */}
      <div className="bg-[#222222] px-2 py-0.5 rounded border border-gray-300 shadow-xs flex items-center justify-center gap-0.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] inline-block -mr-1"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] inline-block opacity-90"></span>
      </div>
      {/* Amex */}
      <div className="bg-[#006fcf] text-white font-bold text-[9px] px-1.5 py-0.5 rounded border border-gray-300 shadow-xs flex items-center justify-center">
        AMEX
      </div>
      {/* PayPal */}
      <div className="bg-[#003087] text-[#0079c1] bg-white font-bold text-[10px] italic px-2 py-0.5 rounded border border-gray-300 shadow-xs flex items-center justify-center">
        <span className="text-[#003087]">Pay</span><span className="text-[#0079c1]">Pal</span>
      </div>
      {/* Discover */}
      <div className="bg-[#ff6000] text-white font-bold text-[9px] px-1.5 py-0.5 rounded border border-gray-300 shadow-xs flex items-center justify-center">
        DISCOVER
      </div>
    </div>
  );
};

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-[#eef2f5] border-y border-gray-200 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
        
        {/* GMP Certified */}
        <div className="flex flex-col items-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="3 2" />
            <path id="path-gmp-top" d="M 20,50 A 30,30 0 0,1 80,50" fill="none" />
            <text className="text-[7px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-gmp-top" startOffset="50%" textAnchor="middle">
                GOOD MANUFACTURING
              </textPath>
            </text>
            <path id="path-gmp-bot" d="M 80,50 A 30,30 0 0,1 20,50" fill="none" />
            <text className="text-[7.5px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-gmp-bot" startOffset="50%" textAnchor="middle">
                PRACTICE
              </textPath>
            </text>
            {/* Inner box / stars */}
            <text x="50" y="44" textAnchor="middle" fill="currentColor" className="text-[7px]">★★★★★</text>
            <text x="50" y="55" textAnchor="middle" fill="currentColor" className="text-[12px] font-extrabold tracking-tight">GMP</text>
            <text x="50" y="64" textAnchor="middle" fill="currentColor" className="text-[6.5px] font-semibold tracking-wider">CERTIFIED</text>
          </svg>
        </div>

        {/* Manufactured in USA */}
        <div className="flex flex-col items-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 18,50 A 32,32 0 0,1 82,50" fill="none" id="path-usa-top" />
            <text className="text-[6.8px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-usa-top" startOffset="50%" textAnchor="middle">
                MANUFACTURED IN
              </textPath>
            </text>
            <path d="M 82,50 A 32,32 0 0,1 18,50" fill="none" id="path-usa-bot" />
            <text className="text-[6.5px] font-bold tracking-wider uppercase" fill="currentColor">
              <textPath href="#path-usa-bot" startOffset="50%" textAnchor="middle">
                IMPORTED INGREDIENTS
              </textPath>
            </text>
            {/* Center USA with flag lines */}
            <text x="50" y="44" textAnchor="middle" fill="currentColor" className="text-[7px]">★★★★★</text>
            <text x="50" y="59" textAnchor="middle" fill="currentColor" className="text-[14px] font-black tracking-wider">USA</text>
            <line x1="32" y1="62" x2="68" y2="62" stroke="currentColor" strokeWidth="1.5" />
            <line x1="36" y1="66" x2="64" y2="66" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Natural Ingredients */}
        <div className="flex flex-col items-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 18,50 A 32,32 0 0,1 82,50" fill="none" id="path-nat-top" />
            <text className="text-[8px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-nat-top" startOffset="50%" textAnchor="middle">
                NATURAL
              </textPath>
            </text>
            <path d="M 82,50 A 32,32 0 0,1 18,50" fill="none" id="path-nat-bot" />
            <text className="text-[7.5px] font-bold tracking-wider uppercase" fill="currentColor">
              <textPath href="#path-nat-bot" startOffset="50%" textAnchor="middle">
                INGREDIENTS
              </textPath>
            </text>
            {/* Heart and leaf inside */}
            <path d="M50 67 C35 55 28 44 34 35 C39 29 46 31 50 37 C54 31 61 29 66 35 C72 44 65 55 50 67 Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <path d="M48 57 C48 48 56 42 58 40 C58 48 53 54 48 57 Z" fill="currentColor" />
            <path d="M52 57 C52 51 46 47 43 46 C44 52 48 55 52 57 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Made in FDA Registered Facility */}
        <div className="flex flex-col items-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 18,50 A 32,32 0 0,1 82,50" fill="none" id="path-fda-top" />
            <text className="text-[7.5px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-fda-top" startOffset="50%" textAnchor="middle">
                MADE IN A
              </textPath>
            </text>
            <path d="M 82,50 A 32,32 0 0,1 18,50" fill="none" id="path-fda-bot" />
            <text className="text-[6.8px] font-bold tracking-wider uppercase" fill="currentColor">
              <textPath href="#path-fda-bot" startOffset="50%" textAnchor="middle">
                REGISTERED FACILITY
              </textPath>
            </text>
            {/* FDA center */}
            <circle cx="34" cy="53" r="1.5" fill="currentColor" />
            <circle cx="66" cy="53" r="1.5" fill="currentColor" />
            <text x="50" y="58" textAnchor="middle" fill="currentColor" className="text-[15px] font-black tracking-tight">FDA</text>
          </svg>
        </div>

        {/* Made with Non GMO Ingredients */}
        <div className="flex flex-col items-center">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="46" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="42" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 18,50 A 32,32 0 0,1 82,50" fill="none" id="path-gmo-top" />
            <text className="text-[7.5px] font-bold tracking-widest uppercase" fill="currentColor">
              <textPath href="#path-gmo-top" startOffset="50%" textAnchor="middle">
                MADE WITH
              </textPath>
            </text>
            <path d="M 82,50 A 32,32 0 0,1 18,50" fill="none" id="path-gmo-bot" />
            <text className="text-[6.5px] font-bold tracking-wider uppercase" fill="currentColor">
              <textPath href="#path-gmo-bot" startOffset="50%" textAnchor="middle">
                INGREDIENTS
              </textPath>
            </text>
            {/* NON GMO center */}
            <text x="50" y="52" textAnchor="middle" fill="currentColor" className="text-[13px] font-black tracking-tight">NON</text>
            <text x="50" y="65" textAnchor="middle" fill="currentColor" className="text-[13px] font-black tracking-tight">GMO</text>
          </svg>
        </div>

      </div>
    </div>
  );
};
