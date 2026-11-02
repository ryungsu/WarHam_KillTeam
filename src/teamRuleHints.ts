import type {Team} from './types';
import type {RuleHint} from './ruleHints';
import {teamSources} from './teamSources';

export function teamRuleHints(team:Team|undefined,texts:Record<string,string>,names:Record<string,string>):RuleHint[]{
 if(!team)return [];
 const unique=new Map<string,RuleHint>();
 for(const o of team.opTypes)for(const a of o.abilities){
  const en=a.abilityName.replace(/^\*/,'');
  if(unique.has(en.toLowerCase()))continue;
  const ko=(names[a.abilityName]??en).replace(/^\*/,'');
  unique.set(en.toLowerCase(),{id:a.abilityId,en,ko,aliases:[a.abilityName,en,ko],preserveLabel:a.abilityName.startsWith('*'),body:texts[a.abilityId]??a.description,english:a.description,englishKind:'original',source:teamSources[team.killteamId]});
 }
 return [...unique.values()];
}
