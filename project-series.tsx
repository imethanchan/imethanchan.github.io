"use client";
import {useEffect,useRef,useState} from "react";
import {artworkTitle} from "./artwork-presentation";
import {projectPhotos} from "./project-data";
export default function ProjectSeries({projects,works,columns,copy}:{projects:any[];works:any[];columns:number;copy:Record<string,string>}){
 const [selected,setSelected]=useState<any>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(selected)dialog.current?.showModal()},[selected]);
 const photos=selected?projectPhotos(selected,works):[];
 return <>
  <div className={"gallery project-list columns-"+columns}>
   {projects.map(project=>{const photos=projectPhotos(project,works);const cover=photos[0];return <button key={project.id} className="work project-card" aria-label={artworkTitle(project.title)||"Untitled photo project"} onClick={()=>setSelected(project)}>
    <img className="project-cover" src={cover.preview_url} alt={artworkTitle(project.title)||"Photo project cover"} loading="lazy" decoding="async"/>
    <div className="work-caption">{artworkTitle(project.title)&&<h2>{artworkTitle(project.title)}</h2>}<span>{["Project",project.year,`${photos.length} photos`].filter(Boolean).join(" · ")}</span>{project.description&&<p className="project-excerpt">{project.description}</p>}<span className="project-open">View project ↗</span></div>
   </button>})}
  </div>
  {selected&&<dialog className="lightbox project-dialog" ref={dialog} aria-label={artworkTitle(selected.title)||"Photo project"} onClose={()=>setSelected(null)}>
   <button className="close" autoFocus aria-label={copy.closeLabel||"Close project"} onClick={()=>dialog.current?.close()}>✕</button>
   <div className="lightbox-content"><header className="project-intro"><p className="eyebrow">Project{selected.year?` / ${selected.year}`:""}</p>{artworkTitle(selected.title)&&<h2>{artworkTitle(selected.title)}</h2>}{selected.description&&<p className="entry-text">{selected.description}</p>}<p className="project-photo-count">{photos.length} photos</p></header>
    <div className="project-photo-series">{photos.map((photo,i)=><figure key={photo.id||photo.file_url+String(i)}><img src={photo.preview_url} alt={photo.caption||`Project photo ${i+1}`} loading="lazy" decoding="async"/><figcaption>{photo.caption&&<p className="entry-text">{photo.caption}</p>}<a className="text-link" href={photo.file_url} target="_blank" rel="noreferrer">{copy.openOriginal||"Open original file"} ↗</a></figcaption></figure>)}</div>
   </div>
  </dialog>}
 </>;
}
