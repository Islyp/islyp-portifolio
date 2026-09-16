const scenes = {
  atrium: { name: 'Átrio de luz', number: '01', color: '#edf3f8' },
  horizon: { name: 'Horizonte suspenso', number: '02', color: '#e6f0f6' },
  solar: { name: 'Galeria solar', number: '03', color: '#f2ede4' },
  aurora: { name: 'Aurora de seda', number: '04', color: '#efedf7' },
};
const city = document.querySelector('.city');
const image = city.querySelector('.city__image');
const outgoing = city.querySelector('.city__outgoing');
const dock = document.querySelector('.background-dock');
const dialog = document.querySelector('.background-picker');
const status = dialog.querySelector('.background-status');
const options = [...dialog.querySelectorAll('[data-background-option]')];
const motionButton = dock.querySelector('.background-motion');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const storageKey = 'islyp-background';
let active = 'atrium', request = 0, cleanup = 0;

function updateControls(id) {
  dock.querySelector('[data-background-number]').textContent = scenes[id].number;
  dock.querySelector('[data-background-name]').textContent = scenes[id].name;
  for (const option of options) option.setAttribute('aria-pressed', String(option.dataset.backgroundOption === id));
}
function finishTransition() {
  outgoing.hidden = true;
  outgoing.removeAttribute('src');
  outgoing.classList.remove('is-leaving');
}
async function selectScene(id, { persist = true, close = true } = {}) {
  if (!Object.hasOwn(scenes, id)) return;
  const ticket = ++request;
  if (id !== active) {
    status.textContent = `Preparando ${scenes[id].name}…`;
    dialog.setAttribute('aria-busy', 'true');
    const next = new Image();
    next.src = `/assets/backgrounds/${id}.png`;
    try { await next.decode(); }
    catch {
      if (ticket !== request) return;
      status.textContent = 'Não foi possível carregar este cenário. Tente novamente.';
      dialog.removeAttribute('aria-busy');
      return;
    }
    if (ticket !== request) return;
    clearTimeout(cleanup);
    finishTransition();
    if (!reducedMotion.matches) {
      outgoing.src = image.currentSrc || image.src;
      outgoing.hidden = false;
    }
    image.src = next.src;
    image.width = next.naturalWidth;
    image.height = next.naturalHeight;
    document.documentElement.dataset.background = id;
    document.querySelector('meta[name="theme-color"]').content = scenes[id].color;
    active = id;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (ticket !== request) return;
      outgoing.classList.add('is-leaving');
      cleanup = setTimeout(finishTransition, 850);
    }));
  }
  dialog.removeAttribute('aria-busy');
  updateControls(id);
  status.textContent = `${scenes[id].name} aplicado.`;
  if (persist) {
    try { localStorage.setItem(storageKey, id); } catch { /* Storage may be disabled. */ }
    const url = new URL(location.href);
    url.searchParams.set('fundo', id);
    history.replaceState(history.state, '', url);
  }
  if (close && dialog.open) dialog.close();
}

dock.querySelector('.background-open').addEventListener('click', () => {
  dialog.showModal();
  options.find(option => option.dataset.backgroundOption === active)?.focus();
});
for (const option of options) option.addEventListener('click', () => selectScene(option.dataset.backgroundOption));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

// Reuse the existing animation control instead of adding a second animation loop.
motionButton.addEventListener('click', () => document.querySelector('.motion-toggle').click());
document.addEventListener('portfolio:motionchange', ({ detail: { paused } }) => {
  city.dataset.motion = paused ? 'paused' : 'playing';
  motionButton.setAttribute('aria-pressed', String(paused));
  const label = paused ? 'Retomar animações' : 'Pausar animações';
  motionButton.setAttribute('aria-label', label);
  motionButton.title = label;
});
function visibility() { city.dataset.sleeping = String(document.hidden); }
document.addEventListener('visibilitychange', visibility);
visibility();
dock.hidden = false;
let initial = new URL(location.href).searchParams.get('fundo');
if (!Object.hasOwn(scenes, initial)) {
  try { initial = localStorage.getItem(storageKey); } catch { initial = null; }
}
if (Object.hasOwn(scenes, initial)) selectScene(initial, { persist: false, close: false });
