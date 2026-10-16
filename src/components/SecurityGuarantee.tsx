import React from 'react';
import { Mail, Phone, CheckSquare } from 'lucide-react';

export const SecurityGuarantee: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Is My Payment Information Secure?
        </h2>

        <div className="space-y-6 text-gray-700 text-base sm:text-[16.5px] leading-relaxed">
          <p>
            At <strong className="font-extrabold text-gray-900">GLPro</strong>, your privacy and financial security are our top priorities. When you place an order through our official website, your personal and payment information is protected using advanced encryption technology. Every transaction is 100% secure, private, and safe from unauthorized access, giving you peace of mind while ordering your blood sugar supplement.
          </p>

          <div className="flex items-center gap-2.5 font-bold text-gray-900 text-lg">
            <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>60-Day Risk-Free Money-Back Guarantee</span>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Refund Policy
            </h3>
            <p>
              We’re confident that GLPro can make a real difference in supporting healthy blood sugar and metabolic health. That’s why every order is backed by a 60-day money-back guarantee. If you’re not completely satisfied for any reason, simply contact us within 60 days of your purchase to receive a full refund—no hassle, no questions asked.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Customer Support
            </h3>
            <p>
              Need help with your order or a refund? Our friendly support team is ready to assist you with any questions or concerns.
            </p>
            <div className="pt-2 space-y-1.5 font-medium text-gray-800">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-700" />
                <span>Email: <a href="mailto:support@glproofficial.com" className="text-[#0e6c7d] hover:underline font-semibold">support@glproofficial.com</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-700" />
                <span>Phone: Available on our official website</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
