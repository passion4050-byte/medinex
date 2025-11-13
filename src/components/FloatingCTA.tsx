import { Phone, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { KakaoIcon } from './KakaoIcon';

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons - Desktop Only */}
      <div className="hidden lg:flex fixed bottom-6 right-6 lg:bottom-8 lg:right-8 flex-col gap-3 z-50">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-purple-100 hover:scale-110 group"
            aria-label="맨 위로"
          >
            <ChevronUp className="w-6 h-6 lg:w-7 lg:h-7 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}

        {/* KakaoTalk Button with Image */}
        <a
          href="https://pf.kakao.com/_nTdcn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-yellow-400"
          aria-label="카카오톡 상담"
        >
          <KakaoIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-800" />
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-purple-100 px-4 py-3 safe-area-bottom" style={{ boxShadow: '0 -4px 20px rgba(168, 85, 247, 0.1)' }}>
        <a
          href="https://pf.kakao.com/_nTdcn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-white border-2 border-yellow-400 text-gray-800 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
          style={{ fontSize: '15px', fontWeight: 700 }}
        >
          <KakaoIcon className="w-5 h-5 text-gray-800" />
          <strong style={{ fontWeight: 800 }}>1분 카톡</strong>으로 <strong style={{ fontWeight: 800 }}>제휴 혜택</strong> 찾기
        </a>
      </div>
    </>
  );
}
