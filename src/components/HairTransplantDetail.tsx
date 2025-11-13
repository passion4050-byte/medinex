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

const promoImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/19f1637489c62.jpg';
const beforeImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/b57fcd30966d7.png';
const afterImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/2b119ef959a40.png';
const heroImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/c2c612af992d2.jpg';
const beforeImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/87c19d7bafc54.jpg';
const afterImage2 = 'https://cdn.imweb.me/upload/S202302154d48be455c812/498c844340829.jpg';

interface HairTransplantDetailProps {
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

// Before/After Slider Component
function BeforeAfterSlider() {
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
  );
}

export function HairTransplantDetail({ onBack }: HairTransplantDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

  const faqs = [
    {
      question: '비절개 모발이식이 일반 모발이식과 어떻게 다른가요?',
      answer: '비절개 모발이식은 두피를 절개하지 않고 모낭 단위로 채취하여 이식하는 방법입니다. 흉터가 거의 남지 않으며, 회복 기간이 짧고 통증이 적습니다. 일반 절개식 모발이식에 비해 더 자연스러운 결과를 얻을 수 있습니다.'
    },
    {
      question: '시술 시간은 얼마나 걸리나요?',
      answer: '이식 모발의 개수에 따라 다르지만, 일반적으로 3~6시간 정도 소요됩니다. 1,000모 기준 약 3~4시간, 2,000모 기준 5~6시간 정도 예상하시면 됩니다. 국소마취로 진행되어 시술 중 통증은 거의 없습니다.'
    },
    {
      question: '회복 기간은 어느 정도인가요?',
      answer: '비절개 방식이기 때문에 회복이 빠릅니다. 시술 후 3~5일이면 일상생활이 가능하며, 약 7~10일 후면 대부분 딱지가 떨어집니다. 격렬한 운동은 2~3주 후부터 가능합니다.'
    },
    {
      question: '모발 생착률은 어느 정도인가요?',
      answer: '숙련된 전문의가 시술할 경우 90~95% 이상의 높은 생착률을 보입니다. 생착된 모발은 평생 유지되며, 자연스럽게 성장합니다. 시술 후 관리 지침을 잘 따르시면 더 높은 생착률을 기대할 수 있습니다.'
    },
    {
      question: '제휴 할인은 어떻게 받나요?',
      answer: '제휴 대학교의 학생증 또는 제휴 기업의 사원증을 제시하시면 즉시 할인이 적용됩니다. 가족 동반 시에도 동일한 할인 혜택을 받으실 수 있습니다. 상담 시 제휴 여부를 먼저 확인해 드립니다.'
    },
    {
      question: '부작용은 없나요?',
      answer: '모발이식은 본인의 모낭을 이식하는 것이므로 거부반응이 없습니다. 일시적으로 약간의 붓기나 가려움이 있을 수 있으나, 대부분 일주일 내에 사라집니다. 체계적인 사후관리 시스템으로 안전하게 관리해드립니다.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '15px', fontWeight: 700 }}>메인으로 돌아가기</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-gradient-to-br from-pink-200/15 to-purple-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontSize: '13px', fontWeight: 700 }}>
                  최신 비절개 기술
                </span>
              </div>

              <h1 className="mb-4">
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2" style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.2 }}>
                  비절개 모발이식
                </span>
                <span className="block text-gray-600" style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 600, lineHeight: 1.4 }}>
                  흉터 없이 자연스럽게
                </span>
              </h1>

              <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 500, lineHeight: 1.7 }}>
                두피를 절개하지 않는 최신 FUE 방식으로<br />
                통증과 흉터 없이 자연스러운 헤어라인을 완성합니다
              </p>

              {/* Discount Badge */}
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-lg mb-8">
                <div className="text-white">
                  <p className="text-white/90 mb-1" style={{ fontSize: '13px', fontWeight: 700 }}>
                    제휴사 특별 할인
                  </p>
                  <p className="mb-0.5" style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
                    최대 49%
                  </p>
                  <p className="text-white/95" style={{ fontSize: '15px', fontWeight: 700 }}>
                    1,000모 80만원대~
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, text: '무흉터 시술' },
                  { icon: Clock, text: '빠른 회복' },
                  { icon: TrendingUp, text: '95% 생착률' },
                  { icon: Heart, text: '평생 유지' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-sm">
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
                <a href="#consultation-form" className="px-7 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02]" style={{ fontSize: '15px', fontWeight: 700 }}>
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                <img
                  src={heroImage}
                  alt="비절개 모발이식"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-contain bg-white"
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
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-full mb-4 shadow-sm">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                BEFORE & AFTER
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              시술 전후 비교
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              실제 고객님들의 변화를 확인하세요
            </p>
          </div>

          {/* Before/After Slides */}
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-full mb-4 shadow-sm">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                PROCEDURE
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
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
                  { step: 'STEP 01', title: '정밀 검사 & 디자인', desc: '두피 상태 분석 및 헤어라인 디자인', icon: Users },
                  { step: 'STEP 02', title: '모낭 채취', desc: '후두부에서 건강한 모낭을 채취', icon: Shield },
                  { step: 'STEP 03', title: '모낭 분리 & 이식', desc: '채취한 모낭을 정교하게 이식', icon: Zap },
                  { step: 'STEP 04', title: '사후 관리', desc: '체계적인 관리 프로그램 제공', icon: Heart }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-purple-100/50 shadow-lg max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-purple-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
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
                { step: 'STEP 01', title: '정밀 검사 & 디자인', desc: '두피 상태 분석 및 헤어라인 디자인', icon: Users },
                { step: 'STEP 02', title: '모낭 채취', desc: '후두부에서 건강한 모낭을 채취', icon: Shield },
                { step: 'STEP 03', title: '모낭 분리 & 이식', desc: '채취한 모낭을 정교하게 이식', icon: Zap },
                { step: 'STEP 04', title: '사후 관리', desc: '체계적인 관리 프로그램 제공', icon: Heart }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-purple-100/50 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-purple-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
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
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-purple-100"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </button>

              <div className="flex gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setProcedureSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      procedureSlide === index
                        ? 'w-6 bg-gradient-to-r from-purple-600 to-pink-600'
                        : 'w-2 bg-purple-300'
                    }`}
                    aria-label={`슬라이드 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setProcedureSlide((prev) => (prev + 1) % 4)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-purple-100"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5 text-purple-600" />
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
              alt="모발이식 특별 프로모션"
              className="w-full h-auto rounded-2xl lg:rounded-3xl shadow-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-full mb-4 shadow-sm">
              <Phone className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                FREE CONSULTATION
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              무료 상담 신청
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              전문 상담사가 24시간 내에 연락드립니다
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-3xl p-6 lg:p-8 border border-purple-100/50 shadow-lg">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  이름 <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="홍길동"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  연락처 <span className="text-purple-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="010-1234-5678"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Affiliation & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    제휴사/학교명 <span className="text-purple-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="예: 서울대학교, 삼성전자"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    구분 <span className="text-purple-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
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
                    관심 시술/수술 <span className="text-purple-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <option value="">선택하세요</option>
                    <option value="non-incision">비절개 모발이식</option>
                    <option value="incision">절개 모발이식</option>
                    <option value="hairline">헤어라인 교정</option>
                    <option value="scalp-care">두피 관리</option>
                    <option value="eyebrow">눈썹 이식</option>
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
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
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
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-4 bg-white rounded-2xl border border-purple-200/50">
                <p className="text-gray-700" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.5 }}>
                  <span className="block mb-1 text-purple-600" style={{ fontWeight: 700 }}>개인정보 수집 및 이용 안내</span>
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
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02]'
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
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-purple-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
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
            <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-purple-100/50 overflow-hidden hover:shadow-md transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-purple-50/50 transition-colors"
                >
                  <span className="text-gray-800 pr-4" style={{ fontSize: '15px', fontWeight: 700 }}>
                    Q. {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-2 border-t border-purple-100/50 bg-purple-50/30">
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
