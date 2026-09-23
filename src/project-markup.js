import { projects, projectOrder } from './projects.js';
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function projectChaptersMarkup() {
  return projectOrder.map((key, index) => {
    const p = projects[key];
    const technologies = p.technologies.map(t => `<li${t.detail ? ` title="${escape(t.detail)}"` : ''}>${t.icon ? `<img src="/assets/technologies/${escape(t.icon)}.svg" width="19" height="19" alt="" loading="lazy" />` : ''}<span>${escape(t.label)}</span></li>`).join('');
    return `<article class="project-chapter" id="projeto-${key}" data-project="${key}" aria-labelledby="project-heading-${key}">
      <div class="showcase__details">
        <p class="showcase__counter">${String(index + 1).padStart(2, '0')} / ${String(projectOrder.length).padStart(2, '0')}</p>
        <div class="showcase__title-row"><h3 id="project-heading-${key}">${escape(p.name)}</h3><span class="showcase__category">${escape(p.category)}</span></div>
        <p class="showcase__description">${escape(p.description)}</p>
        <div class="showcase__block"><h4>O desafio</h4><p class="showcase__challenge">${escape(p.challenge)}</p></div>
        <div class="showcase__block"><h4>Funcionalidades</h4><ul class="showcase__features">${p.features.map(text => `<li>${escape(text)}</li>`).join('')}</ul></div>
        ${technologies ? `<div class="showcase__block showcase__technologies"><h4>Tecnologias utilizadas</h4><ul>${technologies}</ul></div>` : ''}
        <div class="showcase__action">${p.slides?.length ? `<button type="button" class="showcase__visit" data-project-gallery="${key}" aria-haspopup="dialog">Ver telas do projeto <span aria-hidden="true">↗</span></button><p class="showcase__gallery-note">Projeto privado · demonstração com dados fictícios</p>` : p.url ? `<a class="showcase__visit" href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">Ver projeto <span aria-hidden="true">↗</span></a>` : `<span class="showcase__soon">${escape(p.status?.label ?? 'Em breve')} <span>${escape(p.status?.detail ?? 'Publicação em preparação')}</span></span>`}</div>
      </div>
    </article>`;
  }).join('\n');
}
