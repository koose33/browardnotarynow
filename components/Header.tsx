import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants'; // Keeping this import even though CONTACT_INFO might not be used directly in the header, relying on context/global data.

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'SERVICES', id: 'services' },
    { label: 'ABOUT', id: 'why-choose-us' }, 
    { label: 'AREAS', id: 'service-areas' }, 
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* HEADER LOGO - PATH ADJUSTED TO ROOT */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              // *** PATH FIXED *** Assumes image is in root folder due to upload error
              src="/broward-notary-now-header-logo.png" 
              alt="Broward Notary Now" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                <button 
                  onClick={() => scrollToSection(link.id)} 
                  className="text-brand-navy hover:text-brand-teal transition-all font-medium px-4 py-2 opacity-70 hover:opacity-100 uppercase text-sm tracking-wide"
                >
                  {link.label}
                </button>
                {index < navLinks.length - 1 && <span className="text-brand-gray opacity-30">|</span>}
              </React.Fragment>
            ))}
            
            <div className="ml-4">
              <button
                // Opens the modal via the hidden button in App.tsx
                onClick={() => {
                  const modalOpener = document.getElementById('contact-modal-opener');
                  if (modalOpener) modalOpener.click(); 
                }}
                className="flex items-center gap-2 bg-brand-coral text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl uppercase text-sm"
              >
                CONTACT US NOW
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-navy"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)} 
                className="block w-full text-left text-brand-navy hover:text-brand-teal transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              // Opens the modal via the hidden button in App.tsx
              onClick={() => {
                const modalOpener = document.getElementById('contact-modal-opener');
                if (modalOpener) modalOpener.click(); 
              }}
              className="flex items-center justify-center gap-2 bg-brand-coral text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg mt-4 w-full"
            >
              <Phone size={18} />
              <span>CONTACT US NOW</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

