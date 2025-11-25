import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - PLACE YOUR LOGO HERE */}
          {/* 
            To add your logo:
            1. Save your logo as: /public/images/broward-notary-now-logo.png
            2. Recommended size: 180px wide x 60px tall (or similar aspect ratio)
            3. The logo should have a transparent background
            4. Uncomment the <img> line below and comment out the text version
          */}
          <div className="flex items-center">
            {/* <img 
              src="/images/broward-notary-now-logo.png" 
              alt="Broward Notary Now Logo" 
              className="h-12 w-auto"
            /> */}
            
            {/* Temporary text logo - remove when you add your image logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="font-heading text-2xl md:text-3xl text-brand-teal hover:text-brand-aqua transition-colors"
            >
              BROWARD NOTARY NOW
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('services')} className="text-brand-navy hover:text-brand-teal transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-brand-navy hover:text-brand-teal transition-colors font-medium">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('service-areas')} className="text-brand-navy hover:text-brand-teal transition-colors font-medium">
              Service Areas
            </button>
            <button onClick={() => scrollToSection('documents')} className="text-brand-navy hover:text-brand-teal transition-colors font-medium">
              Documents
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-brand-navy hover:text-brand-teal transition-colors font-medium">
              Contact
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2 bg-brand-coral text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-navy"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')} 
              className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('service-areas')} 
              className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
            >
              Service Areas
            </button>
            <button 
              onClick={() => scrollToSection('documents')} 
              className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
            >
              Documents
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
            >
              Contact
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-brand-coral text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg mt-4"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
