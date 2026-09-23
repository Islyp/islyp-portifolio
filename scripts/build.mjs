import { mkdir, cp, access, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { projectChaptersMarkup } from '../src/project-markup.js';
import { projects, projectOrder } from '../src/projects.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const optimizedImages = JSON.parse(await readFile(path.join(root,'scripts/image-assets.json'),'utf8'));
for (const file of Object.values(optimizedImages)) await access(path.join(root,file.slice(1)));
for (const file of ['index.html','robots.txt','sitemap.xml','src/main.js','src/physics.js','src/technologies.js','src/styles.css','assets/city-vertical.png','assets/paulo-islyp-recorte.png','assets/inter-latin.woff2']) await access(path.join(root,file));
const source = await readFile(path.join(root,'index.html'),'utf8');
for (const project of projectOrder) await access(path.join(root,'assets/projects',project+'.png'));
for (const file of ['src/projects.js','src/project-showcase.js','src/phone-viewer.js','src/phone-geometry.js','src/navigation.js','assets/vendor/three/three.module.min.js','assets/vendor/three/three.core.min.js','assets/vendor/three/LICENSE.txt']) await access(path.join(root,file));
for (const project of projectOrder) {
  await access(path.join(root,projects[project].screen.slice(1)));
  await access(path.join(root,projects[project].preview.slice(1)));
  for (const slide of projects[project].slides ?? []) await access(path.join(root,slide.src.slice(1)));
}
if (!source.includes('lang="pt-BR"')) throw new Error('Missing document language');
await mkdir(path.join(root,'dist'),{recursive:true});
for (const entry of ['index.html','robots.txt','sitemap.xml','_headers','src','assets']) await cp(path.join(root,entry),path.join(root,'dist',entry),{recursive:true});
await writeFile(path.join(root,'dist/index.html'),source.replace(/<!-- project-chapters:start -->[\s\S]*?<!-- project-chapters:end -->/,()=>`<!-- project-chapters:start -->\n${projectChaptersMarkup()}\n<!-- project-chapters:end -->`));
console.log('Build completo: dist/ — HTML, CSS, módulos JavaScript e assets locais.');
