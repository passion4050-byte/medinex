import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { KakaoIcon } from './KakaoIcon';

interface NavigationProps {
  onNavigate?: (page: 'home' | 'hair' | 'ophthalmology' | 'dermatology') => void;
  currentPage?: 'home' | 'hair' | 'ophthalmology' | 'dermatology';
}

export function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href === '#hair' && onNavigate) {
      onNavigate('hair');
      setMobileMenuOpen(false);
    } else if (href === '#ophthalmology' && onNavigate) {
      onNavigate('ophthalmology');
      setMobileMenuOpen(false);
    } else if (href === '#dermatology' && onNavigate) {
      onNavigate('dermatology');
      setMobileMenuOpen(false);
    } else if (onNavigate) {
      onNavigate('home');
      setMobileMenuOpen(false);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-purple-100/50" style={{ boxShadow: '0 4px 24px rgba(168, 85, 247, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-3 hover:opacity-80 transition-all hover:scale-105">
            <div className="w-11 h-11 lg:w-13 lg:h-13 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight" style={{ fontSize: '24px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                MEDINEX
              </div>
              <div className="text-purple-500 tracking-wide" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px' }}>
                PREMIUM MEDICAL CARE
              </div>
            </div>
          </button>
        
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: '안과', href: '#ophthalmology' },
              { label: '피부과', href: '#dermatology' },
              { label: '모발이식', href: '#hair' }
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-gray-700 hover:text-purple-600 transition-colors relative group py-2 ${
                  (currentPage === 'hair' && item.href === '#hair') ||
                  (currentPage === 'ophthalmology' && item.href === '#ophthalmology') ||
                  (currentPage === 'dermatology' && item.href === '#dermatology')
                    ? 'text-purple-600' : ''
                }`}
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full ${
                  (currentPage === 'hair' && item.href === '#hair') ||
                  (currentPage === 'ophthalmology' && item.href === '#ophthalmology') ||
                  (currentPage === 'dermatology' && item.href === '#dermatology')
                    ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a 
              href="https://pf.kakao.com/_nTdcn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 rounded-full hover:shadow-xl transition-all duration-300 group hover:scale-105" 
              style={{ 
                fontSize: '14px', 
                fontWeight: 800,
                backgroundColor: '#FEE500',
                color: '#3C1E1E'
              }}
            >
              <KakaoIcon className="w-5 h-5" />
              <span>3초만에 카톡 상담하기</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="메뉴"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-purple-100 py-4 space-y-1">
            {[
              { label: '안과', href: '#ophthalmology' },
              { label: '피부과', href: '#dermatology' },
              { label: '모발이식', href: '#hair' }
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all ${
                  (currentPage === 'hair' && item.href === '#hair') ||
                  (currentPage === 'ophthalmology' && item.href === '#ophthalmology') ||
                  (currentPage === 'dermatology' && item.href === '#dermatology')
                    ? 'text-purple-600 bg-purple-50' : ''
                }`}
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
