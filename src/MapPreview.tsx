import {useRef,useState} from 'react';
export const mapSource='https://assets.warhammer-community.com/eng_kt_approved_ops_2025_tournament_companion-vzhkxcroju-703pddn5jk.pdf';
export function MapPreview({value}:{value:string}){
 const dialog=useRef<HTMLDialogElement>(null),[large,setLarge]=useState('');
 const match=/^Octarius · 맵 ([1-6])$/.exec(value),base=import.meta.env.BASE_URL;
 const enlarge=(file:string)=>{setLarge(file);dialog.current?.showModal()};
 if(!value)return null;
 return <section className="map-preview" aria-label="선택한 맵 배치도">{match?<><div className="map-preview-heading"><strong>옥타리우스 · 맵 {match[1]}</strong><small>공식 Approved Ops 2025</small></div><button type="button" className="map-image-button" aria-label={`옥타리우스 맵 ${match[1]} 배치도 확대`} onClick={()=>enlarge(`octarius-${match[1]}.jpg`)}><img src={`${base}images/maps/octarius-${match[1]}.jpg`} alt={`공식 옥타리우스 맵 ${match[1]} 지형·목표·강하 구역 배치도`}/><span>터치하여 확대 ↗</span></button><div className="map-key-buttons"><button type="button" onClick={()=>enlarge('universal-map-key.jpg')}>색상·목표 범례</button><button type="button" onClick={()=>enlarge('octarius-terrain-key.jpg')}>지형 A~I 범례</button></div><a href={`${mapSource}#page=${9+Math.floor((Number(match[1])-1)/2)}`} target="_blank" rel="noreferrer">공식 원본 PDF ↗</a></>:<p className="hint">{value} · 배치도 이미지 미연결. 현재 공식 이미지 조회는 옥타리우스 1~6번을 지원합니다. 이 맵은 해당 맵팩 원본을 확인하세요.</p>}<dialog ref={dialog} className="map-zoom-dialog" onClick={e=>{if(e.target===dialog.current)dialog.current?.close()}}><div className="map-zoom-toolbar"><strong>배치도 확대</strong><button type="button" aria-label="배치도 확대 닫기" onClick={()=>dialog.current?.close()}>닫기 ✕</button></div><p className="hint">이미지를 좌우·위아래로 스크롤하여 확인하세요.</p><div className="map-zoom-scroll">{large&&<img src={`${base}images/maps/${large}`} alt="공식 맵 배치도 또는 범례 확대"/>}</div></dialog></section>;
}

export function MapLibrary(){
 const [number,setNumber]=useState(1);
 return <section className="map-library"><h2>공식 맵 배치도</h2><p className="hint">전투 생성 없이 확인하세요. 현재 옥타리우스 공식 배치도 6개를 지원합니다.</p><nav className="map-library-nav" aria-label="옥타리우스 맵 선택">{[1,2,3,4,5,6].map(n=><button type="button" key={n} aria-pressed={number===n} onClick={()=>setNumber(n)}>맵 {n}</button>)}</nav><MapPreview value={`Octarius · 맵 ${number}`}/><p className="hint">볼쿠스·툼 월드·갈로우다크 등은 배치도 이미지 미연결입니다.</p></section>;
}
