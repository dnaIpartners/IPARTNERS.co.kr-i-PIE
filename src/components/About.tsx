import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Layers, Smile, User, Settings, DollarSign, Activity } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-40 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Existing About Content */}
        <div className="mb-20">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">ABOUT IPARTNERS AI Team</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight break-keep"> 
            <span className="text-black">단순한 파트너를 넘어</span>,<br className="hidden md:block" />IPARTNERS는 지속 가능한 성장을 함께 고민하며 오랫동안 믿고 맡길 수 있는 디지털 혁신 파트너가 되겠습니다.       
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl break-keep leading-relaxed font-light">        
            내부 업무 프로세스에 최신 AI 기술을 완벽히 내재화하여 비효율적인 반복 작업을 제거하고, <br className="hidden md:block" />프로젝트 구축 리드타임을 획기적으로 단축합니다. 
            이렇게 시스템화된 '지능형 워크플로우(AI-Human Intelligent Workflow)'를 통해 전 팀원의 역량을 상향 평준화하며, 변함없이 안정적이고 완성도 높은 최상의 디지털 경험을 만들어 갑니다.
          </p>
        </div>


        {/* New i-PIE Section */}
        <div className="mt-20 pt-24 border-t border-gray-200">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#0033FF] uppercase mb-6">New AI Team</h3>
              <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter">i-PIE</h2>
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-serif italic">"The Perfect Recipe for Success."</p>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto break-keep leading-relaxed font-light">
                복잡한 기술을 조합하는 것이 아니라, 아이파트너즈의 경험과 AI를 통해<br className="hidden md:block" />
                성공을 위한 최적의 조합을 만들어내는 조직
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us Section (Neumorphic Style) */}
          <div className="mt-8 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#FDFDFD] p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center text-center"
              >
                <div className="h-48 flex items-center justify-center mb-8 relative w-full">
                  <div className="w-32 h-32 rounded-full bg-[#FDFDFD] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02),0_10px_30px_rgba(0,0,0,0.06)] relative flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-gray-800 rounded-full z-10 shadow-sm"></div>
                    <div className="absolute w-1.5 h-12 bg-gray-200 rounded-full origin-bottom -translate-y-6 rotate-[60deg] shadow-sm"></div>
                    <div className="absolute top-4 right-6 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">A Slice of Insight</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                파이 한 조각을 떼어내듯, 방대한 데이터 속에서 클라이언트가 바로 실행할 수 있는 핵심 통찰만 골라냅니다.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FDFDFD] p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center text-center"
              >
                <div className="h-48 flex items-end justify-center gap-3 pb-6 mb-8 relative w-full">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-full px-3 py-1 text-[10px] font-bold text-gray-600 z-10">80% Automation</div>
                  <div className="absolute top-1/2 right-2 bg-white shadow-sm rounded-full px-3 py-1 text-[10px] font-bold text-gray-600 z-10">10% Cost</div>
                  <div className="absolute left-0 bottom-12 -rotate-90 text-[10px] font-bold text-gray-400 tracking-widest">AFTER</div>
                  
                  <div className="w-8 h-12 bg-[#FDFDFD] shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] rounded-t-xl border border-white"></div>
                  <div className="w-8 h-20 bg-[#FDFDFD] shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] rounded-t-xl border border-white"></div>
                  <div className="w-8 h-32 bg-[#FDFDFD] shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] rounded-t-xl border border-white"></div>
                  <div className="w-8 h-16 bg-[#FDFDFD] shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] rounded-t-xl border border-white"></div>
                  <div className="w-8 h-10 bg-[#FDFDFD] shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.05)] rounded-t-xl border border-white"></div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Layered Strategy</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                파이의 단면처럼 전략도 층층이 쌓입니다. 견고한 데이터 기반 위에 AI 로직을 얹고, 그 위에 크리에이티브한 결과물을 완성합니다.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FDFDFD] p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center text-center"
              >
                <div className="h-48 flex items-center justify-center mb-8 relative w-full">
                  <div className="w-24 h-24 rounded-full bg-[#FDFDFD] shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_10px_30px_rgba(0,0,0,0.06)] flex items-center justify-center z-10 border border-white">
                    <Layers className="w-8 h-8 text-black" fill="currentColor" />
                  </div>
                  {/* Orbiting users */}
                  <div className="absolute top-6 left-6 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-50">
                    <User className="w-4 h-4 text-gray-800" fill="currentColor" />
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-50">
                    <User className="w-4 h-4 text-gray-800" fill="currentColor" />
                  </div>
                  <div className="absolute top-1/2 right-6 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-50">
                    <User className="w-4 h-4 text-gray-800" fill="currentColor" />
                  </div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Easy as Pie</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                 복잡한 AI 기술도 아이파트너즈를 만나면 파이처럼 쉽고 달콤한 경험이 됩니다.
                </p>
              </motion.div>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Scalable Solutions', icon: <Layers size={14} /> },
                { name: 'Personalized Experiences', icon: <Smile size={14} /> },
                { name: 'Cost Effective', icon: <DollarSign size={14} /> },
                { name: 'Real-Time Insights', icon: <Activity size={14} /> },
                { name: 'Automation', icon: <Settings size={14} /> }
              ].map((tag, i) => (
                <div key={i} className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-gray-400">{tag.icon}</span>
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
