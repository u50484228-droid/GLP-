import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBadges } from './components/TrustBadges';
import { WhatIsGLPro } from './components/WhatIsGLPro';
import { HowItWorks } from './components/HowItWorks';
import { CustomerReviews } from './components/CustomerReviews';
import { PricingSection } from './components/PricingSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ScienceSection } from './components/ScienceSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { IngredientsSection } from './components/IngredientsSection';
import { DiscountCallout } from './components/DiscountCallout';
import { SecurityGuarantee } from './components/SecurityGuarantee';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (
    _packageName: string,
    _bottles: number,
    _pricePerBottle: number,
    _total: number,
    _freeShipping: boolean
  ) => {
    scrollToPricing();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-teal-700 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOrderClick={scrollToPricing} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection onOrderClick={scrollToPricing} />

        {/* 3. Five Circular Trust Badges */}
        <TrustBadges />

        {/* 4. What is GLPro? */}
        <WhatIsGLPro />

        {/* 5. How Does GLPro Work? */}
        <HowItWorks />

        {/* 6. Customer Reviews */}
        <CustomerReviews />

        {/* 7. Special Offer Pricing */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* 8. What are the Benefits of GLPro? */}
        <BenefitsSection />

        {/* 9. The Science Behind GLPro */}
        <ScienceSection />

        {/* 10. 100% Money Back Guarantee */}
        <GuaranteeSection onOrderClick={scrollToPricing} />

        {/* 11. GLPro Ingredients */}
        <IngredientsSection />

        {/* 12. Order Your Discounted Bottle Now! */}
        <DiscountCallout onOrderClick={scrollToPricing} />

        {/* 13. Is My Payment Information Secure? */}
        <SecurityGuarantee />

        {/* 14. FAQs About GLPro */}
        <FaqSection />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
