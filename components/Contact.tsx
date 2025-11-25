import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { ContactModal } from './ContactModal';

export const Contact: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-navy mb-3">
              GET IN TOUCH
            </h2>
            <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
              Ready to get your documents notarized? We're here to help!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-brand-teal to-brand-aqua text-white rounded-xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl md:text-3xl mb-6">
                  CONTACT INFORMATION
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        className="text-white hover:text-opacity-80 transition-colors text-lg"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-white hover:text-opacity-80 transition-colors break-all"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Remote Online Notarization</p>
                      <p className="text-white text-opacity-90">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Mobile Service Areas</p>
                      <p className="text-white text-opacity-90">All of Broward County, FL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-brand-cream rounded-xl p-8 shadow-lg flex flex-col justify-center">
                <h3 className="font-heading text-2xl md:text-3xl text-brand-navy mb-4 text-center">
                  READY TO GET STARTED?
                </h3>
                <p className="text-brand-gray text-center mb-6">
                  Choose the option that works best for you
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full bg-brand-teal text-white py-4 px-6 rounded-full hover:bg-brand-darkTeal transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    <span>Send Us a Message</span>
                  </button>
                  
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="w-full bg-brand-coral text-white py-4 px-6 rounded-full hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-gray border-opacity-20 text-center">
                  <p className="text-sm text-brand-gray">
                    Response time: Usually within 1 hour during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Info Banner */}
            <div className="bg-gradient-to-r from-brand-aqua to-brand-teal text-white rounded-xl p-6 text-center">
              <p className="text-lg font-semibold mb-2">
                Need notarization right now?
              </p>
              <p className="text-white text-opacity-90">
                Call us at <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-bold hover:text-opacity-80 transition-colors">{CONTACT_INFO.phone}</a> for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};
