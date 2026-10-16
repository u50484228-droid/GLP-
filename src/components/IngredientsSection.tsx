import React from 'react';
import { Check } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  const ingredients = [
    {
      name: "Berberine:",
      description: "Berberine is a plant-based compound that helps regulate blood sugar and enhances insulin sensitivity. It promotes proper glucose metabolism, which can prevent sudden blood sugar spikes. By supporting the body’s natural insulin response, Berberine aids in managing diabetes effectively, while helping maintain balanced glucose levels, which is vital for energy, metabolic health, and overall wellness."
    },
    {
      name: "Alpha Lipoic Acid:",
      description: "Alpha Lipoic Acid acts as a potent antioxidant and metabolic booster. It enhances insulin function and helps stabilize blood sugar levels. By reducing oxidative stress linked to diabetes complications, it supports better glucose control. This ingredient promotes metabolic efficiency, steadier energy, and healthier blood sugar management, contributing to overall wellness and improved energy balance throughout the day."
    },
    {
      name: "Cinnamon Bark Extract:",
      description: "Cinnamon Bark Extract supports healthy blood sugar by improving glucose uptake in the body. It reduces insulin resistance and helps prevent sudden sugar spikes. Regular use contributes to more stable glucose levels, which is critical for managing diabetes. Additionally, it supports metabolic health, enhances energy balance, and helps maintain overall stability in blood sugar levels."
    },
    {
      name: "Resveratrol:",
      description: "Resveratrol is a natural antioxidant that helps regulate blood sugar and improve insulin sensitivity. It reduces inflammation often associated with diabetes while supporting balanced glucose levels. By enhancing the body’s natural metabolic processes, Resveratrol promotes steady energy, healthy blood sugar control, and overall metabolic wellness, contributing to improved energy, focus, and long-term glucose management."
    },
    {
      name: "Bitter Melon Extract:",
      description: "Bitter Melon Extract assists in natural blood sugar control by supporting proper glucose metabolism. It helps prevent post-meal sugar spikes and enhances insulin function. This makes it beneficial for diabetes support. By promoting balanced glucose levels, it also contributes to metabolic health, steady energy, and overall body wellness, helping the body process sugar efficiently."
    },
    {
      name: "Banaba Leaf Extract:",
      description: "Banaba Leaf Extract contains active compounds that help support glucose uptake and insulin efficiency. It aids in controlling blood sugar levels and reduces sudden spikes, making it valuable for diabetes management. By improving metabolic balance and maintaining steady energy, it contributes to overall wellness while helping the body maintain healthier glucose levels throughout the day."
    },
    {
      name: "Gynostemma Pentaphyllum:",
      description: "Gynostemma Pentaphyllum is an adaptogenic herb that supports the body’s metabolism and stress response. It helps stabilize blood sugar and enhances insulin activity. This contributes to better diabetes management and steady glucose levels. Additionally, it supports metabolic efficiency, maintains balanced energy, and promotes overall health, making it easier for the body to function optimally."
    },
    {
      name: "Konjac Extract:",
      description: "Konjac Extract helps control appetite and reduce sugar cravings, supporting blood sugar stability. By promoting satiety and balanced glucose levels, it aids in diabetes management. This ingredient contributes to healthier metabolism, supports weight control, and helps maintain consistent energy throughout the day. Konjac Extract also assists the body in managing post-meal sugar spikes effectively."
    }
  ];

  return (
    <section id="ingredients" className="bg-white">
      {/* Green Header Banner */}
      <div className="bg-[#157930] py-3.5 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          GLPro Ingredients
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <p className="text-gray-700 text-base sm:text-[16.5px] leading-relaxed mb-6">
          <strong className="font-extrabold text-gray-900">GLPro</strong> is carefully made in the USA with natural ingredients designed to support healthy blood sugar levels, aid metabolic function, and improve overall well-being. Each ingredients works together to manage blood sugar, reduce cravings, and maintain balanced glucose levels, providing strong support for diabetes and energy regulation. Here are ingredients list of GLPro:-
        </p>

        <div className="space-y-6">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex items-start gap-3.5 text-base sm:text-[16.5px] leading-relaxed text-gray-700">
              {/* Green checkmark circle */}
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#157930] flex items-center justify-center text-white mt-1">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <strong className="font-extrabold text-gray-900 mr-1.5">{ing.name}</strong>
                <span>{ing.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
