import { projects, projectOrder } from './projects.js';

const section=document.querySelector('.showcase');
if(section){
  section.classList.add('is-enhanced');
  const stage=section.querySelector('.phone-stage');
  const panel=section.querySelector('.showcase__details');
  const fallback=section.querySelector('.phone-fallback img');
  const dots=[...section.querySelectorAll('[data-showcase-project]')];
  let active='guingas', viewer=null, loading=null;

  function render(key,{announce=false,updateHash=false}={}){
    if(!projects[key])return;
    active=key;
    const project=projects[key],index=projectOrder.indexOf(key);
    section.dataset.project=key;
    panel.querySelector('.showcase__counter').textContent=`${String(index+1).padStart(2,'0')} / 04`;
    panel.querySelector('#showcase-project-title').textContent=project.name;
    panel.querySelector('.showcase__category').textContent=project.category;
    panel.querySelector('.showcase__description').textContent=project.description;
    panel.querySelector('.showcase__challenge').textContent=project.challenge;
    const features=panel.querySelector('.showcase__features');
    features.replaceChildren(...project.features.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    const technologies=panel.querySelector('.showcase__technologies');
    technologies.hidden=!project.technologies.length;
    technologies.querySelector('ul').replaceChildren(...project.technologies.map(technology=>{
      const li=document.createElement('li');
      if(technology.detail)li.title=technology.detail;
      if(technology.icon){const image=document.createElement('img');image.src=`/assets/technologies/${technology.icon}.svg`;image.alt='';image.width=19;image.height=19;li.append(image);}
      const text=document.createElement('span');text.textContent=technology.label;li.append(text);return li;
    }));
    const link=panel.querySelector('.showcase__visit');
    link.hidden=!project.url;if(project.url)link.href=project.url;else link.removeAttribute('href');
    panel.querySelector('.showcase__soon').hidden=!!project.url;
    fallback.src=project.screen;fallback.alt=`Tela inicial de ${project.name} no celular`;
    stage.querySelector('canvas').setAttribute('aria-label',`Celular 3D com ${project.name}. Use as setas para girar e Escape para reposicionar.`);
    dots.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.showcaseProject===key)));
    if(announce)section.querySelector('.showcase__announcement').textContent=`Projeto ${index+1} de 4: ${project.name}`;
    if(updateHash)history.replaceState(null,'',`#projeto-${key}`);
    if(viewer)viewer.setProject(project).catch(()=>{stage.dataset.status='unavailable';});
  }

  async function loadPhone(){
    if(loading)return loading;
    loading=import('./phone-viewer.js').then(async({createPhoneViewer})=>{
      viewer=await createPhoneViewer(stage,projects[active]);
      // Selection can change while WebGL or the first screenshot is loading.
      await viewer.setProject(projects[active]);
      stage.querySelector('canvas').tabIndex=0;
    }).catch(()=>{stage.dataset.status='unavailable';stage.querySelector('canvas').tabIndex=-1;});
    return loading;
  }
  new IntersectionObserver((entries,observer)=>{
    if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();loadPhone();}
  },{rootMargin:'300px'}).observe(section);

  function fromHash(){
    const key=location.hash.replace('#projeto-','');
    if(projects[key])render(key);
  }
  window.addEventListener('hashchange',fromHash);
  document.querySelectorAll('[data-project-select]').forEach(link=>link.addEventListener('click',event=>{
    if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    render(link.dataset.projectSelect,{announce:true});loadPhone();
  }));
  for(const direction of [-1,1]){
    section.querySelector(direction<0?'[data-project-prev]':'[data-project-next]').addEventListener('click',()=>{
      const index=(projectOrder.indexOf(active)+direction+projectOrder.length)%projectOrder.length;
      render(projectOrder[index],{announce:true,updateHash:true});
    });
  }
  dots.forEach(button=>button.addEventListener('click',()=>render(button.dataset.showcaseProject,{announce:true,updateHash:true})));
  render(active);fromHash();
}
