import {useRef,useState} from 'react';
export const mapSource='https://assets.warhammer-community.com/eng_kt_approved_ops_2025_tournament_companion-vzhkxcroju-703pddn5jk.pdf';
export function MapPreview({value}:{value:string}){
 const dialog=useRef<HTMLDialogElement>(null),[large,setLarge]=useState('');
 const match=/^(Octarius|Volkus|Tomb World|Gallowdark|Bheta-Decima|Non-specific) · 맵 ([1-6])$/.exec(value),base=import.meta.env.BASE_URL;
 const zones:Record<string,[string,string]>={'Octarius':['octarius','옥타리우스'],'Volkus':['volkus','볼쿠스'],'Tomb World':['tomb-world','툼 월드'],'Gallowdark':['gallowdark','갈로우다크'],'Bheta-Decima':['bheta-decima','베타 데시마'],'Non-specific':['non-specific','일반 전장']};
 const official=match?.[1]==='Octarius',number=match?.[2]??'',zone=match?zones[match[1]]:null,file=zone?`${zone[0]}-${number}.${official?'jpg':'png'}`:'';
 const source=official?`${mapSource}#page=${9+Math.floor((Number(number)-1)/2)}`:'https://wahapedia.ru/kill-team3/the-rules/approved-ops-2025/';
 const enlarge=(file:string)=>{setLarge(file);dialog.current?.showModal()};
 if(!value)return null;
 return <section className="map-preview" aria-label="선택한 맵 배치도">{match&&zone?<><div className="map-preview-heading"><strong>선택한 맵 배치도 · {zone[1]} {number}</strong><small>{official?'공식 PDF · Approved Ops 2025':'커뮤니티 전재 · Approved Ops 2025'}</small></div><button type="button" className="map-image-button" aria-label={`${zone[1]} 맵 ${number} 배치도 확대`} onClick={()=>enlarge(file)}><img src={`${base}images/maps/${file}`} alt={`${zone[1]} 맵 ${number} 배치도`}/><span>터치하여 확대 ↗</span></button>{official&&<div className="map-key-buttons"><button type="button" onClick={()=>enlarge('universal-map-key.jpg')}>색상·목표 범례</button><button type="button" onClick={()=>enlarge('octarius-terrain-key.jpg')}>지형 A~I 범례</button></div>}<a href={source} target="_blank" rel="noreferrer">{official?'공식 원본 PDF':'이미지 출처 · Wahapedia'} ↗</a>{match[1]==='Non-specific'&&<p className="hint">일반 전장 배치도는 강하 구역·목표 위치를 표시하며, 지형 배치는 별도로 정합니다.</p>}</>:<p className="hint">{value} · 직접 입력한 맵입니다. 연결된 배치도 이미지가 없습니다.</p>}<dialog ref={dialog} className="map-zoom-dialog" onClick={e=>{if(e.target===dialog.current)dialog.current?.close()}}><div className="map-zoom-toolbar"><strong>배치도 확대</strong><button type="button" aria-label="배치도 확대 닫기" onClick={()=>dialog.current?.close()}>닫기 ✕</button></div><p className="hint">이미지를 좌우·위아래로 스크롤하여 확인하세요.</p><div className="map-zoom-scroll">{large&&<img src={`${base}images/maps/${large}`} alt="선택한 맵 배치도 또는 범례 확대"/>}</div></dialog></section>;
}

