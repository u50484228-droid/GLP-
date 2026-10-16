import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is GLPro?",
      answer: "GLPro is a natural dietary supplement formulated to help adults maintain healthy blood sugar levels and optimize metabolic performance. It works by supporting the body's natural insulin sensitivity, reducing sudden glucose spikes, and assisting liver health."
    },
    {
      question: "Who Can Use GLPro?",
      answer: "GLPro is designed for men and women seeking natural daily support for steady blood sugar, appetite control, reduced sugar cravings, and balanced energy levels throughout the day."
    },
    {
      question: "Are there any side effects of GLPro?",
      answer: "GLPro is made with 100% natural, non-GMO ingredients in an FDA-registered and GMP-certified facility in the USA. It is formulated to be gentle on the stomach and free of harmful chemicals or stimulants. As with any dietary supplement, consult your healthcare provider before beginning if you have any pre-existing medical conditions or are taking prescription medications."
    },
    {
      question: "How long before I see results?",
      answer: "Many users report experiencing improved daily energy and fewer sugar cravings within the first few weeks of consistent use. For optimal long-term benefits in glucose metabolism and insulin sensitivity, regular use for 90 to 180 days is recommended."
    },
    {
      question: "What is the recommended dosage of GLPro?",
      answer: "Take the recommended daily dose of capsules with a glass of water, preferably 20-30 minutes before a meal, as directed on the bottle label."
    },
    {
      question: "Is GLPro safe for long-term use?",
      answer: "Yes, GLPro is crafted with natural herbal extracts and nutrients designed for safe, ongoing daily support of metabolic health, healthy glucose regulation, and overall vitality."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="bg-white pb-16">
      {/* Banner */}
      <div className="bg-[#0e6c7d] py-3.5 px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
          Frequently Asked Questions (FAQs) About GLPro
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left py-2 focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0e6c7d] transition">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 ml-4 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0e6c7d]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 group-hover:text-gray-700" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-3 text-gray-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
