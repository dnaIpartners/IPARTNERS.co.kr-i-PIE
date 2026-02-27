import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Layers, Smile, User, Settings, DollarSign, Activity, Cpu, Database, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 md:py-40 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Existing About Content */}
        <div className="mb-20">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">ABOUT IPARTNERS AI DIVISION</h3>
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
              <h3 className="text-sm font-bold tracking-[0.2em] text-[#0033FF] uppercase mb-6">New AI DIVISION</h3>
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
                  <div className="relative w-32 h-32">
                    {/* Base Pie (Full circle) */}
                    <div className="absolute inset-0 rounded-full bg-[#FDFDFD] shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_10px_30px_rgba(0,0,0,0.08)] border border-white"></div>
                    
                    {/* Recessed area for the slice (Quarter circle top-right) */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100/50 rounded-tr-full shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05)] border-l border-b border-gray-200/50 overflow-hidden">
                       {/* Glowing Insight Dot inside the recess */}
                       <div className="relative w-full h-full">
                         <motion.div 
                           animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.8, 0.4] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                           className="absolute bottom-2 left-2 w-6 h-6 bg-[#0033FF] rounded-full blur-[4px]"
                         />
                         <div className="absolute bottom-3 left-3 w-4 h-4 bg-[#0033FF] rounded-full shadow-[0_0_10px_rgba(0,51,255,0.5)]"></div>
                       </div>
                    </div>

                    {/* The Floating Slice */}
                    <motion.div 
                      animate={{ x: [0, 18, 0], y: [0, -18, 0], rotate: [0, 15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute top-0 right-0 w-16 h-16 bg-[#FDFDFD] rounded-tr-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),-4px_4px_15px_rgba(0,0,0,0.08)] border border-white origin-bottom-left flex items-center justify-center z-20"
                    >
                      {/* A small accent on the slice to make it look like data */}
                      <div className="w-3 h-3 rounded-full bg-gray-200 shadow-inner mb-4 ml-4"></div>
                    </motion.div>
                    
                    {/* Center dot to anchor the pie */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FDFDFD] rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,1)] border border-white z-30"></div>
                  </div>
                  
                  {/* Floating data particles around */}
                  <motion.div 
                    animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 left-12 w-2 h-2 rounded-full bg-gray-400"
                  />
                  <motion.div 
                    animate={{ y: [0, 15, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 right-10 w-3 h-3 rounded-full bg-gray-300"
                  />
                  <motion.div 
                    animate={{ y: [0, -8, 0], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-6 w-4 h-4 rounded-full bg-gray-200"
                  />
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
                <div className="h-48 flex flex-col items-center justify-center mb-8 relative w-full">
                  {/* Floating particles */}
                  <motion.div 
                    animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 left-8 w-3 h-3 rounded-full bg-[#0033FF]/20 border border-[#0033FF]/30"
                  />
                  <motion.div 
                    animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-[#0033FF]/20 border border-[#0033FF]/30"
                  />

                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Top Layer: Creative */}
                    <motion.div 
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                      className="absolute z-30 w-32 h-14 bg-[#FDFDFD] rounded-2xl shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_15px_25px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center"
                      style={{ top: '20px' }}
                    >
                      <span className="text-[11px] font-bold text-gray-800 tracking-widest">CREATIVE</span>
                    </motion.div>
                    
                    {/* Middle Layer: AI Logic */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      className="absolute z-20 w-40 h-14 bg-[#FDFDFD] rounded-2xl shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_15px_25px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center"
                      style={{ top: '60px' }}
                    >
                      <span className="text-[11px] font-bold text-gray-600 tracking-widest">AI LOGIC</span>
                    </motion.div>

                    {/* Bottom Layer: Data */}
                    <motion.div 
                      animate={{ y: [0, 0, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      className="absolute z-10 w-48 h-14 bg-[#FDFDFD] rounded-2xl shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_15px_25px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center"
                      style={{ top: '100px' }}
                    >
                      <span className="text-[11px] font-bold text-gray-400 tracking-widest">DATA BASE</span>
                    </motion.div>
                  </div>
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
                  {/* Orbiting Track */}
                  <div className="absolute w-36 h-36 rounded-full border border-gray-100/50"></div>
                  
                  {/* Orbiting Elements Container */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-36 h-36 rounded-full z-20"
                  >
                    {/* Tech Icon 1 (0 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '-20px', left: '52px' }}
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                    </motion.div>
                    
                    {/* Tech Icon 2 (060 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '16px', left: '114px' }}
                    >
                      <Activity className="w-4 h-4 text-gray-400" />
                    </motion.div>

                    {/* Tech Icon 3 (120 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '88px', left: '114px' }}
                    >
                      <Layers className="w-4 h-4 text-gray-400" />
                    </motion.div>

                    {/* Tech Icon 4 (180 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '124px', left: '52px' }}
                    >
                      <Cpu className="w-4 h-4 text-gray-400" />
                    </motion.div>

                    {/* Tech Icon 5 (240 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '88px', left: '-10px' }}
                    >
                      <Database className="w-4 h-4 text-gray-400" />
                    </motion.div>

                    {/* Tech Icon 6 (300 deg) */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute w-10 h-10 bg-[#FDFDFD] rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,1),0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white"
                      style={{ top: '16px', left: '-10px' }}
                    >
                      <Cloud className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </motion.div>

                  {/* Central Element: Easy as Pie */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-24 h-24 rounded-full bg-[#0033FF]/10 blur-md"
                    />
                    <div className="w-20 h-20 relative flex items-center justify-center">
                      {/* Base Pie */}
                      <div className="absolute inset-0 rounded-full bg-[#FDFDFD] shadow-[inset_0_2px_10px_rgba(255,255,255,1),0_10px_30px_rgba(0,0,0,0.08)] border border-white"></div>
                      
                      {/* Recessed slice (top-right) */}
                      <div className="absolute top-0 right-0 w-10 h-10 bg-gray-100/60 rounded-tr-full shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05)] border-l border-b border-gray-200/60"></div>
                      
                      <span className="relative z-10 font-black text-[#0033FF] tracking-tighter text-base -translate-x-1 translate-y-1">i-PIE</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-3">Easy as Pie</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                 복잡한 AI 기술도 아이파트너즈를 만나면 파이처럼 쉽고 달콤한 경험이 됩니다.
                </p>
              </motion.div>
            </div>

            {/* Bottom Tags (Marquee) */}
            <div className="relative flex overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex whitespace-nowrap gap-3 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { name: 'Scalable Solutions', icon: <Layers size={14} /> },
                  { name: 'Personalized Experiences', icon: <Smile size={14} /> },
                  { name: 'Cost Effective', icon: <DollarSign size={14} /> },
                  { name: 'Real-Time Insights', icon: <Activity size={14} /> },
                  { name: 'Automation', icon: <Settings size={14} /> },
                  { name: 'Scalable Solutions', icon: <Layers size={14} /> },
                  { name: 'Personalized Experiences', icon: <Smile size={14} /> },
                  { name: 'Cost Effective', icon: <DollarSign size={14} /> },
                  { name: 'Real-Time Insights', icon: <Activity size={14} /> },
                  { name: 'Automation', icon: <Settings size={14} /> }
                ].map((tag, i) => (
                  <div key={i} className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 text-sm text-gray-600 flex items-center gap-2 shrink-0">
                    <span className="text-gray-400">{tag.icon}</span>
                    {tag.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
