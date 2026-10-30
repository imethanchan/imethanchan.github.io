import {renderToString} from "react-dom/server";
import Home from "./Home";
import Portfolio from "./Portfolio";
import content from "./content.json";
import works from "./artworks.json";
import projects from "./projects.json";
const seed={content,works};
import fs from "node:fs";
import {createHash} from "node:crypto";
const appVersion=createHash("sha256").update(fs.readFileSync("app.js")).digest("hex").slice(0,12);
const styleVersion=createHash("sha256").update(fs.readFileSync("style.css")).digest("hex").slice(0,12);
function shell(content:string,art=false){const title=art?"Ethan Chan | Art Portfolio":"Ethan Chan | Resume & Portfolio";return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Ethan Chan - Building Sciences and Engineering, experience, and art portfolio."><title>'+title+'</title><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/style.css?v='+styleVersion+'"><link rel="canonical" href="https://imethanchan.github.io/'+(art?'portfolio.html':'')+'"></head><body><div id="root">'+content+'</div><script type="module" src="/app.js?v='+appVersion+'"></script></body></html>'}
fs.writeFileSync("index.html",shell(renderToString(<Home c={seed.content}/>)));
fs.writeFileSync("portfolio.html",shell(renderToString(<Portfolio c={seed.content} works={seed.works} projects={projects}/>),true));

