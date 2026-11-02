import {createHash} from 'node:crypto';

// Each finding identifies the actual source item; gates never silently whitelist unknown tokens.
export function audit({teams,contracts,texts,names,resolve,mentions,hintsFor,visibleAbilities,sizeOf,proofs,portraitBytes}){
 const errors=[],counts={teams:teams.length,operatives:0,weaponTokens:0,translations:0,portraitProofs:0};
 const fail=(gate,path,message)=>errors.push({gate,path,message});
 const proofById=new Map(proofs.map(p=>[p.id,p]));
 const seenTeams=new Set();
 for(const t of teams){
  const path=t.killteamId,contract=contracts.teams[path],hints=hintsFor(t);
  if(seenTeams.has(path))fail('identity',path,'Duplicate team ID');seenTeams.add(path);
  if(!contract)fail('contract',path,'Add a reviewed team contract before enabling this faction');
  if(contract&&sizeOf(t)!==contract.size)fail('roster',path,`Expected ${contract.size} models`);
  if(!names[t.killteamName])fail('translation',path,'Missing Korean team name');
  const visible=new Set(visibleAbilities(t).map(a=>a.abilityName));
  for(const name of contract?.factionAbilities??[])if(!visible.has(name))fail('faction-visibility',path,`Hidden/missing faction rule: ${name}`);
  const seenOps=new Set();
  for(const o of t.opTypes){
   counts.operatives++;
   if(seenOps.has(o.opTypeId))fail('identity',o.opTypeId,'Duplicate operative ID');seenOps.add(o.opTypeId);
   if(!names[o.opTypeName])fail('translation',o.opTypeId,'Missing Korean operative name');
   for(const a of o.abilities){
    const ko=texts[a.abilityId]??(a.abilityName==='Astartes'&&path==='IMP-AOD'?texts['IMP-AOD-CPT-A-AS']:a.abilityName==='Chapter Veteran'?texts['IMP-AOD-ISGT-A-CVET']:undefined);
    counts.translations++;if(!ko?.trim())fail('translation',a.abilityId,`Missing Korean ability: ${a.abilityName}`);
   }
   for(const w of o.weapons)for(const p of w.profiles)for(const raw of p.WR.split(',')){
    const token=raw.trim();if(!token||token==='-')continue;counts.weaponTokens++;
    if(!resolve(token,hints))fail('weapon-rule',`${o.opTypeId}/${p.wepprofileId}`,`Unresolved keyword: ${token}`);
    // Body links use the same resolver as clickable weapon tags, including custom starred rules.
    if(!mentions(token,hints).some(m=>m.text===token))fail('inline-link',`${o.opTypeId}/${p.wepprofileId}`,`Keyword is clickable in tags but not recognized in prose: ${token}`);
   }
   const bytes=portraitBytes(o.opTypeId);
   if(!bytes?.length)fail('portrait',o.opTypeId,'Missing portrait asset');
   const proof=proofById.get(o.opTypeId);
   if(contract?.portraitProof&&!proof)fail('portrait-proof',o.opTypeId,'Missing official card-title/coordinate evidence');
   if(proof){
    counts.portraitProofs++;
    if(proof.matchedTitle!==o.opTypeName.toUpperCase())fail('portrait-proof',o.opTypeId,'Portrait card title does not match operative name');
    if(!proof.source?.startsWith('https://assets.warhammer-community.com/')||!proof.pdfImage||!Number.isInteger(proof.page)||proof.page<1||!(proof.titleY>proof.imageY&&proof.titleY-proof.imageY<65))fail('portrait-proof',o.opTypeId,'Invalid source/page/header coordinates');
    if(bytes&&createHash('sha256').update(bytes).digest('hex')!==proof.sha256)fail('portrait-hash',o.opTypeId,'Portrait bytes changed since the reviewed card mapping');
   }
  }
  for(const e of [...t.ploys,...t.equipments.filter(e=>!e.eqId.startsWith('UNIVERSAL'))]){
   const id=e.ployId??e.eqId;counts.translations++;
   if(!texts[id]?.trim())fail('translation',id,'Missing Korean ploy/equipment text');
  }
  for(const token of contracts.scopedFixtures[path]??[]){
   if(!mentions(token,hints).some(m=>m.text===token))fail('scoped-link',path,`Unlinked team term: ${token}`);
   const shared=t.opTypes.flatMap(o=>o.abilities).filter(a=>a.abilityName.replace(/^\*/,'').toLowerCase()===token.toLowerCase());
   if(new Set(shared.map(a=>a.description.replace(/\s+/g,' ').trim())).size>1)fail('scope-consistency',path,`Shared rule differs between operatives: ${token}`);
  }
 }
 for(const token of contracts.inlineFixtures)if(!resolve(token)||!mentions(token).some(m=>m.text===token))fail('regression',token,'Previously reported keyword is unresolved or unlinked');
 return {ok:!errors.length,counts,errors};
}
