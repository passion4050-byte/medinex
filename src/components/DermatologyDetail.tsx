import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Star, 
  Award,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  Heart,
  Users,
  Calendar,
  Phone,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  User,
  Building2,
  Send,
  CheckCircle,
  Gift
} from 'lucide-react';
import { KakaoIcon } from './KakaoIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';

const promoImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/e1ccfd12026b8.jpg';
const beforeImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/3ad28f07d6294.jpg';
const afterImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/a3c40e867ff49.jpg';
const beforeImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/547bed29d70bb.jpg';
const afterImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/2d814930a8c1a.jpg';

interface DermatologyDetailProps {
  onBack: () => void;
}

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
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-4 border border-rose-100">
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
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-4 border border-rose-100">
            <div className="relative">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full shadow-sm" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px' }}>
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
              ? 'bg-rose-600 text-white shadow-lg scale-105' 
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
              ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg scale-105' 
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

export function DermatologyDetail({ onBack }: DermatologyDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [procedureSlide, setProcedureSlide] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    affiliation: '',
    category: '',
    treatment: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('상담 신청이 완료되었습니다!\n빠른 시일 내에 연락드리겠습니다.');
    
    setFormData({
      name: '',
      phone: '',
      affiliation: '',
      category: '',
      treatment: '',
      date: '',
      message: ''
    });
    setSubmitted(true);
  };

  const beforeAfterData = [
    {
      before: beforeImage,
      after: afterImage,
      description: '⭐ 주름 개선 시술 후',
      result: '피부 탄력 회복 및 주름 개선 효과'
    },
    {
      before: beforeImage2,
      after: afterImage2,
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

  const faqs = [
    {
      question: '리프팅 시술은 얼마나 지속되나요?',
      answer: '개인의 피부 상태와 관리에 따라 다르지만, 평균적으로 6개월~1년 정도 효과가 지속됩니다. 정기적인 관리 시술을 통해 더 오랜 기간 동안 탄력 있는 피부를 유지하실 수 있습니다.'
    },
    {
      question: '시술 후 바로 일상생활이 가능한가요?',
      answer: '대부분의 리프팅 시술은 회복 기간이 거의 없어 당일 일상생활 복귀가 가능합니다. 다만 시술 종류에 따라 약간의 붓기나 붉은기가 있을 수 있으며, 이는 2~3일 내에 자연스럽게 가라앉습니다.'
    },
    {
      question: '어떤 리프팅 시술이 저에게 맞나요?',
      answer: '피부 상태, 탄력도, 주름 정도 등을 종합적으로 평가하여 개인에게 가장 적합한 시술을 추천드립니다. 무료 상담을 통해 피부 분석 후 맞춤형 시술 계획을 세워드립니다.'
    },
    {
      question: '시술 중 통증이 있나요?',
      answer: '리프팅 시술은 마취 크림을 도포하여 진행되므로 통증이 거의 없습니다. 시술 중 약간의 따끔한 느낌이 있을 수 있으나 대부분의 고객님들이 편안하게 시술을 받으십니다.'
    },
    {
      question: '제휴 할인은 어떻게 받나요?',
      answer: '제휴 대학교의 학생증 또는 제휴 기업의 사원증을 제시하시면 즉시 할인이 적용됩니다. 가족 동반 시에도 동일한 할인 혜택을 받으실 수 있습니다. 상담 시 제휴 여부를 먼저 확인해 드립니다.'
    },
    {
      question: '부작용은 없나요?',
      answer: 'FDA 승인을 받은 안전한 시술로, 부작용 발생률이 매우 낮습니다. 간혹 일시적인 붓기, 붉은기, 멍 등이 나타날 수 있으나 대부분 며칠 내에 자연스럽게 사라집니다. 시술 후 체계적인 관리 프로그램을 제공해드립니다.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-rose-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '15px', fontWeight: 700 }}>메인으로 돌아가기</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-rose-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/15 to-rose-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-full border border-rose-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent" style={{ fontSize: '13px', fontWeight: 700 }}>
                  프리미엄 안티에이징
                </span>
              </div>

              <h1 className="mb-4">
                <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.2 }}>
                  포레나 민트실 리프팅
                </span>
                <span className="block text-gray-600" style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 600, lineHeight: 1.4 }}>
                  젊고 탄력 있는 피부로
                </span>
              </h1>

              <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 500, lineHeight: 1.7 }}>
                FDA 승인 최신 리프팅 기술로<br />
                자연스럽고 즉각적인 탄력 개선 효과를 경험하세요
              </p>

              {/* Discount Badge */}
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl shadow-lg mb-8">
                <div className="text-white">
                  <p className="text-white/90 mb-1" style={{ fontSize: '13px', fontWeight: 700 }}>
                    제휴사 특별 할인
                  </p>
                  <p className="mb-0.5" style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
                    최대 49%
                  </p>
                  <p className="text-white/95" style={{ fontSize: '15px', fontWeight: 700 }}>
                    부위별 30만원대~
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, text: '무통 시술' },
                  { icon: Clock, text: '당일 일상복귀' },
                  { icon: TrendingUp, text: '즉각 효과' },
                  { icon: Heart, text: '1:1 맞춤' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800" style={{ fontSize: '14px', fontWeight: 700 }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#consultation-form" className="px-7 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl hover:shadow-lg hover:shadow-rose-500/25 transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02]" style={{ fontSize: '15px', fontWeight: 700 }}>
                  <Calendar className="w-4.5 h-4.5" />
                  무료 상담 신청
                </a>
                <a href="https://pf.kakao.com/_nTdcn/chat" target="_blank" rel="noopener noreferrer" className="px-7 py-4 bg-white text-gray-800 rounded-2xl border-2 border-yellow-400 hover:bg-yellow-50 hover:shadow-md hover:shadow-yellow-400/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5" style={{ fontSize: '15px', fontWeight: 700 }}>
                  <KakaoIcon className="w-5 h-5" />
                  카카오톡 상담
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                <ImageWithFallback
                  src="https://d3gurpvil0se70.cloudfront.net/upfiles/images/product/6TDKsHtOobDGFqaMx8H5mfGDu8F.jpg?q=90&f=webp&w=1024"
                  alt="포레나 민트실 리프팅"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-50 border border-rose-200 rounded-full mb-4 shadow-sm">
              <Star className="w-4 h-4 text-rose-600" />
              <span className="text-rose-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                BEFORE & AFTER
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              시술 전후 비교
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              실제 고객님들의 변화를 확인하세요
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
                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 border border-rose-100">
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

                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 border border-rose-100">
                          <div className="relative">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                              <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full shadow-sm" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
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

                      <div className="mt-6 p-4 md:p-6 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl md:rounded-3xl text-white text-center mx-2">
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
                  className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110 border-2 border-rose-100"
                  aria-label="이전"
                >
                  <ChevronLeft className="w-6 h-6 text-rose-600 group-hover:text-pink-600 transition-colors" />
                </button>

                {/* Dots Navigation */}
                <div className="flex gap-2">
                  {beforeAfterData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'w-8 bg-gradient-to-r from-rose-600 to-pink-600'
                          : 'w-3 bg-rose-300 hover:bg-rose-400'
                      }`}
                      aria-label={`슬라이드 ${index + 1}로 이동`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110 border-2 border-rose-100"
                  aria-label="다음"
                >
                  <ChevronRight className="w-6 h-6 text-rose-600 group-hover:text-pink-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-50 border border-rose-200 rounded-full mb-4 shadow-sm">
              <Zap className="w-4 h-4 text-rose-600" />
              <span className="text-rose-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                PROCEDURE
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              시술 과정
            </h2>
          </div>

          {/* Procedure Slider (Mobile) / Grid (Desktop) */}
          <div className="relative">
            {/* Mobile: Slider */}
            <div className="md:hidden overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${procedureSlide * 100}%)` }}
              >
                {[
                  { step: 'STEP 01', title: '피부 분석', desc: '개인별 피부 상태 정밀 진단', icon: Users },
                  { step: 'STEP 02', title: '시술 디자인', desc: '맞춤형 리프팅 계획 수립', icon: Shield },
                  { step: 'STEP 03', title: '리프팅 시술', desc: '20~30분 빠른 시술', icon: Zap },
                  { step: 'STEP 04', title: '사후 관리', desc: '정기 관리 및 케어 프로그램', icon: Heart }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-rose-100/50 shadow-lg max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-rose-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
                          {item.step}
                        </p>
                        <h3 className="text-gray-800 mb-4 text-center" style={{ fontSize: '22px', fontWeight: 800 }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-center" style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.7 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Grid - All Steps in One Row */}
            <div className="hidden md:grid md:grid-cols-4 gap-4 px-2">
              {[
                { step: 'STEP 01', title: '피부 분석', desc: '개인별 피부 상태 정밀 진단', icon: Users },
                { step: 'STEP 02', title: '시술 디자인', desc: '맞춤형 리프팅 계획 수립', icon: Shield },
                { step: 'STEP 03', title: '리프팅 시술', desc: '20~30분 빠른 시술', icon: Zap },
                { step: 'STEP 04', title: '사후 관리', desc: '정기 관리 및 케어 프로그램', icon: Heart }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-rose-100/50 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-rose-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
                      {item.step}
                    </p>
                    <h3 className="text-gray-800 mb-4 text-center" style={{ fontSize: '22px', fontWeight: 800 }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center" style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Navigation - Mobile Only */}
            <div className="md:hidden flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setProcedureSlide((prev) => (prev - 1 + 4) % 4)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-rose-100"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5 text-rose-600" />
              </button>

              <div className="flex gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setProcedureSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      procedureSlide === index
                        ? 'w-6 bg-gradient-to-r from-rose-600 to-pink-600'
                        : 'w-2 bg-rose-300'
                    }`}
                    aria-label={`슬라이드 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setProcedureSlide((prev) => (prev + 1) % 4)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-rose-100"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5 text-rose-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Image Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src={promoImage}
              alt="피부과 리프팅 특별 프로모션"
              className="w-full h-auto rounded-2xl lg:rounded-3xl shadow-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-50 border border-rose-200 rounded-full mb-4 shadow-sm">
              <Phone className="w-4 h-4 text-rose-600" />
              <span className="text-rose-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                FREE CONSULTATION
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              무료 상담 신청
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              전문 상담사가 24시간 내에 연락드립니다
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-3xl p-6 lg:p-8 border border-rose-100/50 shadow-lg">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  이름 <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="홍길동"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  연락처 <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                  placeholder="010-1234-5678"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Affiliation & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    제휴사/학교명 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                    placeholder="예: 서울대학교, 삼성전자"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    구분 <span className="text-rose-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <option value="">선택하세요</option>
                    <option value="student">대학생</option>
                    <option value="employee">기업 임직원</option>
                    <option value="family">가족 및 지인</option>
                  </select>
                </div>
              </div>

              {/* Treatment & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    관심 시술/수술 <span className="text-rose-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <option value="">선택하세요</option>
                    <option value="lifting">리프팅</option>
                    <option value="botox">보톡스</option>
                    <option value="filler">필러</option>
                    <option value="laser-toning">레이저 토닝</option>
                    <option value="laser-lifting">레이저 리프팅</option>
                    <option value="thread">실리프팅</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    희망 상담일
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  문의 내용
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-4 bg-white rounded-2xl border border-rose-200/50">
                <p className="text-gray-700" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.5 }}>
                  <span className="block mb-1 text-rose-600" style={{ fontWeight: 700 }}>개인정보 수집 및 이용 안내</span>
                  • 수집 항목: 이름, 연락처, 제휴사/학교명<br />
                  • 수집 목적: 상담 신청 및 안내 | 보유 기간: 상담 완료 후 6개월
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-5 rounded-2xl text-white transition-all flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-500' 
                    : 'bg-gradient-to-r from-rose-600 to-pink-600 hover:shadow-lg hover:shadow-rose-500/25 hover:scale-[1.02]'
                }`}
                style={{ fontSize: '17px', fontWeight: 800 }}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    신청이 완료되었습니다!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>무료 상담 신청하기</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: Clock, title: '24시간 내', desc: '빠른 답변' },
              { icon: Shield, title: '개인정보', desc: '안전 보호' },
              { icon: Phone, title: '1:1 맞춤', desc: '전문 상담' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-rose-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 mb-0.5" style={{ fontSize: '13px', fontWeight: 800 }}>
                      {item.title}
                    </p>
                    <p className="text-gray-600" style={{ fontSize: '12px', fontWeight: 600 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-rose-100/50 overflow-hidden hover:shadow-md transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-rose-50/50 transition-colors"
                >
                  <span className="text-gray-800 pr-4" style={{ fontSize: '15px', fontWeight: 700 }}>
                    Q. {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-2 border-t border-rose-100/50 bg-rose-50/30">
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
