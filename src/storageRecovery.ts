// Preserve opaque raw values, including malformed JSON, before React effects can save.
export const recoveryKey='kt-recovery-snapshot-v1';
type StorageLike=Pick<Storage,'length'|'key'|'getItem'|'setItem'>;
export function rawStorage(storage:StorageLike){
 const entries:Record<string,string>={};
 for(let i=0;i<storage.length;i++){const key=storage.key(i);if(key?.startsWith('kt-')&&key!==recoveryKey){const value=storage.getItem(key);if(value!==null)entries[key]=value}}
 return entries;
}
export function preserveStorage(storage:StorageLike,origin:string){
 if(storage.getItem(recoveryKey)!==null)return;
 const entries=rawStorage(storage);
 if(!Object.keys(entries).some(key=>key!=='kt-lang'))return;
 storage.setItem(recoveryKey,JSON.stringify({version:1,origin,createdAt:new Date().toISOString(),entries}));
}
export function downloadRecoveryBackup(){
 const data={format:'killteam-raw-recovery',version:1,origin:location.origin,createdAt:new Date().toISOString(),entries:rawStorage(localStorage),initialSnapshot:localStorage.getItem(recoveryKey)};
 const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
 const a=document.createElement('a');a.href=url;a.download=`killteam-full-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
