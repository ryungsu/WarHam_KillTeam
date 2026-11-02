# 신규 팀 3개 · 로컬 개발 검증

검토일: 2026-11-02. 브랜치: codex/killteamcore-secondary. 로컬 검수 후 release-2026-11-02 서비스 릴리즈에 포함한다.

## 소스

기존 vjosset/killteamjson 스냅샷의 CHAOS-PM, CHAOS-NC, TYR-RAV를 사용한다. KillTeamCore의 고정 커밋 e7c5fefdfdbe53fa06a2231efd6fc800de589f0d를 보조 대조 자료로 사용한다. scripts/secondary-source.mjs의 추출 범위를 7팀으로 확장했다.

공식 다운로드 API에서 세 팀 모두 last_updated=28/10/2026임을 확인하고 아래 PDF를 내려받아 편성·무장·능력·업데이트 로그를 대조했다.

- Plague Marines: https://assets.warhammer-community.com/eng_28-10_kill_team_team_rules_plague_marines-g24es2y2sf-w099ltpkoa.pdf
- Nemesis Claw: https://assets.warhammer-community.com/eng_28-10_kill_team_team_rules_nemesis_claw-ybccnd9qcw-2c6utdqxa5.pdf
- Raveners: https://assets.warhammer-community.com/eng_28-10_kill_team_team_rules_raveners-h8bosc0ksi-2kdh46uw2b.pdf

원본 스냅샷은 data-original/teams.json에 유지한다. 확인된 차이는 data-original/new-team-overrides.json과 prepare-data.mjs에 별도 적용하며 public/data/version.json에 팀별 검토 출처를 기록한다. 이 검토가 기존 4개 팀이나 공통 규칙 전체의 최신화를 의미하지는 않는다.

## 편성 및 변경

- 플레이그 마린: 6명, 챔피언 필수, 모든 역할 각각 최대 1명(워리어도 예외 없음). 기본 무장 고정. 봄바디어 자체 수류탄은 능력으로 부여된 프로필을 표시한다. Toxic은 행동 시작 시 Poison이 있던 표적에게만 적용하며 Blast의 다른 표적에게 전파하지 않는다.
- 네메시스 클로: 6명, 비저너리 1명 + 5명. 워리어만 반복 가능. 비저너리 4조합, 거너 3조합, 헤비 거너 2조합, 워리어 2조합. The Black Hunt는 행동 시작 시 상처가 있던 표적 기준. Disconcerting Mimicry의 지속 시점·상대 규칙 미적용과 Poison Objective의 행동 제한을 반영했다.
- 래버너: 5명, 프라임 1명 + 4명, 워리어만 반복 가능. 공식 체력 19/18 반영(원본 JSON은 21/20). Toxic Lunge의 시야·통제 범위 제한을 보완하고 재배치 효과로 Subterranean Ambush를 발동할 수 없음을 한국어 설명에 명시했다. Venom Blast 원본 명칭을 공식 Venom Bolt로 정규화했다.
- Tac Ops: 플레이그 마린 Security/Seek & Destroy, 나머지 두 팀 Infiltration/Seek & Destroy. 각각 6개.
- Poison·Toxic·Terrorchem·Crush는 데이터시트와 전투보조에서 해당 팀의 능력 설명을 연결한다. 특히 Poison의 피해는 플레이그 마린 1, 래버너 D3로 분리한다.
- Vox Scream 비용은 이전 TP의 사용 기록으로 기본값을 제시한다. 실패 시 CP 환급은 수동 CP 버튼으로 기록하고, 과거 실패·환급 건은 다음 사용의 비용 선택으로 보정한다. 일반 플로이의 비용 선택은 1/0CP를 유지한다.

## 이미지 및 범위

공식 PDF의 해당 요원 데이터카드 헤더에서 이미지 21개를 추출했다. public/images/operatives/sources.json에 페이지·이미지 오브젝트·원본 URL을 기록한다. 땅굴 위치·지하 상태·예지 포인트·중독 토큰은 자동 시뮬레이션하지 않으며 설명과 전투 메모를 통해 관리한다. 한국어 설명은 번역 초안이며 영어 설명을 유지한다.

## 확인

기존 4개 팀 데이터가 바뀌지 않았음을 비교했다. 타입 검사, 전체 회귀 테스트 44개, 신규 요원 데이터시트 및 전투보조 서버 렌더링, 번역 누락 검사, 프로덕션 빌드 및 오프라인 캐시 생성을 수행했다. 브라우저 자동화는 런타임 초기화 오류로 사용하지 못해 실제 클릭·터치 검증은 남아 있다. 이전 작업의 전투 기록 삭제 기능도 로컬 변경으로 유지했다.

### 이미지 매칭 정정

PDF 리소스 번호는 카드의 표시 순서와 다르다. 제목 텍스트의 좌표와 이미지 렌더링 좌표를 대조해 21개 모두 재매칭했다. 플레이그 마린 5개와 래버너 2개의 잘못 연결된 이미지를 수정했고, 네메시스 클로 비저너리는 같은 그림의 앞면 오브젝트로 통일했다. 제목·페이지·이미지 이름·좌표·PNG 해시는 data-original/portrait-card-mapping.json에 기록한다. 신규 3팀의 이미지 URL에 리비전을 붙여 브라우저의 이전 이미지 캐시를 구분한다.
