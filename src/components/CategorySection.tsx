import { useState } from 'react';
import { Eye, Sparkles, Scissors, Check, TrendingDown, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const hairHeroImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/796f56ec58fa0.jpg';

const categories = [
  {
    id: 'ophthalmology',
    label: '안과',
    icon: Eye,
    title: '세밀한 진단과 정확한 교정',
    description: (<>눈의 기능과 구조를<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>정밀하게 분석</strong>하여<br />가장 <strong style={{ fontWeight: 700 }}>이상적인 시야 균형</strong>을 설계합니다.</>),
    image: 'https://d3gurpvil0se70.cloudfront.net/upfiles/images/product/KxdZJTZifmqoalGLxiERkHoTL0c8.jpg?q=90&f=webp&w=1024',
    discount: '최대 40%',
    color: 'from-purple-500 to-purple-600',
    treatments: [
      '라식/라섹 시력교정술',
      '백내장 수술',
      '스마일라식/프로',
      '노안검사/수술'
    ]
  },
  {
    id: 'dermatology',
    label: '피부과',
    icon: Sparkles,
    title: '피부 본연의 결을 되찾는 케어',
    description: (<><strong style={{ fontWeight: 700 }}>자연스러운 톤과 윤기</strong>를 되살리는 <strong style={{ fontWeight: 700 }}>피부 재생 프로그램</strong>을 제안합니다.</>),
    image: 'https://d3gurpvil0se70.cloudfront.net/upfiles/images/product/6TDKsHtOobDGFqaMx8H5mfGDu8F.jpg?q=90&f=webp&w=1024',
    discount: '최대 49%',
    color: 'from-pink-500 to-pink-600',
    treatments: [
      '레이저 토닝/리프팅',
      '보톡스/필러 시술',
      '여드름·흉터 치료',
      '아쿠아필·메조테라피'
    ]
  },
  {
    id: 'hair',
    label: '모발이식',
    icon: Scissors,
    title: '티 나지 않는 모발 설계',
    description: (<>모발의 방향, 밀도,<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>생착률까지 고려</strong>한<br /><strong style={{ fontWeight: 700 }}>자연스러운 라인 디자인</strong>을 제공합니다.</>),
    image: hairHeroImage,
    discount: '최대 45%',
    color: 'from-purple-400 to-pink-500',
    treatments: [
      '비절개/절개 모발이식',
      'M자·정수리 탈모 치료',
      '여성 탈모 솔루션',
      '두피 스케일링·관리'
    ]
  },
];

interface CategorySectionProps {
  onNavigate?: (page: 'hair' | 'ophthalmology' | 'dermatology') => void;
}

export function CategorySection({ onNavigate }: CategorySectionProps) {
  const [activeTab, setActiveTab] = useState('ophthalmology');
  
  const activeCategory = categories.find(cat => cat.id === activeTab);

  const handleNavigateToDetail = () => {
    if (onNavigate && activeCategory) {
      onNavigate(activeCategory.id as 'hair' | 'ophthalmology' | 'dermatology');
    }
  };

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50/40 via-white to-purple-50/40 relative overflow-hidden" id="categories">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border-2 border-purple-200/60 rounded-full mb-4 sm:mb-5 shadow-lg">
            <TrendingDown className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-purple-600" />
            <span className="text-purple-600" style={{ fontSize: 'clamp(11px, 2.8vw, 13px)', fontWeight: 800, letterSpacing: '0.5px' }}>
              MEDICAL SPECIALTIES
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4" style={{ fontSize: 'clamp(26px, 5.5vw, 40px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.25 }}>
            전문 진료 분야
          </h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(13.5px, 3.5vw, 17px)', fontWeight: 500, lineHeight: 1.8 }}>
            안과, 피부과, 모발이식 각 분야의<br className="sm:hidden" /> <strong style={{ fontWeight: 800 }}>전문 의료진</strong>이<br className="hidden sm:block" />
            <strong style={{ fontWeight: 700 }}>과학적 진단</strong>과 <strong style={{ fontWeight: 700 }}>맞춤형 솔루션</strong>을 제공합니다
          </p>
        </div>

        {/* Tab Navigation - Mobile Optimized */}
        <div className="flex justify-center mb-10 sm:mb-12 px-4">
          <div className="inline-flex p-1.5 sm:p-2 bg-white border-2 border-purple-100/60 rounded-xl sm:rounded-2xl gap-1.5 sm:gap-2 shadow-xl max-w-full overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all whitespace-nowrap
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105' 
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 active:bg-purple-100'
                    }
                  `}
                  style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: isActive ? 800 : 700 }}
                >
                  <Icon className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className="sm:inline">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content */}
        {activeCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Image - Desktop Only */}
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-100/60 shadow-xl">
                {typeof activeCategory.image === 'string' ? (
                  <ImageWithFallback
                    src={activeCategory.image}
                    alt={activeCategory.label}
                    className="w-full h-[280px] lg:h-[340px] object-cover object-center"
                  />
                ) : (
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.label}
                    className="w-full h-[280px] lg:h-[340px] object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-5 left-5">
                  <div className="px-5 py-3 bg-white/98 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-purple-200/60">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-600" style={{ fontSize: '18px', fontWeight: 900 }}>
                        {activeCategory.discount}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1" style={{ fontSize: '12px', fontWeight: 800 }}>
                      제휴 할인
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Mobile Optimized */}
            <div className="order-1 lg:order-2">
              {/* Icon Badge */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${activeCategory.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-xl shadow-purple-500/25`}>
                {(() => {
                  const Icon = activeCategory.icon;
                  return <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />;
                })()}
              </div>

              <h3 className="text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0" style={{ fontSize: 'clamp(22px, 4.5vw, 32px)', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.25 }}>
                {activeCategory.title}
              </h3>
              
              <p className="text-gray-700 mb-6 sm:mb-7 px-4 sm:px-0" style={{ fontSize: 'clamp(13.5px, 3.5vw, 17px)', fontWeight: 500, lineHeight: 1.8 }}>
                {activeCategory.description}
              </p>

              {/* Treatments List - Mobile Optimized */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-7 px-4 sm:px-0">
                <p className="text-purple-600" style={{ fontSize: 'clamp(11px, 2.8vw, 13px)', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                  주요 진료 항목
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {activeCategory.treatments.map((treatment, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border-2 border-purple-100/60 hover:border-purple-300 active:border-purple-300 hover:shadow-lg active:shadow-lg transition-all">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-800" style={{ fontSize: 'clamp(13px, 3vw, 14px)', fontWeight: 700, lineHeight: 1.4 }}>
                        {treatment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={handleNavigateToDetail}
                  className={`group px-6 py-3.5 bg-gradient-to-r ${activeCategory.color} text-white rounded-xl hover:shadow-md transition-all flex items-center gap-2`} 
                  style={{ fontSize: '15px', fontWeight: 800 }}
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
