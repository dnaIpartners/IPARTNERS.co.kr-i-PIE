import React from 'react';

export default function CTA() {
  return (
    <section className="py-40 bg-[#F5F5F5] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-8 tracking-tighter">
          Ready to grow?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 break-keep font-light">
          올바른 전략과 실행으로 비즈니스 성장을 함께할<br />
          파트너를 찾고 계신다면 IPARTNERS와 함께 하세요.
        </p>
        <button className="bg-black text-white rounded-full px-10 py-5 font-bold text-sm hover:bg-gray-800 transition-colors inline-flex items-center gap-3">
          Contact us
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Huge Background Text */}
      <div className="absolute bottom-[-10%] left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03]">
        <div className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap">
          IPARTNERS
        </div>
      </div>
    </section>
  );
}
