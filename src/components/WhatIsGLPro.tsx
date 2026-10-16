import React from 'react';
import { IMAGES } from '../assets';

export const WhatIsGLPro: React.FC = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
          What is GLPro?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4 text-gray-700 text-base sm:text-[16.5px] leading-relaxed">
            <p>
              <strong className="font-extrabold text-gray-900">GLPro</strong> is a natural diabetes supplement made to support healthy blood sugar levels and promote overall metabolic balance. In today’s busy lifestyle, many people face challenges such as sudden glucose spikes, low energy, and cravings for sugar, which can contribute to the risk of diabetes. GLPro works to support the body’s natural blood sugar process, helping maintain stable glucose levels throughout the day. By encouraging proper insulin function, it helps the body regulate sugar more effectively, reducing the chances of blood sugar highs and lows.
            </p>

            <p>
              This supplement is made for adults looking to support their metabolic health naturally. Fluctuating glucose levels can affect energy, mood, and focus, making daily tasks more challenging. GLPro provides natural support for insulin, helping the body process sugar efficiently. By doing so, it can reduce sugar cravings and help maintain appetite control, which can be beneficial for weight management and overall wellness.
            </p>

            <p>
              Beyond blood sugar and insulin support, GLPro also focuses on liver health, a key component of metabolism. A healthy liver supports efficient glucose processing and energy production, which can enhance overall metabolic function. By helping the body maintain a healthy metabolism, GLPro supports sustained energy, better nutrient absorption, and a more balanced internal environment.
            </p>

            <p>
              Overall, GLPro offers a effective approach to managing blood sugar and metabolic health. Its natural formulation works with the body to support glucose levels, reduce cravings, enhance insulin function, and promote liver and metabolic health. For those in the USA seeking a natural way to maintain steady blood sugar and overall wellness, GLPro provides a safe and easy and natural solution that fits into daily life and supports long-term health goals.
            </p>
          </div>

          {/* Right Graphic Card */}
          {/* Right Graphic Card - Photorealistic matching Screenshot 3 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#5a9cb3] rounded-2xl overflow-hidden border border-[#48879d] shadow-xl max-w-md w-full">
              {/* Header */}
              <div className="bg-[#46849a] text-white py-3.5 px-6 text-center font-extrabold text-xl sm:text-2xl tracking-tight">
                Healthy Glucose Metabolism
              </div>

              {/* Graphic body with realistic composition */}
              <div className="relative bg-gradient-to-br from-[#67a7bd] via-[#7ab4c8] to-[#5a9cb3] p-5 sm:p-6 min-h-[380px] sm:min-h-[400px] flex flex-col justify-between overflow-hidden">
                {/* Background decorative soft circles */}
                <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-white/15 pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-white/10 pointer-events-none"></div>

                {/* Top Right: Realistic smiling senior woman circle */}
                <div className="flex justify-end relative z-10">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                    <img
                      src={IMAGES.seniorGlucose}
                      alt="Senior woman testing blood glucose"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Middle Right: Realistic hands testing glucometer circle */}
                <div className="flex justify-end -mt-8 mr-12 sm:mr-14 relative z-20">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-3 border-white shadow-2xl overflow-hidden bg-white">
                    <img
                      src={IMAGES.glucoseMeterHands}
                      alt="Hands checking blood glucose with meter"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Left: Realistic GLPro bottles overlapping seamlessly without white background */}
                <div className="absolute bottom-1 left-1 z-30 max-w-[210px] sm:max-w-[230px]">
                  <img
                    src={IMAGES.heroBottlesTransparent}
                    alt="GLPro Blood Sugar Support Bottles"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
