import {createContext,useContext} from 'react';
import Markdown from 'react-markdown';
import {emitRuleHint,ruleHints} from './ruleHints';
export const RuleLanguage=createContext(true);
export default function RuleMarkdown({children,original=false}:{children?:string;original?:boolean}){
 const korean=useContext(RuleLanguage)&&!original;
 const plugin=()=> (tree:any)=>{const walk=(node:any)=>{if(!node.children||['link','code','inlineCode','html'].includes(node.type))return;node.children=node.children.flatMap((child:any)=>{if(child.type!=='text'){walk(child);return [child]}const aliases=ruleHints.flatMap(h=>[{text:h.en,h},{text:h.ko,h}]).sort((a,b)=>b.text.length-a.text.length);const escaped=aliases.map(a=>a.text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));const regex=new RegExp(escaped.join('|'),'gi');const text=child.value;let start=0,result:any[]=[];for(const match of text.matchAll(regex)){const i=match.index!,word=match[0];if(/[A-Za-z]/.test(word[0])&&(/[A-Za-z]/.test(text[i-1]??'')||/[A-Za-z]/.test(text[i+word.length]??'')))continue;const hint=aliases.find(a=>a.text.toLowerCase()===word.toLowerCase())!.h;if(i>start)result.push({type:'text',value:text.slice(start,i)});result.push({type:'link',url:'#kt-rule-'+hint.id,children:[{type:'text',value:korean?hint.ko:word}]});start=i+word.length}if(start<text.length)result.push({type:'text',value:text.slice(start)});return result.length?result:[child]})};walk(tree)};
 return <Markdown remarkPlugins={[plugin]} components={{a:({href,children,...props})=>{const hint=ruleHints.find(h=>href==='#kt-rule-'+h.id);return hint?<button type="button" className="inline-rule-link" title={hint.en} onClick={e=>{e.stopPropagation();emitRuleHint(hint)}}>{children}</button>:<a href={href} {...props}>{children}</a>}}}>{children}</Markdown>;
}
