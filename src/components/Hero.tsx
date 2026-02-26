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

      <div className="relative z-10 text-center text-white px-4 mt-20 w-full max-w-5xl">
        {/* Staggered Text Reveal */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9500]">smarter.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              Communicate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9500]">faster.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9500]">further.</span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle with fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
