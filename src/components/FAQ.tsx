import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    id: "01",
    question: "생성형 AI 도입, 어디서부터 시작해야 하나요?",
    answer: "기업의 현재 데이터 인프라와 비즈니스 니즈를 정밀하게 분석하는 것에서 시작합니다. ROI(투자 수익률)를 극대화할 수 있는 핵심 영역을 식별하고, PoC 모델 개발부터 실제 서비스 파이프라인 구축까지 단계별 AX 로드맵을 제안해 드립니다."
  },
  {
    id: "02",
    question: "프롬프트 엔지니어링 서비스의 구체적인 범위는?",
    answer: "고객사의 비즈니스 목적에 맞게 LLM(거대 언어 모델)이 최적의 결과물을 낼 수 있도록 프롬프트를 설계하고 튜닝합니다. 챗봇, 자동화 문서 작성, 데이터 분석 등 다양한 영역에 적용 가능합니다."
  },
  {
    id: "03",
    question: "기업 내부 데이터를 보안 문제 없이 활용할 수 있나요?",
    answer: "네, 가능합니다. 프라이빗 클라우드 환경이나 온프레미스 구축을 통해 외부로 데이터가 유출되지 않는 안전한 AI 환경을 구성해 드립니다. 엔터프라이즈급 보안 기준을 준수합니다."
  },
  {
    id: "04",
    question: "기존 운영 중인 웹사이트나 앱에도 AI 기능을 붙일 수 있나요?",
    answer: "물론입니다. API 연동 방식을 통해 기존 시스템의 구조를 크게 변경하지 않고도 AI 챗봇, 추천 시스템, 자동화 기능 등을 유연하게 통합할 수 있습니다."
  },
  {
    id: "05",
    question: "AI 프로젝트 구축 기간은 통상적으로 얼마나 소요되나요?",
    answer: "프로젝트의 규모와 요구사항에 따라 다르지만, 일반적으로 PoC(개념 증명)는 4~8주, 본 서비스 구축 및 통합은 3~6개월 정도 소요됩니다. 초기 컨설팅을 통해 정확한 일정을 산출해 드립니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Title */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div>
              <span className="text-sm font-bold tracking-widest text-[#2563EB] uppercase">FAQ</span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter mb-8 text-black">
              COMMON<br />QUESTIONS
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed break-keep">
              AI 도입의 복잡성으로 인해 고민이 많으신가요?<br />
              자주 묻는 핵심 질문들을 확인해보세요.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="border-t border-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.id} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-8 flex items-start justify-between text-left focus:outline-none group"
                    >
                      <div className="flex gap-6 md:gap-10 items-start pr-8">
                        <span className="text-gray-300 font-mono text-lg font-medium mt-1">
                          {faq.id}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight break-keep">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 mt-2 text-gray-300">
                        {isOpen ? (
                          <X className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pl-[3.5rem] md:pl-[4.5rem] pr-4 md:pr-12">
                            <p className="text-gray-500 text-lg leading-relaxed break-keep font-light">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
