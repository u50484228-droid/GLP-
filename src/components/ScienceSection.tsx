import React from 'react';

export const ScienceSection: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="bg-[#0e6c7d] py-3.5 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          The Science Behind GLPro
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12 space-y-6 text-gray-700 text-base sm:text-[16.5px] leading-relaxed">
        <p>
          <strong className="font-extrabold text-gray-900">GLPro</strong> works by supporting the body’s natural ability to regulate blood sugar. Stable glucose levels are essential for overall health, and GLPro helps maintain these levels, which is especially important for individuals managing diabetes. By addressing blood sugar balance, the supplement aids the body in reducing spikes and crashes that can affect energy and metabolic efficiency.
        </p>

        <p>
          One of the key work of GLPro is its support for insulin function. Efficient insulin activity allows the body to properly utilize glucose for energy while preventing excess sugar from circulating in the bloodstream. This natural support helps reduce the risk of insulin resistance, a common concern for people with diabetes, and contributes to healthier overall blood sugar levels.
        </p>

        <p>
          GLPro also works to manage sugar cravings and appetite. By stabilizing blood sugar, it helps prevent sudden spikes and drops in glucose that often trigger hunger and cravings. This not only supports weight management but also helps maintain steady energy levels, an essential factor for long-term diabetes control and metabolic health.
        </p>

        <p>
          Another important aspect of GLPro’s science is its effect on metabolism and liver function. A properly functioning metabolism ensures that glucose is processed efficiently while a healthy liver helps regulate how sugar is stored and released, contributing to overall metabolic balance. By supporting liver function, GLPro enhances the body’s ability to process glucose effectively, improving insulin efficiency and maintaining steady blood sugar levels.
        </p>
      </div>
    </section>
  );
};
