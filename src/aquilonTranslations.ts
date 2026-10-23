export const aquilonNames:Record<string,string>={
'Tempestus Aquilon':'템페스투스 아퀼론','Aquilon Tempestor':'아퀼론 템페스터','Aquilon Grenadier':'아퀼론 그레네디어','Aquilon Gunfighter':'아퀼론 건파이터','Aquilon Gunner':'아퀼론 거너','Aquilon Marksman':'아퀼론 마크스맨','Aquilon Precursor':'아퀼론 프리커서','Aquilon Servo-Sentry':'아퀼론 서보 센트리','Aquilon Trooper':'아퀼론 트루퍼',
'Hot-Shot Lascarbine':'핫샷 라스카빈','Hot-Shot Laspistol':'핫샷 라스피스톨','Hot-Shot Laspistol (Point Blank)':'핫샷 라스피스톨 (지근거리)','Relic Bolt Pistol':'유물 볼트 피스톨','Melta Bomb':'멜타 폭탄','Melta Carbine':'멜타 카빈','Plasma Carbine':'플라즈마 카빈','Hot-Shot Longlas':'핫샷 롱라스','Tempestus Dagger':'템페스투스 대거','Flamer':'플레이머','Grenade Launcher':'유탄 발사기','Hot-Shot Volley Gun':'핫샷 발리건','Frag':'프랙','Krak':'크랙','Focused':'집중 사격','Salvo':'일제 사격','Concealed':'은폐 사격','Mobile':'기동 사격','Stationary':'고정 사격','Sweeping':'휩쓸기 사격',
'Drop Insertion':'강하 침투','Grav Chute':'중력 낙하산','Command':'지휘','Tempestus Veteran':'템페스투스 베테랑','*Salvo':'*일제 사격','Gunfight':'총격전','*Concealed Position':'*은폐 위치',"Sniper's Vantage":'저격수의 고지','Dynamic':'역동적 기동','Vicious Knife Fighter':'흉포한 단검 전사','Machine':'기계','Turret':'포탑','Rapid Insertion':'신속 침투','Swift Landing':'신속 착지',
'Drop And Secure':'강하 후 확보','Eye Above':'상공의 눈','Maintain Momentum':'공세 유지','Sudden Offensive':'기습 공세','Adjust Coordinates':'좌표 조정','Hot Drop':'전투 강하','Progena':'프로제나','Tempestus Exemplars':'템페스투스의 귀감','Combat Stimms':'전투 자극제','Drop Augury':'강하 예측 장치','Remote Overseer':'원격 감독 장치',
};
const insertion='전투 전 배치 시 팀의 첫 3분의 1은 일반적으로 배치합니다. 이후 각 3분의 1은 전원 함께 공중에 대기시킬 수 있습니다(일부만 대기 불가). 이렇게 대기시킨 묶음마다 강하 마커 1개를 자신의 강하 구역 완전히 안에 배치합니다.\n\n첫째·둘째 TP의 전략 책략으로 강하 마커들을 수평으로 최대 4인치 이동할 수 있습니다. 근접전 전장 규칙을 쓰는 킬존에서는 벽을 통과해 측정·이동할 수 있습니다.\n\n교전 단계에 공중 대기 요원도 정상적으로 활성화하며, 소진 처리하거나 착지시킬 수 있습니다. 착지 위치는 다음 조건을 충족해야 합니다.\n- 강하 마커 하나의 수평 3인치 이내 또는 자신의 강하 구역 완전히 안.\n- 적 통제 범위 밖(프리커서는 예외).\n- 베이스 어느 부분도 Vantage 지형 아래에 있지 않음.\n- 원하는 명령 선택.\n\n착지는 Reposition 행동을 수행한 것으로 취급하며 해당 AP를 소모하고 활성화를 계속합니다. 다음 활성화 종료 또는 TP 종료 중 먼저 오는 시점까지 obscured 상태입니다.\n\n첫 TP 종료까지 공중에 남은 요원은 절반 미만이어야 합니다. 둘째·셋째 TP에 요원들을 Ready할 때 강하 마커를 하나씩 제거합니다. 둘째 TP 종료까지 공중에 남은 요원은 전투불능 처리됩니다.';
const ability:Record<string,string>={
'Drop Insertion':insertion,'Grav Chute':'아군 아퀼론이 지형에서 내려뛰는(drop) 동안 수직 거리를 무시합니다.',
'Command':'지원(SUPPORT): 이 요원이 볼 수 있고 6인치 이내인 다른 아군 아퀼론 1명을 선택합니다(서보 센트리 제외). 그 요원의 다음 활성화 종료까지 APL을 1 높입니다. 적 통제 범위 안에서는 수행할 수 없습니다.',
'Tempestus Veteran':'전투당 1회, 이 요원을 지정하는 교전 플로이를 0CP로 사용하거나, 이 요원의 공격·방어 주사위에 Command Re-roll을 0CP로 사용할 수 있습니다.',
'Grenadier':'프랙·크랙·연막·섬광 수류탄을 사용할 수 있습니다(공용 장비 규칙 참조). 팀이 장비 선택으로 얻은 제한 사용 횟수를 소비하지 않습니다. 이 요원이 프랙·크랙 수류탄을 사용할 때 무기의 HIT 능력치를 1 개선합니다.',
'*Salvo':'서로 다른 유효 표적을 최대 2명 선택하고 원하는 순서로 각각 사격합니다. 사격 시퀀스는 별도로 굴립니다. 아군의 통제 범위 안에 있는 적은 선택할 수 없습니다.',
'Gunfight':'8인치 이내의 적이 이 요원에게 사격할 때 실패로 버린 공격 주사위 수를 기록합니다. 행동 후 전투불능 요원을 제거하기 전(이 요원도 포함), 이 요원이 무료 Shoot 행동을 수행할 수 있습니다. 이를 위해 Engage로 변경할 수 있으며, 해당 적만 집중 사격 핫샷 라스피스톨로 공격합니다. 공격 주사위는 적이 실패로 버린 수 +1개, 최대 4개입니다.',
'*Concealed Position':'전투 중 이 요원이 처음 Shoot 행동을 수행할 때만 이 무기 프로필을 사용할 수 있습니다.',
"Sniper's Vantage":'이 요원이 Vantage 지형에서 Engage 명령이며 자신보다 최소 2인치 낮은 적에게 사격하면, 핫샷 롱라스의 모든 프로필에 Severe를 적용합니다.',
'Dynamic':'Shoot 또는 Fight 행동 후 즉시 무료 Dash를 할 수 있습니다. 이번 활성화에 Charge를 했어도 가능하지만, 그 Charge에서 남은 이동 거리만 사용할 수 있으며 최대 3인치입니다.',
'Vicious Knife Fighter':'이 요원이 근접전을 할 때 해당 시퀀스의 첫 공격 주사위를 해결한 직후, 상대보다 먼저 다른 공격 주사위 1개를 즉시 해결할 수 있습니다.',
'Machine':'Dash·Fall Back·Reposition·Shoot 외의 행동을 수행할 수 없습니다. 근접 반격·지원 및 데이터카드에 없는 무기 사용도 불가합니다.',
'Turret':'자신의 활성화 중 Shoot 행동을 2회 수행할 수 있습니다.',
'Rapid Insertion':'첫 TP의 전략 책략: 자신의 강하 구역 완전히 안에 있는 아군 아퀼론 트루퍼는 각각 즉시 무료 Reposition을 할 수 있습니다. 이동은 자신의 강하 구역에서 3인치 이내에 완전히 들어오도록 끝내야 합니다.',
'Swift Landing':'착지 시 강하 마커 하나의 수평 4인치 이내에 배치할 수 있습니다. 일반 착지 거리 제한보다 우선합니다.',
};
export const aquilonTexts:Record<string,string>={
'IMP-TEMPAQ-S-DAS':'마커 1개를 선택합니다. 다음 전략 단계의 Ready 단계까지, 최소 1명의 아군 아퀼론이 그 마커를 contest하고 있다면 통제 판정에 쓰는 아군 APL 합계를 1 높게 취급합니다. APL 능력치 자체의 변경은 아니므로 다른 변경과 중첩됩니다. 또한 그 마커 3인치 이내의 아군 아퀼론 근접무기 ATK를 1 높입니다(최대 4).',
'IMP-TEMPAQ-S-EA':'적 1명을 선택합니다. 해당 적과 그 적의 3인치 이내에 있는 다른 적에게 TP 종료까지 탐지 토큰을 줍니다. 토큰이 있는 적이 아군 아퀼론에게 사격하면 방어 주사위 1개를 재굴림할 수 있습니다. 그 적이 아군 아퀼론과 근접전·반격을 할 때, 아군의 막기 1회로 미해결 성공 2개를 막을 수 있습니다(일반적인 1개 대신).',
'IMP-TEMPAQ-S-MM':'아군 아퀼론이 아직 활성화를 마치지 않은(ready) 적에게 사격하거나 근접전을 하면 무기에 Severe를 적용합니다. Severe: 치명 성공이 하나도 없다면 일반 성공 1개를 치명 성공으로 바꿀 수 있으며, 치명 성공으로 판정되는 데 따른 무기 규칙도 적용합니다.',
'IMP-TEMPAQ-S-SO':'전투불능이 아닌 아군 아퀼론 수를 절반으로 나누고 올림한 값을 X로 합니다. 이번 TP에 먼저 활성화하는 아군 X명은 각자의 활성화 종료까지 무기에 Balanced를 적용합니다. 예: 5명이 남았다면 처음 3명이 혜택을 받습니다. Balanced: 공격 주사위 1개 재굴림.',
'IMP-TEMPAQ-T-AC':'아군 아퀼론이 착지할 때 사용합니다. 강하 마커 하나의 수평 5인치 이내에 배치할 수 있으며 일반 착지 거리 제한보다 우선합니다. 이번 TP에는 Dash·Fight·Shoot 행동을 수행할 수 없습니다.',
'IMP-TEMPAQ-T-HD':'적 영역 완전히 안에 있거나, 이번 활성화에 착지했거나 전장 바닥보다 최소 2인치 높은 Vantage 지형에서 내려뛴 아군 아퀼론의 공격 주사위를 굴린 후 사용합니다. 표적이 6인치 이내라면 원하는 공격 주사위를 재굴림할 수 있습니다.',
'IMP-TEMPAQ-T-PRO':'아군 아퀼론이 활성화할 때 사용합니다(서보 센트리 제외). 잃은 운드를 최대 2D3 회복하며, 해당 활성화 동안 APL 능력치 변경을 무시할 수 있습니다.',
'IMP-TEMPAQ-T-TE':'아군 아퀼론 활성화 중 사용합니다(서보 센트리 및 APL이 2보다 높은 요원 제외). 해당 활성화 동안 Pick Up Marker·Place Marker 또는 미션 행동을 1AP 적게 수행할 수 있습니다.',
'IMP-TEMPAQ-TD':'아군 아퀼론은 템페스투스 대거 근접무기를 갖습니다(서보 센트리 제외). ATK 3 · HIT 4+ · DMG 3/4. 프리커서의 데이터카드 대거는 그 카드의 능력치를 사용합니다.',
'IMP-TEMPAQ-CS':'아군 아퀼론이 부상으로 받는 Move 능력치 변경을 무시할 수 있습니다.',
'IMP-TEMPAQ-DA':'전투당 1회, 공중 대기 중인 아군 아퀼론이 활성화할 때, 소진·착지 처리 전에 강하 마커 1개를 다시 이동할 수 있습니다. 단, 상대의 강하 구역에 더 가까워지도록 이동할 수 없습니다.',
'IMP-TEMPAQ-ROS':'전투당 1회, 선제권 판정을 위해 주사위를 굴릴 때 자신의 D6를 재굴림할 수 있습니다.',
};
const abilityNames:Record<string,string>={"IMP-TEMPAQ-TEMP-CMD": "Command", "IMP-TEMPAQ-TEMP-A-DI": "Drop Insertion", "IMP-TEMPAQ-TEMP-A-GC": "Grav Chute", "IMP-TEMPAQ-TEMP-A-VET": "Tempestus Veteran", "IMP-TEMPAQ-GRN-A-DI": "Drop Insertion", "IMP-TEMPAQ-GRN-A-GC": "Grav Chute", "IMP-TEMPAQ-GRN-A-GRN": "Grenadier", "IMP-TEMPAQ-GF-A-SLV": "*Salvo", "IMP-TEMPAQ-GF-A-DI": "Drop Insertion", "IMP-TEMPAQ-GF-A-GC": "Grav Chute", "IMP-TEMPAQ-GF-A-GF": "Gunfight", "IMP-TEMPAQ-GNR-A-DI": "Drop Insertion", "IMP-TEMPAQ-GNR-A-GC": "Grav Chute", "IMP-TEMPAQ-MRK-A-CONC": "*Concealed Position", "IMP-TEMPAQ-MRK-A-DI": "Drop Insertion", "IMP-TEMPAQ-MRK-A-GC": "Grav Chute", "IMP-TEMPAQ-MRK-A-SNPVANT": "Sniper's Vantage", "IMP-TEMPAQ-PRE-A-DI": "Drop Insertion", "IMP-TEMPAQ-PRE-A-DYN": "Dynamic", "IMP-TEMPAQ-PRE-A-GC": "Grav Chute", "IMP-TEMPAQ-PRE-A-VKF": "Vicious Knife Fighter", "IMP-TEMPAQ-SS-A-DI": "Drop Insertion", "IMP-TEMPAQ-SS-A-GC": "Grav Chute", "IMP-TEMPAQ-SS-A-MAC": "Machine", "IMP-TEMPAQ-SS-A-TUR": "Turret", "IMP-TEMPAQ-TRP-A-DI": "Drop Insertion", "IMP-TEMPAQ-TRP-A-GC": "Grav Chute", "IMP-TEMPAQ-TRP-A-RAP": "Rapid Insertion", "IMP-TEMPAQ-TRP-A-SWL": "Swift Landing"};
for(const [id,name] of Object.entries(abilityNames))if(ability[name])aquilonTexts[id]=ability[name];
