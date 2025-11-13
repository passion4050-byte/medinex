import { useState, useEffect } from 'react';
import { Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react';

// Real Before/After images
const beforeImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/b57fcd30966d7.png';
const afterImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/2b119ef959a40.png';
const beforeImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/87c19d7bafc54.jpg';
const afterImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/498c844340829.jpg';
const dermBeforeImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/3ad28f07d6294.jpg';
const dermAfterImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/a3c40e867ff49.jpg';
const dermBeforeImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/547bed29d70bb.jpg';
const dermAfterImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/2d814930a8c1a.jpg';

// Mobile Before/After Component
function MobileBeforeAfter({ before, after }: { before: string; after: string }) {
  const [showAfter, setShowAfter] = useState(false);
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${showAfter ? 100 : 0}%)` }}
      >
        <div className="flex-shrink-0 w-full">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
            <div className="relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-600" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px' }}>
                  BEFORE
                </span>
              </div>
              <img
                src={before}
                alt="시술 전"
                className="w-full h-56 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full pl-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
            <div className="relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-sm" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px' }}>
                  AFTER
                </span>
              </div>
              <img
                src={after}
                alt="시술 후"
                className="w-full h-56 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-6 py-2.5 rounded-full transition-all ${
            !showAfter 
              ? 'bg-purple-600 text-white shadow-lg scale-105' 
              : 'bg-gray-200 text-gray-600'
          }`}
          style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.3px' }}
        >
          BEFORE
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-6 py-2.5 rounded-full transition-all ${
            showAfter 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105' 
              : 'bg-gray-200 text-gray-600'
          }`}
          style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.3px' }}
        >
          AFTER
        </button>
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterData = [
    {
      before: beforeImage,
      after: afterImage,
      description: '⭐ 모발이식 시술 6개월 후',
      result: '자연스럽고 풍성한 모발 라인 완성'
    },
    {
      before: beforeImage2,
      after: afterImage2,
      description: '⭐ 헤어라인 교정 시술 후',
      result: 'M자 탈모 개선 및 자연스러운 헤어라인'
    },
    {
      before: dermBeforeImage,
      after: dermAfterImage,
      description: '⭐ 주름 개선 시술 후',
      result: '피부 탄력 회복 및 주름 개선 효과'
    },
    {
      before: dermBeforeImage2,
      after: dermAfterImage2,
      description: '⭐ 안면 윤곽 개선 시술 후',
      result: '부드러운 피부 톤 및 윤곽 라인 개선'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 rounded-full mb-4 shadow-md">
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600" style={{ fontSize: '12px', fontWeight: 700 }}>
              REAL RESULTS
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.3 }}>
            실제 시술 결과
          </h2>
          
          <p className="text-gray-700 max-w-xl mx-auto px-4" style={{ fontSize: 'clamp(13.5px, 3.5vw, 16px)', fontWeight: 500, lineHeight: 1.8 }}>
            MEDINEX의 <strong style={{ fontWeight: 700 }}>정밀한 진단과 시술</strong>로<br className="sm:hidden" /> 변화된<br className="hidden sm:block" />
            고객님들의 <strong style={{ fontWeight: 700 }}>실제 Before & After</strong>를<br className="sm:hidden" /> 확인하세요
          </p>
        </div>

        {/* Before/After Slides */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Slides */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {beforeAfterData.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    {/* Desktop: 2 columns */}
                    <div className="hidden md:grid grid-cols-2 gap-6 px-2">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
                        <div className="relative">
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-600" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                              BEFORE
                            </span>
                          </div>
                          <img
                            src={item.before}
                            alt="시술 전"
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                          />
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
                        <div className="relative">
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-sm" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                              AFTER
                            </span>
                          </div>
                          <img
                            src={item.after}
                            alt="시술 후"
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mobile: Single Image with Before/After Toggle */}
                    <div className="md:hidden px-2">
                      <MobileBeforeAfter before={item.before} after={item.after} />
                    </div>

                    <div className="mt-6 p-4 md:p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl md:rounded-3xl text-white text-center mx-2">
                      <p className="mb-1.5" style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                      <p style={{ fontSize: '15px', fontWeight: 900, lineHeight: 1.4 }}>
                        {item.result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls - Below Images */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110 border-2 border-purple-100"
                aria-label="이전"
              >
                <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-pink-600 transition-colors" />
              </button>

              {/* Dots Navigation */}
              <div className="flex gap-2">
                {beforeAfterData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      currentSlide === index
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'w-3 bg-purple-300 hover:bg-purple-400'
                    }`}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110 border-2 border-purple-100"
                aria-label="다음"
              >
                <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-pink-600 transition-colors" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {[
              { number: '98%', label: '만족도' },
              { number: '3,200+', label: '시술 건수' },
              { number: '15년', label: '경력 평균' },
              { number: '1:1', label: '맞춤 상담' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-md">
                <p className="text-indigo-600 mb-1" style={{ fontSize: 'clamp(24px, 4vw, 28px)', fontWeight: 900 }}>
                  {stat.number}
                </p>
                <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4" style={{ fontSize: '14px', fontWeight: 600 }}>
            나에게 맞는 시술이 궁금하신가요?
          </p>
          <button
            onClick={() => {
              const contactForm = document.getElementById('contact-form');
              contactForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transition-all inline-flex items-center gap-2" 
            style={{ fontSize: '15px', fontWeight: 700 }}
          >
            <Sparkles className="w-4 h-4" />
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
}
