import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';
process.chdir(fileURLToPath(new URL('../',import.meta.url)));
const pkg=JSON.parse(readFileSync('package.json','utf8'));
const tests=pkg.scripts.test.split(/\s+/).slice(1);
const steps=[
 ['tests',tests],
 ['quality harness',['scripts/quality/run.mjs']],
 ['TypeScript',['node_modules/typescript/bin/tsc','--noEmit']],
 ['production build',['node_modules/vite/bin/vite.js','build']],
 ['offline cache',['scripts/build-sw.mjs']],
];
for(const [label,args] of steps){
 console.log(`\nChecking ${label}...`);
 const result=spawnSync(process.execPath,args,{stdio:'inherit'});
 if(result.error||result.status!==0){console.error(`Verification stopped at ${label}.`,result.error?.message??'');process.exit(result.status??1)}
}
console.log('\nVerification passed. No commit, push or deployment was performed.');
