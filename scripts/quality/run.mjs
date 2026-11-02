import {createServer} from 'vite';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve as pathResolve} from 'node:path';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {audit} from './checks.mjs';

const root=fileURLToPath(new URL('../../',import.meta.url));
process.chdir(root);
const read=path=>JSON.parse(readFileSync(pathResolve(root,path),'utf8'));
const server=await createServer({root,server:{middlewareMode:true},logLevel:'error'});
try{
 const [{names,texts},{resolveRuleHint,ruleMentions},{teamRuleHints},{referenceAbilities},{teamSize},{CompactDatasheet},{default:Markdown},{TeamRuleScope},{TeamTacOps},{eligibleTac}]=await Promise.all([
  server.ssrLoadModule('/src/translations.ts'),server.ssrLoadModule('/src/ruleHints.ts'),server.ssrLoadModule('/src/teamRuleHints.ts'),server.ssrLoadModule('/src/teamAbilities.ts'),server.ssrLoadModule('/src/rules.ts'),server.ssrLoadModule('/src/CompactDatasheet.tsx'),server.ssrLoadModule('/src/RuleMarkdown.tsx'),server.ssrLoadModule('/src/TeamRuleScope.tsx'),server.ssrLoadModule('/src/TeamTacOps.tsx'),server.ssrLoadModule('/src/missions.ts'),
 ]);
 const teams=read('public/data/teams.json'),contracts=read('scripts/quality/contracts.json'),proofs=read('data-original/portrait-card-mapping.json');
 const portraitBytes=id=>{try{return readFileSync(pathResolve(root,'public/images/operatives',id==='IMP-SCT-SGT'?'scout-sergeant-reference.jpg':`${id}.png`))}catch{return undefined}};
 const input={teams,contracts,texts,names,resolve:resolveRuleHint,mentions:ruleMentions,hintsFor:t=>teamRuleHints(t,texts,names),visibleAbilities:referenceAbilities,sizeOf:teamSize,proofs,portraitBytes};
 const report=audit(input);
 // Render production components, not a mirror of their markup or a static list of rule names.
 for(const t of teams)for(const o of t.opTypes){
  const markup=renderToStaticMarkup(createElement(CompactDatasheet,{operative:o,cardKey:o.opTypeId,index:0,team:t,name:s=>names[s]??s,lang:'ko',rule:()=>{},show:()=>{},abilityText:id=>texts[id]}));
  if((markup.match(/class="ds-ability"/g)??[]).length!==o.abilities.length)report.errors.push({gate:'render',path:o.opTypeId,message:'An ability is absent from rendered datasheet'});
 }
 for(const [id,terms] of Object.entries(contracts.scopedFixtures)){
  const team=teams.find(t=>t.killteamId===id);
  for(const term of terms){
   const markup=renderToStaticMarkup(createElement(TeamRuleScope,{team},createElement(Markdown,null,term)));
   if(!markup.includes('class="inline-rule-link"'))report.errors.push({gate:'render-link',path:`${id}/${term}`,message:'Production Markdown did not render a rule button'});
  }
 }
 const pm=teams.find(t=>t.killteamId==='CHAOS-PM'),rav=teams.find(t=>t.killteamId==='TYR-RAV');
 const poisonA=resolveRuleHint('Poison',input.hintsFor(pm)),poisonB=resolveRuleHint('Poison',input.hintsFor(rav));
 if(!poisonA?.id.startsWith('CHAOS-PM')||!poisonB?.id.startsWith('TYR-RAV')||poisonA.body===poisonB.body)report.errors.push({gate:'scope',path:'Poison',message:'Team-specific poison definitions were mixed together'});
 const pack=read('public/data/missions.json');
 for(const team of teams){
  const markup=renderToStaticMarkup(createElement(TeamTacOps,{pack,teamId:team.killteamId,lang:'ko'}));
  const expected=pack.cards.filter(c=>eligibleTac(c,team.killteamId));
  if((markup.match(/class="mission-card"/g)??[]).length!==expected.length||!markup.includes('tac-archetype-badge'))report.errors.push({gate:'team-tac-render',path:team.killteamId,message:'Team Tac Op tab has incorrect eligible count or missing archetype labels'});
  for(const c of expected)if(!markup.includes(`data-mission-id="${c.id}"`))report.errors.push({gate:'team-tac-render',path:c.id,message:'Eligible Tac Op missing from team reference'});
 }
 const mutations=[];
 const negative=(name,patch,expectedGate)=>{
  const result=audit({...input,...patch});
  const caught=result.errors.some(e=>e.gate===expectedGate);mutations.push({name,caught});
  if(!caught)report.errors.push({gate:'harness-self-test',path:name,message:`Injected fault was not caught by ${expectedGate}`});
 };
 negative('unregistered-keyword',{resolve:(token,hints)=>token==='Severe'?undefined:resolveRuleHint(token,hints)},'weapon-rule');
 negative('broken-inline-link',{mentions:(token,hints)=>token==='Lim1'?[]:ruleMentions(token,hints)},'inline-link');
 const hidden=structuredClone(teams);for(const o of hidden.find(t=>t.killteamId==='TYR-RAV').opTypes)for(const a of o.abilities)a.isFactionRule=false;
 negative('hidden-ravener-faction-rules',{teams:hidden},'faction-visibility');
 const staleRule=structuredClone(teams);staleRule.find(t=>t.killteamId==='CHAOS-PM').opTypes.flatMap(o=>o.abilities).find(a=>a.abilityName==='*Toxic').description='Old timing without the start-of-action condition';
 negative('partially-updated-shared-rule',{teams:staleRule},'scope-consistency');
 negative('missing-translation',{texts:{...texts,'TYR-RAV-PRM-A-TUN':''}},'translation');
 negative('swapped-portrait',{portraitBytes:id=>id==='CHAOS-PM-CHAMP'?portraitBytes('CHAOS-PM-BOMB'):portraitBytes(id)},'portrait-hash');
 negative('wrong-card-title',{proofs:proofs.map((p,i)=>i===0?{...p,matchedTitle:'WRONG OPERATIVE'}:p)},'portrait-proof');
 const unregistered=structuredClone(teams);unregistered.push({...structuredClone(teams[0]),killteamId:'TEST-NEW-TEAM'});
 negative('unreviewed-new-team',{teams:unregistered},'contract');
 report.ok=!report.errors.length;report.mutations=mutations;report.scope='Automated data, source evidence and production server-rendering checks; not visual browser or official rule parity certification.';
 mkdirSync(pathResolve(root,'tmp/quality'),{recursive:true});writeFileSync(pathResolve(root,'tmp/quality/report.json'),JSON.stringify(report,null,2)+'\n');
 console.log(`Quality harness: ${report.ok?'PASS':'FAIL'} · ${report.counts.teams} teams · ${report.counts.operatives} operatives · ${report.counts.weaponTokens} weapon-rule uses · ${report.counts.portraitProofs} reviewed portraits`);
 console.log(`Fault injection: ${mutations.filter(m=>m.caught).length}/${mutations.length} caught. Report: tmp/quality/report.json`);
 for(const error of report.errors)console.error(`[${error.gate}] ${error.path}: ${error.message}`);
 if(!report.ok)process.exitCode=1;
}finally{await server.close()}
