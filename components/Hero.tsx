import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { ContactModal } from './ContactModal';

export const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-hero-gradient text-white pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Background Pattern Overlay - Optional decorative element */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* LOGO PLACEMENT - Optional logo in hero */}
            {/* 
              To add a logo here (white version recommended):
              1. Save a white/light version of your logo as: /public/images/broward-notary-now-logo-white.png
              2. Recommended size: 240px wide x 80px tall
              3. Uncomment the img tag below
            */}
            {/* <div className="mb-6">
              <img 
                src="/images/broward-notary-now-logo-white.png" 
                alt="Broward Notary Now" 
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div> */}

            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              REMOTE ONLINE & MOBILE
              <br />
              NOTARY SERVICES
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-3 font-medium italic">
              Fast, Secure, Professional
            </p>
            
            {/* Location */}
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Serving Fort Lauderdale, Wilton Manors, Oakland Park & All Broward County
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2 bg-brand-coral text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Phone size={22} />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Mail size={22} />
                <span>Get Started Online</span>
              </button>
            </div>

            {/* Key Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-heading text-2xl mb-1">24/7 REMOTE</p>
                <p className="text-sm opacity-90">Online notarization anytime</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-heading text-2xl mb-1">15 MINUTES</p>
                <p className="text-sm opacity-90">Get notarized fast</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <p className="font-heading text-2xl mb-1">WE COME TO YOU</p>
                <p className="text-sm opacity-90">Mobile service in Broward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};
