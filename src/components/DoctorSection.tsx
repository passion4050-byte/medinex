import { useState } from 'react';
import { Award, GraduationCap, Heart, Star, Check, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const doctorLeeImage = 'https://cdn.imweb.me/upload/S202302154d48be455c812/61b1269dfea20.jpg';

const doctors = [
  {
    name: '김민수',
    title: '안과 전문의',
    specialty: '시력교정·백내장',
    image: 'https://cdn.midjourney.com/a23edc40-07e1-489c-ba74-128655eb86f6/0_2.png',
    experience: '15년',
    education: '서울대 의과대학',
    certifications: ['대한안과학회 정회원', '라식·라섹 인증의', '백내장 수술 전문'],
    patients: '3,500+',
    rating: 4.9
  },
  {
    name: '박유니',
    title: '피부과 전문의',
    specialty: '레이저·시술',
    image: 'https://cdn.midjourney.com/3c3f91fe-f53d-41bd-aea8-a679e14604e9/0_1.png',
    experience: '12년',
    education: '가천대 의과대학',
    certifications: ['대한피부과학회 정회원', '미용성형 전문의', '레이저 인증의'],
    patients: '4,200+',
    rating: 4.9
  },
  {
    name: '이재민',
    title: '모발이식 전문의',
    specialty: '비절개·절개',
    image: doctorLeeImage,
    experience: '18년',
    education: '가톨릭대학교 의과대학',
    certifications: ['대한모발학회 정회원', '비절개 이식 전문', '국제 인증'],
    patients: '2,800+',
    rating: 4.8
  }
];

export function DoctorSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };
  
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/40 relative overflow-hidden" id="doctors">
      {/* Background Elements */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border-2 border-indigo-200/60 rounded-full mb-5 shadow-xl">
            <Users className="w-4.5 h-4.5 text-indigo-600" />
            <span className="text-indigo-600" style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.5px' }}>
              MEDICAL TEAM
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.2 }}>
            최고의 전문 의료진
          </h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(13.5px, 3.5vw, 17px)', fontWeight: 500, lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 700 }}>풍부한 임상 경험</strong>과<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>전문성</strong>을 갖춘 의료진이<br />
            환자 한 분 한 분께<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>최선</strong>을 다하겠습니다
          </p>
        </div>

        {/* Doctors Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100/60 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-800" style={{ fontSize: '13px', fontWeight: 700 }}>
                      {doctor.rating}
                    </span>
                  </div>
                </div>

                {/* Name & Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white mb-0.5" style={{ fontSize: '20px', fontWeight: 800 }}>
                    {doctor.name} 원장
                  </h3>
                  <p className="text-white/95" style={{ fontSize: '13px', fontWeight: 600 }}>
                    {doctor.title}
                  </p>
                  <p className="text-white/80 mt-0.5" style={{ fontSize: '12px', fontWeight: 500 }}>
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Experience & Patients */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                    </div>
                    <p className="text-indigo-600 mb-0.5" style={{ fontSize: '16px', fontWeight: 900 }}>
                      {doctor.experience}
                    </p>
                    <p className="text-gray-600" style={{ fontSize: '11px', fontWeight: 700 }}>
                      경력
                    </p>
                  </div>
                  
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-1.5 shadow-sm">
                      <Heart className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-purple-600 mb-0.5" style={{ fontSize: '16px', fontWeight: 900 }}>
                      {doctor.patients}
                    </p>
                    <p className="text-gray-600" style={{ fontSize: '11px', fontWeight: 700 }}>
                      시술
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Award className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-indigo-600" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      학력
                    </span>
                  </div>
                  <p className="text-gray-700" style={{ fontSize: '13px', fontWeight: 600 }}>
                    {doctor.education}
                  </p>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-indigo-600" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      전문 자격
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {doctor.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <div className="w-1 h-1 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-600" style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.5 }}>
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Doctors Slider - Mobile Only */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100/60 shadow-md">
                    {/* Image with Navigation Buttons */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-800" style={{ fontSize: '13px', fontWeight: 700 }}>
                            {doctor.rating}
                          </span>
                        </div>
                      </div>

                      {/* Navigation Buttons in Image Area */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-indigo-600 active:scale-95 transition-transform z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-indigo-600 active:scale-95 transition-transform z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Name & Title on Image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white mb-0.5" style={{ fontSize: '18px', fontWeight: 800 }}>
                          {doctor.name} 원장
                        </h3>
                        <p className="text-white/95" style={{ fontSize: '12px', fontWeight: 600 }}>
                          {doctor.title}
                        </p>
                        <p className="text-white/80 mt-0.5" style={{ fontSize: '11px', fontWeight: 500 }}>
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Experience & Patients */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-2.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-1 shadow-sm">
                            <GraduationCap className="w-4 h-4 text-indigo-600" />
                          </div>
                          <p className="text-indigo-600 mb-0.5" style={{ fontSize: '15px', fontWeight: 900, lineHeight: 1.2 }}>
                            {doctor.experience}
                          </p>
                          <p className="text-gray-600" style={{ fontSize: '10px', fontWeight: 700, lineHeight: 1.3 }}>
                            경력
                          </p>
                        </div>
                        
                        <div className="text-center p-2.5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-1 shadow-sm">
                            <Heart className="w-4 h-4 text-purple-600" />
                          </div>
                          <p className="text-purple-600 mb-0.5" style={{ fontSize: '15px', fontWeight: 900, lineHeight: 1.2 }}>
                            {doctor.patients}
                          </p>
                          <p className="text-gray-600" style={{ fontSize: '10px', fontWeight: 700, lineHeight: 1.3 }}>
                            시술
                          </p>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="mb-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Award className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-indigo-600" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.3 }}>
                            학력
                          </span>
                        </div>
                        <p className="text-gray-700" style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.5 }}>
                          {doctor.education}
                        </p>
                      </div>

                      {/* Certifications */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Check className="w-3.5 h-3.5 text-indigo-600" />
                          <span className="text-indigo-600" style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1.3 }}>
                            전문 자격
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {doctor.certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-start gap-1.5">
                              <div className="w-1 h-1 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-600" style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.6 }}>
                                {cert}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-indigo-600 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`슬라이드 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { number: '15년+', label: '평균 경력', icon: GraduationCap },
            { number: '10,500+', label: '총 시술', icon: Heart },
            { number: '98%', label: '만족도', icon: Star },
            { number: '100%', label: '전문의 직접', icon: Award }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center p-5 bg-white rounded-xl border border-gray-100 shadow-md">
                <div className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-indigo-600 mb-1" style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 900 }}>
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
