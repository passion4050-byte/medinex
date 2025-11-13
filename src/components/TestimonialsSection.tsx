import { useState } from 'react';
import { Star, Quote, ThumbsUp, TrendingUp, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: '김*늘',
    age: 24,
    category: '대학생',
    university: '서울대학교',
    treatment: '라식 시력교정',
    rating: 5,
    comment: '제휴 할인으로 부담 없이 라식을 받을 수 있었어요. 수술 후 시력이 1.5로 나와서 너무 만족스럽습니다. 원장님도 친절하게 상담해주시고, 시설도 최신식이라 안심하고 수술받았어요.',
    date: '2024.11'
  },
  {
    name: '이*준',
    age: 32,
    category: '기업 임직원',
    university: '삼성전자',
    treatment: '모발이식',
    rating: 5,
    comment: '회사 제휴 덕분에 합리적인 가격에 모발이식을 받았습니다. M자 탈모가 심했는데 3개월 지난 지금 이미 티가 나지 않을 정도로 자연스럽게 잘 자라고 있어요.',
    date: '2024.10'
  },
  {
    name: '박*연',
    age: 28,
    category: '대학생',
    university: '연세대학교',
    treatment: '레이저 토닝',
    rating: 5,
    comment: '학생 할인 받고 토닝 10회 패키지 진행했는데 피부톤이 정말 많이 밝아졌어요! 처음에는 반신반의했는데 3회차부터 효과가 느껴지더라구요. 직원분들도 친절하시고 예약도 편해요.',
    date: '2024.11'
  },
  {
    name: '정*진',
    age: 35,
    category: '기업 임직원',
    university: '네이버',
    treatment: '백내장 수술',
    rating: 5,
    comment: '제휴 할인으로 부모님 백내장 수술을 진행했습니다. 가족도 동일하게 할인 혜택을 받을 수 있어서 정말 좋았어요. 수술 후 어머니가 시력이 정말 좋아지셨다고 너무 좋아하세요.',
    date: '2024.09'
  },
  {
    name: '최*진',
    age: 26,
    category: '대학생',
    university: '고려대학교',
    treatment: '보톡스/필러',
    rating: 5,
    comment: '학생 할인으로 보톡스 처음 맞아봤는데 자연스럽게 잘 되어서 만족해요. 과하지 않고 딱 제가 원하는 정도로 시술해주셔서 좋았습니다. 가격도 합리적이고 효과도 좋아요.',
    date: '2024.11'
  },
  {
    name: '강*희',
    age: 29,
    category: '기업 임직원',
    university: '카카오',
    treatment: '여드름 흉터 치료',
    rating: 5,
    comment: '직장인 제휴 혜택으로 여드름 흉터 치료 시작했어요. 레이저 치료 5회 받았는데 흉터가 많이 얕아졌습니다. 점심시간에 받을 수 있어서 일정 조율도 편했고, 다운타임도 거의 없어서 좋았어요.',
    date: '2024.10'
  }
];

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-full mb-4 shadow-sm">
            <ThumbsUp className="w-4 h-4 text-purple-600" />
            <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.3px' }}>
              CUSTOMER REVIEWS
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.3 }}>
            고객 후기
          </h2>
          
          <p className="text-gray-700 max-w-xl mx-auto mb-6" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500, lineHeight: 1.7 }}>
            <strong style={{ fontWeight: 700 }}>MEDINEX의 제휴혜택</strong>을 받으신<br className="sm:hidden" /> 고객님들의 <strong style={{ fontWeight: 700 }}>솔직한 후기</strong>를 확인하세요
          </p>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-6 px-8 py-5 bg-white rounded-2xl border border-purple-100/50 shadow-md">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                ))}
              </div>
              <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1" style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-1px' }}>
                4.9
              </p>
              <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                평균 평점
              </p>
            </div>
            
            <div className="w-px h-14 bg-purple-200"></div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1" style={{ fontSize: '28px', fontWeight: 900 }}>
                1,240+
              </p>
              <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                이번 달 후기
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-6 border border-gray-100/50 hover:border-purple-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-5">
                <Quote className="w-16 h-16 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-5 leading-relaxed relative z-10" style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.7 }}>
                "{testimonial.comment}"
              </p>

              {/* Treatment Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full mb-5 border border-purple-100/50">
                <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-purple-600" style={{ fontSize: '11px', fontWeight: 700 }}>
                  {testimonial.treatment}
                </span>
              </div>

              {/* User Info */}
              <div className="pt-5 border-t border-gray-100/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600" style={{ fontSize: '13px', fontWeight: 800 }}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-800 mb-0.5" style={{ fontSize: '14px', fontWeight: 800 }}>
                        {testimonial.name} ({testimonial.age})
                      </p>
                      <p className="text-gray-500" style={{ fontSize: '11px', fontWeight: 600 }}>
                        {testimonial.university} · {testimonial.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400" style={{ fontSize: '10px', fontWeight: 600 }}>
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider - Mobile Only */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-2xl p-5 border border-gray-100/50 shadow-md relative overflow-hidden">
                    {/* Quote Icon Background */}
                    <div className="absolute top-6 right-6 opacity-5">
                      <Quote className="w-14 h-14 text-purple-600" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-700 mb-4 relative z-10" style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.7 }}>
                      "{testimonial.comment}"
                    </p>

                    {/* Treatment Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full mb-4 border border-purple-100/50">
                      <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-purple-600" style={{ fontSize: '11px', fontWeight: 700, lineHeight: 1.3 }}>
                        {testimonial.treatment}
                      </span>
                    </div>

                    {/* User Info */}
                    <div className="pt-4 border-t border-gray-100/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600" style={{ fontSize: '13px', fontWeight: 800 }}>
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-800 mb-0.5" style={{ fontSize: '13px', fontWeight: 800, lineHeight: 1.3 }}>
                              {testimonial.name} ({testimonial.age})
                            </p>
                            <p className="text-gray-500" style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.3 }}>
                              {testimonial.university} · {testimonial.category}
                            </p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-gray-400" style={{ fontSize: '10px', fontWeight: 600, lineHeight: 1.3 }}>
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all z-10"
            aria-label="이전"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-all z-10"
            aria-label="다음"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
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

      </div>
    </section>
  );
}
