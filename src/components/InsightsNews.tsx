import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const boards = [
  {
    id: "01",
    title: "UI / UX 프롬프트",
    desc: "실무에 즉시 적용 가능한 UI/UX 기획 및 디자인 프롬프트 가이드와 활용 사례를 공유합니다.",
    tag: "PROMPT GUIDE",
    image: "https://picsum.photos/seed/uiux/800/1000",
    imageLabel: "UI/UX DESIGN"
  },
  {
    id: "02",
    title: "트레이닝 AI",
    desc: "아이파트너즈만의 AI 모델 학습 노하우, 파인튜닝 기법 및 트레이닝 방법론을 소개합니다.",
    tag: "AI TRAINING",
    image: "https://picsum.photos/seed/training/800/1000",
    imageLabel: "MODEL FINE-TUNING"
  },
  {
    id: "03",
    title: "AX TRENDS",
    desc: "글로벌 AI 트렌드 분석 및 성공적인 디지털 비즈니스 혁신(AX) 사례를 심도 있게 다룹니다.",
    tag: "TREND ANALYSIS",
    image: "https://picsum.photos/seed/trends/800/1000",
    imageLabel: "DIGITAL TRANSFORMATION"
  }
];

export default function InsightsNews() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="py-24 md:py-32 bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6"
          >
            INSIGHTS NEWS
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex items-baseline justify-start uppercase"
          >
            Insights & News<span className="text-[#0033FF] text-4xl md:text-6xl">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest"
          >
            DIGITAL BUSINESS & AX COMPASS (2024-2025)
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: List */}
          <div className="w-full lg:w-1/2">
            {/* List Items */}
            <div className="border-t border-gray-200">
              {boards.map((board) => {
                const isActive = activeId === board.id;
                return (
                  <div 
                    key={board.id}
                    className="border-b border-gray-200 py-6 md:py-8 cursor-pointer group"
                    onMouseEnter={() => setActiveId(board.id)}
                    onClick={() => setActiveId(board.id)}
                  >
                    <div className="flex gap-6 md:gap-8">
                      <span className={`font-mono text-sm md:text-base font-bold mt-2 transition-colors duration-300 ${isActive ? 'text-[#0033FF]' : 'text-gray-300'}`}>
                        {board.id}
                      </span>
                      <div className="flex-1">
                        <h3 className={`text-3xl md:text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-200 group-hover:text-gray-400'}`}>
                          {board.title}
                        </h3>
                        
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 pb-2">
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed break-keep mb-6 max-w-md font-medium">
                                  {board.desc}
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase bg-gray-100 px-3 py-1.5 rounded-sm">
                                    {board.tag}
                                  </span>
                                  <a href="#view" className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-[#0033FF] transition-colors">
                                    VIEW BOARD <ArrowUpRight className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image Thumbnail */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                {boards.map((board) => {
                  if (board.id !== activeId) return null;
                  return (
                    <motion.div
                      key={board.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={board.image} 
                        alt={board.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                      
                      {/* Image Label */}
                      <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                        <span className="text-[#0033FF] text-[10px] font-bold tracking-widest uppercase mb-2 block">
                          CATEGORY
                        </span>
                        <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase">
                          {board.imageLabel}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
