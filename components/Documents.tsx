import React from 'react';
import { FileText } from 'lucide-react';
import { DOCUMENT_CATEGORIES } from '../constants';

export const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-12 md:py-16 relative overflow-hidden bg-brand-cream">
      {/* Background Image Option - Fades to white/cream */}
      {/* 
        To add a background image that fades to white:
        1. Save your image as: /public/images/documents-background.jpg
        2. This could be a subtle image of documents, a desk setup, etc.
        3. Image should be light/neutral colored
        4. Uncomment the div below
      */}
      {/* <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,248,240,0.8), rgba(255,248,240,1)), url("/images/documents-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-brand-teal bg-opacity-10 p-4 rounded-2xl">
              <FileText size={48} className="text-brand-teal" />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-navy mb-3">
            DOCUMENTS WE NOTARIZE
          </h2>
          <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto">
            From real estate to personal documents, we handle it all
          </p>
        </div>

        {/* Changed to flex layout to prevent stretching */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {DOCUMENT_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 flex-1 min-w-[280px] max-w-[340px]"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-brand-teal mb-4 text-center border-b-2 border-brand-aqua pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-brand-gray"
                  >
                    <span className="text-brand-aqua mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 bg-white rounded-xl p-6 md:p-8 max-w-3xl mx-auto shadow-lg">
          <p className="text-lg text-brand-navy mb-4">
            <span className="font-semibold">Don't see your document type listed?</span>
            <br />
            <span className="text-brand-gray">Contact us - we notarize most document types!</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-brand-teal text-white px-8 py-3 rounded-full hover:bg-brand-darkTeal transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ask About Your Document
          </a>
        </div>
      </div>
    </section>
  );
};
