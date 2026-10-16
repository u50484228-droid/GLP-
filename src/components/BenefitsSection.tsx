import React from 'react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      emoji: "💥",
      title: "Supports Healthy Blood Sugar Levels:",
      description: "GLPro helps maintain stable blood sugar levels throughout the day by working naturally with the body’s glucose regulation systems. Balanced blood sugar reduces sudden spikes or drops, supporting consistent energy and reducing stress on the body, which is essential for anyone managing diabetes or looking for improved metabolic health over time."
    },
    {
      emoji: "💉",
      title: "Enhances Insulin Function:",
      description: "GLPro supports natural insulin function, helping the body use glucose efficiently and maintain stable blood sugar. Improved insulin response reduces fluctuations in glucose levels, decreases the risk of insulin resistance, and assists in diabetes management by promoting proper energy use and maintaining overall metabolic balance for long-term health."
    },
    {
      emoji: "🍫",
      title: "Reduces Sugar Cravings:",
      description: "By stabilizing blood sugar, GLPro helps reduce sugar cravings and prevents overeating. Consistent glucose levels limit intense hunger or sudden sugar urges, making it easier for individuals with diabetes to maintain a healthy diet, reduce metabolic strain, and support weight management while achieving balanced energy levels throughout the day."
    },
    {
      emoji: "🔥",
      title: "Promotes Natural Metabolism:",
      description: "GLPro enhances natural metabolism by helping the body efficiently convert nutrients into energy. Proper metabolic function ensures stable blood sugar levels, supports weight management, and improves energy utilization. This aids in preventing insulin spikes and contributes to the overall support of metabolic health for those managing diabetes."
    },
    {
      emoji: "🧬",
      title: "Supports Liver Health:",
      description: "GLPro promotes liver function, which is crucial for storing and releasing glucose as needed. A healthy liver ensures blood sugar levels remain steady, reduces metabolic stress, and supports the body’s natural ability to manage diabetes. Proper liver health is key to maintaining overall energy balance and efficient glucose processing."
    },
    {
      emoji: "⚡",
      title: "Boosts Energy Levels:",
      description: "GLPro supports sustained energy by stabilizing blood sugar and optimizing glucose utilization. Consistent energy levels prevent mid-day crashes, reduce fatigue, and help individuals with diabetes maintain mental and physical performance. By providing reliable metabolic support, the supplement encourages natural vitality and helps the body function more efficiently."
    },
    {
      emoji: "🧠",
      title: "Improves Mental Clarity:",
      description: "Stable blood sugar levels with GLPro help support mental focus, concentration, and cognitive function. By avoiding glucose spikes and drops, it reduces brain fog, enhances clarity, and supports long-term brain health. This is particularly important for individuals with diabetes, whose mental performance can be affected by fluctuating blood sugar and energy levels."
    },
    {
      emoji: "⚖️",
      title: "Supports Weight Management:",
      description: "GLPro aids weight management by regulating appetite, glucose metabolism, and energy use. Balanced blood sugar levels reduce unnecessary cravings and overeating, making it easier to maintain a healthy weight. For individuals managing diabetes, this support helps improve metabolic efficiency, energy balance, and overall long-term wellness."
    }
  ];

  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="bg-[#0e6c7d] py-3.5 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          What are the Benefits of GLPro?
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <p className="text-gray-700 text-base sm:text-[16.5px] leading-relaxed mb-6">
          <strong className="font-extrabold text-gray-900">GLPro</strong> is made to naturally support blood sugar and overall metabolic wellness. It helps maintain balanced glucose levels, stable insulin, reduced cravings, and improved energy, supporting both diabetes management and daily health routines effectively. Here are key benefits of GLPro:-
        </p>

        <div className="space-y-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-start gap-3 text-base sm:text-[16.5px] leading-relaxed text-gray-700">
              <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{b.emoji}</span>
              <div>
                <strong className="font-extrabold text-gray-900 mr-1.5">{b.title}</strong>
                <span>{b.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
