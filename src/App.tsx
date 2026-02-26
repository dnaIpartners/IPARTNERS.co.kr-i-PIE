import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Services from './components/Services';
import Partnership from './components/Partnership';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Partnership />
      <CTA />
      <Footer />
    </div>
  );
}
