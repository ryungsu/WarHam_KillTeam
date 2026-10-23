import {useState} from 'react';
import type {MissionPack} from './missions';
import {eligibleTac} from './missions';
import {TacOpPicker} from './TacOpPicker';
import {MissionText} from './MissionText';

export function BattleTacOp({pack,teamId,teamName,value,secret,lang,onChange,onToggleSecret}:{pack:MissionPack;teamId?:string;teamName?:string;value:string;secret:boolean;lang:'ko'|'en';onChange:(id:string)=>void;onToggleSecret:()=>void}){
 const [choosing,setChoosing]=useState(false);
 const selected=pack.cards.find(c=>c.id===value&&!!teamId&&eligibleTac(c,teamId));
 return <section className="battle-tac-op panel" aria-label="내 Tac Op 바로 확인">
  <div className="heading"><h2>내 Tac Op</h2><small>{teamName??'로스터 미선택'}</small></div>
  {selected?<>
   <div className="battle-tac-summary"><strong>{lang==='ko'?selected.ko:selected.title}</strong><small>{selected.title} · {selected.archetype}</small><span>{secret?'비공개 · 내 규칙 열람 가능':'공개 상태'}</span></div>
   <details className="tac-current-rules" key={selected.id}><summary>선택한 Tac Op 규칙 보기</summary><MissionText card={selected} lang={lang}/></details>
   <div className="battle-tac-actions"><button type="button" aria-expanded={choosing} onClick={()=>setChoosing(v=>!v)}>{choosing?'선택 목록 접기':'Tac Op 변경'}</button><button type="button" onClick={onToggleSecret}>{secret?'Tac Op 공개':'Tac Op 가리기'}</button></div>
  </>:<p className="hint">이 팀이 사용할 수 있는 목록에서 Tac Op 1개를 선택하세요.</p>}
  {(!selected||choosing)&&<TacOpPicker pack={pack} teamId={teamId} value={value} lang={lang} onChange={id=>{onChange(id);setChoosing(false)}}/>}
 </section>;
}
