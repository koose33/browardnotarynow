import React from 'react';
import { Laptop, Car, Check } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
      <section id="services" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-navy mb-3">
              OUR SERVICES
            </h2>
            <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
              Choose the notary service that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all ${
                    service.primary
                      ? 'bg-gradient-to-br from-brand-teal to-brand-aqua text-white ring-4 ring-brand-coral ring-opacity-50'
                      : 'bg-brand-cream text-brand-navy'
                  }`}
                >
                  {service.primary && (
                    <div className="inline-block bg-brand-coral text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${service.primary ? 'bg-white bg-opacity-20' : 'bg-brand-aqua bg-opacity-20'}`}>
                      <Icon size={32} className={service.primary ? 'text-white' : 'text-brand-teal'} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl md:text-3xl mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium ${service.primary ? 'text-white text-opacity-90' : 'text-brand-teal'}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className={`mb-6 leading-relaxed ${service.primary ? 'text-white text-opacity-90' : 'text-brand-gray'}`}>
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check size={20} className={`flex-shrink-0 mt-0.5 ${service.primary ? 'text-white' : 'text-brand-teal'}`} />
                        <span className={`text-sm ${service.primary ? 'text-white text-opacity-90' : 'text-brand-gray'}`}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all hover:scale-105 ${
                      service.primary
                        ? 'bg-white text-brand-teal hover:bg-opacity-90'
                        : 'bg-brand-teal text-white hover:bg-brand-darkTeal'
                    }`}
                  >
                    {service.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};
