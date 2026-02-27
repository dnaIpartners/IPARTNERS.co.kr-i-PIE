import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import FluidBackground from './FluidBackground';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F8F8]">
      {/* WebGL Fluid Background */}
      <FluidBackground />

      <div className="relative z-10 text-center text-gray-900 px-4 mt-20 w-full max-w-5xl pointer-events-none">
        {/* Staggered Text Reveal */}
        <div className="flex flex-col items-center justify-center mb-12 w-full">
          <div className="overflow-hidden pb-2 w-full">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center w-full text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] whitespace-nowrap"
            >
              <div className="w-1/2 text-right pr-2 md:pr-4">Work</div>
              <div className="w-1/2 text-left pl-2 md:pl-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001641] to-[#0033FF] pb-2">smarter.</span>
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 w-full">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center w-full text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] whitespace-nowrap"
            >
              <div className="w-1/2 text-right pr-2 md:pr-4">Communicate</div>
              <div className="w-1/2 text-left pl-2 md:pl-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001641] to-[#0033FF] pb-2">faster.</span>
              </div>
            </motion.div>
          </div>
          <div className="overflow-hidden pb-2 w-full">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center w-full text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] whitespace-nowrap"
            >
              <div className="w-1/2 text-right pr-2 md:pr-4">Scale</div>
              <div className="w-1/2 text-left pl-2 md:pl-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001641] to-[#0033FF] pb-2">further.</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtitle with fade in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-col md:flex-row items-center justify-center gap-4 border-t border-gray-300 pt-8"
        >
          <p className="text-lg md:text-xl font-light text-gray-600 break-keep leading-relaxed">
            <strong className="text-gray-900 font-bold tracking-widest text-sm mr-2">i-PIE™</strong> — 브랜드가 일하고, 소통하고, 성장하는 방식을 AI로 재설계합니다.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center animate-bounce"
      >
        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white/80 transition-colors">
          <ArrowDown className="text-gray-900 w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}
