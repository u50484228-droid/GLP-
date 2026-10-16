import React from 'react';
import { Sparkles, ThumbsUp, Lock } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e6c7d] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight cursor-pointer hover:opacity-95 transition"
        >
          GLPro
        </div>

        {/* Navigation links & CTA */}
        <div className="flex items-center gap-4 sm:gap-7 text-sm sm:text-base font-medium">
          <button
            onClick={() => scrollTo('about')}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-yellow-200 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>About us</span>
          </button>

          <button
            onClick={() => scrollTo('ingredients')}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-yellow-200 transition cursor-pointer"
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Ingredients</span>
          </button>

          <button
            onClick={() => scrollTo('faqs')}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-yellow-200 transition cursor-pointer"
          >
            <Lock className="w-4 h-4" />
            <span>FAQs</span>
          </button>

          <button
            onClick={onOrderClick}
            className="bg-[#fed156] hover:bg-[#f6c646] active:scale-95 text-gray-900 font-bold px-4 sm:px-6 py-2 rounded-md shadow transition flex items-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            <span>Order Now</span>
            <span className="text-base">👆</span>
          </button>
        </div>
      </div>
    </header>
  );
};
