import { projects } from './projects.js';

const gallery = document.querySelector('.project-gallery');
const image = gallery.querySelector('img');
const caption = gallery.querySelector('figcaption');
const counter = gallery.querySelector('.project-gallery__counter');
let slides = [];
let index = 0;
let trigger;

function showSlide(next) {
  index = (next + slides.length) % slides.length;
  const slide = slides[index];
  image.src = slide.src;
  image.alt = slide.alt;
  caption.textContent = slide.caption;
  counter.textContent = `${index + 1} / ${slides.length}`;
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-project-gallery]');
  if (!button) return;
  const project = projects[button.dataset.projectGallery];
  if (!project?.slides?.length) return;
  trigger = button;
  slides = project.slides;
  gallery.querySelector('#gallery-title').textContent = project.name;
  showSlide(0);
  gallery.showModal();
  document.documentElement.classList.add('gallery-open');
});

gallery.addEventListener('click', event => {
  const button = event.target.closest('[data-gallery-step]');
  if (button) showSlide(index + Number(button.dataset.galleryStep));
  if (event.target !== gallery) return;
  const rect = gallery.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) gallery.close();
});

gallery.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  event.stopPropagation();
  showSlide(index + (event.key === 'ArrowRight' ? 1 : -1));
});

gallery.addEventListener('close', () => {
  document.documentElement.classList.remove('gallery-open');
  if (trigger?.isConnected) trigger.focus({ preventScroll: true });
});
