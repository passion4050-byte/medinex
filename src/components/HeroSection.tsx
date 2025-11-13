import { Sparkles, Award, Shield, Users, Check, ArrowRight, Phone } from 'lucide-react';
import { KakaoIcon } from './KakaoIcon';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-br from-purple-50/60 via-pink-50/40 to-white">
      {/* Decorative Background - More subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-white/98 backdrop-blur-sm rounded-full border-2 border-purple-200/60 shadow-lg hover:shadow-xl hover:border-purple-300/80 transition-all">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-sm"></div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.3px' }}>
                제휴사 전용 <strong style={{ fontWeight: 900 }}>프리미엄 메디컬 혜택</strong>
              </span>
            </div>
            
            {/* Main Headline - Mobile Optimized */}
            <div>
              <h1 className="mb-6">
                <span className="block mb-2 text-gray-600" style={{ fontSize: 'clamp(16px, 4vw, 24px)', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.3px' }}>
                  제휴 파트너를 위한
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(32px, 7vw, 56px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1.5px' }}>
                  프리미엄 메디컬 혜택
                </span>
                <div className="flex items-center gap-2.5">
                  <div className="h-0.5 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="text-purple-700" style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 800, letterSpacing: '2px' }}>
                    MEDINEX
                  </span>
                </div>
              </h1>
              
              <div className="space-y-2 sm:space-y-3">
                <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', fontWeight: 600, lineHeight: 1.6 }}>
                  지금 바로 <strong style={{ fontWeight: 800 }}>제휴 혜택</strong>을 확인하세요
                </p>
                <div className="text-gray-700" style={{ fontSize: 'clamp(13px, 3.2vw, 17px)', fontWeight: 500, lineHeight: 1.7 }}>
                  <p className="mb-2 sm:mb-0" style={{ lineHeight: 1.7 }}>
                    <strong style={{ fontWeight: 700 }}>간단한 인증</strong>만으로 <strong style={{ fontWeight: 700 }}>즉시</strong>
                  </p>
                  <div className="inline-block my-2 sm:my-0 sm:mx-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md" style={{ fontWeight: 800, fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: 1.3 }}>
                    최대 49% 할인
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {[
                { icon: Award, title: '의료 인증', color: 'from-purple-500 to-purple-600' },
                { icon: Shield, title: '시술 보증', color: 'from-pink-500 to-pink-600' },
                { icon: Users, title: '월 500+ 상담', color: 'from-purple-500 to-pink-600' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border-2 border-purple-100/60 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-gray-800 text-center" style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: 800, lineHeight: 1.3 }}>
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://pf.kakao.com/_nTdcn/chat" target="_blank" rel="noopener noreferrer" className="group px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white rounded-xl sm:rounded-2xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 active:scale-95 sm:hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2.5 sm:gap-3" style={{ fontWeight: 800, fontSize: 'clamp(15px, 3.5vw, 16px)' }}>
                <KakaoIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                3초만에 카톡상담하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Quick Info - Mobile Optimized */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-4 sm:pt-5 border-t border-purple-100/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 2.8vw, 13px)', fontWeight: 600 }}>
                  평일 10:00-19:00
                </span>
              </div>
              <div className="w-px h-4 bg-purple-200"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-700" style={{ fontSize: 'clamp(12px, 2.8vw, 13px)', fontWeight: 600 }}>
                  당일 예약 가능
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Trust Cards */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Discount Card - More polished */}
            <div className="group bg-white rounded-3xl p-7 border border-purple-100/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-purple-600 mb-2.5" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    제휴사 특별 혜택
                  </p>
                  <h3 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1.5" style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-2px' }}>
                    최대 49%
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '15px', fontWeight: 600 }}>
                    특별 할인 혜택
                  </p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700" style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.5 }}>
                    학생증/사원증 제시로 <strong style={{ fontWeight: 800 }}>즉시 할인</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700" style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.5 }}>
                    가족 동반 시 <strong style={{ fontWeight: 800 }}>동일 혜택 적용</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700" style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.5 }}>
                    연간 <strong style={{ fontWeight: 800 }}>무료 건강검진</strong> 1회 제공
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-5 border-t border-purple-100/50">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 600 }}>
                  이번 달 <span className="text-purple-600" style={{ fontWeight: 800 }}>1,240+</span>명 이용
                </p>
              </div>
            </div>
            
            {/* Review Card - Enhanced */}
            <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-7 border border-pink-100/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                ))}
              </div>
              <p className="text-gray-700 mb-5 leading-relaxed" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.7 }}>
                "<strong style={{ fontWeight: 700 }}>제휴 할인</strong> 덕분에 <strong style={{ fontWeight: 700 }}>부담없이</strong> 시술받았어요. 직원분들도 친절하시고 시설도 정말 깨끗해요!"
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white" style={{ fontSize: '15px', fontWeight: 800 }}>김</span>
                </div>
                <div>
                  <p className="text-gray-800 mb-0.5" style={{ fontSize: '13px', fontWeight: 800 }}>김**님</p>
                  <p className="text-gray-500" style={{ fontSize: '11px', fontWeight: 600 }}>제휴 기업 임직원</p>
                </div>
              </div>
            </div>
            
            {/* Partners Badge - More impactful */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-7 text-white text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="relative">
                <p className="text-purple-100 mb-3" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  제휴 파트너
                </p>
                <p className="mb-2" style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-2px' }}>
                  180<span style={{ fontSize: '28px' }}>+</span>
                </p>
                <p className="text-white/95" style={{ fontSize: '14px', fontWeight: 700 }}>
                  대학교 & 기업
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Trust Stats - Mobile Optimized */}
        <div className="lg:hidden grid grid-cols-3 gap-2.5 sm:gap-3 mt-8 sm:mt-10">
          {[
            { number: '49%', label: '최대 할인' },
            { number: '180+', label: '제휴처' },
            { number: '500+', label: '월 상담' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-purple-100 shadow-sm active:shadow-md transition-all">
              <p className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1" style={{ fontSize: 'clamp(22px, 5.5vw, 26px)', fontWeight: 900, lineHeight: 1.1 }}>{item.number}</p>
              <p className="text-gray-600" style={{ fontSize: 'clamp(10px, 2.5vw, 11px)', fontWeight: 700 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
