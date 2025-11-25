import React from 'react';
import { MapPin } from 'lucide-react';
import { CITIES } from '../constants';

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Image - PLACE YOUR BROWARD COUNTY IMAGE HERE */}
      {/* 
        To add a Broward County background image:
        1. Save your image as: /public/images/broward-county-background.jpg
        2. Recommended: A scenic photo of Broward County (beach, skyline, etc.)
        3. Image should be at least 1920px wide for best quality
        4. The overlay will darken it so choose a bright, clear image
        5. Uncomment the backgroundImage line below
      */}
      <div 
        className="absolute inset-0 bg-brand-navy"
        style={{
          // backgroundImage: 'url("/images/broward-county-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-navy bg-opacity-85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-brand-aqua bg-opacity-20 p-4 rounded-2xl">
              <MapPin size={48} className="text-brand-aqua" />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">
            SERVICE AREAS
          </h2>
          <p className="text-lg md:text-xl text-brand-aqua max-w-2xl mx-auto">
            PROUDLY SERVING ALL OF BROWARD COUNTY, FLORIDA
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* All Cities in One Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white border-opacity-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {CITIES.slice(0, -1).map((city) => (
                <div
                  key={city}
                  className="bg-brand-aqua bg-opacity-20 text-white py-3 px-4 rounded-lg text-center font-semibold backdrop-blur-sm border border-brand-aqua border-opacity-30 hover:bg-opacity-30 transition-all"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-white text-lg mb-4">
              Don't see your city? We serve all of Broward County!
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-coral text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 uppercase text-sm tracking-wide"
            >
              CALL OR TEXT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
