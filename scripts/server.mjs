import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = process.argv.includes('--dist') ? path.join(projectRoot,'dist') : projectRoot;
const port = Number(process.env.PORT || 4173);
const types = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2' };
const server = http.createServer(async(req,res)=>{
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const relative = pathname==='/' ? 'index.html' : pathname.slice(1);
    const target = path.resolve(root,relative);
    if (!(target===path.join(root,'index.html') || target.startsWith(path.join(root,'src')+path.sep) || target.startsWith(path.join(root,'assets')+path.sep)) || !target.startsWith(root+path.sep)) {
      res.writeHead(404);res.end('Not found');return;
    }
    if (!(await stat(target)).isFile()) throw new Error('Not a file');
    const bytes = await readFile(target);
    res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(bytes);
  } catch { res.writeHead(404);res.end('Not found'); }
});
server.listen(port,'127.0.0.1',()=>console.log(`islyp hero: http://localhost:${port}`));
