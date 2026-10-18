import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ruleMentions,resolveRuleHint} from './ruleHints.ts';
test('parameterized weapon keywords keep their complete original notation',()=>{const text='Lethal 3+, Lethal 5+, Piercing Crits 2, Heavy (Dash only), Rng 6"';assert.deepEqual(ruleMentions(text).map(m=>m.text),['Lethal 3+','Lethal 5+','Piercing Crits 2','Heavy (Dash only)','Rng 6"']);assert.ok(ruleMentions(text).every(m=>m.weapon&&m.hint.ko===m.text));assert.ok(resolveRuleHint('Lethal 3+')?.body.includes('3 이상'))});
test('matches phrases before short weapon names and preserves core translations',()=>{const result=ruleMentions('Stun Grenade, Smoke Grenade, Reposition, Balanced, Relentless');assert.deepEqual(result.map(m=>m.hint.ko),['섬광 수류탄','연막 수류탄','일반 이동','Balanced','Relentless']);assert.equal(ruleMentions('shooting targetable unrelentless').length,0)});

import {weaponRules} from './weaponRules.ts';
test('Seek is searchable as a weapon rule and links in descriptions',()=>{assert.ok(weaponRules.some(r=>r.name==='Seek'));assert.equal(resolveRuleHint('Seek')?.en,'Seek');assert.ok(ruleMentions('Trip Alarm 마커 근처에서 Seek를 적용합니다.').some(m=>m.text==='Seek'&&m.weapon));assert.equal(resolveRuleHint('Seek Light')?.en,'Seek Light')});
