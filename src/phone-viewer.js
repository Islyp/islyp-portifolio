import * as THREE from '../assets/vendor/three/three.module.min.js';
import { buildPhone } from './phone-geometry.js';

export async function createPhoneViewer(stage, initialProject) {
  const canvas=stage.querySelector('canvas');
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setClearColor(0x000000,0);
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.1;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(34,1,.1,100);
  camera.position.set(0,.08,12);
  scene.add(new THREE.AmbientLight(0xffffff,.95));
  for(const [color,intensity,position] of [[0xffffff,2.2,[4.5,6,7]],[0xabcfff,.65,[-4,1,5]],[0xdce7f4,1.35,[-5,3,-6]]]){
    const light=new THREE.DirectionalLight(color,intensity);light.position.set(...position);scene.add(light);
  }
  // The light panels recreate Voto Vivo's studio reflections with the portfolio's blue tones.
  const studio=new THREE.Scene();studio.background=new THREE.Color('#182231');
  for(const [color,intensity,position,scale] of [[0xffffff,3.8,[0,5,6],[5,1.4]],[0xbcd7ff,2.4,[-5,1,1],[4,1.2]],[0xa1c9ff,.5,[5,-1,-2],[3,1]]]){
    const panel=new THREE.Mesh(new THREE.PlaneGeometry(...scale),new THREE.MeshBasicMaterial({color:new THREE.Color(color).multiplyScalar(intensity),side:THREE.DoubleSide}));
    panel.position.set(...position);panel.lookAt(0,0,0);studio.add(panel);
  }
  const pmrem=new THREE.PMREMGenerator(renderer);
  const environment=pmrem.fromScene(studio,.04,.1,100,{size:128});
  scene.environment=environment.texture;pmrem.dispose();
  studio.traverse(object=>{object.geometry?.dispose();object.material?.dispose();});
  const phone=buildPhone();scene.add(phone.group);
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const textures=new Map();
  const loader=new THREE.TextureLoader();
  let targetPose=[...initialProject.pose], angles=[...targetPose], dragOffset=[0,0], targetDrag=[0,0];
  let scrollControlled=false, targetDepth=0, targetDrop=0;
  let pointer=null, pointerX=0, pointerY=0, targetPointerX=0,targetPointerY=0;
  let frame=0, previous=0, elapsed=0, blend=1, inView=false, paused=false, loaded=false, request=0, failed=false;
  const pauseButton=stage.parentElement.querySelector('[data-phone-pause]');
  const resetButton=stage.parentElement.querySelector('[data-phone-reset]');

  function wake(){if(!frame&&inView&&!document.hidden&&!failed){previous=0;frame=requestAnimationFrame(tick);}}
  function stop(){cancelAnimationFrame(frame);frame=0;previous=0;}
  function tick(time){
    frame=0;
    const dt=Math.min(previous?(time-previous)/1000:0,.05);previous=time;
    const ease=1-Math.exp(-7*dt);
    const moving=!paused&&!reducedMotion.matches;
    if(moving)elapsed+=dt;
    if(blend<1){
      blend=reducedMotion.matches?1:Math.min(1,blend+dt/.45);
      phone.screenB.opacity=blend*blend*(3-2*blend);
      phone.highlight.uniforms.uSweep.value=blend*1.4-.2;
      phone.highlight.uniforms.uOpacity.value=Math.sin(blend*Math.PI)*.12;
      if(blend===1){phone.screenA.map=phone.screenB.map;phone.screenA.needsUpdate=true;phone.screenB.opacity=0;}
    }
    let unsettled=0;
    for(let i=0;i<3;i++){
      angles[i]+=(targetPose[i]-angles[i])*ease;unsettled+=Math.abs(targetPose[i]-angles[i]);
    }
    for(let i=0;i<2;i++){
      dragOffset[i]+=(targetDrag[i]-dragOffset[i])*ease;unsettled+=Math.abs(targetDrag[i]-dragOffset[i]);
    }
    pointerX+=(targetPointerX-pointerX)*ease;pointerY+=(targetPointerY-pointerY)*ease;
    unsettled+=Math.abs(targetPointerX-pointerX)+Math.abs(targetPointerY-pointerY);
    const bob=moving?Math.sin(elapsed*.75)*.055:0;
    phone.group.rotation.set(angles[0]+dragOffset[0]+pointerY,angles[1]+dragOffset[1]+pointerX,angles[2]);
    phone.group.position.y=THREE.MathUtils.damp(phone.group.position.y,bob+targetDrop,8,dt);
    phone.group.position.z=THREE.MathUtils.damp(phone.group.position.z,targetDepth,8,dt);
    unsettled+=Math.abs(phone.group.position.y-bob-targetDrop)+Math.abs(phone.group.position.z-targetDepth);
    renderer.render(scene,camera);
    if(inView&&!document.hidden&&!failed&&(moving||unsettled>.0002||blend<1))frame=requestAnimationFrame(tick);
  }
  function resize(){
    const width=stage.clientWidth,height=stage.clientHeight;
    if(!width||!height)return;
    renderer.setSize(width,height,false);camera.aspect=width/height;
    // Fit the complete device in narrow columns, including its rotated corners.
    camera.position.z=Math.max(12,4.4/(2*Math.tan(THREE.MathUtils.degToRad(17))*camera.aspect));
    camera.updateProjectionMatrix();wake();
  }
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);resize();
  const visibilityObserver=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;if(inView)wake();else stop();});
  visibilityObserver.observe(stage);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():wake());
  reducedMotion.addEventListener('change',()=>{targetPointerX=0;targetPointerY=0;wake();});

  async function setProject(project){
    const version=++request;
    if(!scrollControlled)targetPose=[...project.pose];
    targetDrag=[0,0];targetPointerX=0;targetPointerY=0;
    if(reducedMotion.matches)angles=[...targetPose];
    if(!textures.has(project.screen)){
      textures.set(project.screen,loader.loadAsync(project.screen).then(texture=>{
        texture.colorSpace=THREE.SRGBColorSpace;
        texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return texture;
      }).catch(error=>{textures.delete(project.screen);throw error;}));
    }
    const texture=await textures.get(project.screen);
    if(version!==request)return;
    if(!loaded||reducedMotion.matches){
      phone.screenA.map=texture;phone.screenA.needsUpdate=true;phone.screenB.opacity=0;blend=1;
    }else{
      phone.screenB.map=texture;phone.screenB.needsUpdate=true;blend=0;
    }
    loaded=true;stage.dataset.status=failed?'unavailable':'ready';wake();
  }

  const reset=()=>{targetDrag=[0,0];targetPointerX=0;targetPointerY=0;wake();};
  canvas.addEventListener('pointerdown',event=>{
    if(!event.isPrimary||event.button!==0)return;
    pointer={id:event.pointerId,x:event.clientX,y:event.clientY,rx:targetDrag[0],ry:targetDrag[1]};
    canvas.setPointerCapture(event.pointerId);canvas.classList.add('is-dragging');
  });
  canvas.addEventListener('pointermove',event=>{
    if(pointer&&pointer.id===event.pointerId){
      targetDrag[1]=pointer.ry+(event.clientX-pointer.x)/stage.clientWidth*Math.PI*2;
      if(event.pointerType==='mouse')targetDrag[0]=THREE.MathUtils.clamp(pointer.rx+(event.clientY-pointer.y)/stage.clientHeight*Math.PI,-1.3,1.3);
    }else if(event.pointerType==='mouse'&&!paused&&!reducedMotion.matches){
      const rect=canvas.getBoundingClientRect();
      targetPointerX=((event.clientX-rect.left)/rect.width-.5)*.09;
      targetPointerY=((event.clientY-rect.top)/rect.height-.5)*.045;
    }
    wake();
  });
  function release(event){
    if(!pointer||event.pointerId!==pointer.id)return;
    pointer=null;canvas.classList.remove('is-dragging');
    if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);
    // Return to a readable front view, as in the original Voto Vivo interaction.
    dragOffset[1]=THREE.MathUtils.euclideanModulo(dragOffset[1]+Math.PI,Math.PI*2)-Math.PI;
    reset();
  }
  for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,release);
  canvas.addEventListener('pointerleave',()=>{if(!pointer)reset();});
  canvas.addEventListener('keydown',event=>{
    const directions={ArrowLeft:[0,-.25],ArrowRight:[0,.25],ArrowUp:[-.16,0],ArrowDown:[.16,0]};
    if(directions[event.key]){
      event.preventDefault();targetDrag=targetDrag.map((value,i)=>value+directions[event.key][i]);wake();
    }else if(event.key==='Escape'||event.key==='Home'){event.preventDefault();reset();}
  });
  resetButton.addEventListener('click',reset);
  pauseButton.addEventListener('click',()=>{
    paused=!paused;pauseButton.setAttribute('aria-pressed',String(paused));
    const label=paused?'Retomar flutuação do celular':'Pausar flutuação do celular';
    pauseButton.setAttribute('aria-label',label);pauseButton.title=label;reset();
  });
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();failed=true;stop();stage.dataset.status='unavailable';canvas.tabIndex=-1;
  });
  canvas.addEventListener('webglcontextrestored',()=>{failed=false;stage.dataset.status='ready';canvas.tabIndex=0;resize();wake();});
  await setProject(initialProject);
  function setScrollPose({rotation,depth=0,drop=0,immediate=false}) {
    scrollControlled=true;
    targetPose=[...rotation];targetDepth=depth;targetDrop=drop;
    if(immediate){angles=[...targetPose];phone.group.position.z=depth;phone.group.position.y=drop;}
    wake();
  }
  return {setProject,setScrollPose};
}
