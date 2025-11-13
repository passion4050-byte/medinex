import { useState, useEffect } from 'react';
import { Eye, Sparkles, Scissors, Check, Star, ArrowRight, ChevronLeft, ChevronRight, Calendar, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const hairTransplantImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/d2c91fb16c963.jpg';

interface TreatmentCardsProps {
  onNavigate?: (page: 'home' | 'hair' | 'ophthalmology' | 'dermatology') => void;
}

const treatments = [
  {
    category: '안과',
    icon: Eye,
    title: '스마일라식/라섹 시력교정',
    description: '첨단 장비를 통한 정밀 검사로 개인별 맞춤 시력교정술 제공',
    image: 'https://bgneye.com/_images/smilepro/smile_zeiss_renew_img36.png',
    price: '양안 150만원대',
    discount: '40%',
    originalPrice: '250만원',
    features: ['무통 시술', '당일 일상복귀', '평생 보증', '1:1 맞춤'],
    color: 'from-purple-500 to-purple-600',
    badge: 'bg-purple-500',
    rating: 4.9,
    page: 'ophthalmology' as const
  },
  {
    category: '피부과',
    icon: Sparkles,
    title: '레이저 토닝/리프팅',
    description: '피부 깊숙이 작용하여 콜라겐 생성 촉진, 탄력 회복',
    image: 'https://cdn.midjourney.com/9d5ddc5d-7a43-44da-a34a-fcc864e40fad/0_0.png',
    price: '1회 9만원대',
    discount: '49%',
    originalPrice: '18만원',
    features: ['즉각적 효과', '무통 시술', '다운타임 無', '점심시간 가능'],
    color: 'from-pink-500 to-pink-600',
    badge: 'bg-pink-500',
    rating: 4.8,
    page: 'dermatology' as const
  },
  {
    category: '피부과',
    icon: Sparkles,
    title: '보톡스/필러 시술',
    description: '자연스러운 동안 효과를 위한\n프리미엄 제품과 정교한 시술',
    image: 'https://cdn.midjourney.com/fdbff543-a9a5-4751-a2b5-508744bc2a0d/0_3.png',
    price: '부위당 7만원대',
    discount: '49%',
    originalPrice: '14만원',
    features: ['정품 보증', '자연스러운 표정', '빠른 시술', '전문의 직접'],
    color: 'from-purple-400 to-pink-500',
    badge: 'bg-pink-400',
    rating: 4.9,
    page: 'dermatology' as const
  },
  {
    category: '모발이식',
    icon: Scissors,
    title: '비절개 모발이식',
    description: '흉터 없이 자연스러운\n모발 라인을 디자인하는 최신 이식술',
    image: hairTransplantImage,
    price: '1,000모 80만원대',
    discount: '45%',
    originalPrice: '145만원',
    features: ['무흉터', '빠른 회복', '높은 생착률', '평생 유지'],
    color: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-400',
    rating: 4.8,
    page: 'hair' as const
  }
];

export function TreatmentCards({ onNavigate }: TreatmentCardsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % treatments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatments.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-full mb-4 shadow-sm">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.3px' }}>
              POPULAR TREATMENTS
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.3 }}>
            인기 시술 프로그램
          </h2>
          
          <p className="text-gray-700 max-w-xl mx-auto px-4" style={{ fontSize: 'clamp(13.5px, 3.5vw, 16px)', fontWeight: 500, lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 700 }}>제휴 파트너 특별 할인가</strong>로<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>프리미엄 메디컬 케어</strong>를 경험하세요
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mb-8">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100/50 hover:border-purple-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-md">
                      <Icon className="w-4 h-4 text-purple-600" />
                      <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                        {treatment.category}
                      </span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-4 py-2 ${treatment.badge} text-white rounded-xl shadow-lg`}>
                      <span style={{ fontSize: '15px', fontWeight: 900 }}>
                        {treatment.discount} OFF
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-black/70 backdrop-blur-sm rounded-xl">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white" style={{ fontSize: '13px', fontWeight: 700 }}>
                        {treatment.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-800 mb-2.5" style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.3px' }}>
                    {treatment.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-5" style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.6 }}>
                    {treatment.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-purple-600" />
                        </div>
                        <span className="text-gray-700" style={{ fontSize: '12px', fontWeight: 600 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100/50 mb-5">
                    <div>
                      <p className="text-gray-400 mb-1 line-through" style={{ fontSize: '12px', fontWeight: 500 }}>
                        {treatment.originalPrice}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-purple-600" style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                          {treatment.price}
                        </p>
                      </div>
                    </div>
                    <div className="px-3.5 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
                      <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 800 }}>
                        제휴가
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate(treatment.page);
                      }
                    }}
                    className={`w-full py-3.5 bg-gradient-to-r ${treatment.color} text-white rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/btn flex items-center justify-center gap-2 hover:scale-[1.02]`} 
                    style={{ fontSize: '14px', fontWeight: 700 }}
                  >
                    예약 상담하기
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                
                return (
                  <div key={index} className="min-w-full px-1">
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md">
                      {/* Image with Navigation Buttons */}
                      <div className="relative h-48">
                        <ImageWithFallback
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 rounded-xl">
                            <Icon className="w-3.5 h-3.5 text-purple-600" />
                            <span className="text-purple-600" style={{ fontSize: '11px', fontWeight: 700 }}>
                              {treatment.category}
                            </span>
                          </div>
                        </div>

                        <div className="absolute top-3 right-3">
                          <div className={`px-3 py-1.5 ${treatment.badge} text-white rounded-xl`}>
                            <span style={{ fontSize: '13px', fontWeight: 800 }}>
                              {treatment.discount} OFF
                            </span>
                          </div>
                        </div>
                        
                        {/* Navigation Buttons in Image Area */}
                        <button
                          onClick={prevSlide}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-purple-600 active:scale-95 transition-transform z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-purple-600 active:scale-95 transition-transform z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-gray-800 mb-2" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.3 }}>
                          {treatment.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4" style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.6 }}>
                          {treatment.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {treatment.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <div className="w-3.5 h-3.5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-2 h-2 text-purple-600" />
                              </div>
                              <span className="text-gray-700" style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.4 }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
                          <div>
                            <p className="text-gray-400 mb-1 line-through" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.3 }}>
                              {treatment.originalPrice}
                            </p>
                            <p className="text-purple-600" style={{ fontSize: '17px', fontWeight: 900, lineHeight: 1.2 }}>
                              {treatment.price}
                            </p>
                          </div>
                        </div>

                        <button 
                          onClick={() => {
                            if (onNavigate) {
                              onNavigate(treatment.page);
                            }
                          }}
                          className={`w-full py-3 bg-gradient-to-r ${treatment.color} text-white rounded-2xl flex items-center justify-center gap-2`} 
                          style={{ fontSize: '14px', fontWeight: 700 }}
                        >
                          예약 상담하기
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {treatments.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { icon: TrendingUp, number: '3,200+', label: '월 시술' },
            { icon: Star, number: '4.9', label: '평균 평점' },
            { icon: Check, number: '98%', label: '만족도' }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100/50">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-purple-600 mb-1" style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 900 }}>
                  {stat.number}
                </p>
                <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
