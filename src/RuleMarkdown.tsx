import {createContext,useContext} from 'react';
import Markdown from 'react-markdown';
import {emitRuleHint,ruleMentions,resolveRuleHint} from './ruleHints';
export const RuleLanguage=createContext(true);
export default function RuleMarkdown({children,original=false}:{children?:string;original?:boolean}){
 const korean=useContext(RuleLanguage)&&!original;
 const plugin=()=> (tree:any)=>{const walk=(node:any)=>{if(!node.children||['link','code','inlineCode','html'].includes(node.type))return;node.children=node.children.flatMap((child:any)=>{if(child.type!=='text'){walk(child);return [child]}const text=child.value;let start=0,result:any[]=[];for(const m of ruleMentions(text)){if(m.start>start)result.push({type:'text',value:text.slice(start,m.start)});result.push({type:'link',url:'#kt-rule/'+encodeURIComponent(m.text),children:[{type:'text',value:korean&&!m.weapon?m.hint.ko:m.text}]});start=m.end}if(start<text.length)result.push({type:'text',value:text.slice(start)});return result.length?result:[child]})};walk(tree)};
 return <Markdown remarkPlugins={[plugin]} components={{a:({href,children,...props})=>{const hint=href?.startsWith('#kt-rule/')?resolveRuleHint(decodeURIComponent(href.slice(9))):undefined;return hint?<button type="button" className="inline-rule-link" title={hint.en} onClick={e=>{e.stopPropagation();emitRuleHint(hint)}}>{children}</button>:<a href={href} {...props}>{children}</a>}}}>{children}</Markdown>;
}
