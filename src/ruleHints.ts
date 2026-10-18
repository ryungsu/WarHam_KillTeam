import {weaponRules} from './weaponRules.ts';
export const coreSource='https://assets.warhammer-community.com/eng_jun25_kt_lite_rules-5yqs3aeeud-r6homxqjvf.pdf';
export type RuleHint={english?:string;englishKind?:'original'|'summary';id:string;en:string;ko:string;body:string;source?:string};
export const ruleHints:RuleHint[]=[
{id:'stun-grenade',en:'Stun Grenade',ko:'섬광 수류탄',body:'1AP. 보이고 6인치 이내인 적 하나를 선택합니다. 그 적과 주변 1인치 이내 모든 요원은 각각 D6을 굴립니다. 3+이면 다음 활성화 종료까지 APL을 1 줄입니다. 적 통제 범위 안이나 장비로 얻은 사용 횟수를 모두 소비했다면 수행할 수 없습니다. 스카웃 워리어의 적응형 장비는 별도 횟수 규칙을 따릅니다.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'smoke-grenade',en:'Smoke Grenade',ko:'연막 수류탄',body:'1AP. 6인치 이내에 보이는 위치, 또는 보이는 지형의 고지에 연막 마커를 놓습니다. 수평 1인치·위로 무제한인 연막을 만듭니다. 연막 안에 완전히 있는 요원과 2인치 초과 떨어진 요원은 서로 시야 방해 상태입니다. 연막 안 표적에게 관통 2·치명 관통 2는 각각 1이 됩니다(서로 2인치 이내 제외). 다음 전략 단계 준비에 D3을 굴려 그 수의 활성화 후 또는 TP 종료 중 먼저 오는 때 제거합니다. 적 통제 범위 안이나 사용 횟수 소진 시 수행할 수 없습니다.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'obscured',en:'obscured',ko:'시야 방해',body:'사격의 명중 처리에 영향을 주는 상태입니다. 엄폐와 구별합니다. 지형·거리·장비에 따른 예외와 최신 핵심 규칙을 확인하세요.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},

{id:'ready-step',en:'Ready step',ko:'준비 단계',body:'전략 단계에 아군 요원을 준비 상태로 만드는 단계입니다.'},
{id:'seek-light',en:'Seek Light',ko:'경량 탐색',body:'은폐 표적 선정 시 경량 지형의 엄폐를 무시합니다. 방어 주사위에서 얻는 엄폐 성공 자체를 없애지는 않습니다.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'pick-up',en:'Pick Up Marker',ko:'마커 줍기',body:'운반 가능한 마커를 집어 드는 행동입니다. 해당 미션의 행동 비용·통제·운반 제한을 함께 적용하세요.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'accessible',en:'Accessible',ko:'통과 가능',body:'통과 가능한 문·출입구 등에 붙는 지형 특성입니다. 해당 킬존 규칙의 통과 비용과 조건을 확인하세요.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'vantage',en:'Vantage',ko:'고지',body:'높은 사격 위치에 관련된 지형 특성입니다. 높이·명령·엄폐에 따른 효과는 핵심 규칙과 해당 킬존을 확인하세요.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'contest',en:'contest',ko:'경합',body:'목표의 통제 범위에 들어가 목표에 관여하는 상태입니다. 통제와는 다르며 실제 통제는 양측의 APL 합 등을 비교합니다.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'},
{id:'target',en:'Target',ko:'표적',body:'스카웃 선행 정찰의 표적 토큰: 지정된 적에게 아군이 사격·근접전·반격할 때 공격 주사위 하나를 재굴림할 수 있습니다.',source:'https://assets.warhammer-community.com/eng_29-04_kt_teamrules_scout_squad-gsh9kmjzgi-cx2xtxmp8b.pdf'},

{id:'reposition',en:'Reposition',ko:'일반 이동',body:'1AP. 이동 능력치 이내로 이동합니다. 적 통제 범위 안으로 이동할 수 없습니다. 적 통제 범위 안에서는 수행할 수 없으며 같은 활성화에 돌격·후퇴와 함께 수행할 수 없습니다.'},
{id:'dash',en:'Dash',ko:'대시',body:'1AP. 일반 이동처럼 이동하되 최대 3인치이며 등반할 수 없습니다. 적 통제 범위 안이나 돌격과 같은 활성화에는 수행할 수 없습니다.'},
{id:'charge',en:'Charge',ko:'돌격',body:'1AP. 이동 능력치에 2인치를 더해 이동하며 적 통제 범위 안에서 끝내야 합니다. 은폐 명령, 이미 적 통제 범위 안인 경우, 같은 활성화에 일반 이동·대시·후퇴를 한 경우에는 수행할 수 없습니다.'},
{id:'fall-back',en:'Fall Back',ko:'후퇴',body:'2AP. 적 통제 범위에서 벗어나는 이동입니다. 적 통제 범위를 지나갈 수 있지만 그 안에서 끝낼 수 없습니다. 적 통제 범위 안에서만 수행하며 같은 활성화에 일반 이동·돌격과 함께 수행할 수 없습니다.'},
{id:'shoot',en:'Shoot',ko:'사격',body:'1AP. 원거리 무기로 유효한 표적을 공격합니다. 은폐 명령이거나 적 통제 범위 안이면 일반적으로 수행할 수 없습니다.'},
{id:'fight',en:'Fight',ko:'근접전',body:'1AP. 통제 범위 안의 적과 근접전 무기로 싸웁니다. 적이 통제 범위 안에 있어야 합니다.'},
{id:'conceal',en:'Conceal',ko:'은폐',body:'은폐 명령. 엄폐 중이면 일반적으로 유효한 사격 표적이 아니지만 사격·돌격을 할 수 없습니다. 개별 예외 규칙을 함께 확인하세요.'},
{id:'engage',en:'Engage',ko:'교전',body:'교전 명령. 정상적으로 행동하고 대응 행동을 할 수 있습니다.'},
{id:'ready',en:'Ready',ko:'준비',body:'아직 활성화하지 않은 상태입니다. 전략 단계에 아군 요원을 준비 상태로 만듭니다.'},
{id:'expended',en:'Expended',ko:'활성화 완료',body:'활성화를 끝낸 상태입니다. 양측 모든 요원이 이 상태가 되면 해당 터닝 포인트가 끝납니다.'},
{id:'gambit',en:'STRATEGIC GAMBIT',ko:'전략 책략',body:'전략 단계에 선제권 플레이어부터 번갈아 사용하거나 패스합니다. 각 플레이어는 같은 전략 책략을 TP당 한 번만 사용할 수 있습니다.'},
{id:'balanced',en:'Balanced',ko:'균형',body:'공격 주사위 한 개를 재굴림할 수 있습니다.'},
{id:'ceaseless',en:'Ceaseless',ko:'끊임없는 공격',body:'한 가지 눈금을 골라 그 결과가 나온 공격 주사위를 원하는 만큼 재굴림할 수 있습니다.'},
{id:'trip-alarm',en:'Trip Alarm',ko:'경보 장치',body:'스카웃 선행 정찰의 장치입니다. 적 강하 구역에서 6인치 초과 떨어진 곳에 마커를 배치합니다. TP1·TP2에 아군 스카웃이 마커 2인치 이내 적에게 사격하면 Seek를 적용합니다. 세 번째 전략 단계의 준비 단계에 제거합니다. 선행 정찰에서 최대 두 번 선택합니다.',source:'https://assets.warhammer-community.com/eng_29-04_kt_teamrules_scout_squad-gsh9kmjzgi-cx2xtxmp8b.pdf'},
{id:'seek',en:'Seek',ko:'탐색',body:'은폐 명령인 표적을 선정할 때 지형에 의한 엄폐를 무시하는 무기 규칙입니다. Seek Light는 경량 지형에만 적용합니다. 표적 선정과 방어 주사위의 엄폐 성공은 구분합니다.',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'}
];
export const emitRuleHint=(hint:RuleHint)=>window.dispatchEvent(new CustomEvent('kt-rule-hint',{detail:hint}));

export function translateRuleName(text:string,korean=true){if(!korean)return text;const labels:Record<string,string>={'Piercing Crits':'치명 관통','Heavy':'중화기','Balanced':'균형','Brutal':'잔혹','Ceaseless':'끊임없는 공격','Relentless':'무자비','Lethal':'치명적','Piercing':'관통','Rending':'분쇄','Saturate':'엄폐 무시','Silent':'소음 억제','Devastating':'파괴적','Range':'사거리','Blast':'폭발','Torrent':'분사','Shock':'충격','Stun':'기절','Hot':'과열','Seek Light':'경량 탐색','Seek':'탐색','Accurate':'정확','Rng':'사거리','PrcCrit':'치명 관통','Prc':'관통','Hvy':'중화기','Dev':'파괴적','Tor':'분사','Sat':'엄폐 무시','Dash':'대시'};let output=text;for(const key of Object.keys(labels).sort((a,b)=>b.length-a.length))output=output.replace(new RegExp('\\b'+key+'\\b','gi'),labels[key]);return output}

export function resolveRuleHint(text:string):RuleHint|undefined {
 const core=ruleHints.find(h=>[h.en,h.ko].some(v=>v.toLowerCase()===text.toLowerCase()));
 if(core&&!['balanced','ceaseless','seek','seek-light'].includes(core.id))return core;
 const weapon=weaponRules.find(w=>w.re.test(text));
 if(weapon){const piercingCrit=/PrcCrit|Piercing Crits/i.test(text);const amount=Number(text.match(/\d+/)?.[0]??0);const lethal=/^Lethal\s*(\d+)\+/i.exec(text);return {id:'weapon-'+text,en:text,ko:text,english:piercingCrit?'If the rule is Piercing Crits x, this only comes into effect if you retain any critical successes.':weapon.en,englishKind:piercingCrit?'original':'summary',body:piercingCrit?`공격 주사위를 굴리고 재굴림·결과 변경 등을 적용한 뒤, 치명 성공 주사위가 하나 이상 남아 있으면 상대가 굴릴 방어 주사위를 ${amount||'표시된 수치'}개 줄입니다. 예: PrcCrit1이면 기본 방어 주사위 3개가 2개가 됩니다. 치명 성공이 없으면 줄이지 않습니다. 주사위를 다음 공격까지 보관한다는 뜻은 아닙니다.`:lethal?`공격 주사위 결과가 ${lethal[1]} 이상이면 치명 성공으로 유지합니다. 일반 명중 기준과 별개인 치명 성공 기준입니다.`:weapon.ko,source:coreSource}}
 return core;
}
export type RuleMention={start:number;end:number;text:string;hint:RuleHint;weapon:boolean};
export function ruleMentions(text:string):RuleMention[]{
 const escape=(s:string)=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const aliases=ruleHints.flatMap(h=>[h.en,h.ko]).sort((a,b)=>b.length-a.length).map(escape);
 const numeric='(?:Lethal\\s+\\d+\\+|(?:Piercing Crits|Piercing|Devastating|Blast|Torrent|Range|Rng|PrcCrit|Prc|Dev|Tor)\\s*\\d+(?:["″])?|(?:Heavy|Hvy)\\s*\\([^)]*\\))';
 const plain='Lethal|Piercing Crits|Piercing|Rending|Relentless|Saturate|Silent|Devastating|Blast|Torrent|Shock|Stun|Hot|Heavy|Range|Balanced|Ceaseless|Seek Light|Seek';
 const regex=new RegExp(numeric+'|'+aliases.join('|')+'|'+plain,'gi');const result:RuleMention[]=[];
 for(const m of text.matchAll(regex)){const start=m.index!,word=m[0];if(/[A-Za-z]/.test(word[0])&&(/[A-Za-z]/.test(text[start-1]??'')||/[A-Za-z]/.test(text[start+word.length]??'')))continue;const hint=resolveRuleHint(word);if(hint)result.push({start,end:start+word.length,text:word,hint,weapon:hint.id.startsWith('weapon-')})}return result;
}
