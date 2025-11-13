# 🏥 MEDINEX - 제휴 파트너를 위한 프리미엄 메디컬 혜택

> 미용 및 의료 클리닉(안과, 피부과, 모발이식)을 위한 모던 랜딩 페이지

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/medinex-landing)

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [빠른 시작](#-빠른-시작)
- [아임웹 배포](#-아임웹-배포)
- [커스터마이징](#-커스터마이징)
- [스크린샷](#-스크린샷)

---

## 🎯 프로젝트 소개

**MEDINEX**는 제휴 대학생과 제휴 기업의 임직원 및 가족들을 위한 프리미엄 의료 서비스 랜딩 페이지입니다.

### 특징

- 🎨 **모던 디자인**: 퍼플/핑크 그라데이션 테마
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 최적화
- ⚡ **빠른 로딩**: Vite 기반 최적화
- 🔄 **인터랙티브**: 전후 비교 슬라이더, 애니메이션
- 💬 **카카오톡 연동**: 간편한 상담 신청

---

## ✨ 주요 기능

### 1. 히어로 섹션
- 임팩트 있는 메인 헤드라인
- "최대 49% 할인" 강조
- 카카오톡 상담 CTA

### 2. 3개 전문 분야
- 🏥 **안과**: 라식/라섹, 노안교정, 백내장
- 💆 **피부과**: 보톡스/필러, 레이저, 미백
- 💇 **모발이식**: FUE/FUT, 비절개, SMP

### 3. 전후 비교
- Before/After 슬라이더
- 실제 고객 사례
- 토글 버튼 방식

### 4. 상담 신청 폼
- 카카오톡 연동 (#FEE500)
- 구분 필드: 대학생 | 기업 임직원 | 가족 및 지인
- 개인정보 동의

### 5. 플로팅 CTA
- 스크롤 시 항상 표시
- 전화 & 카카오톡 버튼

---

## 🛠️ 기술 스택

- **Frontend**: React 18
- **Styling**: Tailwind CSS v4.0
- **Build**: Vite
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animation**: Motion (Framer Motion)
- **Images**: Unsplash API
- **Deployment**: Vercel

---

## 🚀 빠른 시작

### 로컬 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/your-username/medinex-landing.git
cd medinex-landing

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 프로덕션 빌드

```bash
npm run build
npm run preview
```

---

## 🌐 Vercel 배포 (가장 쉬움!)

### ⚡ 1분 만에 배포하기

**배포 준비 완료!** 모든 설정 파일이 준비되어 있습니다.

#### 방법 1: GitHub + Vercel (추천 ⭐)

```bash
# 1. GitHub에 업로드
git init
git add .
git commit -m "MEDINEX 배포 준비"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. https://vercel.com 접속
# 3. "Add New Project" → GitHub 저장소 선택
# 4. "Deploy" 클릭!
# 완료! 🎉
```

#### 방법 2: Vercel CLI (빠름 ⚡)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 📚 상세 가이드

- **빠른 체크리스트**: `/배포_체크리스트.md` ⭐ **먼저 읽기!**
- **상세 배포 가이드**: `/VERCEL_배포_가이드.md`
- **로컬 테스트**: `/배포전_테스트.md`

### 🎯 배포 완료 확인

배포 성공 시:
- ✅ Vercel에서 자동으로 URL 생성 (예: `https://medinex-xxxxx.vercel.app`)
- ✅ HTTPS 자동 적용
- ✅ 글로벌 CDN 자동 배포
- ✅ 코드 푸시 시 자동 재배포

**예상 소요 시간**: 1-2분

---

## 🌐 아임웹 배포

### 3단계로 끝내기 (10분 소요)

#### 1️⃣ GitHub에 업로드

```bash
# GitHub Desktop 사용 (추천)
1. https://desktop.github.com 다운로드
2. File > New Repository
3. Publish repository
```

또는 웹에서:
```
1. https://github.com/new
2. Repository name: medinex-landing
3. "uploading an existing file" 클릭
4. 모든 파일 드래그 앤 드롭
```

#### 2️⃣ Vercel로 배포

```
1. https://vercel.com 접속
2. GitHub로 로그인
3. Add New > Project
4. medinex-landing 선택
5. Framework: Vite 선택
6. Deploy 클릭
7. ⚠️ URL 복사 (예: https://medinex-landing-abc123.vercel.app)
```

#### 3️⃣ 아임웹에 임베드

```
1. 아임웹 관리자 > 디자인 > 페이지
2. 새 페이지 만들기 (빈 페이지)
3. HTML 위젯 추가
4. imweb-embed-code.html 내용 붙여넣기
5. YOUR_VERCEL_URL_HERE → 실제 Vercel URL로 변경
6. 설정: 헤더/푸터 숨김
7. 발행
```

### 📁 배포 가이드 파일

- **빠른 가이드**: `/빠른_배포_가이드.txt`
- **상세 가이드**: `/아임웹_배포_가이드.md`
- **간단 가이드**: `/SIMPLE_DEPLOY_GUIDE.md`
- **임베드 코드**: `/imweb-embed-code.html`

---

## 🎨 커스터마이징

### 연락처 정보 변경

#### 전화번호
```typescript
// components/FloatingCTA.tsx
// components/Footer.tsx
tel:02-1234-5678  // 실제 번호로 변경
```

#### 카카오톡 채널
```typescript
// components/FloatingCTA.tsx
// components/HeroSection.tsx
https://pf.kakao.com/_your_channel  // 실제 채널로 변경
```

### 할인율 변경

모든 할인율은 "최대 49% 할인"으로 통일되어 있습니다.

```typescript
// 전역 검색: "49%"
// 원하는 할인율로 일괄 변경
```

### 이미지 변경

#### Unsplash 이미지
```typescript
// 각 컴포넌트에서 unsplash_tool 검색어 변경
const image = await unsplash_tool("새로운 검색어");
```

#### 직접 이미지 URL
```tsx
<ImageWithFallback
  src="https://your-image-url.com/image.jpg"
  alt="설명"
/>
```

### 색상 테마 변경

```css
/* styles/globals.css */
--color-primary: #9333ea;  /* 메인 퍼플 */
--color-secondary: #ec4899; /* 핑크 */
```

---

## 📱 스크린샷

### 데스크톱

```
┌─────────────────────────────────────────────┐
│  MEDINEX                        ☰ 메뉴      │
├─────────────────────────────────────────────┤
│                                              │
│   제휴 파트너를 위한                         │
│   프리미엄 메디컬 혜택                       │
│   MEDINEX                                   │
│                                              │
│   [💬 카카오톡 상담하기]                     │
│                                              │
│   ╔════════════════════════════╗            │
│   ║  👁️ 안과  |  💆 피부과  |  💇 모발이식 ║  │
│   ╚════════════════════════════╝            │
│                                              │
│   [BEFORE ←→ AFTER 슬라이더]                │
│                                              │
│   시술 카드 그리드...                        │
│                                              │
└─────────────────────────────────────────────┘
```

### 모바일

```
┌───────────────────┐
│  MEDINEX      ☰   │
├───────────────────┤
│                   │
│  제휴 파트너를     │
│  위한 프리미엄     │
│  메디컬 혜택       │
│                   │
│  [💬 카카오톡]     │
│                   │
│  ┌─────────────┐  │
│  │ 👁️ 안과      │  │
│  └─────────────┘  │
│                   │
│  [BEFORE/AFTER]   │
│                   │
│  시술 카드...      │
│                   │
└───────────────────┘
```

---

## 📂 프로젝트 구조

```
medinex-landing/
├── App.tsx                          # 메인 앱
├── components/
│   ├── Navigation.tsx               # 고정 네비게이션
│   ├── HeroSection.tsx             # 히어로 섹션
│   ├── CategorySection.tsx         # 3개 전문 분야 탭
│   ├── BeforeAfterSlider.tsx       # 전후 비교
│   ├── TreatmentCards.tsx          # 시술 카드
│   ├── DoctorSection.tsx           # 의사 섹션
│   ├── TestimonialsSection.tsx     # 고객 후기
│   ├── PartnerBenefitsSection.tsx  # 제휴 혜택
│   ├── LeadForm.tsx                # 상담 신청 폼
│   ├── FloatingCTA.tsx             # 플로팅 버튼
│   ├── Footer.tsx                  # 푸터
│   ├── OphthalmologyDetail.tsx     # 안과 상세
│   ├── DermatologyDetail.tsx       # 피부과 상세
│   └── HairTransplantDetail.tsx    # 모발이식 상세
├── styles/
│   └── globals.css                 # Tailwind 설정
├── imweb-embed-code.html           # 아임웹 임베드 코드
└── README.md                       # 이 파일
```

---

## 🔧 주요 설정

### 구분 필드 옵션
```typescript
["대학생", "기업 임직원", "가족 및 지인"]
```

### 고객 후기 이름 형식
```typescript
"정*진(35)"  // 이름 가운데 마스킹 + 나이
```

### 카카오톡 브랜드 컬러
```typescript
backgroundColor: "#FEE500"
```

### 디자인 톤앤매너
```
- 화이트 베이스
- 퍼플/핑크 그라데이션
- 부드러운 둥근 모서리
- 그림자 효과
```

---

## 📊 성능 최적화

- ✅ 이미지 Lazy Loading
- ✅ Code Splitting
- ✅ Tree Shaking
- ✅ CSS Purging
- ✅ Gzip Compression
- ✅ CDN 배포 (Vercel)

---

## 🌍 브라우저 지원

- Chrome (최신)
- Safari (최신)
- Firefox (최신)
- Edge (최신)
- 모바일 브라우저 (iOS Safari, Chrome)

---

## 📄 라이선스

이 프로젝트는 상업적 용도로 제작되었습니다.

---

## 🤝 기여

이 프로젝트는 클라이언트 프로젝트입니다.  
수정 사항이 있으면 담당 개발자에게 연락하세요.

---

## 📞 문의

### 개발 관련
- GitHub Issues
- 담당 개발자 연락

### 서비스 관련
- 📞 전화: 02-XXXX-XXXX
- 💬 카카오톡: @medinex

---

## 🎉 배포 완료 체크리스트

- [ ] GitHub 저장소 생성
- [ ] Vercel 배포 완료
- [ ] 아임웹 임베드 완료
- [ ] 실제 연락처 정보 입력
- [ ] 모바일 테스트 완료
- [ ] 데스크톱 테스트 완료
- [ ] 카카오톡 링크 테스트
- [ ] 전화 링크 테스트
- [ ] 상담 폼 테스트
- [ ] 실서비스 오픈

---

## 🚀 다음 단계

1. **연락처 정보 업데이트**
   - 전화번호, 카카오톡 채널 등

2. **콘텐츠 최종 검토**
   - 텍스트, 이미지, 할인율 등

3. **SEO 최적화**
   - 메타 태그, Open Graph 등

4. **분석 도구 연동**
   - Google Analytics
   - 카카오 픽셀 등

5. **실서비스 오픈** 🎊

---

**Made with ❤️ for MEDINEX**
