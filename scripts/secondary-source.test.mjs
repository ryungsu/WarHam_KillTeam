import {test} from 'node:test';
import assert from 'node:assert/strict';
import {plainText,extractReference} from './secondary-source.mjs';
test('reference text excludes executable code and decodes entities',()=>{
 assert.equal(plainText('<style>hidden</style><script>hidden()</script><p>룰 &amp; A &#x2B; B</p><p>둘째</p>'),'룰 & A + B\n둘째');
});
test('secondary sections remain distinct and preserve list conditions',()=>{
 const r=extractReference('<section class="ability-card"><h4>교란기</h4><p>다음 중 하나</p><ul><li>운용 완료</li><li>마지막 요원</li></ul></section><article class="ploy-card"><h3>플로이</h3><p>1CP</p></article><article class="faction-rule-block"><h3>진영</h3><p>효과</p></article><table class="weapon-table"><tr><td>무기</td><td>4</td></tr></table>');
 assert.equal(r.abilities.length,1);assert.equal(r.abilities[0].title,'교란기');assert.ok(r.abilities[0].text.includes('운용 완료\n마지막 요원'));
 assert.equal(r.ploysAndEquipment[0].title,'플로이');assert.equal(r.factionRules[0].title,'진영');assert.equal(r.weaponTables.length,1);
});
