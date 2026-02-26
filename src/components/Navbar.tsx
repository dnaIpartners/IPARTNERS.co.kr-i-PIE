import React, { useState, useEffect } from 'react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white font-black text-2xl tracking-tighter cursor-pointer">
          IPARTNERS
        </div>
        <div className="hidden md:flex space-x-8 text-white text-sm font-medium items-center">
          <a href="#" className="hover:text-gray-300 transition-colors">ABOUT</a>
          <a href="#" className="hover:text-gray-300 transition-colors">WORK</a>
          <a href="#" className="hover:text-gray-300 transition-colors">CAREER</a>
          <a href="#" className="hover:text-gray-300 transition-colors">CONTACT</a>
          <div className="flex items-center space-x-2 border-l border-white/30 pl-8">
            <a href="#" className="hover:text-gray-300 transition-colors font-bold">KOR</a>
            <span className="text-white/50 text-xs">/</span>
            <a href="#" className="text-white/50 hover:text-gray-300 transition-colors">ENG</a>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </nav>
  );
}
