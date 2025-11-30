import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreas } from './components/ServiceAreas';
import { Documents } from './components/Documents';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal'; // Import the new modal

const App: React.FC = () => {
  // State to control the simple contact modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hidden button to trigger the modal from Header/Hero/CTAs */}
      <button 
        id="contact-modal-opener" 
        className="hidden" 
        onClick={() => setIsModalOpen(true)}
      />
      
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <Documents />
        <Contact />
      </main>
      <Footer />

      {/* Render the simplified contact modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;

