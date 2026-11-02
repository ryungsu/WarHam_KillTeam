import type {Team,Operative} from './types';
export function referenceAbilities(team:Team,operative?:Operative){
 if(operative)return operative.abilities;
 const unique=new Map<string,Operative['abilities'][number]>();
 for(const o of team.opTypes)for(const a of o.abilities)if(a.isFactionRule||a.abilityName==='Forward Scouting')unique.set(a.abilityName,a);
 return [...unique.values()];
}
