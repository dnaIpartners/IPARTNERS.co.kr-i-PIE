import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const faqs = [
  {
    question: "'AI 내재화(AX)'란 구체적으로 어떤 의미인가요?",
    answer: "기존 에이전시들이 실무자 개인의 재량에 맡겨 파편화된 AI 툴을 사용하는 것과 달리, 아이파트너즈는 오랜 시간 축적된 성공 노하우를 조직 전체의 AI 시스템으로 자산화하는 것을 의미합니다. 개인의 역량이나 컨디션, 인력 변동에 흔들리지 않고 일관성 있게 상향 평준화된 최상의 산출물을 도출할 수 있는 지능형 워크플로우를 구축하고 있습니다."
  },
  {
    question: "AI 도입으로 실무 전문가의 역할이 축소되나요?",
    answer: "그렇지 않습니다. 아이파트너즈는 AI는 사람을 대신하는 것이 아니라 역량을 끌어올리는 것으로 정의합니다. 방대한 자료 분석, 초기 UI 레이아웃 세팅, 단순 코딩 등 소모적인 반복 작업은 AI가 초고속으로 처리합니다. 반면, 우리 전문가들은 이렇게 확보된 시간을 바탕으로 비즈니스 맥락 해석, 차별화 전략 수립, 브랜드 고유의 감성 조율 등 인간만이 할 수 있는 고부가가치 업무와 품질 향상에 온전히 집중합니다."
  },
  {
    question: "담당자 변경 시에도 프로젝트 품질이 유지되나요?",
    answer: "전혀 문제없습니다. 아이파트너즈는 담당자 개인에게 지식이 파편화되던 기존 에이전시의 '인력 리스크'를 조직적 AI 내재화(AX)를 통해 근본적으로 해결했습니다. 프로젝트를 통해 축적된 성공 케이스와 맞춤형 운영 노하우는 전사 공유 라이브러리인 'Knowledge Hub'에 영구적인 지식으로 자산화됩니다. 따라서 담당자가 변경되더라도 시스템에 축적된 지능을 통해 흔들림 없이 일관된 상향 평준화 품질을 보장합니다."
  },
  {
    question: "내부 직원의 AI 전문성 역량은 어떻게 관리하나요?",
    answer: "전 구성원을 순수 실행 인력에서 '비즈니스 아키텍트'로 성장시키기 위해 체계적인 3단계 교육 로드맵(AI 리터러시 기초 → 역할별 마스터리 심화 → 비즈니스 아키텍트 전략 설계)을 운영하고 있습니다. 또한, 내부 지능형 플랫폼인 'i-AX'의 Knowledge Hub를 통해 직무별로 검증된 프롬프트와 성공 노하우를 전사적으로 공유하여, 모든 팀원이 최상위 수준의 실무 역량을 발휘하도록 지원합니다."
  },
  {
    question: "클라이언트가 얻는 핵심 혜택은 무엇인가요?",
    answer: "가장 큰 혜택은 프로젝트의 '압도적인 속도'와 '일관된 품질'을 동시에 확보할 수 있다는 점입니다. AI 에이전트를 통해 기획부터 디자인, 개발 테스트에 이르는 전체 구축 리드타임을 30% 이상 획기적으로 단축합니다. 클라이언트는 더 빠른 런칭 속도로 시장 경쟁력을 선점할 뿐만 아니라, 운영 단계에서도 AI 데이터 분석을 기반으로 한 선제적인 비즈니스 고도화 전략을 제안받으실 수 있습니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8F8F8] text-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
          >
            <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
              ?
            </div>
            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">FAQS</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 tracking-tight"
          >
            Questions? Answers!
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            AI 도입에 대해 자주 묻는 핵심 질문들을 확인해보세요.
          </motion.p>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                key={index} 
                className="bg-[#FDFDFD] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 pr-8 break-keep group-hover:text-[#0033FF] transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-gray-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-500 text-base leading-relaxed break-keep font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3 text-gray-800"
        >
          <Mail className="w-5 h-5" />
          <p className="text-base md:text-lg font-medium">
            Feel free to mail us for any enquiries : <a href="mailto:ai@ipartners.co.kr" className="underline underline-offset-4 hover:text-[#0033FF] transition-colors">ai@ipartners.co.kr</a>
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
