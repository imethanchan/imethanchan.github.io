import {useState,useEffect} from "react";
import {hydrateRoot} from "react-dom/client";
import Home from "./Home";
import Portfolio from "./Portfolio";
import content from "./content.json";
import works from "./artworks.json";
import projects from "./projects.json";
const isArt=window.location.pathname.endsWith('/portfolio.html');
function App(){
 const [data,setData]=useState({content,works,projects});
 useEffect(()=>{let active=true;let busy=false;async function refresh(){if(busy)return;busy=true;try{const [c,a,p]=await Promise.all([fetch('/content.json',{cache:'no-store'}),fetch('/artworks.json',{cache:'no-store'}),fetch('/projects.json',{cache:'no-store'})]);if(!c.ok||!a.ok||!p.ok)throw new Error('Content unavailable');const next={content:await c.json(),works:await a.json(),projects:await p.json()};if(active&&Array.isArray(next.works)&&Array.isArray(next.projects))setData(next)}catch{/* The bundled snapshot remains usable when offline. */}finally{busy=false}}
 const visible=()=>{if(document.visibilityState==='visible')refresh()};refresh();window.addEventListener('focus',refresh);document.addEventListener('visibilitychange',visible);return()=>{active=false;window.removeEventListener('focus',refresh);document.removeEventListener('visibilitychange',visible)}},[]);
 useEffect(()=>{document.title=data.content.name+' | '+(isArt?data.content.copy.portfolioHeading.replaceAll('\n',' '):'Resume')},[data]);
 return isArt?<Portfolio c={data.content} works={data.works} projects={data.projects}/>:<Home c={data.content}/>;
}
hydrateRoot(document.getElementById('root')!,<App/>);
