import React from 'react';
import { X, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

// This is the simplified modal to show only phone and email
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Modal Overlay/Backdrop
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose} // Closes modal when clicking outside
    >
      <div 
        className="bg-white rounded-2xl max-w-sm w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-brand-gray hover:text-brand-navy transition-colors bg-white rounded-full p-1.5 shadow-md z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-aqua text-white p-6 rounded-t-2xl text-center">
          <h2 className="font-heading text-3xl mb-1">CONTACT US NOW</h2>
          <p className="text-white text-opacity-90">Immediate assistance available</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-center">
          <p className="text-brand-navy mb-5 text-lg font-medium">
            Ready to get notarized? Choose your preferred contact method.
          </p>
          
          {/* Phone Detail */}
          <div className="mb-4">
            <h3 className="font-heading text-2xl text-brand-teal mb-1">PHONE / TEXT</h3>
            <a 
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="text-brand-coral hover:text-brand-darkTeal font-bold text-3xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Email Detail */}
          <div className="mb-6">
            <h3 className="font-heading text-2xl text-brand-teal mb-1">EMAIL</h3>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-brand-navy hover:text-brand-teal font-semibold text-lg transition-colors flex items-center justify-center gap-2 break-all"
            >
              <Mail size={20} />
              {CONTACT_INFO.email}
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-brand-teal text-white py-3 rounded-full font-semibold hover:bg-brand-darkTeal transition-all shadow-lg"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

