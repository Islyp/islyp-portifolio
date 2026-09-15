const section = document.querySelector('.tech');

if (section) {
  const button = section.querySelector('.tech__toggle');
  const groups = [...section.querySelectorAll('.tech__group')];

  for (const group of groups) {
    // Identical halves make the end of each lap match its starting frame.
    // Each half fills at least the viewport, including ultrawide screens.
    const copy = group.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.removeAttribute('aria-label');
    copy.inert = true;
    group.parentElement.append(copy);
  }

  section.classList.add('is-ready', 'is-offscreen');
  button.hidden = false;

  const measure = () => {
    for (const group of groups) {
      const track = group.parentElement;
      // Both rows travel at the same gentle speed regardless of label length.
      const duration = group.getBoundingClientRect().width / 32;
      track.style.setProperty('--duration', `${duration}s`);
    }
  };
  new ResizeObserver(measure).observe(section);
  document.fonts.ready.then(measure);
  measure();

  button.addEventListener('click', () => {
    const paused = section.classList.toggle('is-paused');
    const label = paused ? 'Retomar carrosséis' : 'Pausar carrosséis';
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', label);
    button.title = label;
  });

  new IntersectionObserver(([entry]) => {
    section.classList.toggle('is-offscreen', !entry.isIntersecting);
  }).observe(section);

  const updateVisibility = () => section.classList.toggle('is-tab-hidden', document.hidden);
  document.addEventListener('visibilitychange', updateVisibility);
  updateVisibility();
}
