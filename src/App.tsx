import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/Services/ServicesSection';
import { TeamSection } from './components/Team/TeamSection';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/CTAs/WhatsAppButton';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black">
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <ServicesSection />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;