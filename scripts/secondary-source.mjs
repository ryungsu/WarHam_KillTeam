import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';

export const supportedSources=[
 ['IMP-AOD','angels-of-death'],['IMP-SCT','scout-squad'],
 ['IMP-DW','deathwatch'],['IMP-TEMPAQ','tempestus-aquilons'],
];
export function plainText(html){
 return html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'')
  .replace(/<br\s*\/?>|<\/(?:p|li|h[1-6]|tr|div)>/gi,'\n').replace(/<[^>]+>/g,' ')
  .replace(/&(?:amp|lt|gt|quot|apos|nbsp);|&#(?:x[\da-f]+|\d+);/gi,e=>{
   const named={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&nbsp;':' '};
   if(named[e])return named[e];
   const n=e.startsWith('&#x')?parseInt(e.slice(3,-1),16):parseInt(e.slice(2,-1),10);
   return Number.isInteger(n)&&n>=0&&n<=0x10ffff?String.fromCodePoint(n):e;
  }).replace(/[ \t]+/g,' ').replace(/ *\n */g,'\n').replace(/\n{3,}/g,'\n\n').trim();
}
export function extractReference(html){
 const blocks=(tag,cls)=>Array.from(html.matchAll(new RegExp(`<${tag}\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>([\\s\\S]*?)<\\/${tag}>`,'gi')),m=>({
  title:plainText(m[1].match(/<h[34]\b[^>]*>([\s\S]*?)<\/h[34]>/i)?.[1]??''),text:plainText(m[1]),
 }));
 return {abilities:blocks('section','ability-card'),ploysAndEquipment:blocks('article','ploy-card'),
  factionRules:blocks('article','faction-rule-block'),
  weaponTables:Array.from(html.matchAll(/<table\b[^>]*class="weapon-table"[^>]*>([\s\S]*?)<\/table>/gi),m=>plainText(m[1]))};
}
export function buildSecondaryReference(){
 const root=fileURLToPath(new URL('../',import.meta.url)),source=resolve(root,'external/killteamcore');
 let commit;
 try{commit=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim()}
 catch{throw Error('Initialize the pinned source first: git submodule update --init --depth 1 external/killteamcore')}
 const dirty=execFileSync('git',['-C',source,'status','--porcelain'],{encoding:'utf8'}).trim();
 if(dirty)throw Error('Secondary source has local changes. Use a clean pinned checkout for reproducible comparison.');
 const teams=supportedSources.map(([teamId,slug])=>{
  const path=`factions/${slug}/index.html`,html=readFileSync(resolve(source,path),'utf8'),data=extractReference(html);
  if(!data.abilities.length||!data.weaponTables.length)throw Error(`Unexpected source structure: ${path}`);
  return {teamId,slug,path,source:`https://github.com/KillTeamCore/killteamcore.github.io/blob/${commit}/${path}`,sha256:createHash('sha256').update(html).digest('hex'),...data};
 });
 const output=resolve(root,'tmp/secondary-source');mkdirSync(output,{recursive:true});
 writeFileSync(resolve(output,'killteamcore.json'),JSON.stringify({schema:1,role:'reference-only',repository:'https://github.com/KillTeamCore/killteamcore.github.io',commit,teams},null,2)+'\n');
 console.log(`Secondary reference ready: ${teams.length} teams at ${commit}. Output: tmp/secondary-source/killteamcore.json`);
 console.log('No application data or translations were overwritten. Review differences against official rules before importing.');
 return {commit,teams};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))buildSecondaryReference();
