import {aquilonNames,aquilonTexts} from './aquilonTranslations';
export const names:Record<string,string>={
'Angels Of Death':'죽음의 천사','Scout Squad':'스카웃 스쿼드','Space Marine Captain':'스페이스 마린 캡틴','Assault Intercessor Sergeant':'어썰트 인터세서 서전트','Intercessor Sergeant':'인터세서 서전트','Eliminator Sniper':'엘리미네이터 스나이퍼','Assault Intercessor Grenadier':'어썰트 인터세서 그레네디어','Assault Intercessor Warrior':'어썰트 인터세서 워리어','Heavy Intercessor Gunner':'헤비 인터세서 거너','Intercessor Gunner':'인터세서 거너','Intercessor Warrior':'인터세서 워리어','Scout Sergeant':'스카웃 서전트','Scout Heavy Gunner':'스카웃 헤비 거너','Scout Hunter':'스카웃 헌터','Scout Sniper':'스카웃 스나이퍼','Scout Tracker':'스카웃 트래커','Scout Warrior':'스카웃 워리어',
'Plasma Pistol':'플라즈마 피스톨','Power Fist':'파워 피스트','Hand Flamer':'핸드 플레이머','Heavy Bolt Pistol':'헤비 볼트 피스톨','Chainsword':'체인소드','Power Weapon':'파워 웨폰','Thunder Hammer':'썬더 해머','Auto Bolt Rifle':'오토 볼트 라이플','Bolt Rifle':'볼트 라이플','Stalker Bolt Rifle':'스토커 볼트 라이플','Fists':'주먹','Bolt Pistol':'볼트 피스톨','Bolt Sniper Rifle':'볼트 스나이퍼 라이플','Frag Grenade':'프랙 수류탄','Krak Grenade':'크랙 수류탄','Heavy Bolter':'헤비 볼터','Auxiliary Grenade Launcher':'보조 유탄 발사기','Astartes Shotgun':'아스타르테스 샷건','Boltgun':'볼트건','Missile Launcher':'미사일 런처','Combat Blade':'컴뱃 블레이드','Sniper Rifle':'스나이퍼 라이플','Standard':'일반','Supercharge':'과충전',
'Astartes':'아스타르테스','Heroic Leader':'영웅적 지휘관','Iron Halo':'아이언 헤일로','Camo Cloak':'위장 망토','Chapter Veteran':'챕터 베테랑','Doctrine Warfare':'교리 전술','Grenadier':'척탄병','Optics':'광학 장비','Stealthy':'은밀함','Adaptive Equipment':'유연한 장비','Auspex Scan':'오스펙스 스캔','Forward Scouting':'선행 정찰','Grapnel Assault':'그래프넬 강습','Grapnel Launcher':'그래프넬 발사기','Guidance And Experience':'지도와 경험','Heavy Weapon Bipod':'중화기 양각대','Track Enemy':'적 추적',
'Adaptive Tactics':'유연한 전술','And They Shall Know No Fear':'그들은 두려움을 모를지니','Combat Doctrine':'전투 교리','Indomitus':'불굴','Adjust Doctrine':'교리 조정','Shock Assault':'충격 강습','Transhuman Physiology':'초인적 생리','Wrath Of Vengeance':'복수의 분노','Adaptable Training':'유연한 훈련','Ambush':'매복','Astartes Training':'아스타르테스 훈련','Emboldened Aspirant':'고무된 지원자',
'Chapter Reliquaries':'챕터 성유물','Purity Seals':'순결의 인장','Tilting Shields':'틸팅 실드','Auspex':'오스펙스','Combat Blades':'컴뱃 블레이드','Tactical Vox-Link':'전술 복스 링크','Targeting Oculars':'조준 광학 장비','[CT] Aggressive':'[CT] 공격적','[CT] Dueller':'[CT] 결투가','[CT] Hardy':'[CT] 강인함','[CT] Mobile':'[CT] 기동성','[CT] Resolute':'[CT] 결연함','[CT] Sharpshooter':'[CT] 명사수','[CT] Siege Specialist':'[CT] 공성 전문가','[CT] Stealthy':'[CT] 은밀함',
'Ammo Cache (x1)':'탄약 저장소 (1개)','Razor Wire (x1)':'철조망 (1개)','Comms Device (x1)':'통신 장치 (1개)','Mines (x1)':'지뢰 (1개)','Light Barricades (x2)':'경량 바리케이드 (2개)','Heavy Barricade (x1)':'중량 바리케이드 (1개)','Ladders (x2)':'사다리 (2개)','Portable Barricade (x1)':'휴대용 바리케이드 (1개)','Utility Grenade - Smoke (x1/2)':'보조 수류탄 · 연막','Utility Grenade - Stun (x1/2)':'보조 수류탄 · 섬광','Explosive Grenade - Frag (x1/2)':'폭발 수류탄 · 프랙','Explosive Grenade - Krak (x1/2)':'폭발 수류탄 · 크랙','Breaching Charge':'돌파 폭약'};
export const texts:Record<string,string>={
'IMP-AOD-S-ADT':'보조 챕터 전술을 변경합니다. 이 플로이는 터닝 포인트가 끝날 때까지만 지속되며, 이후 원래의 보조 챕터 전술로 돌아갑니다.',
'IMP-AOD-S-ATSKNF':'아군 죽음의 천사 오퍼레이티브가 부상으로 받는 능력치 변경을 무시할 수 있습니다.',
'IMP-AOD-S-CD':'다음 전투 교리 중 하나를 선택합니다. 아군 죽음의 천사가 해당 조건을 충족하면 무기에 Balanced가 적용됩니다.\n- 데바스테이터: 6인치보다 먼 적에게 사격.\n- 택티컬: 6인치 이내 적에게 사격.\n- 어썰트: 근접전 또는 반격.\n\nBalanced: 공격 주사위 1개를 재굴림할 수 있습니다.',
'IMP-AOD-S-IND':'적이 아군 죽음의 천사에게 사격할 때 방어 실패가 2개 이상이면, 실패 1개를 버리고 다른 실패 1개를 일반 성공으로 유지할 수 있습니다.',
'IMP-AOD-T-ADJT':'아군 죽음의 천사의 활성화 중 행동 전후에 사용합니다. 이번 터닝 포인트에 전투 교리 전략 플로이를 사용했다면 선택한 교리를 변경합니다.',
'IMP-AOD-T-SA':'이번 활성화에 돌격한 아군 죽음의 천사가 Fight 행동을 수행할 때, 공격 주사위 해결 단계 시작 시 사용합니다. 행동 종료까지 근접무기에 Shock를 적용하고, 첫 타격은 추가 피해 1을 줍니다(최대 7). Shock: 첫 치명타 타격 시 상대의 미해결 일반 성공 1개를 버립니다. 일반 성공이 없다면 치명 성공 1개를 버립니다.',
'IMP-AOD-T-TP':'적이 아군 죽음의 천사에게 사격할 때 방어 주사위 굴림 단계에 사용합니다. 일반 성공 1개를 치명 성공으로 유지할 수 있습니다.',
'IMP-AOD-T-WOV':'아군 죽음의 천사가 대응 행동(counteract)을 할 때 사용합니다. 무료 1AP 행동을 추가로 수행할 수 있으나 두 행동은 서로 달라야 합니다.',
'IMP-AOD-CR':'지정한 아군이 Engage 명령이면 복수의 분노 교전 플로이를 0CP로 사용할 수 있습니다.',
'IMP-AOD-PS':'터닝 포인트당 1회, 아군 죽음의 천사의 사격·근접전·반격에서 실패를 2개 이상 굴리면 실패 1개를 버리고 다른 실패 1개를 일반 성공으로 유지할 수 있습니다.',
'IMP-AOD-TS':'터닝 포인트당 1회, 아군 죽음의 천사의 근접전·반격에서 상대가 공격 주사위를 굴린 뒤 재굴림 전에 사용합니다. 그 해결 과정 동안 상대는 6 미만 결과를 치명 성공으로 유지할 수 없습니다(Lethal, Rending, Severe 등 포함).',
'IMP-AOD-AUS':'터닝 포인트당 1회, 아군 죽음의 천사의 Shoot 행동에서 유효 표적 선택 시 사용합니다. 활성화 또는 대응 행동 종료까지 8인치 이내의 적은 obscured 상태가 될 수 없습니다.',
'IMP-AOD-CPT-A-AS':'각 아군 죽음의 천사는 활성화 중 Shoot 2회 또는 Fight 2회를 수행할 수 있습니다. Shoot 2회라면 적어도 한 번은 볼트 무기를 사용해야 합니다. 볼트 스나이퍼 라이플 또는 헤비 볼터를 두 번 사용한다면 두 번째 행동에 추가 1AP가 필요합니다. 명령과 무관하게 대응 행동을 할 수 있습니다.',
'IMP-AOD-CPT-A-HL':'터닝 포인트당 1회, 다음 중 하나를 선택합니다.\n- 이 오퍼레이티브가 지정 대상인 교전 플로이를 0CP로 사용(Command Re-roll 제외).\n- 이 오퍼레이티브가 전장에 있고 적의 통제 범위 밖이면 아군 활성화 시 전투 교리 전략 플로이 사용. CP는 정상 지불하며 이번 터닝 포인트에 이미 사용했다면 불가.\n- 같은 위치 조건에서 교리 조정 교전 플로이를 0CP로 사용.',
'IMP-AOD-CPT-A-IH':'전투당 1회, 공격 주사위가 이 오퍼레이티브에게 일반 피해를 입힐 때 그 피해를 무시할 수 있습니다.',
'IMP-AOD-SNP-A-CC':'이 오퍼레이티브를 향한 사격에서 Saturate를 무시합니다. Stealthy 챕터 전술을 갖습니다. 팀에도 그 전술을 선택했다면 두 선택지를 모두 적용해 일반 1개와 치명 1개, 총 2개 엄폐 성공을 유지할 수 있습니다.',
'IMP-AOD-ISGT-A-CVET':'오퍼레이티브 선택 단계 종료 시 이 오퍼레이티브가 배치 대상으로 선택되었다면 전투 동안 가질 추가 챕터 전술 1개를 선택합니다. 주·보조 전술과 달리 캠페인이나 토너먼트의 매 전투에서 같은 전술을 선택할 필요는 없습니다.',
'IMP-AOD-ISGT-A-DW':'전투당 다음을 각각 1회 사용할 수 있습니다. 이 오퍼레이티브가 전장에 있을 때 전투 교리 전략 플로이로 Devastator를 선택하면 0CP, Tactical을 선택해도 0CP입니다.',
'IMP-AOD-GRN-A-GRN':'프랙·크랙 수류탄을 사용할 수 있습니다(공용 장비 참고). 장비 선택으로 얻은 제한 사용 횟수를 소비하지 않습니다. 사용할 때 해당 무기의 Hit 능력치를 1 개선합니다.',
'IMP-AOD-SNP-OPT':'다음 활성화 시작까지 이 오퍼레이티브가 사격하는 적은 obscured 상태가 될 수 없습니다. 적의 통제 범위 안에서는 이 행동을 수행할 수 없습니다.',
'IMP-AOD-SNP-A-ST':'이 오퍼레이티브가 사격 대상일 때 엄폐 성공을 유지할 수 있다면, 추가 엄폐 성공 1개를 유지하거나 엄폐 성공 1개를 치명 성공으로 유지할 수 있습니다. Vantage 지형의 개선된 엄폐와 중첩하지 않습니다.',
'IMP-SCT-SGT-A-AST':'활성화 중 Shoot 2회 또는 Fight 2회를 수행할 수 있습니다. Shoot 2회라면 적어도 한 번은 아스타르테스 샷건·볼트 피스톨·볼트건을 선택해야 합니다. 명령과 무관하게 대응 행동을 할 수 있습니다.',
'IMP-SCT-WAR-A-AE':'터닝 포인트마다 각각 1회, 아군 스카웃 워리어 1명이 Smoke Grenade 행동, 아군 스카웃 워리어 1명이 Stun Grenade 행동을 수행할 수 있습니다. 공용 장비의 행동 규칙을 사용하며, 장비 선택으로 얻은 제한 사용 횟수를 소비하지 않습니다.',
'IMP-SCT-TRK-AS':'다음 활성화 시작 또는 전투불능 중 먼저 발생하는 시점까지, 아군 스카웃이 이 오퍼레이티브의 8인치 이내 적에게 사격할 때 해당 적은 obscured 상태가 될 수 없습니다. 그 아군이 Optics 효과를 받고 있는 스나이퍼라면 원거리 무기에 Seek Light도 적용합니다. 적 통제 범위 안에서는 수행 불가.',
'IMP-SCT-SNP-A-CAM':'이 오퍼레이티브가 사격 대상일 때 Saturate를 무시합니다. 엄폐 성공을 유지할 수 있다면 추가 1개를 유지하거나 1개를 치명 성공으로 유지합니다. Vantage 지형의 개선된 엄폐와 중첩하지 않습니다.',
'IMP-SCT-HNT-A-GA':'활성화 중 Charge 행동에서 오르기·내려가기·뛰기 또는 베이스가 Vantage 지형 아래로 이동했다면, 해당 활성화 종료까지 근접무기에 Lethal 3+를 적용합니다.',
'IMP-SCT-HNT-A-GL':'위로 오를 때 실제 수직 이동 거리와 관계없이 수직 거리를 2인치로 취급할 수 있습니다.',
'IMP-SCT-SGT-A-GAE':'각 활성화 중 1회, 전장에 있는 다른 아군 스카웃 1명을 선택합니다. 그 아군의 다음 활성화 종료까지 APL을 1 높입니다.',
'IMP-SCT-HGNR-HWB':'데이터카드 무기로 사격할 때 이번 활성화에 아직 이동하지 않았거나 대응 행동 중이면 Ceaseless를 적용합니다. 이미 Ceaseless가 있다면 Relentless로 바꿉니다. 사격 후 이동은 제한하지 않습니다.',
'IMP-SCT-SNP-OPT':'다음 활성화 시작까지 이 오퍼레이티브가 사격하는 적은 obscured 상태가 될 수 없습니다. 적의 통제 범위 안에서는 이 행동을 수행할 수 없습니다.',
'IMP-SCT-TRK-TE':'8인치 이내 적 1명을 선택합니다. 터닝 포인트 종료까지 아군 스카웃이 그 적에게 사격할 때 원거리 무기에 Seek Light를 적용합니다. 적 통제 범위 안에서는 수행 불가.',
'IMP-SCT-CC':'스나이퍼를 제외한 아군 스카웃이 사격 대상일 때, 엄폐 성공을 유지할 수 있다면 추가 엄폐 성공 1개를 유지할 수 있습니다. Vantage 지형의 개선된 엄폐와 중첩하지 않습니다.',
'IMP-SCT-CBAK':'아군 스카웃은 컴뱃 블레이드(ATK 3, HIT 3+, DMG 4/5)를 갖습니다. 이미 더 좋은 능력치의 같은 무기를 갖고 있다면 더 좋은 버전을 사용합니다.',
'IMP-SCT-TVL':'터닝 포인트당 1회, 아군 서전트가 전장에 있으면 아스타르테스 훈련 또는 고무된 지원자 교전 플로이를 0CP로 사용할 수 있습니다.',
'IMP-SCT-TO':'터닝 포인트당 최대 2회, 아군 스카웃의 Shoot 행동에서 유효 표적 선택 시 사용합니다. 행동 종료까지 원거리 무기에 Lethal 5+와 Saturate를 적용합니다. Saturate: 방어자는 엄폐 성공을 유지할 수 없습니다.',
};
export const tactics:Record<string,string>={AGG:'근접무기에 Rending을 적용합니다. 치명타를 유지했다면 일반 명중 1개를 치명타로 바꿉니다.',DUE:'근접전·반격에서 각 일반 성공으로 상대의 미해결 치명 성공 1개를 막을 수 있습니다. 적 무기에 Brutal이 있으면 적용하지 않습니다.',HRD:'사격 방어 결과 5+를 치명 성공으로 취급합니다. 반격의 각 해결 과정에서 처음으로 일반 피해 3 이상을 입힐 때 그 피해를 1 줄입니다.',MOB:'Fall Back의 AP 비용을 1 줄입니다. 적 통제 범위에서 Charge를 수행하고 그 적의 통제 범위를 벗어날 수 있습니다. 이후에는 해당 이동의 정상 조건을 적용합니다.',RES:'APL 변경을 무시할 수 있으며 적의 Shock 무기 규칙에 영향을 받지 않습니다.',SHRP:'이번 활성화에 Charge·Fall Back·Reposition을 수행하지 않고 사격하면 볼트 무기에 Accurate 1과 Severe를 적용합니다.',SS:'원거리 무기에 Saturate를 적용합니다. 근접전·반격에서 적은 지원할 수 없습니다.',ST:'엄폐 성공을 유지할 수 있으면 1개를 추가하거나 1개를 치명 성공으로 바꿉니다. Vantage 지형의 개선된 엄폐와 중첩하지 않습니다.'};
Object.assign(names,{'Guerilla Engagement':'게릴라 교전','Stealth Relocation':'은밀한 재배치','Covert Position':'은밀한 위치','Raw Physiology':'타고난 생리','Utility Grenades: 2 Smoke':'보조 수류탄 · 연막 2개','Utility Grenades: 1 Smoke + 1 Stun':'보조 수류탄 · 연막 1 + 섬광 1','Utility Grenades: 2 Stun':'보조 수류탄 · 섬광 2개','Explosive Grenades: 2 Frag':'폭발 수류탄 · 프랙 2개','Explosive Grenades: 1 Frag + 1 Krak':'폭발 수류탄 · 프랙 1 + 크랙 1','Explosive Grenades: 2 Krak':'폭발 수류탄 · 크랙 2개'});
Object.assign(texts,{
'IMP-AOD-ASGT-A-DW':'전투당 다음을 각각 1회 사용할 수 있습니다. 이 오퍼레이티브가 전장에 있을 때 전투 교리 전략 플로이로 Assault를 선택하면 0CP, Tactical을 선택해도 0CP입니다.',
'IMP-SCT-S-ADT':'적 오퍼레이티브와 4인치보다 멀리 떨어진 아군 스카웃 최대 D3명의 명령을 변경할 수 있습니다.',
'IMP-SCT-S-GA':'아군 스카웃이 활성화 중 사격 또는 근접전을 할 때, 그 활성화 시작 시 Conceal에서 Engage로 명령을 바꿨거나 활성화 시작 시 적에게 보이지 않았다면 무기에 Balanced를 적용합니다. 표적이 이미 활성화를 마친(expended) 상태라면 대신 Ceaseless를 적용합니다.\n\nBalanced: 공격 주사위 1개 재굴림. Ceaseless: 같은 눈금 하나를 골라 그 결과를 원하는 만큼 재굴림.',
'IMP-SCT-S-GE':'적이 아군 스카웃에게 사격할 때, 해당 아군이 엄폐 상태이며 자신을 볼 수 있는 적들과 6인치보다 멀리 떨어져 있다면 방어 주사위 1개를 재굴림할 수 있습니다.',
'IMP-SCT-S-SR':'Conceal 명령이고 적들과 4인치보다 멀리 떨어진 아군 스카웃 최대 D3명이 즉시 무료 Dash 행동을 수행할 수 있습니다. 첫 터닝 포인트에는 사용할 수 없습니다.',
'IMP-SCT-T-AT':'아군 스카웃 활성화 중 사용합니다. 그 활성화 종료까지 다음 중 하나를 수행할 수 있습니다.\n- Fight 행동 2회.\n- Shoot 행동 2회. 적어도 한 번은 아스타르테스 샷건·볼트 피스톨·볼트건 선택.\n- 헤비 볼터·미사일 런처·스나이퍼 라이플로 Shoot 2회. 두 번째 행동에 추가 1AP 필요.',
'IMP-SCT-T-CP':'아군 스카웃 활성화 중 사용합니다. 다음 활성화 시작까지 Conceal 명령이고 엄폐 상태이면 유효 표적으로 선택할 수 없습니다. 2인치 이내인 경우를 제외하고 Seek, Vantage 등 다른 모든 규칙보다 우선합니다.',
'IMP-SCT-T-EA':'아군 스카웃이 Fight 또는 Shoot 행동을 수행할 때 사용합니다. 이번 터닝 포인트에 그 두 행동 중 어느 것이든 처음 수행하는 아군이거나, 해당 적(필요한 경우 주 표적)의 Wounds 능력치가 해당 아군보다 높으면 일반 성공 1개를 치명 성공으로 유지할 수 있습니다.',
'IMP-SCT-T-RP':'아군 스카웃 활성화 중 사용합니다. 다음 활성화 시작까지 Move를 1인치 높이고 부상으로 받는 능력치 변경을 무시할 수 있습니다(무기 능력치 포함).',
'IMP-SCT-SGT-A-FS':'오퍼레이티브 배치 단계 종료 시 아래 선행 정찰 선택지를 최대 6회 선택·해결합니다. 괄호는 전투에서 선택할 수 있는 최대 횟수입니다. 양측이 이 규칙을 가진다면 선제권 플레이어부터 하나씩 번갈아 해결합니다.\n\n- **부비트랩 (1):** 적 강하 구역과 6인치 초과, 다른 마커·접근 지점·Accessible 지형과 2인치 초과 떨어진 곳에 마커를 배치합니다. 처음 적 통제 범위에 들어가면 제거하고 2D3 피해를 줍니다. 전투불능이 아니면 현재 행동을 효과가 완성되지 않았더라도 종료합니다. 배치가 불가능하면 필요한 최소 거리만큼 이동시킵니다.\n- **표적 지정 (1):** 적 1명에게 Target 토큰을 줍니다. 해당 적을 향한 아군의 사격·근접전·반격에서 공격 주사위 1개를 재굴림할 수 있습니다.\n- **계획 수립 (1):** 1CP를 얻습니다.\n- **교란 (1):** 전투당 1회 전략 책략. 전장 가장자리에서 6인치 이내 적 1명을 선택합니다. 그 적의 다음 활성화 종료까지 APL을 1 줄입니다.\n- **재배치 (1):** 아군 3분의 1(올림)의 배치를 변경합니다.\n- **이동 (2):** 강하 구역 완전히 안에 있는 아군 1명이 무료 Reposition을 수행합니다. 이동 종료 시 강하 구역의 3인치 이내에 완전히 있어야 합니다.\n- **첩보 (1):** Approved Ops 전용. 상대가 선택한 Tac Op을 공개합니다.\n- **경보 장치 (2):** 적 강하 구역과 6인치 초과 떨어진 곳에 Trip Alarm 마커를 놓습니다. 첫째·둘째 터닝 포인트에 아군 스카웃이 마커 2인치 이내 적에게 사격하면 Seek를 적용합니다. 셋째 전략 단계의 Ready 단계에 제거합니다.\n- **전술 기동 (1):** 전투당 2회 전략 책략. 아군 1명을 선택하고 그 아군의 다음 활성화 종료까지 APL을 1 높입니다.\n\n원본은 최대 선택 횟수 6회와 예시의 5회 표현이 혼재되어 있습니다. 이 초안은 원본 수치를 유지합니다.',
'UNIVERSAL-UE-AC':'전투 전 아군 영역 완전히 안에 탄약 저장소 마커 1개를 배치합니다.\n\n**탄약 재보급 (0AP):** 활성 오퍼레이티브가 통제하는 아군 탄약 저장소를 이번 터닝 포인트에 사용한 것으로 표시합니다. 다음 터닝 포인트 시작까지 데이터카드 무기로 사격할 때 공격 주사위 1개를 재굴림할 수 있습니다. 적의 통제 범위 안, 상대 마커, 이번 터닝 포인트에 이미 사용한 마커에서는 수행할 수 없습니다.',
'UNIVERSAL-UE-RW':'철조망은 Exposed·Obstructing 지형입니다. 전투 전 아군 영역 완전히 안의 전장 바닥에, 다른 장비 지형·접근 지점·Accessible 지형과 2인치 초과 떨어지도록 설치합니다. Obstructing: 1인치 이내에서 이 지형을 넘을 때 이동 거리에 추가 1인치를 더합니다.',
'UNIVERSAL-UE-CD':'전투 전 아군 영역 완전히 안에 통신 장치 마커 1개를 배치합니다. 아군이 마커를 통제하는 동안 그 아군의 SUPPORT 규칙 중 아군을 대상으로 하는 거리 조건을 3인치 늘립니다(예: 6인치 → 9인치). 상대의 통신 장치로는 혜택을 받을 수 없습니다.',
'UNIVERSAL-UE-MN':'전투 전 아군 영역 완전히 안에 지뢰 마커 1개를 배치합니다. 다른 마커·접근 지점·Accessible 지형과 2인치 초과 떨어져야 합니다. 처음 오퍼레이티브 통제 범위에 들어가면 마커를 제거하고 해당 오퍼레이티브에게 D3+3 피해를 줍니다.',
'UNIVERSAL-UE-LB':'경량 바리케이드 2개는 Light 지형입니다. 발 부분은 Insignificant·Exposed입니다. 전투 전 아군 영역 완전히 안의 전장 바닥에 설치하며 다른 장비 지형·접근 지점·Accessible 지형과 2인치 초과 떨어져야 합니다.',
'UNIVERSAL-UE-HB':'중량 바리케이드 1개는 Heavy 지형입니다. 전투 전 강하 구역의 4인치 이내에 완전히 들어가도록 전장 바닥에 설치하며, 다른 장비 지형·접근 지점·Accessible 지형과 2인치 초과 떨어져야 합니다.',
'UNIVERSAL-UE-LAD':'사다리 2개는 Insignificant·Exposed 지형입니다. 전투 전 아군 영역 완전히 안에, 높이 2인치 이상 지형에 수직으로 기대고, 다른 장비 지형과 2인치 초과, 문·접근 지점과 1인치 초과 떨어지도록 설치합니다. 행동당 1회, 사다리가 기대어진 지형을 오르는 내내 사다리가 통제 범위에 있다면 수직 거리를 1인치로 취급합니다.',
'UNIVERSAL-UE-PB':'휴대용 바리케이드 1개는 Light·Protective·Portable 지형입니다. 발은 Insignificant·Exposed입니다. 전투 전 아군 영역 완전히 안의 전장 바닥에 다른 장비 지형·접근 지점·Accessible 지형과 2인치 초과 떨어지도록 설치합니다.\n\n**Protective:** 이 지형으로 엄폐하면 Save를 1 개선합니다(최대 2+).\n\n**Portable:** 오퍼레이티브가 지형에 연결되고 방패가 사이에 있을 때만 엄폐를 제공합니다(발 무시). 안쪽에 연결된 오퍼레이티브가 아래 행동을 수행할 수 있습니다.\n\n**바리케이드와 이동 (1AP):** Reposition과 같으나 최대 이동은 Move - 2인치입니다. 오르기·내려가기·뛰기 및 모델을 제거 후 재배치하는 팀 규칙을 사용할 수 없습니다. 이동 전 바리케이드를 제거하고 이동 후 다시 연결되도록 설치합니다. 다른 장비 지형·접근 지점·Accessible 지형 2인치 이내에는 설치할 수 없으며 불가능하면 재설치하지 않습니다. Reposition으로 취급합니다. 적 통제 범위 안, 또는 같은 활성화에 Fall Back·Charge를 수행했다면 불가.',
'UNIVERSAL-UE-BC':'전투당 1회, 아군이 Breach 행동을 수행할 때 사용합니다. 데이터카드에 “breach marker”가 있는 것처럼 행동 비용을 1AP 줄입니다(최소 1AP).',
});
const smoke='**연막 수류탄 (1AP):** 6인치 이내에 연막 마커를 놓습니다. 마커가 보이거나, 보이는 지형의 Vantage 위에 있어야 합니다. 수평 1인치·수직 위로 무제한 영역을 만듭니다. 연막 안에 완전히 있는 모델과 2인치 초과 떨어진 모델은 서로 obscured입니다. 연막 안 적을 사격할 때 Piercing 2·Piercing Crits 2는 각각 1로 줄어듭니다(서로 2인치 이내면 제외). 다음 전략 단계 Ready에 D3을 굴려 그 횟수의 활성화 완료 후 또는 터닝 포인트 종료 중 먼저 오는 때 마커를 제거합니다. 적 통제 범위 안 또는 선택한 사용 횟수를 모두 소비했다면 수행 불가.';
const stun='**섬광 수류탄 (1AP):** 보이고 6인치 이내인 적 1명을 선택합니다. 해당 적과 그 주변 1인치 이내 모든 오퍼레이티브가 기절 판정을 합니다. 각각 D6을 굴려 3+이면 다음 활성화 종료까지 APL을 1 줄입니다. 적 통제 범위 안 또는 선택한 사용 횟수를 모두 소비했다면 수행 불가.';
const frag='**프랙 수류탄:** ATK 4 · HIT 4+ · DMG 2/4. 사거리 6인치, Blast 2인치, Saturate.';
const krak='**크랙 수류탄:** ATK 4 · HIT 4+ · DMG 4/5. 사거리 6인치, Piercing 1, Saturate.';
for(const [id,count,desc] of [['UG-SMK','연막 2개',smoke],['UG-SMK-STN','연막 1개 + 섬광 1개',smoke+'\n\n'+stun],['UG-STN','섬광 2개',stun],['XG-FRAG','프랙 2개',frag],['XG-FRAG-KRAK','프랙 1개 + 크랙 1개',frag+'\n\n'+krak],['XG-KRAK','크랙 2개',krak]])texts[`UNIVERSAL-UE-${id}`]=`장비 한 슬롯으로 **${count}**를 선택합니다. 선택한 개수가 전투 중 해당 수류탄의 총 사용 횟수입니다.\n\n${desc}`;

// Deathwatch: translations of the retained kt24_v4 community snapshot.
Object.assign(names,{
'Deathwatch':'데스워치','Watch Sergeant':'워치 서전트','Aegis':'이지스','Blademaster':'블레이드마스터','Bombard':'봄바드','Breacher':'브리처','Demolisher':'데몰리셔','Disruptor':'디스럽터','Gunner':'거너','Headtaker':'헤드테이커','Horde-Slayer':'호드 슬레이어','Marksman':'마크스맨',
'Power Maul & Storm Shield':'파워 몰 & 스톰 실드','Special Issue Bolt Pistol':'특수탄 볼트 피스톨','Xenophase Blade':'제노페이즈 블레이드','Frag Cannon':'프랙 캐논','Hellstorm Bolt Rifle':'헬스톰 볼트 라이플','Melta Bomb':'멜타 폭탄','Heavy Thunder Hammer':'헤비 썬더 해머','Marksman Bolt Carbine':'마크스맨 볼트 카빈','Heavy Plasma Incinerator':'헤비 플라즈마 인시너레이터','Combat Knives':'컴뱃 나이프','Infernus Heavy Bolter':'인페르누스 헤비 볼터',
'Adaptable Armoury':'유연한 무기고','Special Issue Ammunition':'특수탄','Strategic Command':'전략 지휘','Veteran Astartes':'베테랑 아스타르테스','*Shield':'*방패','Storm Shield':'스톰 실드','*Phase Sweep':'*페이즈 휩쓸기','Adaptive Swordsmanship':'유연한 검술','Aggressive Force':'공격적 완력','Brutal Assault':'잔혹한 강습','Advanced Omni-Scrambler':'고급 옴니 스크램블러','Auspex Triangulation':'오스펙스 삼각 측정','Clandestine Headtaker':'은밀한 참수자','Grav-chute and Grapnel Launcher':'중력 낙하산과 그래프넬 발사기','Vigilant Marksman':'경계하는 명사수',
'Mission Tactics':'임무 전술','The Long Vigil':'기나긴 경계','The Shield That Slays':'살육의 방패','Suffer Not The Alien':'외계종을 용납하지 마라','Auspicator Tracking':'오스피케이터 추적','Advanced Auspex Scan':'고급 오스펙스 스캔','Digital Weapons':'디지털 무기','Scrutavore Servo-Thrall':'스크루타보어 서보 노예','Sanctus-V Bioscryer Cuffs':'상투스 V 생체 탐지 커프','Ammunition Reserve':'예비 탄약',
'Duel':'결투','Phase Sweep':'페이즈 휩쓸기','Shell':'포탄','Shrapnel':'산탄','Flame':'화염','Focused Bolt':'집중 볼트','Sweeping Bolt':'휩쓸기 볼트','Mobile':'기동','Heavy':'중량'});
const deathwatchAbilityTexts:Record<string,string>={
'AA':'장비 선택지를 하나 추가로 선택할 수 있습니다.',
'SIA':'터닝 포인트마다 한 번, 아군 데스워치 요원이 사격 행동을 수행할 때 무장 선택 단계에서 사용할 수 있습니다. 다음 무기 규칙 하나를 선택하여 그 행동이 끝날 때까지 해당 요원의 원거리 무기에 부여합니다. 폭발 수류탄과 멜타 폭탄에는 사용할 수 없습니다.\n- Blast 1인치: 사용하는 프로필에 Torrent가 있다면 선택 불가.\n- Devastating 1\n- Lethal 5+\n- Piercing Crits 1\n- Saturate\n- Severe',
'SC':'이 요원이 킬존에 있는 동안 전투마다 다음을 각각 한 번 사용할 수 있습니다.\n- 데스워치 전략 플로이 하나를 0CP로 사용.\n- 데스워치 교전 플로이 하나를 0CP로 사용.',
'VAS':'각 아군 데스워치 요원은 자기 활성화에 사격 행동 두 번 또는 근접전 행동 두 번을 수행할 수 있습니다. 사격 두 번에서 보조 유탄 발사기·프랙 캐논·헤비 플라즈마 인시너레이터·인페르누스 헤비 볼터·플라즈마 피스톨·스토커 볼트 라이플을 두 번 모두 선택하거나, 어느 한 번이라도 멜타 폭탄을 선택했다면 두 번째 행동에 1AP를 추가로 소비합니다.\n\n각 아군 데스워치 요원은 명령과 무관하게 대응 행동을 할 수 있습니다. 대응할 때 서로 다른 행동이어야 한다는 조건으로 추가 1AP 행동 하나를 무료로 수행할 수 있습니다. 같은 대응 중 근접전과 사격을 함께 수행할 수는 없습니다.',
'SH':'이 무기로 근접전 또는 반격을 할 때, 각 방어로 미처리 성공 주사위 두 개를 막을 수 있습니다(하나 대신).',
'SS':'적이 이 요원을 사격할 때 Piercing의 수치를 1 낮춥니다. 따라서 Piercing 1은 무시됩니다.',
'PS':'이 프로필로 근접전 행동을 수행한 뒤 전투불능이 아니라면, 즉시 같은 프로필로 무료 근접전 행동을 수행할 수 있습니다. 각 활성화 또는 대응 중 이 프로필로 통제 범위 안의 각 적과 한 번씩만 싸울 수 있습니다. 이 규칙은 행동 제한보다 우선하며, 이 요원이 전투불능이 되거나 통제 범위 안 모든 적과 싸울 때까지 무료 근접전 행동을 이어갈 수 있습니다.',
'AS':'제노페이즈 블레이드의 명중 능력치 변경을 무시할 수 있습니다. 근접전 또는 반격 시 정상 순서보다 먼저 성공 주사위 하나를 처리할 수 있지만, 그 주사위는 반드시 방어에 사용해야 합니다.',
'AF':'근접전 또는 반격 시 일반·치명 피해가 3 이상이면 이 요원이 받는 피해가 1 감소합니다. 살육의 방패 전략 플로이와 중첩되지 않습니다.',
'BA':'이 요원이 근접전을 할 때 헤비 썬더 해머에 Brutal을 부여합니다. 돌격 행동을 수행하면 활성화/대응 종료까지 헤비 썬더 해머에 Ceaseless를 부여합니다.',
'AOS':'전략적 책략. 이 요원에게 보이거나 6인치 이내인 적 하나를 선택하고 D6을 굴립니다. 다음 교전 단계에서 상대가 주사위 결과만큼의 적 요원을 활성화하거나, 해당 적이 마지막으로 활성화할 적이 될 때까지 그 적은 활성화하거나 행동할 수 없습니다.',
'AT':'이 요원이 적 통제 범위 밖에 있고 사격 표적(해당 시 주 표적)이 이 요원에게 보이면, 고급 오스펙스 스캔 교전 플로이를 0CP로 사용할 수 있습니다. 사격하는 요원이 이 요원일 필요는 없습니다. 같은 활성화/대응의 후속 사격도 이 조건을 충족해야 하며, 아니면 해당 후속 사격에 플로이 효과가 없습니다.',
'CHT':'은폐 명령 상태에서도 돌격 행동을 수행할 수 있습니다. 활성화/대응 시작 시 이 요원을 볼 수 없었던 적과 근접전할 때, 해당 공방의 첫 타격 직후 상대보다 먼저 다른 성공 주사위 하나를 타격으로 처리할 수 있습니다.',
'GCGL':'등반 시 실제 수직 이동 거리와 무관하게 수직 거리를 2인치로 취급합니다. 낙하 시 수직 거리를 무시합니다.',
'VIG':'킬존과 무관하게 자기 활성화에 경계 행동을 수행할 수 있습니다(근접 구역 규칙 참조). 근접 구역 규칙 사용 시 터닝 포인트마다 한 번, 경계로 무료 사격을 수행한 직후 무료 경계 행동을 할 수 있습니다. 그렇게 하면 대응 행동을 할 수 없으며, 이미 대응했다면 두 번째 경계를 할 수 없습니다.'};
for(const op of ['SGT','AEG','BLM','BOM','BRC','DEM','DIS','GNR','HTK','HSL','MRK'])for(const key of ['SIA','VAS'])texts[`IMP-DW-${op}-${key}`]=deathwatchAbilityTexts[key];
for(const [op,keys] of Object.entries({SGT:['AA','SC'],AEG:['SH','SS'],BLM:['PS','AS'],DEM:['AF','BA'],DIS:['AOS','AT'],HTK:['CHT','GCGL'],MRK:['VIG']}))for(const key of keys)texts[`IMP-DW-${op}-${key}`]=deathwatchAbilityTexts[key];
Object.assign(texts,{
'IMP-DW-S-MT':'은폐 또는 교전 명령 하나를 선택합니다. 해당 명령의 적에게 아군 데스워치가 사격하거나 근접전할 때 그 아군의 무기에 Balanced를 부여합니다.',
'IMP-DW-S-TLV':'자신의 영역 안에 완전히 들어온 아군 데스워치가 사격당할 때 방어 주사위 하나를 재굴림할 수 있습니다.',
'IMP-DW-S-TSTS':'상대 영역 안에 완전히 들어온 아군 데스워치가 받는 일반 피해가 4 이상이면 피해를 1 줄입니다.',
'IMP-DW-S-ATSKNF':'부상으로 인한 아군 데스워치의 능력치 변경을 무시할 수 있습니다. 무기 능력치도 포함합니다.',
'IMP-DW-T-SNTA':'아군 데스워치가 CHAOS·IMPERIUM 키워드가 모두 없는 적에게 사격하거나 근접전할 때 공격 주사위를 굴린 후 사용합니다. 원하는 공격 주사위를 재굴림할 수 있습니다.',
'IMP-DW-T-AT':'아군 데스워치가 대응 행동을 할 때 행동 수행 전에 사용합니다. 그 요원의 명령을 변경할 수 있습니다.',
'IMP-DW-T-AAS':'아군 데스워치가 사격 행동을 수행할 때 사용합니다. 활성화/대응 종료까지 원거리 무기에 Saturate를 부여하고 적 요원은 시야 방해 상태가 될 수 없습니다.',
'IMP-DW-T-THP':'적이 아군 데스워치를 사격할 때 방어 주사위 굴림 단계에 사용합니다. 일반 성공 하나를 치명 성공으로 대신 채택할 수 있습니다.',
'IMP-DW-DW':'터닝 포인트마다 한 번, 아군 데스워치의 근접전 행동 중 공격 주사위 굴림 단계 시작에 사용할 수 있습니다. 그 공방의 적에게 피해 1을 줍니다.',
'IMP-DW-SST':'터닝 포인트마다 한 번, 아군 데스워치의 활성화에 사용할 수 있습니다. 그 활성화 중 임무 행동 하나의 비용이 1AP 감소합니다. 적 통제 범위 안에서도 그 임무 행동을 수행할 수 있지만, 그렇게 했다면 수행 후 상대와 굴림 대결을 합니다. 상대가 이기면 이 장비는 남은 전투 동안 사용할 수 없습니다.',
'IMP-DW-SVBSC':'각 아군 데스워치의 활성화마다 한 번, 적 통제 범위 밖에서 행동 전후에 사용할 수 있습니다. 다음 하나를 선택합니다.\n- 잃은 체력을 최대 D3 회복.\n- APL 능력치 변경을 모두 제거.\n- Neutron Fragment·Poison·Terrorchem 토큰 중 하나 제거. 해당 시 활성화 효과를 처리하기 전에 제거합니다.',
'IMP-DW-AR':'전투마다 한 번, 한 터닝 포인트 동안 특수탄 진영 규칙을 최대 두 번의 사격 행동에 사용할 수 있습니다. 두 번에 서로 다른 무기 규칙을 선택해야 합니다. 이 규칙은 일반 특수탄 제한보다 우선합니다.'});

Object.assign(names,aquilonNames);
Object.assign(texts,aquilonTexts);
