import React from 'react';

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle noise background to match the image texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0">
          
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

          {/* Left Column: DX 1.0 */}
          <div className="md:pr-16 lg:pr-24 flex flex-col items-end text-right">
            <h2 className="text-5xl md:text-6xl font-black text-[#555555] tracking-tighter flex items-start">
              DX <span className="text-2xl md:text-3xl font-bold ml-1 mt-1">1.0</span>
            </h2>
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#555555] mt-4 uppercase">
              Functional Experience
            </h3>
            
            <p className="text-[#888888] mt-12 text-lg break-keep leading-relaxed max-w-sm">
              기능(Function)과 정보(Information) 중심의 설계.<br />
              사용자의 목적 달성을 위한 효율성에 집중했습니다.
            </p>

            <div className="w-full mt-16 flex flex-col">
              {/* Item 1 */}
              <div className="flex items-center justify-end py-8 border-t border-white/5">
                <div className="mr-6">
                  <h4 className="text-lg font-bold text-[#888888] tracking-wider mb-1 uppercase font-mono">Interface Design</h4>
                  <p className="text-sm text-[#555555] font-mono">Graphical User Interface</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#444444]"></div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-end py-8 border-t border-white/5">
                <div className="mr-6">
                  <h4 className="text-lg font-bold text-[#888888] tracking-wider mb-1 uppercase font-mono">Static Assets</h4>
                  <p className="text-sm text-[#555555] font-mono">Fixed Media Content</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#444444]"></div>
              </div>
              {/* Item 3 */}
              <div className="flex items-center justify-end py-8 border-t border-b border-white/5">
                <div className="mr-6">
                  <h4 className="text-lg font-bold text-[#888888] tracking-wider mb-1 uppercase font-mono">Hard Coded</h4>
                  <p className="text-sm text-[#555555] font-mono">Rule-based Logic</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#444444]"></div>
              </div>
            </div>
          </div>

          {/* Right Column: AX 2.0 */}
          <div className="md:pl-16 lg:pl-24 flex flex-col items-start text-left">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-start">
              AX <span className="text-2xl md:text-3xl font-bold text-[#3B82F6] ml-1 mt-1">2.0</span>
            </h2>
            <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#3B82F6] mt-4 uppercase">
              Narrative Experience
            </h3>
            
            <p className="text-gray-200 mt-12 text-lg break-keep leading-relaxed max-w-sm">
              서사(Narrative)와 페르소나(Persona) 중심의 설계.<br />
              사용자와 정서적으로 교감하는 가상 존재를 창조합니다.
            </p>

            <div className="w-full mt-16 flex flex-col">
              {/* Item 1 */}
              <div className="flex items-center justify-start py-8 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-white tracking-wider mb-1 uppercase font-mono">Virtual Identity</h4>
                  <p className="text-sm text-[#3B82F6] font-mono">AI-Driven Character & IP</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex items-center justify-start py-8 border-t border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-white tracking-wider mb-1 uppercase font-mono">Generative Storytelling</h4>
                  <p className="text-sm text-[#3B82F6] font-mono">Infinite Context Creation</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex items-center justify-start py-8 border-t border-b border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-white tracking-wider mb-1 uppercase font-mono">Emotional Intelligence</h4>
                  <p className="text-sm text-[#3B82F6] font-mono">Adaptive & Empathetic Systems</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
