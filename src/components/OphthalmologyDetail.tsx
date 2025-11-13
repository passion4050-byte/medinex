import { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Eye,
  User,
  Building2,
  Send,
  Sparkles,
  CheckCircle,
  Gift
} from 'lucide-react';
import { KakaoIcon } from './KakaoIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';

const promoImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/747362f7bab63.jpg';

interface OphthalmologyDetailProps {
  onBack: () => void;
}

export function OphthalmologyDetail({ onBack }: OphthalmologyDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [beforeAfterSlide, setBeforeAfterSlide] = useState(0);
  const [procedureSlide, setProcedureSlide] = useState(0);
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
      question: '라식과 라섹의 차이점은 무엇인가요?',
      answer: '라식은 각막 절편을 만들어 시력을 교정하는 방법으로 회복이 빠른 장점이 있습니다. 라섹은 각막 상피를 제거하고 교정하는 방법으로 각막이 얇은 분들도 수술이 가능합니다. 정밀 검사를 통해 개인에게 최적화된 방법을 추천드립니다.'
    },
    {
      question: '시력교정술 후 바로 일상생활이 가능한가요?',
      answer: '라식의 경우 수술 다음 날부터 대부분의 일상생활이 가능하며, 시력 회복도 빠릅니다. 라섹은 3~5일 정도의 회복 기간이 필요합니다. 다만 격렬한 운동이나 수영 등은 1개월 정도 후부터 가능합니다.'
    },
    {
      question: '수술 후 시력이 다시 나빠질 수 있나요?',
      answer: '수술 후 대부분의 환자분들은 평생 좋은 시력을 유지하십니다. 다만 개인의 눈 상태나 생활습관에 따라 약간의 시력 변화가 있을 수 있으며, 이런 경우에도 재교정이 가능합니다. 정기 검진을 통해 눈 건강을 관리해드립니다.'
    },
    {
      question: '수술 중 통증이 있나요?',
      answer: '점안 마취를 하기 때문에 수술 중 통증은 거의 없습니다. 다만 눈을 뜰 수 없는 느낌이나 약간의 압박감은 느낄 수 있습니다. 수술 시간도 양안 기준 10~15분 정도로 짧습니다.'
    },
    {
      question: '제휴 할인은 어떻게 받나요?',
      answer: '제휴 대학교의 학생증 또는 제휴 기업의 사원증을 제시하시면 즉시 할인이 적용됩니다. 가족 동반 시에도 동일한 할인 혜택을 받으실 수 있습니다. 상담 시 제휴 여부를 먼저 확인해 드립니다.'
    },
    {
      question: '수술 전 검사는 어떻게 진행되나요?',
      answer: '총 70여 가지의 정밀 검사를 통해 각막 두께, 눈물량, 동공 크기, 각막 지형도 등을 측정합니다. 검사 시간은 약 1~2시간 소요되며, 검사 결과를 바탕으로 가장 적합한 수술 방법을 결정합니다.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '15px', fontWeight: 700 }}>메인으로 돌아가기</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm mb-6">
                <Eye className="w-4 h-4 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontSize: '13px', fontWeight: 700 }}>
                  첨단 시력교정술
                </span>
              </div>

              <h1 className="mb-4">
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2" style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.2 }}>
                  라식/라섹 시력교정
                </span>
                <span className="block text-gray-600" style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 600, lineHeight: 1.4 }}>
                  새로운 세상을 선명하게
                </span>
              </h1>

              <p className="text-gray-700 mb-8 leading-relaxed" style={{ fontSize: 'clamp(15px, 3vw, 17px)', fontWeight: 500, lineHeight: 1.7 }}>
                FDA 승인 최신 장비와 숙련된 전문의의<br />
                맞춤형 시력교정으로 안전하고 정확한 시술을 제공합니다
              </p>

              {/* Discount Badge */}
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-lg mb-8">
                <div className="text-white">
                  <p className="text-white/90 mb-1" style={{ fontSize: '13px', fontWeight: 700 }}>
                    제휴사 특별 할인
                  </p>
                  <p className="mb-0.5" style={{ fontSize: '42px', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1 }}>
                    최대 40%
                  </p>
                  <p className="text-white/95" style={{ fontSize: '15px', fontWeight: 700 }}>
                    양안 150만원대~
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
                  { icon: TrendingUp, text: '평생 보증 재수술 무료' },
                  { icon: Heart, text: '1:1 맞춤' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm">
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
                <a href="#consultation-form" className="px-7 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02]" style={{ fontSize: '15px', fontWeight: 700 }}>
                  <Calendar className="w-4.5 h-4.5" />
                  무료 검사 신청
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
                <ImageWithFallback
                  src="https://d3gurpvil0se70.cloudfront.net/upfiles/images/product/KxdZJTZifmqoalGLxiERkHoTL0c8.jpg?q=90&f=webp&w=1024"
                  alt="라식/라섹 시력교정"
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
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-full mb-4 shadow-sm">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                BEFORE & AFTER
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              시술 전후 비교
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              선명한 시력 개선 결과를 확인하세요
            </p>
          </div>

          {/* Before/After Slider */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${beforeAfterSlide * 100}%)` }}
              >
                {[
                  { before: '0.3', after: '1.0', desc: '수술 다음 날' },
                  { before: '0.2', after: '1.2', desc: '수술 1주 후' }
                ].map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100">
                        <div className="relative">
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-600" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                              BEFORE
                            </span>
                          </div>
                          <div className="bg-white rounded-2xl p-8 pt-16 text-center">
                            <p className="text-gray-400 mb-2" style={{ fontSize: '48px', fontWeight: 900 }}>
                              {item.before}
                            </p>
                            <p className="text-gray-600" style={{ fontSize: '15px', fontWeight: 700 }}>
                              수술 전 시력
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100">
                        <div className="relative">
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-sm" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                              AFTER
                            </span>
                          </div>
                          <div className="bg-white rounded-2xl p-8 pt-16 text-center">
                            <p className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2" style={{ fontSize: '48px', fontWeight: 900 }}>
                              {item.after}
                            </p>
                            <p className="text-gray-600" style={{ fontSize: '15px', fontWeight: 700 }}>
                              수술 후 시력
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white text-center">
                      <p className="mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                        ⭐ 평균 {item.desc}
                      </p>
                      <p style={{ fontSize: '18px', fontWeight: 900 }}>
                        {item.after} 이상의 선명한 시력 회복
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setBeforeAfterSlide((prev) => (prev - 1 + 2) % 2)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-blue-100"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </button>

              <div className="flex gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setBeforeAfterSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      beforeAfterSlide === index
                        ? 'w-6 bg-gradient-to-r from-blue-600 to-cyan-600'
                        : 'w-2 bg-blue-300'
                    }`}
                    aria-label={`슬라이드 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setBeforeAfterSlide((prev) => (prev + 1) % 2)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-blue-100"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-full mb-4 shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                PROCEDURE
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
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
                  { step: 'STEP 01', title: '정밀 검사', desc: '70여 가지 항목 정밀 검진', icon: Users },
                  { step: 'STEP 02', title: '수술 계획', desc: '개인 맞춤 수술 방법 설정', icon: Shield },
                  { step: 'STEP 03', title: '레이저 시술', desc: '10~15분 빠른 시술', icon: Zap },
                  { step: 'STEP 04', title: '사후 관리', desc: '정기 검진 및 평생 보증 재수술 무료', icon: Heart }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-blue-100/50 shadow-lg max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-blue-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
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
                { step: 'STEP 01', title: '정밀 검사', desc: '70여 가지 항목 정밀 검진', icon: Users },
                { step: 'STEP 02', title: '수술 계획', desc: '개인 맞춤 수술 방법 설정', icon: Shield },
                { step: 'STEP 03', title: '레이저 시술', desc: '10~15분 빠른 시술', icon: Zap },
                { step: 'STEP 04', title: '사후 관리', desc: '정기 검진 및 평생 보증 재수술 무료', icon: Heart }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-blue-100/50 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-blue-600 mb-3 text-center" style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px' }}>
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
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-blue-100"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600" />
              </button>

              <div className="flex gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setProcedureSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      procedureSlide === index
                        ? 'w-6 bg-gradient-to-r from-blue-600 to-cyan-600'
                        : 'w-2 bg-blue-300'
                    }`}
                    aria-label={`슬라이드 ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setProcedureSlide((prev) => (prev + 1) % 4)}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border-2 border-blue-100"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
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
              alt="안과 시술 특별 프로모션"
              className="w-full h-auto rounded-2xl lg:rounded-3xl shadow-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-full mb-4 shadow-sm">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600" style={{ fontSize: '12px', fontWeight: 700 }}>
                FREE CONSULTATION
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              무료 검사 신청
            </h2>
            <p className="text-gray-700" style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 500 }}>
              전문 상담사가 24시간 내에 연락드립니다
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl p-6 lg:p-8 border border-blue-100/50 shadow-lg">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  이름 <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="홍길동"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  연락처 <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="010-1234-5678"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Affiliation & Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    제휴사/학교명 <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="예: 서울대학교, 삼성전자"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  />
                </div>

                <div>
                  <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                    구분 <span className="text-blue-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                    관심 시술/수술 <span className="text-blue-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <option value="">선택하세요</option>
                    <option value="lasik">라식</option>
                    <option value="lasek">라섹</option>
                    <option value="smile">스마일라식</option>
                    <option value="cataract">백내장</option>
                    <option value="lens">렌즈삽입술</option>
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
                    className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors"
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
                  className="w-full px-5 py-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                />
              </div>

              {/* Privacy Notice */}
              <div className="p-4 bg-white rounded-2xl border border-blue-200/50">
                <p className="text-gray-700" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.5 }}>
                  <span className="block mb-1 text-blue-600" style={{ fontWeight: 700 }}>개인정보 수집 및 이용 안내</span>
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
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]'
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
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-blue-100/50 shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
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
            <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(26px, 5vw, 36px)', fontWeight: 900, letterSpacing: '-1px' }}>
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-blue-100/50 overflow-hidden hover:shadow-md transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                >
                  <span className="text-gray-800 pr-4" style={{ fontSize: '15px', fontWeight: 700 }}>
                    Q. {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-2 border-t border-blue-100/50 bg-blue-50/30">
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
