# KillTeamCore 보조 소스

- 안정 기준: `stable-2026-10-30` 태그, 기존 공개 앱 Sites v45
- 작업 브랜치: `codex/killteamcore-secondary`
- 원본: https://github.com/KillTeamCore/killteamcore.github.io
- 연결 위치: `external/killteamcore` Git 서브모듈
- 최초 고정 커밋: `e7c5fefdfdbe53fa06a2231efd6fc800de589f0d` (2026-10-29)

기존 vjosset JSON은 앱의 기본 데이터다. KillTeamCore는 한국어 문구와 변경사항을 대조하는 보조 소스이며, 자동으로 규칙을 덮어쓰지 않는다. 외부 HTML·스크립트는 앱에서 실행하거나 배포하지 않는다.

## 최초 내려받기

```sh
git submodule update --init --depth 1 external/killteamcore
npm run reference:killteamcore
```

7개 지원 팀의 능력·플로이·장비·진영 규칙·무기 표를 `tmp/secondary-source/killteamcore.json`으로 추출한다. 팀마다 원본 경로·고정 커밋·SHA-256을 남긴다. 이 비교 자료는 Git 및 사이트 빌드에 포함하지 않는다. 추출기는 사람이 검토하기 위한 HTML 구조 기반 도구이며 자동 규칙 변환기가 아니다.

## 다음 업데이트

```sh
git -C external/killteamcore fetch origin main
git -C external/killteamcore checkout <검토할-커밋-SHA>
npm run reference:killteamcore
```

공식 업데이트와 대조 → 기존 ID와 연결 → 영어·한국어 및 편성 검증 수정 → 테스트 → 서브모듈 포인터와 함께 커밋 순서로 진행한다. 최신 커밋을 가져오는 것과 패치 적용 완료는 구분한다. `manifest.json`의 날짜보다 실제 커밋과 변경 내용을 확인한다.

서브모듈은 `.gitmodules`와 Git 포인터로만 관리한다. 앱 배포 체크아웃으로 소스를 복사할 때 `external/killteamcore` Git 링크는 건너뛴다. 빌드에 외부 저장소나 네트워크가 필요하지 않다. GitHub Actions에서도 재귀 checkout은 필요 없다.

초기 브랜치는 연결·비교 도구 준비 단계였으며, 이후 신규 3팀 및 검수 하네스를 추가했다. 서비스 릴리즈 기준은 release-2026-11-02 태그다. 기존 모든 팀과 공통 규칙 전체의 최신 패치 반영을 의미하지 않는다.
