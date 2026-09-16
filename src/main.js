import { clamp, coast, contain, releaseVelocity } from './physics.js';
import './technologies.js';
import './project-showcase.js';
import './navigation.js';
import { projects } from './projects.js';

const stage = document.querySelector('.floating-stage');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const city = document.querySelector('.city__image');
const cityViewport = document.querySelector('.city');
const dialog = document.querySelector('.project-dialog');
const motionButton = document.querySelector('.motion-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Position = center in normalized stage coordinates, width = fraction of viewport.
// Foreground composition follows the supplied reference. Mobile has its own layout.
const compositions = [
  { project:'elevamos', desktop:[.27,.185,.195,17,-13,7], mobile:[.23,.205,.36,15,-12,7], landscape:[.19,.29,.23,12,-12,7], depth:.8 },
  { project:'michelle', desktop:[.79,.185,.245,-13,13,-5], mobile:[.77,.195,.40,-13,12,-4], landscape:[.82,.28,.25,-10,12,-4], depth:.95 },
  { project:'guingas', desktop:[.235,.60,.315,15,-12,5], mobile:[.255,.72,.49,13,-10,5], landscape:[.19,.70,.26,10,-10,5], depth:1 },
  { project:'ferreira', desktop:[.76,.635,.24,9,-12,4], mobile:[.765,.735,.42,10,-12,4], landscape:[.81,.70,.24,8,-12,4], depth:.85 },
  { project:'elevamos', desktop:[.125,.115,.125,13,-15,7], mobile:[.09,.10,.18,15,-10,5], depth:.42, type:'secondary' },
  { project:'guingas', desktop:[.082,.365,.145,9,-12,4], mobile:[.04,.31,.19,10,-13,4], depth:.42, type:'secondary' },
  { project:'michelle', desktop:[.932,.365,.125,-11,17,-2], mobile:[.99,.305,.18,-10,12,-4], depth:.36, type:'secondary' },
  { project:'ferreira', desktop:[.932,.585,.11,7,-16,4], mobile:[.96,.56,.18,8,-12,4], depth:.32, type:'secondary' },
  { project:'elevamos', desktop:[.477,.095,.046,20,-21,14], mobile:[.51,.115,.075,20,-20,10], depth:.18, type:'distant' },
  { project:'michelle', desktop:[.946,.17,.047,-19,21,10], mobile:[.94,.09,.065,-19,18,10], depth:.16, type:'distant' },
  { project:'ferreira', desktop:[.303,.395,.049,-18,15,7], mobile:[.14,.50,.07,-18,15,7], depth:.2, type:'distant' },
  { project:'guingas', desktop:[.785,.435,.042,14,-12,6], mobile:[.87,.475,.065,14,-12,6], depth:.16, type:'distant' },
  { project:'guingas', desktop:[.163,.835,.06,9,-15,7], mobile:[.21,.865,.10,9,-15,7], depth:.2, type:'distant' },
  { project:'ferreira', desktop:[.716,.85,.051,-6,20,8], mobile:[.72,.86,.09,-6,20,8], depth:.18, type:'distant' },
  { project:'guarana', desktop:[.50,.82,.205,-7,12,4], mobile:[.50,.865,.28,-7,10,4], landscape:[.50,.84,.17,-5,8,3], depth:.78 },
];

let stageWidth = 0, stageHeight = 0, mobile = false, layoutMode = 'desktop';
let headerHeight = 0;
let paused = reducedMotion.matches;
let elapsed = 0, previous = 0, frame = 0, inView = true;
let scrollPosition = window.scrollY, smoothScroll = scrollPosition;
const CITY_SCROLL_SPEED = .28;
let cityMaxTravel = 0;
let pointer = { x: 0, y: 0 }, pointerSmooth = { x: 0, y: 0 };
let activeDrag = null;

const panels = compositions.map((definition, index) => {
  const element = document.createElement('button');
  element.type = 'button';
  element.className = `panel${definition.type ? ` is-${definition.type}` : ''}`;
  element.dataset.project = definition.project;
  element.style.setProperty('--project-preview', `url("${projects[definition.project].preview}")`);
  element.dataset.panel = String(index);
  element.setAttribute('aria-label', `${projects[definition.project].name} — arrastar ou abrir projeto`);
  element.setAttribute('aria-describedby', 'panel-help');
  // Decorative repeats remain pointer-interactive without duplicating keyboard stops.
  if (definition.type) element.tabIndex = -1;
  element.innerHTML = '<span class="panel__glass"><span class="panel__screen"></span></span>';
  stage.append(element);
  const body = { ...definition, element, index, x:0, y:0, vx:0, vy:0, width:0, height:0, baseX:0, baseY:0, direction:index%2 ? -1 : 1, rotation:0, tiltX:0, tiltY:0, drag:null, coast:false, resumeAt:0, focused:false };
  element.addEventListener('pointerdown', event => startDrag(event, body));
  element.addEventListener('pointermove', event => moveDrag(event, body));
  element.addEventListener('pointerup', event => endDrag(event, body));
  element.addEventListener('pointercancel', event => endDrag(event, body, true));
  element.addEventListener('lostpointercapture', event => { if (body.drag) endDrag(event, body, true); });
  element.addEventListener('click', event => { if (event.detail === 0) openProject(body); });
  element.addEventListener('keydown', event => keyboardMove(event, body));
  element.addEventListener('focus', () => { body.focused = true; });
  element.addEventListener('blur', () => { body.focused = false; });
  element.addEventListener('dragstart', event => event.preventDefault());
  return body;
});

function bounds(body, initialPosition = false) {
  // 3D rotation needs slightly more clearance than the screen's flat dimensions.
  const halfWidth = body.width * .56;
  const halfHeight = body.height * .65;
  // The header overlays the panels; it is not a collision surface.
  // Leave a small reachable part of even the tiny panels below the menu.
  const visiblePart = Math.min(24,body.height*.4);
  const top = initialPosition ? headerHeight+12+halfHeight : Math.max(halfHeight,headerHeight+visiblePart-body.height/2);
  return { left:halfWidth, right:stageWidth-halfWidth, top, bottom:stageHeight-halfHeight-42 };
}

function layout() {
  const oldWidth = stageWidth, oldHeight = stageHeight, oldMode = layoutMode;
  stageWidth = stage.clientWidth;
  stageHeight = stage.clientHeight;
  headerHeight = header.offsetHeight;
  const landscape = stageWidth <= 1100 && window.matchMedia('(orientation: landscape) and (max-height: 600px)').matches;
  mobile = !landscape && (stageWidth <= 700 || (stageWidth <= 1100 && stageHeight > stageWidth*1.1));
  layoutMode = landscape ? 'landscape' : mobile ? 'mobile' : 'desktop';
  hero.dataset.layout = layoutMode;
  for (const body of panels) {
    const [x,y,width,rotation,tiltY,tiltX] = body[layoutMode] || body.desktop;
    body.width = Math.min(stageWidth, mobile ? 680 : stageHeight*1.6) * width;
    body.height = body.width / 1.46;
    body.rotation = rotation; body.tiltY = tiltY; body.tiltX = tiltX;
    body.element.style.width = `${body.width}px`;
    if (!oldWidth || oldMode !== layoutMode) {
      body.x = x * stageWidth; body.y = y * stageHeight;
      body.vx = 0; body.vy = 0; body.coast = false;
    } else {
      body.x *= stageWidth / oldWidth;
      body.y *= stageHeight / oldHeight;
    }
    contain(body, bounds(body,!oldWidth || oldMode!==layoutMode));
    body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
    render(body);
  }
  scrollPosition = window.scrollY;
  renderCity();
}

function render(body) {
  const interaction = body.drag ? 1 : 0;
  const dx = paused || body.drag ? 0 : pointerSmooth.x * body.depth * 6;
  const dy = paused || body.drag ? 0 : pointerSmooth.y * body.depth * 4;
  const floatTilt = paused || body.drag ? 0 : Math.sin(elapsed * .34 + body.index) * 1.8;
  body.element.style.transform = `translate3d(${body.x-body.width/2+dx}px,${body.y-body.height/2+dy}px,0) perspective(1100px) rotateZ(${body.rotation+floatTilt}deg) rotateY(${body.tiltY + (body.drag ? 0 : pointerSmooth.x*2)}deg) rotateX(${body.tiltX}deg) scale(${1+interaction*.025})`;
  body.element.style.zIndex = body.drag ? '35' : String(Math.round(body.depth * 12) + (body.focused ? 12 : 0));
}

function startDrag(event, body) {
  if (!event.isPrimary || event.button !== 0 || activeDrag) return;
  event.preventDefault();
  const t = performance.now();
  body.drag = { id:event.pointerId, offsetX:event.clientX-body.x, offsetY:event.clientY+scrollPosition-body.y, startX:event.clientX, startY:event.clientY, moved:false, samples:[{x:body.x,y:body.y,t}] };
  activeDrag = body;
  body.vx = 0; body.vy = 0; body.coast = false;
  body.element.classList.add('is-dragging');
  body.element.setPointerCapture(event.pointerId);
  render(body);
}

function moveDrag(event, body) {
  const drag = body.drag;
  if (!drag || event.pointerId !== drag.id) return;
  body.x = event.clientX - drag.offsetX;
  body.y = event.clientY + window.scrollY - drag.offsetY;
  contain(body,bounds(body));
  if (Math.hypot(event.clientX-drag.startX,event.clientY-drag.startY)>5) drag.moved = true;
  const t = performance.now();
  drag.samples.push({x:body.x,y:body.y,t});
  drag.samples = drag.samples.filter(sample => t-sample.t<140);
  render(body);
}

function endDrag(event, body, cancelled = false) {
  if (!body.drag || event.pointerId !== body.drag.id) return;
  const drag = body.drag;
  const time = performance.now();
  body.drag = null; activeDrag = null;
  body.element.classList.remove('is-dragging');
  if (body.element.hasPointerCapture(event.pointerId)) body.element.releasePointerCapture(event.pointerId);
  if (!cancelled && drag.moved && !paused) {
    Object.assign(body, releaseVelocity(drag.samples,time));
    body.coast = Math.hypot(body.vx,body.vy)>4;
  }
  body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
  render(body);
  if (!cancelled && !drag.moved) openProject(body);
  wake();
}

function keyboardMove(event, body) {
  const directions = { ArrowLeft:[-1,0], ArrowRight:[1,0], ArrowUp:[0,-1], ArrowDown:[0,1] };
  if (directions[event.key]) {
    event.preventDefault();
    const [x,y] = directions[event.key], step = event.shiftKey ? 45 : 15;
    body.x += x*step; body.y += y*step;
    body.vx = 0; body.vy = 0; body.coast = false;
    contain(body,bounds(body));
    body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
    render(body);
  } else if (event.key==='Escape') {
    const [x,y] = body[layoutMode] || body.desktop;
    body.x = x*stageWidth; body.y = y*stageHeight; body.vx = 0; body.vy = 0; body.coast = false;
    contain(body,bounds(body,true));
    body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
    render(body);
  }
}

function openProject(body) {
  const project = projects[body.project];
  document.querySelector('#project-title').textContent = project.name;
  document.querySelector('.project-description').textContent = project.description;
  document.querySelector('.dialog-preview').dataset.project = body.project;
  document.querySelector('.dialog-preview').style.setProperty('--project-preview', `url("${project.preview}")`);
  const link = document.querySelector('.project-link');
  link.hidden = !project.url;
  if (project.url) link.href = project.url; else link.removeAttribute('href');
  const status = document.querySelector('.project-soon');
  status.hidden = !!project.url;
  status.textContent = project.status ? `${project.status.label} · ${project.status.detail}` : 'Em breve';
  dialog.showModal();
}
dialog.addEventListener('click',event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
});
dialog.addEventListener('close',wake);

function setPaused(value) {
  paused = value;
  motionButton.setAttribute('aria-pressed',String(paused));
  motionButton.setAttribute('aria-label',paused?'Retomar animações':'Pausar animações');
  motionButton.title = paused?'Retomar animações':'Pausar animações';
  for (const body of panels) {
    body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
    body.coast = false; body.vx = 0; body.vy = 0; render(body);
  }
  renderCity(); wake();
}
motionButton.addEventListener('click',()=>setPaused(!paused));
reducedMotion.addEventListener('change',event=>setPaused(event.matches));

function renderCity() {
  // Reveal the original tall scene at 28% of the page's scrolling speed.
  // Adding sections must not change the framing at an existing scroll position.
  const distance = (paused ? scrollPosition : smoothScroll)*CITY_SCROLL_SPEED;
  const offset = clamp(distance,0,cityMaxTravel);
  city.style.transform = `translate3d(0,${-offset}px,0)`;
}

function measureCity() {
  cityMaxTravel = Math.max(0,city.clientHeight-cityViewport.clientHeight);
  renderCity();
}

function tick(time) {
  frame = 0;
  const dt = Math.min((time-(previous||time))/1000,.04);
  previous = time;
  const ease = 1-Math.exp(-7*dt);
  if (!paused && !dialog.open) {
    elapsed += dt;
    pointerSmooth.x += (pointer.x-pointerSmooth.x)*ease;
    pointerSmooth.y += (pointer.y-pointerSmooth.y)*ease;
    for (const body of panels) {
      if (body.drag || body.focused) continue;
      if (body.coast) {
        coast(body,dt);
        contain(body,bounds(body));
        if (Math.hypot(body.vx,body.vy)<5) {
          body.coast = false; body.baseX = body.x; body.baseY = body.y; body.resumeAt = elapsed;
        }
      } else {
        // Oscillate within a small area, easing to a stop at each turn.
        // After a throw, this area is centered where the panel finishes coasting.
        const phase = body.index*1.71;
        const age = elapsed-body.resumeAt;
        const progress = Math.min(age/2,1);
        const entrance = progress*progress*(3-2*progress);
        const limits = bounds(body);
        const travel = Math.min(stageWidth*.025,mobile?14:34)*(1.1-body.depth*.2);
        const left = Math.max(limits.left,body.baseX-travel);
        const right = Math.min(limits.right,body.baseX+travel);
        const center = (left+right)/2;
        const radius = (right-left)/2;
        const startPhase = radius ? Math.asin(clamp((body.baseX-center)/radius,-1,1)) : 0;
        const angle = (body.direction>0?startPhase:Math.PI-startPhase) + age*2*Math.PI/(18+body.index%5*1.6);
        body.x = body.baseX + (center+Math.sin(angle)*radius-body.baseX)*entrance;
        const bob = Math.min(stageWidth*.007,mobile?5:8);
        body.y = body.baseY + (Math.sin(age*.37+phase)-Math.sin(phase))*bob*entrance;
        contain(body,limits);
      }
      render(body);
    }
  }
  smoothScroll += (scrollPosition-smoothScroll)*ease;
  renderCity();
  if (!document.hidden && ((!paused && !dialog.open && inView) || Math.abs(scrollPosition-smoothScroll)>.2)) frame = requestAnimationFrame(tick);
}
function wake() { if (!frame && !document.hidden) { previous = 0; frame = requestAnimationFrame(tick); } }

window.addEventListener('pointermove', event=>{
  if (event.pointerType!=='mouse') return;
  pointer.x = clamp(event.clientX/window.innerWidth*2-1,-1,1);
  pointer.y = clamp(event.clientY/window.innerHeight*2-1,-1,1);
},{passive:true});
document.addEventListener('pointerleave',()=>{pointer.x=0;pointer.y=0;});
window.addEventListener('scroll',()=>{scrollPosition=window.scrollY;wake();},{passive:true});
document.addEventListener('visibilitychange',()=>{
  if (document.hidden) { cancelAnimationFrame(frame);frame=0; } else wake();
});
new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;if(inView)wake();},{threshold:0}).observe(hero);
new ResizeObserver(layout).observe(stage);
const cityObserver = new ResizeObserver(measureCity);
cityObserver.observe(city);
cityObserver.observe(cityViewport);
layout();measureCity();setPaused(paused);wake();
