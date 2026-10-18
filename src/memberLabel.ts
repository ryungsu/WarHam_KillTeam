import type {Operative,Member} from './types';
export function heavyWeaponLabel(o:Operative,m:Member|undefined,name:(s:string)=>string){
 if(!m||!/Heavy Gunner/i.test(o.opTypeName))return '';
 return o.weapons.filter(w=>m.loadout.includes(w.wepId)&&w.wepType!=='M'&&!/pistol/i.test(w.wepName)).map(w=>name(w.wepName)).join(' / ');
}
export function memberLabel(o:Operative,m:Member,name:(s:string)=>string){const weapon=heavyWeaponLabel(o,m,name);return name(o.opTypeName)+(weapon?' · '+weapon:'')}
