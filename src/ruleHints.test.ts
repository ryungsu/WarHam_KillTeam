import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ruleMentions,resolveRuleHint} from './ruleHints.ts';
test('parameterized weapon keywords keep their complete original notation',()=>{const text='Lethal 3+, Lethal 5+, Piercing Crits 2, Heavy (Dash only), Rng 6"';assert.deepEqual(ruleMentions(text).map(m=>m.text),['Lethal 3+','Lethal 5+','Piercing Crits 2','Heavy (Dash only)','Rng 6"']);assert.ok(ruleMentions(text).every(m=>m.weapon&&m.hint.ko===m.text));assert.ok(resolveRuleHint('Lethal 3+')?.body.includes('3 이상'))});
test('matches phrases before short weapon names and preserves core translations',()=>{const result=ruleMentions('Stun Grenade, Smoke Grenade, Reposition, Balanced, Relentless');assert.deepEqual(result.map(m=>m.hint.ko),['섬광 수류탄','연막 수류탄','일반 이동','Balanced','Relentless']);assert.equal(ruleMentions('shooting targetable unrelentless').length,0)});

import {weaponRules} from './weaponRules.ts';
test('Seek is searchable as a weapon rule and links in descriptions',()=>{assert.ok(weaponRules.some(r=>r.name==='Seek'));assert.equal(resolveRuleHint('Seek')?.en,'Seek');assert.ok(ruleMentions('Trip Alarm 마커 근처에서 Seek를 적용합니다.').some(m=>m.text==='Seek'&&m.weapon));assert.equal(resolveRuleHint('Seek Light')?.en,'Seek Light')});

test("Severe is searchable and links its complete name in prose",()=>{assert.ok(weaponRules.some(r=>r.name==="Severe"));const hint=resolveRuleHint("Severe");assert.equal(hint?.ko,"Severe");assert.ok(hint?.body.includes("치명 성공이 하나도 없다면"));assert.ok(hint?.body.includes("예시"));assert.equal(ruleMentions("Severe를 적용합니다.")[0]?.text,"Severe");assert.equal(ruleMentions("severely").length,0)});

test('Limited and Heavy abbreviations resolve without conflating movement exceptions',()=>{
 for(const word of ['Lim1','Limited 1','Limited 2','Hvy(Repos)','Heavy (Reposition only)','Hvy(Dash)','Heavy (Dash only)','Heavy'])assert.ok(resolveRuleHint(word),word);
 assert.deepEqual(ruleMentions('Lim1, Hvy(Repos), Heavy (Dash only)').map(m=>m.text),['Lim1','Hvy(Repos)','Heavy (Dash only)']);
 assert.ok(resolveRuleHint('Lim1')!.body.includes('TP가 바뀌어도 회복되지'));
 assert.ok(resolveRuleHint('Hvy(Repos)')!.body.includes('Reposition만'));
 assert.ok(resolveRuleHint('Heavy (Dash only)')!.body.includes('Dash만'));
 assert.ok(!resolveRuleHint('Heavy')!.body.includes('Dash만'));
});

test('Rnd resolves to Rending in weapon tags and running prose',()=>{assert.equal(resolveRuleHint('Rnd')?.body,resolveRuleHint('Rending')?.body);assert.deepEqual(ruleMentions('Rnd, Rending').map(m=>m.text),['Rnd','Rending']);assert.equal(ruleMentions('unrnd').length,0)});
