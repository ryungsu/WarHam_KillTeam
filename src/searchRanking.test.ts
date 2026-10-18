import {test} from 'node:test';
import assert from 'node:assert/strict';
import {rankSearch} from './searchRanking.ts';
const fields=(e:{title:string;ko?:string;body:string})=>({titles:[e.title,e.ko??''],body:e.body});
test('exact names precede prefixes, contained names and body-only matches',()=>{
 const entries=[{title:'Weapon',body:'Lethal 5+'},{title:'Super Lethal',body:''},{title:'Lethal 5+',body:''},{title:'Lethal',body:''}];
 assert.deepEqual(rankSearch(entries,' lethal ',fields).map(e=>e.title),['Lethal','Lethal 5+','Super Lethal','Weapon']);
});
test('Korean aliases, spacing and case use the same ranking',()=>{
 const entries=[{title:'Other',body:'볼트피스톨'},{title:'Heavy Bolt Pistol',ko:'헤비 볼트 피스톨',body:''},{title:'Bolt Pistol',ko:'볼트 피스톨',body:''}];
 assert.equal(rankSearch(entries,'볼트피스톨',fields)[0].title,'Bolt Pistol');assert.equal(rankSearch(entries,'BOLT PISTOL',fields)[0].title,'Bolt Pistol');
});
test('numeric weapon parameters preserve exact-match priority',()=>assert.equal(rankSearch([{title:'Lethal 5+',body:'Lethal 3+'},{title:'Lethal 3+',body:''}],'Lethal 3+',fields)[0].title,'Lethal 3+'));
test('blank and unmatched searches return no results; ties preserve input order',()=>{const entries=[{title:'A',body:'match'},{title:'B',body:'match'}];assert.deepEqual(rankSearch(entries,' ',fields),[]);assert.deepEqual(rankSearch(entries,'missing',fields),[]);assert.deepEqual(rankSearch(entries,'match',fields),entries)});
