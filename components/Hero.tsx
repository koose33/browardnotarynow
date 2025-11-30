import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[600px] flex items-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fort-lauderdale-notary-service-area-background.jpg" 
          alt="Fort Lauderdale Skyline - Mobile Notary Service Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/90 to-brand-navy/80 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          <div className="mb-8 flex justify-center">
            <img 
              src="/images/broward-notary-now-hero-brand.png" 
              alt="Broward Notary Now - Trusted Mobile Service" 
              className="w-48 md:w-64 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
            />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl mb-4 leading-tight drop-shadow-lg tracking-wide">
            FAST. RELIABLE. <br/> NOTARY SERVICES.
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-medium text-brand-cream drop-shadow-md">
            Serving Fort Lauderdale, Wilton Manors, & All Broward County
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
               onClick={() => {
                const modalOpener = document.getElementById('contact-modal-opener');
                if (modalOpener) modalOpener.click(); 
              }}
              className="flex items-center gap-2 bg-brand-coral text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-coral transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center border-2 border-brand-coral"
            >
              <Phone size={22} />
              <span>CONTACT US NOW</span>
            </button>
            
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-teal transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Mail size={22} />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
