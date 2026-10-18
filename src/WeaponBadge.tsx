import type {Member,Operative} from './types';
import {heavyWeaponLabel} from './memberLabel';
export function WeaponBadge({operative,member,name,onInspect}:{operative:Operative;member?:Member;name:(s:string)=>string;onInspect:(label:string)=>void}){
 const label=heavyWeaponLabel(operative,member,name);if(!label)return null;
 const missile=operative.weapons.some(w=>member?.loadout.includes(w.wepId)&&/missile/i.test(w.wepName));
 return <button type="button" className="weapon-badge-icon" title={label} aria-label={`선택 무장: ${label}`} onClick={e=>{e.preventDefault();e.stopPropagation();onInspect(label)}}><svg viewBox="0 0 28 22" aria-hidden="true" focusable="false">{missile?<><path d="M3 14 18 3l6 1-1 6L8 21l-1-6z"/><path d="m15 6 6 7M2 19l3-2" fill="none" stroke="currentColor" strokeWidth="2"/></>:<><path d="M2 5h18v9H9l-2 6H3l2-8H2zM20 7h6v5h-6z"/><path d="M10 2h7v3h-7zM10 16h8v4h-8z"/></>}</svg></button>;
}
