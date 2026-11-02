import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {loadouts,validate,teamSize} from './rules.ts';
import {eligibleTac} from './missions.ts';
import {ployCost,confirmPloy} from './ployUsage.ts';
import type {Team,Roster} from './types.ts';
const teams:Team[]=JSON.parse(readFileSync(new URL('../public/data/teams.json',import.meta.url),'utf8'));
const get=(id:string)=>teams.find(t=>t.killteamId===id)!;
const make=(id:string,names:string[]):Roster=>{const t=get(id);return {id:'test',name:'test',team:id,updated:'2026-11-02',members:names.map((name,i)=>{const o=t.opTypes.find(o=>o.opTypeName===name)!;return {id:String(i),type:o.opTypeId,loadout:loadouts(o)[0]}}),equipment:[],tactics:[]}};
test('Plague Marines are six distinct models and cannot repeat a Warrior',()=>{
 const names=['Plague Marine Champion','Malignant Plaguecaster','Plague Marine Bombardier','Plague Marine Fighter','Plague Marine Heavy Gunner','Plague Marine Warrior'];
 assert.deepEqual(validate(make('CHAOS-PM',names),get('CHAOS-PM')),[]);
 names[1]='Plague Marine Warrior';assert.ok(validate(make('CHAOS-PM',names),get('CHAOS-PM')).some(e=>e.includes('Warrior 最大')||e.includes('Warrior 최대 1')));
});
test('Nemesis permits both gunner types but no duplicate specialists; Warriors repeat',()=>{
 const names=['Night Lord Visionary','Night Lord Gunner','Night Lord Heavy Gunner','Night Lord Warrior','Night Lord Warrior','Night Lord Screecher'];
 assert.deepEqual(validate(make('CHAOS-NC',names),get('CHAOS-NC')),[]);
 names[5]='Night Lord Gunner';assert.ok(validate(make('CHAOS-NC',names),get('CHAOS-NC')).some(e=>e.includes('Gunner 최대 1')));
 const t=get('CHAOS-NC');for(const [name,count] of [['Night Lord Visionary',4],['Night Lord Gunner',3],['Night Lord Heavy Gunner',2],['Night Lord Warrior',2]] as const)assert.equal(loadouts(t.opTypes.find(o=>o.opTypeName===name)!).length,count);
 const r=make('CHAOS-NC',['Night Lord Visionary',...Array(5).fill('Night Lord Warrior')]);r.members[0].loadout=t.opTypes[0].weapons.map(w=>w.wepId);assert.ok(validate(r,t).some(e=>e.includes('무장')));
});
test('Raveners have one Prime and four others with corrected wounds',()=>{
 const t=get('TYR-RAV');assert.equal(teamSize(t),5);assert.equal(t.opTypes[0].WOUNDS,19);assert.ok(t.opTypes.slice(1).every(o=>o.WOUNDS===18));
 assert.deepEqual(validate(make('TYR-RAV',['Ravener Prime',...Array(4).fill('Ravener Warrior')]),t),[]);
 assert.ok(validate(make('TYR-RAV',['Ravener Prime','Ravener Felltalon','Ravener Felltalon','Ravener Warrior','Ravener Warrior']),t).some(e=>e.includes('최대 1')));
});
test('all new teams have the correct six eligible Tac Ops and all official portraits',()=>{
 const pack=JSON.parse(readFileSync(new URL('../public/data/missions.json',import.meta.url),'utf8'));
 for(const id of ['CHAOS-PM','CHAOS-NC','TYR-RAV']){
  const cards=pack.cards.filter((c:any)=>eligibleTac(c,id));assert.equal(cards.length,6);
  assert.ok(cards.some((c:any)=>c.archetype===(id==='CHAOS-PM'?'security':'infiltration')));
  for(const o of get(id).opTypes)assert.ok(existsSync(new URL(`../public/images/operatives/${o.opTypeId}.png`,import.meta.url)));
 }
});
test('October timing corrections are applied and Vox Scream supports escalating CP',()=>{
 const nc=get('CHAOS-NC'),pm=get('CHAOS-PM');assert.ok(nc.ploys.find(p=>p.ployId==='CHAOS-NC-S-TBH')!.description.includes('start of the action'));
 assert.ok(pm.opTypes.flatMap(o=>o.abilities).find(a=>a.abilityName==='*Toxic')!.description.includes('start of that action'));
 const id='CHAOS-NC-T-VS';assert.equal(ployCost(undefined,1,id),1);const first=confirmPloy(undefined,1,id,5,1)!;
 assert.equal(ployCost(first.ployUsage,2,id),2);assert.equal(confirmPloy(first.ployUsage,2,id,1,2),null);assert.equal(confirmPloy(first.ployUsage,2,id,4,2)?.cp,2);
 assert.equal(ployCost(first.ployUsage,2,'CHAOS-NC-T-DF'),1);
});

test('Ravener faction abilities are visible for every operative and unique actions remain available',()=>{const t=get('TYR-RAV');for(const o of t.opTypes)assert.deepEqual(o.abilities.filter(a=>a.isFactionRule).map(a=>a.abilityName).sort(),['Burrow','Predatory Instincts','Tunnel']);assert.ok(t.opTypes.find(o=>o.opTypeName==='Ravener Felltalon')!.abilities.some(a=>a.abilityName==='Toxic Lunge'&&!a.isFactionRule));assert.ok(t.opTypes.find(o=>o.opTypeName==='Ravener Prime')!.abilities.some(a=>a.abilityName==='Synaptic Link'&&!a.isFactionRule))});
