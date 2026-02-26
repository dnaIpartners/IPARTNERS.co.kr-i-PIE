import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with slow zoom effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 mt-20 w-full max-w-6xl">
        {/* Staggered Text Reveal with Orange Blocks */}
        <div className="flex flex-col items-center justify-center mb-16 w-full">
          
          {/* Row 1 */}
          <div className="flex w-full items-center justify-center">
            <div className="w-1/2 flex justify-end overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-none pr-1 md:pr-2"
              >
                Work
              </motion.h1>
            </div>
            <div className="w-1/2 flex justify-start">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3rem] md:h-[4.5rem] lg:h-[7.5rem] bg-[#FF6B00] w-[180px] md:w-[280px] lg:w-[380px] origin-left"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full items-center justify-center mt-2 md:mt-4">
            <div className="w-1/2 flex justify-end overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-none pr-1 md:pr-2"
              >
                Communicate
              </motion.h1>
            </div>
            <div className="w-1/2 flex justify-start">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3rem] md:h-[4.5rem] lg:h-[7.5rem] bg-[#FF6B00] w-[220px] md:w-[340px] lg:w-[460px] origin-left"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex w-full items-center justify-center mt-2 md:mt-4">
            <div className="w-1/2 flex justify-end overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-none pr-1 md:pr-2"
              >
                Scale
              </motion.h1>
            </div>
            <div className="w-1/2 flex justify-start">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-[3rem] md:h-[4.5rem] lg:h-[7.5rem] bg-[#FF6B00] w-[150px] md:w-[240px] lg:w-[320px] origin-left"
              />
            </div>
          </div>

        </div>

        {/* Subtitle with fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="inline-flex flex-col md:flex-row items-center justify-center gap-4 border-t border-white/20 pt-8"
        >
          <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <strong className="text-white font-bold tracking-widest text-sm">i-PIE™</strong>
          </div>
          <p className="text-lg md:text-xl font-light text-gray-300 break-keep leading-relaxed">
            브랜드가 일하고, 소통하고, 성장하는 방식을 AI로 재설계합니다.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center animate-bounce"
      >
        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">
          <ArrowDown className="text-white w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}
