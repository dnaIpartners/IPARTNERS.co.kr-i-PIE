import React from 'react';

export default function Partnership() {
  return (
    <section className="py-24 md:py-40 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">WHY IPARTNERS</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight break-keep text-gray-300">
            IPARTNERS는 검증된 파트너십과 실행력을 바탕으로<br className="hidden md:block" />
            고객의 비즈니스와 함께 성장하는 협업 관계를 구축합니다.
          </h2>
        </div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-32 pb-32">
          {/* Point 1 */}
          <div className="relative pl-12 md:pl-24 flex flex-col md:flex-row md:items-center justify-between group">
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Trust & Partnership</h4>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">신뢰를 기반으로 한<br />장기 파트너십</h3>
              <p className="text-gray-400 text-base leading-relaxed break-keep font-light">
                오랜 시간 검증된 역량과 안정적인 조직 운영으로<br />
                고객사와 굳건한 파트너십을 유지하고 있습니다.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <circle cx="70" cy="100" r="50" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="130" cy="100" r="50" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          {/* Point 2 */}
          <div className="relative pl-12 md:pl-24 flex flex-col md:flex-row md:items-center justify-between group">
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Expertise & Experience</h4>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">중대형 프로젝트 경험으로<br />검증된 전문성</h3>
              <p className="text-gray-400 text-base leading-relaxed break-keep font-light">
                업계 선두 기업들의 대규모 프로젝트를 성공적으로 수행하며<br />
                축적된 노하우와 전문성을 보유하고 있습니다.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M100 20V180M20 100H180M45 45L155 155M155 45L45 155" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          {/* Point 3 */}
          <div className="relative pl-12 md:pl-24 flex flex-col md:flex-row md:items-center justify-between group">
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Passion & Challenge</h4>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">창조적인 열정과<br />도전정신</h3>
              <p className="text-gray-400 text-base leading-relaxed break-keep font-light">
                변화를 두려워하지 않고 새로운 트렌드와 기술을<br />
                적극적으로 수용하여 혁신적인 결과물을 창출합니다.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <svg width="160" height="160" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <path d="M20 100C50 50 150 50 180 100C150 150 50 150 20 100Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M50 100C70 70 130 70 150 100C130 130 70 130 50 100Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M100 20V180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <p className="text-lg md:text-xl text-gray-400 mb-16 break-keep font-light">
            IPARTNERS는 국내 주요 기업들과 장기 협업을 통해 함께 성장해오며<br className="hidden md:block" />
            안정적인 파트너십으로 경쟁력을 이어가고 있습니다.
          </p>
          
          {/* Client Logos Grid (Placeholder text for logos) */}
        </div>
      </div>
    </section>
  );
}
