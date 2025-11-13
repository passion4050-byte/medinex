import { Phone, User, Calendar, Send, Building2, Sparkles, Gift, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { KakaoIcon } from './KakaoIcon';

export function LeadForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    affiliation: '',
    category: '',
    treatment: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact-form" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/40 to-pink-50/40 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border-2 border-purple-200/60 rounded-full mb-4 sm:mb-5 shadow-xl">
            <Gift className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 800 }}>
              지금 상담 신청하고 최대 49% 할인!
            </span>
          </div>
          
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4" style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.25 }}>
            무료 상담 신청
          </h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto mb-5 sm:mb-6 px-4" style={{ fontSize: 'clamp(14px, 3.2vw, 17px)', fontWeight: 500, lineHeight: 1.7 }}>
            간단한 정보만 입력하시면 전문 상담사가<br className="sm:hidden" /> <span className="text-purple-600" style={{ fontWeight: 800 }}>24시간 내</span> 연락드립니다
          </p>

          {/* Trust Indicators - Mobile Optimized */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-4">
            {[
              { icon: CheckCircle, text: '100% 무료' },
              { icon: Sparkles, text: '최대 49% 할인' },
              { icon: Phone, text: '24시간 내 연락' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-full border-2 border-purple-100/60 shadow-md">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                  <span className="text-gray-800" style={{ fontSize: 'clamp(11px, 2.8vw, 13px)', fontWeight: 800 }}>
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card - Mobile Optimized */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-purple-100/60 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Phone - Mobile Optimized */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-gray-900 mb-2 sm:mb-2.5" style={{ fontSize: 'clamp(14px, 3vw, 15px)', fontWeight: 800 }}>
                  이름 <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <User className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors ${focusedField === 'name' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 border-2 rounded-lg sm:rounded-xl focus:outline-none transition-all ${focusedField === 'name' ? 'border-purple-500 bg-purple-50/40 ring-2 ring-purple-200/50' : 'border-gray-200 bg-white hover:border-purple-300'}`}
                    placeholder="홍길동"
                    style={{ fontSize: 'clamp(14px, 3vw, 15px)', fontWeight: 500 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 mb-2 sm:mb-2.5" style={{ fontSize: 'clamp(14px, 3vw, 15px)', fontWeight: 800 }}>
                  연락처 <span className="text-purple-600">*</span>
                </label>
                <div className="relative">
                  <Phone className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors ${focusedField === 'phone' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3.5 sm:py-4 border-2 rounded-lg sm:rounded-xl focus:outline-none transition-all ${focusedField === 'phone' ? 'border-purple-500 bg-purple-50/40 ring-2 ring-purple-200/50' : 'border-gray-200 bg-white hover:border-purple-300'}`}
                    placeholder="010-1234-5678"
                    style={{ fontSize: 'clamp(14px, 3vw, 15px)', fontWeight: 500 }}
                  />
                </div>
              </div>
            </div>

            {/* Affiliation & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  제휴사/학교명 <span className="text-purple-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'affiliation' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    required
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    onFocus={() => setFocusedField('affiliation')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${focusedField === 'affiliation' ? 'border-purple-400 bg-purple-50/30 ring-2 ring-purple-100' : 'border-gray-200 bg-white'}`}
                    placeholder="예: 서울대학교, 삼성전자"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  구분 <span className="text-purple-500">*</span>
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  onFocus={() => setFocusedField('category')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-3 py-3 border rounded-lg focus:outline-none transition-all ${focusedField === 'category' ? 'border-purple-400 bg-purple-50/30 ring-2 ring-purple-100' : 'border-gray-200 bg-white'}`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
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
                  관심 시술 <span className="text-purple-500">*</span>
                </label>
                <select
                  required
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  onFocus={() => setFocusedField('treatment')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-3 py-3 border rounded-lg focus:outline-none transition-all ${focusedField === 'treatment' ? 'border-purple-400 bg-purple-50/30 ring-2 ring-purple-100' : 'border-gray-200 bg-white'}`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  <option value="">선택하세요</option>
                  <option value="lasik">라식/라섹</option>
                  <option value="cataract">백내장</option>
                  <option value="laser">레이저 토닝/리프팅</option>
                  <option value="botox">보톡스/필러</option>
                  <option value="hair">모발이식</option>
                  <option value="scalp">두피 관리</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
                  희망 상담일
                </label>
                <div className="relative">
                  <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'date' ? 'text-purple-600' : 'text-gray-400'}`} />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none transition-all ${focusedField === 'date' ? 'border-purple-400 bg-purple-50/30 ring-2 ring-purple-100' : 'border-gray-200 bg-white'}`}
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  />
                </div>
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
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={3}
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none transition-all resize-none ${focusedField === 'message' ? 'border-purple-400 bg-purple-50/30 ring-2 ring-purple-100' : 'border-gray-200 bg-white'}`}
                placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.5 }}
              />
            </div>

            {/* Privacy Notice */}
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <p className="text-gray-700" style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.6 }}>
                <span className="block mb-1 text-purple-600" style={{ fontWeight: 700 }}>개인정보 수집 및 이용 안내</span>
                • 수집 항목: 이름, 연락처, 제휴사/학교명<br />
                • 수집 목적: 상담 신청 및 안내<br />
                • 보유 기간: 상담 완료 후 6개월
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-xl text-white transition-all flex items-center justify-center gap-2 ${
                submitted 
                  ? 'bg-green-500' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:scale-[1.02]'
              }`}
              style={{ fontSize: '16px', fontWeight: 800 }}
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  신청이 완료되었습니다!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>무료 상담 신청하기</span>
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-gray-600" style={{ fontSize: '12px', fontWeight: 600 }}>
                  평일 10:00-19:00
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Kakao CTA */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-3" style={{ fontSize: '14px', fontWeight: 600 }}>
            카카오톡으로 <span className="text-purple-600" style={{ fontWeight: 800 }}>더 빠르게</span> 상담받으세요
          </p>
          <a href="https://pf.kakao.com/_nTdcn/chat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-yellow-400 text-gray-800 rounded-xl hover:bg-yellow-50 hover:shadow-md transition-all hover:scale-105" style={{ fontSize: '15px', fontWeight: 800 }}>
            <KakaoIcon className="w-5 h-5 text-gray-800" />
            카카오톡 1분 상담
            <Sparkles className="w-4 h-4 text-yellow-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
