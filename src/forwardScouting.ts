export const scoutingOptions=[
 {id:'trap',name:'부비트랩',en:'Booby Trap',max:1},
 {id:'target',name:'표적 지정',en:'Designate Target',max:1},
 {id:'plan',name:'계획 수립',en:'Devise Plan',max:1},
 {id:'diversion',name:'교란',en:'Diversion',max:1},
 {id:'redeploy',name:'재배치',en:'Redeploy',max:1},
 {id:'move',name:'이동',en:'Reposition',max:2},
 {id:'spy',name:'첩보',en:'Spy',max:1},
 {id:'alarm',name:'경보 장치',en:'Trip Alarm',max:2},
 {id:'manoeuvre',name:'전술 기동',en:'Tactical Manoeuvre',max:1},
];
export const scoutingSlots=scoutingOptions.flatMap(o=>Array.from({length:o.max},(_,i)=>`${o.id}-${i+1}`));
export function cleanScouting(value:unknown):string[]{return Array.isArray(value)?[...new Set(value.filter((x):x is string=>typeof x==='string'&&scoutingSlots.includes(x)))].slice(0,6):[]}
export function toggleScouting(value:unknown,id:string,checked:boolean):string[]{const current=cleanScouting(value);if(!scoutingSlots.includes(id))return current;return checked?current.includes(id)||current.length>=6?current:[...current,id]:current.filter(x=>x!==id)}
