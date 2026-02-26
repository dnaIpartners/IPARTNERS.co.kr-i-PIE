import React from 'react';

const services = [
  {
    title: "Strategy Consulting",
    desc: "데이터 기반의 인사이트를 도출하여 비즈니스 목표 달성을 위한 최적의 디지털 전략을 수립합니다.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Web/App Build",
    desc: "사용자 중심의 UI/UX 설계와 최신 기술을 적용하여 안정적이고 확장 가능한 웹/앱 플랫폼을 구축합니다.",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Social Marketing",
    desc: "브랜드 아이덴티티에 맞는 콘텐츠 기획과 타겟 맞춤형 매체 운영으로 소셜 미디어 영향력을 극대화합니다.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Promotion/Campaign",
    desc: "온/오프라인을 아우르는 통합 마케팅 캠페인을 통해 브랜드 인지도 상승과 고객 참여를 유도합니다.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Maintenance Service",
    desc: "체계적인 운영 프로세스와 전담 인력을 통해 디지털 플랫폼의 안정적인 유지보수와 지속적인 고도화를 지원합니다.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Data Analysis",
    desc: "다양한 채널의 데이터를 수집하고 분석하여 마케팅 성과를 측정하고, 데이터 기반의 의사결정을 지원합니다.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">Our Service</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight break-keep">
            IPARTNERS는 핵심 가치를 기반으로 웹사이트 구축에서 운영, 마케팅까지<br className="hidden md:block" />
            고객의 디지털 자산을 통합적으로 관리하는 원스톱 디지털 서비스를 제공합니다.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-4xl break-keep leading-relaxed font-light">
            전문 조직 간의 유기적인 협업 체계와 풍부한 프로젝트 경험을 통해<br className="hidden md:block" />
            비즈니스 성과를 위한 모든 디지털 과정을 하나로 연결합니다.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="mb-20 last:mb-0 group">
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                <div className="md:w-1/3 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-gray-500 text-base leading-relaxed break-keep font-light">{service.desc}</p>
                </div>
                <div className="md:w-2/3">
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100 rounded-lg">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
