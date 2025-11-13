import { useState } from 'react';
import { GraduationCap, Briefcase, Users, Sparkles, Check, ArrowRight, Gift, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: GraduationCap,
    title: '제휴 대학생',
    subtitle: '전국 180+ 대학교',
    image: 'https://cdn.midjourney.com/514fae34-055a-4bd0-9693-df96a922dd71/0_2.png',
    benefits: [
      (<>재학생 <strong style={{ fontWeight: 800 }}>학생증 제시</strong>로 <strong style={{ fontWeight: 800 }}>즉시 할인</strong></>),
      (<>안과·피부과·모발이식 <strong style={{ fontWeight: 800 }}>최대 49% 할인</strong></>),
      (<>가족/친구 동반 시 <strong style={{ fontWeight: 800 }}>추가 할인 제공</strong></>),
      (<>연간 <strong style={{ fontWeight: 800 }}>무료 건강검진</strong> 1회</>)
    ],
    color: 'from-purple-500 to-purple-600',
    badge: 'bg-purple-500'
  },
  {
    icon: Briefcase,
    title: '제휴 기업 임직원',
    subtitle: '우량 기업 파트너',
    image: 'https://cdn.midjourney.com/9c19b2db-f052-4f9f-95fa-b8bf3eea2aad/0_3.png',
    benefits: [
      (<><strong style={{ fontWeight: 800 }}>사원증 또는 재직증명서</strong>로 <strong style={{ fontWeight: 800 }}>즉시 할인</strong></>),
      (<>안과·피부과·모발이식 <strong style={{ fontWeight: 800 }}>최대 49% 할인</strong></>),
      (<>가족/친구 동반 시 <strong style={{ fontWeight: 800 }}>추가 할인 제공</strong></>),
      (<>연간 <strong style={{ fontWeight: 800 }}>무료 건강검진</strong> 1회</>)
    ],
    color: 'from-pink-500 to-pink-600',
    badge: 'bg-pink-500'
  },
  {
    icon: Users,
    title: '가족 동반 혜택',
    subtitle: '함께하는 건강관리',
    image: 'https://cdn.midjourney.com/bf3cf782-a50b-4119-8cf1-c630ffb9a00a/0_1.png',
    benefits: [
      (<><strong style={{ fontWeight: 800 }}>제휴 회원 가족 증빙</strong>으로 할인</>),
      (<>안과·피부과·모발이식 <strong style={{ fontWeight: 800 }}>최대 49% 할인</strong></>),
      (<>가족 동반 시 <strong style={{ fontWeight: 800 }}>동일 혜택 적용</strong></>),
      (<>연간 <strong style={{ fontWeight: 800 }}>무료 건강검진</strong> 1회</>)
    ],
    color: 'from-purple-400 to-pink-500',
    badge: 'bg-purple-400'
  }
];

export function PartnerBenefitsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 모바일용 슬라이드 (가족 동반 혜택 제외)
  const mobileBenefits = benefits.filter(b => b.title !== '가족 동반 혜택');
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileBenefits.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileBenefits.length) % mobileBenefits.length);
  };
  
  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-4">
            <Gift className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700 }}>
              SPECIAL BENEFITS
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.3 }}>
            제휴 파트너 특별 혜택
          </h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500, lineHeight: 1.6 }}>
            제휴를 통해, 프리미엄 메디컬 케어를 경험할 수 있도록 제공합니다
          </p>
        </div>

        {/* Benefits Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={benefit.image}
                    alt={benefit.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${index === 0 ? 'object-[center_30%]' : 'object-top'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white mb-0.5" style={{ fontSize: '19px', fontWeight: 800 }}>
                      {benefit.title}
                    </h3>
                    <p className="text-white/95" style={{ fontSize: '12px', fontWeight: 600 }}>
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Discount Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${benefit.badge} text-white rounded-full mb-4 shadow-sm`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span style={{ fontSize: '13px', fontWeight: 800 }}>
                      최대 49% 할인
                    </span>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2.5">
                    {benefit.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700" style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Slider - Mobile Only */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mobileBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                      {/* Image with Navigation Buttons */}
                      <div className="relative h-44 overflow-hidden">
                        <ImageWithFallback
                          src={benefit.image}
                          alt={benefit.title}
                          className={`w-full h-full object-cover ${index === 0 ? 'object-[center_30%]' : 'object-top'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md">
                            <Icon className="w-5 h-5 text-purple-600" />
                          </div>
                        </div>
                        
                        {/* Navigation Buttons in Image Area */}
                        <button
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-purple-600 active:scale-95 transition-transform z-10"
                          aria-label="이전"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-purple-600 active:scale-95 transition-transform z-10"
                          aria-label="다음"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        {/* Title on Image */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white mb-0.5" style={{ fontSize: '18px', fontWeight: 800 }}>
                            {benefit.title}
                          </h3>
                          <p className="text-white/95" style={{ fontSize: '11px', fontWeight: 600 }}>
                            {benefit.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Discount Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${benefit.badge} text-white rounded-full mb-4 shadow-sm`}>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span style={{ fontSize: '12px', fontWeight: 800, lineHeight: 1.3 }}>
                            최대 49% 할인
                          </span>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2">
                          {benefit.benefits.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700" style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.6 }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mobileBenefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-purple-600 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`슬라이드 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-lg">
          <h3 className="text-white mb-3" style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800 }}>
            지금 바로 제휴 혜택을 확인하세요
          </h3>
          <p className="text-white/95 mb-2 max-w-xl mx-auto" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.6 }}>
            간단한 인증만으로 혜택 제공
          </p>
          <p className="text-white mb-5 max-w-xl mx-auto" style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.4 }}>
            최대 49% 할인
          </p>
          <button 
            onClick={() => {
              const contactForm = document.getElementById('contact-form');
              contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-8 py-3.5 bg-white text-purple-600 rounded-full hover:shadow-xl transition-all inline-flex items-center gap-2 hover:scale-105" 
            style={{ fontSize: '15px', fontWeight: 800 }}
          >
            무료 상담 신청하기
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
