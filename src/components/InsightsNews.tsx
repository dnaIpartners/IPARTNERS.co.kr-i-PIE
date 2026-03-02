import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const boards = [
  {
    id: "01",
    title: "UI / UX 프롬프트",
    desc: "실무에 즉시 적용 가능한 UI/UX 기획 및 디자인 프롬프트 가이드와 활용 사례를 공유합니다."
  },
  {
    id: "02",
    title: "트레이닝 AI",
    desc: "아이파트너즈만의 AI 모델 학습 노하우, 파인튜닝 기법 및 트레이닝 방법론을 소개합니다."
  },
  {
    id: "03",
    title: "AX Trends",
    desc: "글로벌 AI 트렌드 분석 및 성공적인 디지털 비즈니스 혁신(AX) 사례를 심도 있게 다룹니다."
  }
];

export default function InsightsNews() {
  return (
    <section className="py-24 md:py-32 bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Title */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#0033FF]"></div>
              <span className="text-sm font-bold tracking-widest text-[#0033FF] uppercase">Insights & News</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-8 text-gray-900"
            >
              INSIGHTS<br />& NEWS
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed break-keep"
            >
              디지털 비즈니스의 최전선에서 발견한 인사이트와 아이파트너즈의 최신 소식을 전합니다.<br className="hidden md:block" />
              AX(AI Experience)시대를 항해하는 나침반이 되어드리겠습니다.
            </motion.p>
          </div>

          {/* Right Side: Board List */}
          <div className="w-full lg:w-2/3">
            <div className="border-t border-gray-200">
              {boards.map((board, index) => (
                <motion.a
                  href="#board"
                  key={board.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group block border-b border-gray-200 py-10 hover:bg-[#FDFDFD] transition-colors relative overflow-hidden"
                >
                  {/* Hover Background Accent */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0033FF]/0 via-[#0033FF]/[0.02] to-[#0033FF]/[0.05] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center px-4 md:px-8">
                    <span className="text-gray-300 font-mono text-xl font-medium shrink-0 group-hover:text-[#0033FF]/40 transition-colors">
                      {board.id}
                    </span>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3 group-hover:text-[#0033FF] transition-colors">
                        {board.title}
                      </h3>
                      <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed break-keep">
                        {board.desc}
                      </p>
                    </div>
                    
                    <div className="shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0033FF] group-hover:border-[#0033FF] transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_15px_rgba(0,51,255,0.3)]">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
