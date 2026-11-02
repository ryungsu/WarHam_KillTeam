import type {MissionPack} from './missions';
import {eligibleTac,tacArchetypes,archetypeLabel} from './missions';
import {MissionText} from './MissionText';

export function TeamTacOps({pack,teamId,lang}:{pack:MissionPack|null;teamId:string;lang:'ko'|'en'}){
 if(!pack)return <p role="status">Tac Op 목록을 불러오는 중…</p>;
 const cards=pack.cards.filter(c=>eligibleTac(c,teamId));
 const groups=tacArchetypes.filter(([id])=>cards.some(c=>archetypeLabel(c.archetype,'en')===archetypeLabel(id,'en')));
 return <section className="team-tac-ops" aria-label="이 팀의 Tac Op"><h2>사용 가능한 Tac Op <small>{cards.length}개</small></h2><div className="team-tac-archetypes">{groups.map(([id])=><span className="tac-archetype-badge" key={id}>{archetypeLabel(id,lang)}</span>)}</div><p className="hint">이 팀이 사용할 수 있는 카드만 표시합니다. 카드를 펼쳐 목표·득점 조건을 확인하세요. 실제 선택은 전투 화면의 내 Tac Op에서 합니다.</p>{groups.map(([id])=><section className="tac-archetype-group" key={id}><h3>{archetypeLabel(id,lang)}</h3>{cards.filter(c=>archetypeLabel(c.archetype,'en')===archetypeLabel(id,'en')).map(c=><details className="mission-card" data-mission-id={c.id} key={c.id}><summary><span>{lang==='ko'?c.ko:c.title}</span><small className="team-tac-english">{c.title}</small><span className="tac-archetype-badge">{archetypeLabel(c.archetype,lang)}</span></summary><MissionText card={c} lang={lang}/><a href={c.source} target="_blank" rel="noreferrer">출처 ↗</a></details>)}</section>)}{!cards.length&&<p>이 팀의 Tac Op 분류가 등록되지 않았습니다.</p>}</section>;
}
