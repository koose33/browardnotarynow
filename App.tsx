import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreas } from './components/ServiceAreas';
import { Documents } from './components/Documents';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
};

export default App;
