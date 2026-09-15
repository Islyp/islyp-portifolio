const header = document.querySelector('.header');
const navigation = header.querySelector('nav');
const toggle = header.querySelector('.nav-toggle');
const compact = matchMedia('(max-width: 600px)');
let open = false;

function renderNavigation() {
  toggle.hidden = !compact.matches;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.hidden = compact.matches && !open;
  navigation.inert = navigation.hidden;
  header.classList.toggle('is-menu-open', compact.matches && open);
}

function closeNavigation(returnFocus = false) {
  open = false;
  renderNavigation();
  if (returnFocus && compact.matches) toggle.focus({ preventScroll: true });
}

toggle.addEventListener('click', () => {
  open = !open;
  renderNavigation();
});
header.addEventListener('click', event => {
  if (event.target.closest('a')) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && open) {
    event.preventDefault();
    closeNavigation(true);
  }
});
document.addEventListener('pointerdown', event => {
  if (open && !header.contains(event.target)) closeNavigation();
});
header.addEventListener('focusout', event => {
  if (open && event.relatedTarget && !header.contains(event.relatedTarget)) closeNavigation();
});
compact.addEventListener('change', () => {
  const focused = document.activeElement;
  closeNavigation();
  if (compact.matches && navigation.contains(focused)) toggle.focus({ preventScroll: true });
  else if (!compact.matches && focused === toggle) navigation.querySelector('a').focus({ preventScroll: true });
});

// Keep anchor offsets accurate after rotation, font loading and safe-area changes.
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}).observe(header);
header.classList.add('is-enhanced');
renderNavigation();
