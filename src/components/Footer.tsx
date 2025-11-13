import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 lg:pt-24 pb-24 lg:pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEE500] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FEE500] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 lg:pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FEE500] to-[#FFD700] rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="text-white tracking-tight" style={{ fontSize: '24px', fontWeight: 700 }}>
                  MEDINEX
                </div>
                <div className="text-white/50 tracking-wide" style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '1px' }}>
                  PREMIUM MEDICAL CARE
                </div>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>
              <strong style={{ fontWeight: 700 }}>제휴 파트너</strong>를 위한<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>프리미엄 메디컬 케어</strong>,<br />
              MEDINEX에서 <strong style={{ fontWeight: 700 }}>건강한 변화</strong>를 시작하세요.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#FEE500] rounded-xl flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#FEE500] rounded-xl flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-[#FEE500] rounded-xl flex items-center justify-center transition-all group"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
              빠른 메뉴
            </h3>
            <ul className="space-y-4">
              {[
                { label: '안과', href: '#ophthalmology' },
                { label: '피부과', href: '#dermatology' },
                { label: '모발이식', href: '#hair' },
                { label: '의료진 소개', href: '#doctors' },
                { label: '상담 신청', href: 'https://pf.kakao.com/_nTdcn/chat', external: true }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white/70 hover:text-[#FEE500] transition-colors inline-flex items-center gap-2 group"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
              연락처
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#FEE500]" />
                </div>
                <div>
                  <p className="text-white/50 mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>카카오톡</p>
                  <a href="https://pf.kakao.com/_nTdcn/chat" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FEE500] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    상담하기
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#FEE500]" />
                </div>
                <div>
                  <p className="text-white/50 mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>이메일</p>
                  <a href="mailto:cs@medinex.team" className="text-white hover:text-[#FEE500] transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    cs@medinex.team
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#FEE500]" />
                </div>
                <div>
                  <p className="text-white/50 mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>운영시간</p>
                  <p className="text-white" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.6 }}>
                    평일 10:00-19:00<br />
                    토요일 10:00-16:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white mb-6" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
              오시는 길
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[#FEE500]" />
              </div>
              <div>
                <p className="text-white mb-2" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.6 }}>
                  서울특별시 강남구<br />
                  강남대로 484, 6층
                </p>
                <p className="text-white/60" style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.6 }}>
                  지하철 신분당선 신논현역 10번출구
                </p>
              </div>
            </div>

            <a 
              href="https://map.naver.com/p/search/서울특별시%20강남구%20강남대로%20484" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 bg-white/10 hover:bg-[#FEE500] text-white hover:text-black rounded-xl transition-all flex items-center justify-center gap-2 group" 
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              <MapPin className="w-4 h-4" />
              지도 보기
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Business Info */}
            <div className="text-white/50 space-y-2" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>
              <p>상호명: 메디넥스 | 사업자등록번호: 630-86-03914</p>
              <p>주소: 서울특별시 강남구 강남대로 484, 6층</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '13px', fontWeight: 500 }}>
                개인정보처리방침
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '13px', fontWeight: 500 }}>
                이용약관
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/40 text-center" style={{ fontSize: '13px', fontWeight: 400 }}>
              © 2024 MEDINEX. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FEE500] to-transparent"></div>
    </footer>
  );
}
