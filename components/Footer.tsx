import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-brand-aqua mb-3">
              BROWARD NOTARY NOW
            </h3>
            <p className="text-white text-opacity-80 text-sm leading-relaxed">
              Professional remote online and mobile notary services serving all of Broward County, Florida. 
              Fast, secure, and available when you need us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-brand-aqua mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white text-opacity-80 hover:text-brand-aqua transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-white text-opacity-80 hover:text-brand-aqua transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="text-white text-opacity-80 hover:text-brand-aqua transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#documents" className="text-white text-opacity-80 hover:text-brand-aqua transition-colors">
                  Documents We Notarize
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-opacity-80 hover:text-brand-aqua transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-brand-aqua mb-3">
              CONTACT US
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-aqua flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-white text-opacity-80 hover:text-brand-aqua transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-aqua flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white text-opacity-80 hover:text-brand-aqua transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-aqua flex-shrink-0 mt-1" />
                <span className="text-white text-opacity-80">
                  Serving Fort Lauderdale, Wilton Manors, Oakland Park & All Broward County
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-6 text-center">
          <p className="text-white text-opacity-60 text-sm mb-2">
            © {currentYear} Broward Notary Now. All rights reserved.
          </p>
          <p className="text-white text-opacity-60 text-xs">
            Licensed and commissioned notary public in the State of Florida
          </p>
        </div>
      </div>
    </footer>
  );
};
