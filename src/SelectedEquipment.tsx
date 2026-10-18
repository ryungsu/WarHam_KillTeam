import type {Roster,Team} from './types';
import {texts} from './translations';
import {emitRuleHint} from './ruleHints';
export function SelectedEquipment({roster,team,name}:{roster:Roster;team:Team;name:(s:string)=>string}){
 const items=team.equipments.filter(e=>roster.equipment.includes(e.eqId));
 return <section className="selected-equipment" id={`equipment-${roster.id}`} aria-label="선택한 팀 장비"><div className="heading"><h2>선택한 장비 <small>{items.length}개</small></h2></div>{items.length?<><div className="equipment-shortcuts">{items.map(e=><button key={e.eqId} type="button" onClick={()=>emitRuleHint({id:e.eqId,en:e.eqName,ko:name(e.eqName),body:texts[e.eqId]??e.description,english:e.description,englishKind:'original',source:'https://www.warhammer-community.com/en-gb/downloads/kill-team/'})}>{name(e.eqName)} <span aria-hidden="true">ⓘ</span></button>)}</div><p>장비를 누르면 효과·사용 조건이 우측 하단에 표시됩니다.</p></>:<p>선택한 장비가 없습니다. 로스터 편집에서 팀 장비를 선택하세요.</p>}</section>;
}
