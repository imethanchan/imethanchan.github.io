import fs from 'node:fs';
import {build} from 'esbuild';
import {execFileSync} from 'node:child_process';
fs.mkdirSync('.build',{recursive:true});
const content=JSON.parse(fs.readFileSync('content.json','utf8'));
const works=JSON.parse(fs.readFileSync('artworks.json','utf8'));
if(!Array.isArray(works)||!content.email)throw new Error('Check content.json and artworks.json');
for(const work of works){for(const key of ['file_url','preview_url'])if(work[key]&&!fs.existsSync('.'+work[key]))throw new Error('Missing '+work[key])}
const common={bundle:true,jsx:'automatic',target:'es2022'};
await build({...common,entryPoints:['main.tsx'],outfile:'app.js',platform:'browser',minify:true});
await build({...common,entryPoints:['render.tsx'],outfile:'.build/render.cjs',platform:'node',format:'cjs'});
execFileSync(process.execPath,['.build/render.cjs'],{stdio:'inherit'});
for(const file of ['app.js','index.html','portfolio.html'])if(/chatgpt\.site|signin-with-chatgpt|\/api\/files\/|\/api\/content|\/api\/artworks/.test(fs.readFileSync(file,'utf8')))throw new Error('Unexpected external service in '+file);
console.log('Built independent GitHub Pages site with '+works.length+' works.');
