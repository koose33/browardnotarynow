import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BENEFITS } from '../constants';

export const WhyChooseUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BENEFITS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BENEFITS.length) % BENEFITS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentBenefit = BENEFITS[currentIndex];
  const Icon = currentBenefit.icon;

  return (
    <section id="why-choose-us" className="py-12 md:py-16 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-navy mb-3">
            WHY CHOOSE BROWARD NOTARY NOW
          </h2>
          <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
            Professional notary services you can trust
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-brand-teal text-white p-2 rounded-full hover:bg-brand-darkTeal transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Previous benefit"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-brand-teal text-white p-2 rounded-full hover:bg-brand-darkTeal transition-all shadow-lg hover:scale-110 z-10"
              aria-label="Next benefit"
            >
              <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="text-center px-8 md:px-16">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-brand-aqua to-brand-teal p-6 rounded-2xl shadow-lg">
                  <Icon size={48} className="text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-3xl md:text-4xl text-brand-navy mb-4">
                {currentBenefit.title}
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-brand-gray mb-4 leading-relaxed">
                {currentBenefit.description}
              </p>

              {/* Detail */}
              <p className="text-base text-brand-gray leading-relaxed max-w-2xl mx-auto">
                {currentBenefit.detail}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {BENEFITS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-brand-teal w-8'
                      : 'bg-brand-gray bg-opacity-30 hover:bg-opacity-50'
                  }`}
                  aria-label={`Go to benefit ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-brand-gray">
              {currentIndex + 1} of {BENEFITS.length}
            </div>
          </div>

          {/* Quick View Grid - Optional for desktop */}
          <div className="hidden lg:grid grid-cols-6 gap-3 mt-6">
            {BENEFITS.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`p-4 rounded-lg transition-all ${
                    index === currentIndex
                      ? 'bg-brand-teal text-white shadow-lg scale-105'
                      : 'bg-white text-brand-teal hover:bg-brand-cream'
                  }`}
                  aria-label={benefit.title}
                >
                  <BenefitIcon size={24} className="mx-auto mb-1" />
                  <p className="text-xs font-semibold text-center leading-tight">
                    {benefit.title.split(' ')[0]}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
