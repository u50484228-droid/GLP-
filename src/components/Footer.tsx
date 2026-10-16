import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c2229] text-gray-400 text-xs py-10 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300 font-medium">
          <a href="#about" className="hover:text-white transition">About GLPro</a>
          <a href="#ingredients" className="hover:text-white transition">Ingredients</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faqs" className="hover:text-white transition">FAQs</a>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition cursor-pointer">Refund Policy</span>
          <span className="hover:text-white transition cursor-pointer">Contact Us</span>
        </div>

        {/* FDA Disclaimer */}
        <p className="max-w-3xl mx-auto leading-relaxed text-gray-400 text-[11px]">
          Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products. Testimonials and examples shown reflect individual results and are not guaranteed to be typical.
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-[11px] pt-2 border-t border-gray-800">
          © {new Date().getFullYear()} GLPro™. All Rights Reserved. Manufactured in the USA in an FDA-Registered & GMP-Certified Facility.
        </p>

      </div>
    </footer>
  );
};
