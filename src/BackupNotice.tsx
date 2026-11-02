import {useEffect,useRef,useState} from 'react';
const key='kt-backup-notice-20261102';
export function BackupNotice({onSettings}:{onSettings:()=>void}){
 const [visible,setVisible]=useState(()=>{try{return localStorage.getItem(key)!=='seen'}catch{return true}});
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(visible)dialog.current?.showModal()},[visible]);
 const dismiss=()=>{try{localStorage.setItem(key,'seen')}catch{}dialog.current?.close();setVisible(false)};
 if(!visible)return null;
 return <dialog ref={dialog} aria-labelledby="backup-notice-title" onCancel={e=>{e.preventDefault();dismiss()}} style={{maxWidth:'min(420px, calc(100vw - 32px))'}}><h2 id="backup-notice-title">저장 데이터 · 백업 안내</h2><p>사이트 주소 변경으로 기존 로스터·전투 기록이 보이지 않을 수 있습니다. 기존 데이터의 삭제 여부는 확인되지 않았습니다.</p><p>기록이 필요한 분은 브라우저 데이터나 설치한 앱을 삭제하지 마세요.</p><p>현재 보이는 로스터는 설정의 ‘백업 내보내기’로 보관하세요. 전투 기록·설정까지 보관하려면 ‘전체 원본 백업 다운로드’를 사용하세요.</p><p className="hint">이 안내는 확인 후 같은 브라우저에서 다시 표시하지 않습니다. 전체 원본 백업은 보존용이며, 로스터 백업 가져오기와는 다른 형식입니다.</p><div className="row"><button onClick={()=>{dismiss();onSettings()}}>백업 설정으로</button><button className="primary" onClick={dismiss}>확인</button></div></dialog>;
}
