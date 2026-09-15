import * as THREE from '../assets/vendor/three/three.module.min.js';

// Adapted from the user's Voto Vivo PhoneModel (app/page.tsx).
// The rounded metal frame, glass, rear cameras, buttons and ports retain its proportions.
export function buildPhone() {
  const group = new THREE.Group();
  function roundedPath(width, height, radius, clockwise = true) {
    const left=-width/2, right=width/2, bottom=-height/2, top=height/2;
    const path=new THREE.Path();
    path.moveTo(left+radius,bottom);
    if(clockwise){
      path.quadraticCurveTo(left,bottom,left,bottom+radius);
      path.lineTo(left,top-radius);path.quadraticCurveTo(left,top,left+radius,top);
      path.lineTo(right-radius,top);path.quadraticCurveTo(right,top,right,top-radius);
      path.lineTo(right,bottom+radius);path.quadraticCurveTo(right,bottom,right-radius,bottom);
      path.lineTo(left+radius,bottom);
    }else{
      path.lineTo(right-radius,bottom);path.quadraticCurveTo(right,bottom,right,bottom+radius);
      path.lineTo(right,top-radius);path.quadraticCurveTo(right,top,right-radius,top);
      path.lineTo(left+radius,top);path.quadraticCurveTo(left,top,left,top-radius);
      path.lineTo(left,bottom+radius);path.quadraticCurveTo(left,bottom,left+radius,bottom);
    }
    return path;
  }
  function roundedShape(w,h,r){
    const path=roundedPath(w,h,r), shape=new THREE.Shape();
    shape.curves=path.curves;shape.currentPoint.copy(path.currentPoint);return shape;
  }
  function slab(w,h,r,depth,bevel=.018){
    const geometry=new THREE.ExtrudeGeometry(roundedShape(w,h,r),{depth,steps:1,curveSegments:16,bevelEnabled:true,bevelSegments:3,bevelSize:bevel,bevelThickness:bevel*.75});
    geometry.center();geometry.computeVertexNormals();return geometry;
  }
  const physical = options => new THREE.MeshPhysicalMaterial(options);
  function add(geometry,material,position=[0,0,0],rotation=[0,0,0]){
    const mesh=new THREE.Mesh(geometry,material);mesh.position.set(...position);mesh.rotation.set(...rotation);
    mesh.updateMatrix();mesh.matrixAutoUpdate=false;group.add(mesh);return mesh;
  }
  const frameShape=roundedShape(3.28,6.66,.48);
  frameShape.holes.push(roundedPath(3.04,6.4,.38,false));
  const frame=new THREE.ExtrudeGeometry(frameShape,{depth:.28,steps:1,curveSegments:20,bevelEnabled:true,bevelSegments:4,bevelSize:.035,bevelThickness:.028});
  frame.center();frame.computeVertexNormals();
  add(frame,physical({color:'#626b76',metalness:.88,roughness:.23,clearcoat:.42,clearcoatRoughness:.18,envMapIntensity:1.55}));
  add(slab(3.13,6.52,.42,.026),physical({color:'#111823',metalness:.02,roughness:.08,clearcoat:1,clearcoatRoughness:.06}),[0,0,.17]);

  const screenWidth=2.99, screenHeight=6.33;
  const screen=new THREE.ShapeGeometry(roundedShape(screenWidth,screenHeight,.34),20);
  const positions=screen.attributes.position,uvs=new Float32Array(positions.count*2);
  for(let i=0;i<positions.count;i++){
    uvs[i*2]=(positions.getX(i)+screenWidth/2)/screenWidth;
    uvs[i*2+1]=(positions.getY(i)+screenHeight/2)/screenHeight;
  }
  screen.setAttribute('uv',new THREE.BufferAttribute(uvs,2));
  // Unlit screens preserve the actual colors of the captured sites.
  const screenA=new THREE.MeshBasicMaterial({color:'#ffffff',toneMapped:false});
  const screenB=new THREE.MeshBasicMaterial({color:'#ffffff',toneMapped:false,transparent:true,opacity:0,depthWrite:false});
  add(screen,screenA,[0,0,.202]).renderOrder=3;
  add(screen,screenB,[0,0,.203]).renderOrder=4;
  const highlight=new THREE.ShaderMaterial({
    uniforms:{uSweep:{value:-.2},uOpacity:{value:0}},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false,
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader:'varying vec2 vUv;uniform float uSweep;uniform float uOpacity;void main(){float band=1.0-smoothstep(0.0,.14,abs(vUv.x-uSweep));float fade=smoothstep(0.0,.16,vUv.y)*(1.0-smoothstep(.84,1.0,vUv.y));gl_FragColor=vec4(.86,.94,1.0,band*fade*uOpacity);}',
  });
  add(screen,highlight,[0,0,.204]).renderOrder=5;
  add(slab(.5,.048,.022,.024,.002),physical({color:'#05080c',roughness:.38,clearcoat:.55}),[0,3.24,.19]);
  add(slab(3.13,6.52,.42,.032),physical({color:'#858d97',metalness:.08,roughness:.7,clearcoat:.16,clearcoatRoughness:.54,envMapIntensity:.72}),[0,0,-.171]);
  add(slab(1.02,1.48,.28,.04,.024),physical({color:'#747d88',metalness:.45,roughness:.3,clearcoat:.6,envMapIntensity:1.15}),[-.98,2.3,-.215]);
  for(const y of [2.58,2.06]){
    add(new THREE.CylinderGeometry(.245,.245,.082,32),physical({color:'#59626d',metalness:.82,roughness:.18,clearcoat:.75}),[-.99,y,-.265],[Math.PI/2,0,0]);
    add(new THREE.CylinderGeometry(.174,.174,.025,32),physical({color:'#05090f',metalness:.08,roughness:.06,clearcoat:1,reflectivity:.9}),[-.99,y,-.314],[Math.PI/2,0,0]);
  }
  add(new THREE.CylinderGeometry(.077,.077,.058,32),physical({color:'#f1f1e8',emissive:'#fff4c4',emissiveIntensity:.24,roughness:.28,clearcoat:.5}),[-.64,2.32,-.271],[Math.PI/2,0,0]);
  const metal=physical({color:'#727c87',metalness:.86,roughness:.22,clearcoat:.35});
  add(new THREE.CapsuleGeometry(.045,.58,8,20),metal,[-1.665,1.26,0]);
  add(new THREE.CapsuleGeometry(.04,.25,8,20),metal,[-1.665,2.12,0]);
  add(new THREE.CapsuleGeometry(.045,.7,8,20),metal,[1.665,1.44,0]);
  add(new THREE.BoxGeometry(.62,.062,.16),physical({color:'#05080c',roughness:.5}),[0,-3.35,0]);
  add(new THREE.BoxGeometry(.45,.026,.105),physical({color:'#010204',roughness:.88}),[0,-3.378,0]);
  const dark=physical({color:'#06090d',roughness:.78});
  for(const x of [-1.05,-.86,-.67,.67,.86,1.05])add(new THREE.CylinderGeometry(.034,.034,.11,18),dark,[x,-3.355,0]);
  for(const x of [-.42,.42])add(new THREE.CylinderGeometry(.021,.021,.11,16),dark,[x,-3.358,0]);
  return {group,screenA,screenB,highlight};
}
