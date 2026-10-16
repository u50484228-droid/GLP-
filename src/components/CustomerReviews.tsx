import React from 'react';
import { IMAGES } from '../assets';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: "Emily R., New York, USA",
      image: IMAGES.reviewerEmily,
      text: (
        <>
          "Since starting <strong className="font-extrabold text-gray-900">GLPro</strong>, my blood sugar has been much more stable throughout the day, helping manage my diabetes with ease. I also notice improved mental clarity and focus, feeling sharper and more alert during work and daily tasks. Stabilizing my glucose levels has reduced brain fog, making me calmer, more productive, and confident in supporting my body naturally."
        </>
      ),
    },
    {
      name: "Michael L., Chicago, USA",
      image: IMAGES.reviewerMichael,
      text: (
        <>
          "<strong className="font-extrabold text-gray-900">GLPro</strong> has noticeably improved my energy levels and metabolism, helping me stay focused and active throughout the day. It has also reduced sugar cravings and helped manage my appetite, making it easier to maintain healthy meals. Supporting my blood sugar and diabetes naturally, GLPro has made a real difference in my overall vitality and daily routine."
        </>
      ),
    },
    {
      name: "Samantha S., Texas, USA",
      image: IMAGES.reviewerSamantha,
      text: (
        <>
          "<strong className="font-extrabold text-gray-900">GLPro</strong> helps support my overall metabolism and general health. I feel healthier, more balanced, and energetic. My blood sugar numbers have remained in a healthy range, and I have fewer cravings throughout the day. I highly recommend GLPro to anyone looking for a reliable and natural support for their blood sugar."
        </>
      ),
    },
  ];

  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="bg-[#0e6c7d] py-3.5 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          GLPro Customer Reviews
        </h2>
      </div>

      {/* Reviews container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-8">
        {reviews.map((rev, idx) => (
          <div 
            key={idx}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-100 pb-8 last:border-b-0"
          >
            {/* Reviewer Image */}
            <div className="shrink-0">
              <img
                src={rev.image}
                alt={rev.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-md shadow-sm border border-gray-200"
              />
            </div>

            {/* Content */}
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
                {rev.name}
              </h3>
              <div className="text-emerald-700 font-bold text-sm tracking-wide">
                Verified Purchase
              </div>
              <p className="text-gray-700 text-base leading-relaxed pt-1">
                {rev.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
