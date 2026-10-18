export type SearchFields={titles:string[];body:string};
const normalize=(value:string)=>value.normalize('NFKC').toLowerCase().trim().replace(/\s+/g,' ');
// Ignore spacing in names so Korean compounds and English multiword names remain discoverable.
const compact=(value:string)=>normalize(value).replace(/\s/g,'');
export function rankSearch<T>(entries:T[],query:string,fields:(entry:T)=>SearchFields):T[]{
 const q=compact(query);if(!q)return [];
 return entries.map((entry,index)=>{
  const f=fields(entry),titles=f.titles.filter(Boolean).map(compact);
  let tier=Infinity,length=Infinity;
  for(const title of titles){const score=title===q?0:title.startsWith(q)?1:title.includes(q)?2:Infinity;if(score<tier||(score===tier&&title.length<length)){tier=score;length=title.length}}
  if(!Number.isFinite(tier)&&compact(f.body).includes(q)){tier=3;length=0}
  return {entry,index,tier,length};
 }).filter(x=>Number.isFinite(x.tier)).sort((a,b)=>a.tier-b.tier||a.length-b.length||a.index-b.index).map(x=>x.entry);
}
