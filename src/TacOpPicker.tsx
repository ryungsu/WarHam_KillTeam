import type {MissionPack} from './missions';
import {eligibleTac} from './missions';
import {MissionText} from './MissionText';
export function TacOpPicker({pack,teamId,value,lang,onChange}:{pack:MissionPack;teamId?:string;value:string;lang:'ko'|'en';onChange:(id:string)=>void}){
 const cards=pack.cards.filter(c=>teamId&&eligibleTac(c,teamId));
 return <section className="tac-op-picker" aria-label="Tac Op 설명 확인 후 선택"><h3>내 Tac Op 선택</h3><p className="hint">{teamId?'제목을 펼쳐 목표·득점 조건을 확인한 뒤 선택하세요. 선택 내용은 상대에게 공개되지 않습니다.':'로스터를 먼저 선택하세요.'}</p>{cards.map(c=><details className={`tac-choice ${value===c.id?'is-selected':''}`} key={c.id}><summary><span><strong>{lang==='ko'?c.ko:c.title}</strong><small>{c.title} · {c.archetype}</small></span><span>{value===c.id?'✓ 선택됨':'규칙 보기 ▾'}</span></summary><MissionText card={c} lang={lang}/><button type="button" className={value===c.id?'':'primary'} disabled={value===c.id} onClick={()=>onChange(c.id)}>{value===c.id?'현재 선택한 Tac Op':`${lang==='ko'?c.ko:c.title} 선택 확정`}</button></details>)}{value&&<button type="button" onClick={()=>onChange('')}>Tac Op 선택 해제</button>}</section>;
}
