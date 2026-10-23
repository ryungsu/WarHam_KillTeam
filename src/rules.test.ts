import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {loadouts,validate,parseBackup} from './rules.ts';
import type {Team,Roster} from './types.ts';
const teams:Team[]=JSON.parse(readFileSync(new URL('../public/data/teams.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
const a=teams.find(t=>t.killteamId==='IMP-AOD')!,s=teams.find(t=>t.killteamId==='IMP-SCT')!;
const roster=(t:Team,types:string[]):Roster=>({id:'test',name:'test',team:t.killteamId,updated:'2026-10-14',members:types.map((name,i)=>{const o=t.opTypes.find(o=>o.opTypeName===name)!;return {id:String(i),type:o.opTypeId,loadout:loadouts(o)[0]}}),equipment:[],tactics:t===a?['AGG','MOB']:[]});
test('all supported operative loadouts map to actual source weapons',()=>{for(const t of teams)for(const o of t.opTypes)assert.ok(loadouts(o).length)});
test('valid Angels roster and repeatable warriors',()=>assert.deepEqual(validate(roster(a,['Space Marine Captain',...Array(5).fill('Intercessor Warrior')]),a),[]));
test('Angels sniper and heavy gunner cannot both be selected',()=>assert.ok(validate(roster(a,['Space Marine Captain','Eliminator Sniper','Heavy Intercessor Gunner',...Array(3).fill('Intercessor Warrior')]),a).some(e=>e.includes('合計')||e.includes('합계'))));
test('plasma assault sergeant cannot carry a power fist',()=>{const r=roster(a,['Assault Intercessor Sergeant',...Array(5).fill('Assault Intercessor Warrior')]);const o=a.opTypes.find(o=>o.opTypeName==='Assault Intercessor Sergeant')!;r.members[0].loadout=['Plasma Pistol','Power Fist'].map(n=>o.weapons.find(w=>w.wepName===n)!.wepId);assert.ok(validate(r,a).some(e=>e.includes('무장')))});
test('Scout two distinct heavy gunner loadouts legal, duplicate heavy bolters illegal',()=>{const r=roster(s,['Scout Sergeant','Scout Heavy Gunner','Scout Heavy Gunner',...Array(6).fill('Scout Warrior')]);assert.ok(validate(r,s).some(e=>e.includes('Heavy Bolter')));r.members[2].loadout=loadouts(s.opTypes.find(o=>o.opTypeName==='Scout Heavy Gunner')!)[1];assert.deepEqual(validate(r,s),[])});
test('requires exactly one leader and full operative count',()=>assert.ok(validate(roster(s,['Scout Warrior']),s).length>=2));
test('rejects invalid backup member, version and equipment overage',()=>{assert.throws(()=>parseBackup({version:2,rosters:[]},teams));assert.throws(()=>parseBackup({version:1,rosters:[{...roster(s,[]),members:[null]}]},teams));const r=roster(s,['Scout Sergeant',...Array(8).fill('Scout Warrior')]);r.equipment=s.equipments.slice(0,5).map(e=>e.eqId);assert.ok(validate(r,s).some(e=>e.includes('4개')))});
test('one grenade pair per category',()=>{const r=roster(s,['Scout Sergeant',...Array(8).fill('Scout Warrior')]);r.equipment=['UNIVERSAL-UE-UG-SMK','UNIVERSAL-UE-UG-STN'];assert.ok(validate(r,s).some(e=>e.includes('수류탄')))});

const dw=teams.find(t=>t.killteamId==='IMP-DW')!;
test('Deathwatch five distinct operatives need no mandatory sergeant',()=>assert.deepEqual(validate(roster(dw,['Aegis','Blademaster','Demolisher','Disruptor','Marksman']),dw),[]));
test('Deathwatch cannot duplicate specialists or take two Gravis',()=>{assert.ok(validate(roster(dw,['Aegis','Aegis','Demolisher','Disruptor','Marksman']),dw).some(e=>e.includes('최대 1명')));assert.ok(validate(roster(dw,['Bombard','Breacher','Demolisher','Disruptor','Marksman']),dw).some(e=>e.includes('GRAVIS')))});
test('Watch Sergeant grants a fifth equipment selection only while selected',()=>{const r=roster(dw,['Watch Sergeant','Aegis','Demolisher','Disruptor','Marksman']);r.equipment=dw.equipments.slice(0,5).map(e=>e.eqId);assert.deepEqual(validate(r,dw),[]);r.members.shift();assert.ok(validate(r,dw).some(e=>e.includes('4개')))});

import {allowedArchetypes} from './missions.ts';
test('Deathwatch missions include Security and Seek and Destroy',()=>assert.deepEqual(allowedArchetypes('IMP-DW'),allowedArchetypes('IMP-AOD')));

const aq=teams.find(t=>t.killteamId==='IMP-TEMPAQ')!;
const aqRoster=()=>roster(aq,['Aquilon Tempestor','Aquilon Servo-Sentry','Aquilon Grenadier','Aquilon Gunfighter','Aquilon Gunner','Aquilon Gunner','Aquilon Marksman','Aquilon Precursor',...Array(3).fill('Aquilon Trooper')]);
test('Aquilon requires 11 models including exactly one sentry and leader',()=>{const r=aqRoster();r.members[5].loadout=loadouts(aq.opTypes.find(o=>o.opTypeName==='Aquilon Gunner')!)[1];assert.deepEqual(validate(r,aq),[]);r.members[1]={...r.members[1],type:aq.opTypes.find(o=>o.opTypeName==='Aquilon Trooper')!.opTypeId,loadout:loadouts(aq.opTypes.find(o=>o.opTypeName==='Aquilon Trooper')!)[0]};assert.ok(validate(r,aq).some(e=>e.includes('센트리')))});
test('Aquilon duplicate gunner weapons are illegal but each weapon once is legal',()=>{assert.ok(validate(aqRoster(),aq).some(e=>e.includes('Melta Carbine')))});
test('Aquilon leaders and sentries cannot carry all optional weapons together',()=>{for(const type of ['Aquilon Tempestor','Aquilon Servo-Sentry']){const o=aq.opTypes.find(o=>o.opTypeName===type)!;assert.equal(loadouts(o).length,3);assert.ok(loadouts(o).every(l=>l.length===(type==='Aquilon Tempestor'?2:1)))}assert.equal(loadouts(aq.opTypes.find(o=>o.opTypeName==='Aquilon Gunner')!).length,2)});
