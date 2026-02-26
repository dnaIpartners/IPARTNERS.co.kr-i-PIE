import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Layers, Smile } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 md:py-40 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Existing About Content */}
        <div className="mb-32">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">ABOUT IPARTNERS</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight break-keep">
            IPARTNERS는 <span className="text-black">단</span>기 성과보다<br />
            오랫동안 신뢰받는 파트너가 되는 것을 우선으로 생각합니다.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl break-keep leading-relaxed font-light">
            오랜 시간 축적된 경험과 안정적인 조직 운영으로 브랜드의 정체성을 강화하고,<br className="hidden md:block" />
            비즈니스 성과로 이어지는 디지털 경험을 만들어 갑니다.
          </p>
        </div>


        {/* New i-PIE Section */}
        <div className="mt-40 pt-32 border-t border-gray-200">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#FF6B00] uppercase mb-6">New AI Team</h3>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter">i-PIE</h2>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-serif italic">"The Perfect Recipe for Success."</p>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-keep leading-relaxed font-light">
                복잡한 기술을 조합하는 것이 아니라, 아이파트너즈의 경험과 AI를 통해<br className="hidden md:block" />
                성공을 위한 최적의 조합을 만들어내는 조직
              </p>
            </motion.div>
          </div>

          {/* 3 Symbolism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-[#FFF0E5] text-[#FF6B00] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <PieChart size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-2 tracking-tight">A Slice of Insight</h4>
              <p className="text-sm font-bold text-[#FF6B00] mb-6">통찰 한 조각</p>
              <p className="text-gray-500 leading-relaxed break-keep font-light">
                파이 한 조각을 떼어내는 형상은 방대한 데이터 속에서 클라이언트가 바로 먹을 수 있는(실행 가능한) 핵심 통찰만 골라낸다는 의미를 담고 있습니다.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-[#FFF0E5] text-[#FF6B00] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                <Layers size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-2 tracking-tight">Layered Strategy</h4>
              <p className="text-sm font-bold text-[#FF6B00] mb-6">층층이 쌓인 전략</p>
              <p className="text-gray-500 leading-relaxed break-keep font-light">
                파이의 단면(Layer) 로고를 활용하여 팀의 R&R을 시각화합니다. 견고한 데이터부터 크리에이티브까지 체계적으로 쌓아 올립니다.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-[#FFF0E5] text-[#FF6B00] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <Smile size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-2 tracking-tight">Easy as Pie</h4>
              <p className="text-sm font-bold text-[#FF6B00] mb-6">식은 죽 먹기</p>
              <p className="text-gray-500 leading-relaxed break-keep font-light">
                복잡한 AI 기술을 아이파트너즈를 통해 파이처럼 쉽고 달콤하게 경험하게 해준다는 에이전시만의 서비스 마인드를 강조합니다.
              </p>
            </motion.div>
          </div>

          {/* Layered Strategy Interactive Visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight">The i-PIE Architecture</h3>
              <p className="text-gray-500 mt-4">마우스 오버하여 각 레이어의 역할을 확인하세요.</p>
            </div>
            
            <div className="space-y-4 relative" style={{ perspective: '1000px' }}>
              {/* Topping */}
              <motion.div 
                initial={{ opacity: 0, rotateX: -20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#FF6B00] p-8 md:p-10 rounded-3xl text-white text-center relative overflow-hidden group cursor-pointer shadow-lg transform-gpu"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="font-black text-3xl tracking-widest uppercase mb-2">Topping</h4>
                  <p className="font-medium text-white/80">Creative Results</p>
                </div>
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
                  <p className="text-lg font-bold">크리에이티브한 결과물</p>
                </div>
              </motion.div>

              {/* Filling */}
              <motion.div 
                initial={{ opacity: 0, rotateX: -20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-[#FF9500] p-8 md:p-10 rounded-3xl text-white text-center relative overflow-hidden group cursor-pointer shadow-lg transform-gpu w-[95%] mx-auto"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="font-black text-3xl tracking-widest uppercase mb-2">Filling</h4>
                  <p className="font-medium text-white/80">AI Logic</p>
                </div>
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
                  <p className="text-lg font-bold">최적화된 AI 로직 및 알고리즘</p>
                </div>
              </motion.div>

              {/* Crust */}
              <motion.div 
                initial={{ opacity: 0, rotateX: -20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-[#8B5A2B] p-8 md:p-10 rounded-3xl text-white text-center relative overflow-hidden group cursor-pointer shadow-lg transform-gpu w-[90%] mx-auto"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <h4 className="font-black text-3xl tracking-widest uppercase mb-2">Crust</h4>
                  <p className="font-medium text-white/80">Solid Data (SEO/GA)</p>
                </div>
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
                  <p className="text-lg font-bold">견고한 기반이 되는 기존 데이터</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
