import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, ArrowUpRight, Cpu, PenTool, Code2, LineChart } from 'lucide-react';

const services = [
  {
    id: "01",
    shortTitle: "strategy",
    title: "데이터 기반 전략 수립",
    subtitle: "Strategy & Analysis",
    desc: "RFP 분석, 트렌드 스캔부터 IA(정보 설계) 구조 추천까지, 비즈니스 맥락에 맞는 차별화된 전략을 수립합니다.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: "02",
    shortTitle: "design",
    title: "AI 고속 프로토타이핑",
    subtitle: "Design & UX",
    desc: "Figma AI 등 디자인 통합 도구를 활용해 와이어프레임과 UI 레이아웃을 빠르게 생성하고, 브랜드 감성에 맞는 UX 로직을 설계합니다.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: "03",
    shortTitle: "build",
    title: "바이브 코딩 및 무결점 검증",
    subtitle: "Build & Test",
    desc: "자연어 기반 코딩으로 퍼블리싱 속도를 혁신하며, 자동화된 엣지 케이스 테스트와 보안 취약점 스캔으로 무결점 산출물을 제공합니다.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: "04",
    shortTitle: "operation",
    title: "데이터 기반 성과 고도화",
    subtitle: "Operation & SEO/GA",
    desc: "사용자 로그 요약 및 AEO/GEO/SEO 검색 엔진 최적화 전략을 통해 선제적으로 비즈니스 고도화를 제안합니다.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    icon: <LineChart className="w-6 h-6" />
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5] text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-12 text-gray-900">
            Our Services
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between pt-8">
            <div className="flex gap-6 items-start">
               <div className="border-l-2 border-[#FF6B00] pl-4">
                 <div className="text-gray-900 font-mono text-lg">002</div>
                 <div className="text-gray-500 font-mono text-sm mt-1">plat-form</div>
               </div>
               <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl tracking-tight text-gray-800 break-keep">
                 인간의 전략적 통찰과 AI의 생산성을 결합한 서비스를 소개합니다.
               </h3>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed break-keep">
              고객의 디지털 자산을 통합적으로 관리하는 원스톱 서비스
            </p>
          </div>
        </div>

        {/* Interactive Accordion Area */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] border-t border-gray-200 mt-16">
          
          {/* Accordion Panels */}
          <div className="flex flex-col lg:flex-row flex-1 h-full">
            {services.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={s.id}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200
                    ${isActive ? 'lg:w-[360px] bg-[#FF6B00] h-[400px] lg:h-full' : 'lg:w-[100px] bg-white hover:bg-gray-50 h-[80px] lg:h-full'}
                  `}
                >
                  <div className="p-6 h-full flex lg:flex-col items-center lg:items-start justify-between lg:justify-start">
                    {/* Header (Number + Arrow) */}
                    <div className="flex items-center gap-3 lg:mb-8">
                      {isActive ? (
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      ) : (
                        <ArrowDown className="w-6 h-6 text-gray-400 hidden lg:block" />
                      )}
                      <span className={`font-mono text-2xl lg:text-3xl ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {s.id}
                      </span>
                      {/* Mobile Title (only visible when inactive on mobile) */}
                      {!isActive && (
                        <span className="lg:hidden text-gray-500 font-medium ml-4">{s.subtitle}</span>
                      )}
                    </div>
                    
                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="flex flex-col h-full w-full mt-4 lg:mt-0 text-white"
                        >
                          <h4 className="text-2xl font-medium mb-4 tracking-tight leading-snug">{s.subtitle}</h4>
                          <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3 lg:line-clamp-none">
                            {s.desc}
                          </p>
                          
                          <div className="mt-auto hidden lg:block">
                            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden mb-6 shadow-lg">
                              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex items-center gap-3 text-white">
                              {s.icon}
                              <span className="text-sm font-mono uppercase tracking-widest">{s.shortTitle}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detailed Content Panel (Right Side) */}
          <div className="w-full lg:w-[450px] xl:w-[500px] bg-white p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 border-gray-200">
            <div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-10 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <span>Core Services</span>
                <span>{activeIndex + 1} / 4</span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl lg:text-4xl font-medium leading-tight mb-6 tracking-tight break-keep text-gray-900">
                    {services[activeIndex].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed break-keep font-light text-lg">
                    {services[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Dot Grid */}
            <div className="hidden lg:grid grid-cols-8 gap-6 mt-20 opacity-40">
              {Array.from({ length: 32 }).map((_, i) => {
                // Randomly color a few dots orange for the tech vibe
                const isOrange = i === 12 || i === 19 || i === 27;
                return (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full ${isOrange ? 'bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]' : 'bg-gray-300'}`}
                  ></div>
                );
              })}
            </div>
            
            {/* Mobile Image (shows only on mobile since it's hidden in the accordion) */}
            <div className="lg:hidden mt-12 aspect-video w-full rounded-xl overflow-hidden">
              <img src={services[activeIndex].img} alt={services[activeIndex].title} className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
