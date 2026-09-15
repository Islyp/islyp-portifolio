import { projects, projectOrder } from './projects.js';
import { projectChaptersMarkup } from './project-markup.js';
import { projectScrollState, dampScroll } from './project-scroll.js';

const section = document.querySelector('.showcase');
if (section) {
  const host = section.querySelector('.showcase__chapters');
  host.innerHTML = projectChaptersMarkup();
  section.classList.add('is-enhanced');
  const chapters = [...host.children];
  const journey = section.querySelector('.showcase__journey');
  const pin = section.querySelector('.showcase__pin');
  const scene = section.querySelector('.showcase__scene');
  const carrier = section.querySelector('.showcase__phone');
  const stage = section.querySelector('.phone-stage');
  const fallback = stage.querySelector('.phone-fallback img');
  const canvas = stage.querySelector('canvas');
  const compact = matchMedia('(max-width: 760px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let active = '', viewer = null, loading = null, anchors = [], travelWidth = 0;
  let frame = 0, resizeFrame = 0, latestPose = null;
  let renderedScroll = scrollY, previousTime = 0;

  function activate(index) {
    const key = projectOrder[index];
    if (active === key) return;
    active = key;
    const project = projects[key];
    section.dataset.project = key;
    fallback.src = project.screen;
    fallback.alt = `Tela inicial de ${project.name} no celular`;
    canvas.setAttribute('aria-label', `Celular 3D com ${project.name}. Use as setas para girar e Escape para reposicionar.`);
    chapters.forEach((chapter, i) => chapter.classList.toggle('is-active', i === index));
    viewer?.setProject(project).catch(() => { stage.dataset.status = 'unavailable'; });
  }

  function update(time) {
    frame = 0;
    if (!anchors.length) return;
    const target = Math.max(anchors[0], Math.min(anchors.at(-1), scrollY));
    const offscreen = scrollY + innerHeight < anchors[0] || scrollY > anchors.at(-1) + innerHeight;
    const dt = Math.min(previousTime ? (time - previousTime) / 1000 : 1 / 60, .05);
    previousTime = time;
    renderedScroll = reducedMotion.matches || offscreen ? target : dampScroll(renderedScroll, target, dt);
    const state = projectScrollState(renderedScroll, anchors, { still: reducedMotion.matches, compact: compact.matches });
    activate(state.index);
    const from = projects[projectOrder[state.segment]].pose;
    const to = projects[projectOrder[Math.min(state.segment + 1, projectOrder.length - 1)]].pose;
    const pose = from.map((angle, i) => angle + (to[i] - angle) * state.travel);
    latestPose = {
      rotation: [pose[0] - state.depth * .1, pose[1] + state.turn, pose[2] + state.depth * .06],
      depth: -state.depth * (compact.matches ? 1.4 : 3), drop: -state.depth * .16,
      immediate: true,
    };
    if (reducedMotion.matches) latestPose.rotation = [...projects[active].pose];
    carrier.style.setProperty('--phone-x', `${state.side * travelWidth}px`);
    carrier.style.setProperty('--phone-drop', `${state.depth * (compact.matches ? 5 : 28)}px`);
    carrier.style.setProperty('--flight-depth', state.depth.toFixed(3));
    scene.dataset.side = state.side < .5 ? 'left' : 'right';
    viewer?.setScrollPose(latestPose);
    if (renderedScroll !== target && !document.hidden) frame = requestAnimationFrame(update);
    else previousTime = 0;
  }
  function schedule() { if (!frame && !document.hidden) frame = requestAnimationFrame(update); }
  function snapScroll() {
    cancelAnimationFrame(frame); frame = 0; previousTime = 0;
    renderedScroll = Math.max(anchors[0], Math.min(anchors.at(-1), scrollY));
    update(performance.now());
  }
  function measure() {
    resizeFrame = 0;
    const header = document.querySelector('.header').getBoundingClientRect().height;
    const readingTop = header + 16 + (compact.matches ? carrier.offsetHeight + 18 : 0);
    const readingCenter = compact.matches ? readingTop + Math.max(120, innerHeight - readingTop) / 2 : header + 16 + scene.clientHeight / 2;
    anchors = chapters.map(chapter => {
      const rect = chapter.querySelector('.showcase__details').getBoundingClientRect();
      return scrollY + rect.top + (compact.matches ? Math.min(rect.height / 2, (innerHeight - readingTop) / 2) : rect.height / 2) - readingCenter;
    });
    // Settle slightly below the last card's reading position.
    // From there the phone leaves with that card, before the following section.
    const journeyTop = scrollY + journey.getBoundingClientRect().top;
    const finalOffset = compact.matches ? 32 : 64;
    const pinHeight = Math.max(scene.clientHeight, anchors.at(-1) + finalOffset - journeyTop + header + 16 + scene.clientHeight);
    pin.style.setProperty('--pin-height', `${pinHeight}px`);
    travelWidth = Math.max(0, scene.clientWidth - carrier.offsetWidth);
    carrier.style.setProperty('--phone-ui-offset', `${(carrier.offsetHeight - stage.offsetHeight) / 2}px`);
    snapScroll();
  }
  const measureSoon = () => { if (!resizeFrame) resizeFrame = requestAnimationFrame(measure); };
  const resizeObserver = new ResizeObserver(measureSoon);
  for (const element of [scene, carrier, host, document.querySelector('.header')]) resizeObserver.observe(element);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measureSoon, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; previousTime = 0; }
    else snapScroll();
  });
  for (const query of [compact, reducedMotion]) query.addEventListener('change', measureSoon);

  async function loadPhone() {
    if (loading) return loading;
    loading = import('./phone-viewer.js').then(async ({ createPhoneViewer }) => {
      const initial = active || projectOrder[0];
      viewer = await createPhoneViewer(stage, projects[initial]);
      if (active !== initial) await viewer.setProject(projects[active]);
      if (latestPose) viewer.setScrollPose({ ...latestPose, immediate: true });
      canvas.tabIndex = 0;
      // Upload upcoming screens while idle, before a scrolling transition needs them.
      const pending = projectOrder.filter(key => key !== active);
      const idle = callback => window.requestIdleCallback ? requestIdleCallback(callback, { timeout: 2000 }) : setTimeout(callback, 350);
      function warmNext() {
        const key = pending.shift();
        if (key) viewer.prepareProject(projects[key]).catch(() => {}).finally(() => idle(warmNext));
      }
      idle(warmNext);
    }).catch(() => { stage.dataset.status = 'unavailable'; canvas.tabIndex = -1; });
    return loading;
  }
  new IntersectionObserver((entries, observer) => {
    if (entries.some(entry => entry.isIntersecting)) { observer.disconnect(); loadPhone(); }
  }, { rootMargin: '400px' }).observe(section);

  function navigate(key, smooth = true) {
    const index = projectOrder.indexOf(key);
    if (index < 0) return;
    measure();
    const card = chapters[index].querySelector('.showcase__details');
    const header = document.querySelector('.header').getBoundingClientRect().height;
    const top = header + 24 + (compact.matches ? carrier.offsetHeight + 18 : 0);
    window.scrollTo({ top: scrollY + card.getBoundingClientRect().top - top, behavior: smooth && !reducedMotion.matches ? 'smooth' : 'instant' });
    if (!smooth || reducedMotion.matches) snapScroll();
    loadPhone();
  }
  document.querySelectorAll('[data-project-select]').forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const key = link.dataset.projectSelect;
    history.pushState(null, '', `#projeto-${key}`);
    navigate(key);
    const title = document.getElementById(`project-heading-${key}`);
    title.tabIndex = -1; title.focus({ preventScroll: true });
  }));
  const fromHash = () => { const key = location.hash.replace('#projeto-', ''); if (projects[key]) navigate(key, false); };
  window.addEventListener('hashchange', fromHash);
  document.fonts.ready.then(() => { measure(); fromHash(); });
  measure();
}
