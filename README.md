# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스입니다. 자세한 내용은 [PRD.md](./PRD.md), [CLAUDE.md](./CLAUDE.md)를 참고하세요.

## 시작하기

1. 의존성 설치

   ```bash
   npm install
   ```

2. 환경 변수 설정

   `.env.local.example`을 참고하여 `.env.local`에 MongoDB Atlas 연결 문자열(`MONGODB_URI`)을 입력하세요.

3. 개발 서버 실행

   ```bash
   npm run dev
   ```

   [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 구조

- `src/app` — 라우트 및 API (App Router)
- `src/components` — 화면을 구성하는 UI 컴포넌트
- `src/lib` — 데이터, MongoDB 연결 등 유틸리티
- `src/types` — 공용 타입 정의
