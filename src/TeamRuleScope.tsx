import {useMemo,type ReactNode} from 'react';
import type {Team} from './types';
import {RuleHintsContext} from './RuleMarkdown';
import {teamRuleHints} from './teamRuleHints';
import {texts,names} from './translations';

export function TeamRuleScope({team,children}:{team?:Team;children:ReactNode}){
 const hints=useMemo(()=>teamRuleHints(team,texts,names),[team]);
 return <RuleHintsContext.Provider value={hints}>{children}</RuleHintsContext.Provider>;
}
