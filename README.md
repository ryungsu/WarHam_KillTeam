# WarHam Kill Team

Kill Team 2024용 모바일 우선 React·TypeScript PWA입니다. 기존 40K 앱과 독립적으로 관리합니다.

- 저장소: https://github.com/ryungsu/WarHam_KillTeam
- 공개 앱: https://killteam-field-reference.regalsugar7.chatgpt.site/

## 개발

Node.js 22 이상과 pnpm 10을 사용합니다.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
```

빌드 결과는 `dist/`에 생성됩니다. 테스트·타입 검사·빌드는 GitHub Actions에서도 실행됩니다.

## 기능

- Angels of Death·Scout Squad 로스터 생성·편집·편성 검증
- 편집 화면의 손잡이 드래그·터치 또는 위/아래 버튼으로 요원 순서 변경 및 저장
- 이미지·선택 무장·능력이 포함된 펼침형 데이터시트와 스크롤 네비게이터
- 빠른 검색 패널 및 한국어·영어 전환
- 날짜·사용 스쿼드·맵·미션별 전투 기록
- Crit Op 9개 무작위 추첨, 맵 목록 및 직접 입력
- 데이터시트 중심 전투 화면과 우측 점수·미션·상황별 전투 보조 패널
- TP·양측 CP/VP·메모 로컬 자동 저장, 세션 중 되돌리기
- 최초 온라인 로딩·캐시 완료 후 오프라인 데이터시트 조회

로스터·전투 기록은 각 브라우저에 저장됩니다. GitHub나 서버에 동기화되지 않습니다.

## 데이터와 번역

팀 데이터는 vjosset/killteamjson의 kt24_v4 스냅샷 기반입니다. 미션 22개에 한국어 본문이 있습니다. 7개는 공식 업데이트 본문 대조 완료, 15개는 이탈리아어 커뮤니티 자료 기반 번역 초안입니다. 공식 검증 완료와 번역 초안을 구분합니다. 원문과 이미지 출처는 앱 및 `public/images/operatives/sources.json`에서 확인할 수 있습니다.

검증 기록: [docs/mission-audit/REPORT.md](docs/mission-audit/REPORT.md).

원본 스냅샷은 `data-original/`에 보관합니다. `scripts/import-missions.mjs`는 미션 목록 재생성 시 `data-original/missions/korean-drafts.json`의 초안도 적용합니다. 데이터 재생성 후 테스트와 변경 내용을 확인하세요.

## 브랜치·배포 관리

- `main`: 검증된 기준 코드
- `codex/기능명`: 변경 작업 브랜치. 확인 후 PR로 main에 병합
- 기존 `ryungsu/WarHam` 저장소의 40K 앱은 별도로 유지

이 저장소는 앞으로 킬팀 개발의 기준입니다. GitHub Actions는 검사·빌드만 수행하며 배포하지 않습니다. 현재 서비스는 Sites에 배포되어 있으며 GitHub push와 자동 연결되어 있지 않습니다.

배포 절차: main 검증 → 해당 소스로 빌드 → Sites 배포 체크아웃에 반영 → Sites 버전 저장·배포 → 공개 URL 확인. `.openai/hosting.json`은 기존 Sites 프로젝트 식별자이며, 이를 바꾸거나 새 사이트를 만들 필요가 없습니다. 배포할 때 GitHub 커밋 SHA도 기록해 코드와 서비스를 대조합니다.

`node_modules/`, `dist/`, 임시 다운로드·분석 파일은 Git에서 제외합니다. 인증 토큰·개인 로스터·전투 기록은 커밋하지 않습니다.

## 규칙 빠른 설명

한국어 모드에서 등록된 영문 행동·명령·규칙 용어를 한국어 터치 링크로 표시합니다. 우측 하단 토스트는 직접 닫을 때까지 유지되며 원어와 출처를 제공합니다. 보관 버전은 `v0.1.0`, 브랜치는 `codex/release-v0.1.0`입니다. 이 보관 버전에는 규칙 토스트 추가 전 상태가 저장되어 있습니다.
