import React, { useState, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg text-white' : 'bg-transparent py-6 text-black'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter cursor-pointer">
          IPARTNERS
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest">
          <a href="#works" className="hover:opacity-70 transition-opacity">WORKS</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="#careers" className="hover:opacity-70 transition-opacity">CAREERS</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
          <a href="#brochure" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
            <ArrowDownRight className="w-4 h-4" />
            BROCHURE
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}
