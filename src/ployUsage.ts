export type PloyUsage=Record<string,string[]>;
export function usedPloys(value:unknown,tp:number):string[]{if(!value||typeof value!=='object')return [];const ids=(value as PloyUsage)[String(tp)];return Array.isArray(ids)?[...new Set(ids.filter(id=>typeof id==='string'))]:[]}
export function markPloy(value:unknown,tp:number,id:string,used:boolean):PloyUsage{const result:PloyUsage={};for(let turn=1;turn<=4;turn++)result[String(turn)]=usedPloys(value,turn);if(tp<1||tp>4||!Number.isInteger(tp))return result;result[String(tp)]=used?[...new Set([...result[String(tp)],id])]:result[String(tp)].filter(x=>x!==id);return result}

export function confirmPloy(value:unknown,tp:number,id:string,cp:number,cost:number):{ployUsage:PloyUsage;cp:number}|null{if(!Number.isInteger(cost)||cost<0||cost>4||!Number.isInteger(cp)||cp<cost||usedPloys(value,tp).includes(id)||tp<1||tp>4)return null;return {ployUsage:markPloy(value,tp,id,true),cp:cp-cost}}

export function ployCost(value:unknown,tp:number,id:string){return id==='CHAOS-NC-T-VS'?1+Array.from({length:Math.max(0,tp-1)},(_,i)=>usedPloys(value,i+1).includes(id)).filter(Boolean).length:1}
