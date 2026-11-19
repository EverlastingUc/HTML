import * as THREE from 'three';
const host=document.querySelector('#three-stage');
if(host){
 try{
  const scene=new THREE.Scene();scene.background=new THREE.Color(0x0a101a);
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(4.8,3.7,6.8);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(host.clientWidth,host.clientHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;host.replaceChildren(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xb9d5ff,1.7));const key=new THREE.DirectionalLight(0x8ef5d7,3);key.position.set(4,6,5);scene.add(key);
  const group=new THREE.Group();scene.add(group);
  const layers=[{y:1.1,color:0x74e4c2,label:'HTML'},{y:0,color:0x8fa8ff,label:'DOM'},{y:-1.1,color:0xffbd79,label:'CONTENT'}];
  for(const layer of layers){const geo=new THREE.BoxGeometry(2.8,.13,1.9);const mat=new THREE.MeshStandardMaterial({color:layer.color,metalness:.25,roughness:.35,transparent:true,opacity:.88});const mesh=new THREE.Mesh(geo,mat);mesh.position.y=layer.y;group.add(mesh);const edges=new THREE.LineSegments(new THREE.EdgesGeometry(geo),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.7}));edges.position.copy(mesh.position);group.add(edges);}
  const points=[];for(let i=0;i<26;i++){const a=i/26*Math.PI*2;points.push(new THREE.Vector3(Math.cos(a)*1.2,Math.sin(a)*.6,Math.sin(a)*.8));}
  const geometry=new THREE.BufferGeometry().setFromPoints(points);const orbit=new THREE.LineLoop(geometry,new THREE.LineBasicMaterial({color:0x9db6ff,transparent:true,opacity:.7}));group.add(orbit);
  let dragging=false,lastX=0,lastY=0,auto=true;
  renderer.domElement.addEventListener('pointerdown',e=>{dragging=true;auto=false;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!dragging)return;group.rotation.y+=(e.clientX-lastX)*.008;group.rotation.x+=(e.clientY-lastY)*.008;lastX=e.clientX;lastY=e.clientY;});
  renderer.domElement.addEventListener('pointerup',()=>{dragging=false;});
  renderer.domElement.addEventListener('wheel',e=>{camera.position.z=Math.max(4,Math.min(11,camera.position.z+e.deltaY*.008));},{passive:true});
  const resize=()=>{const w=host.clientWidth,h=host.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);};new ResizeObserver(resize).observe(host);
  window.resetHTMLScene=()=>{group.rotation.set(0,0,0);camera.position.set(4.8,3.7,6.8);auto=true;};
  const clock=new THREE.Clock();function animate(){requestAnimationFrame(animate);if(auto&&!dragging)group.rotation.y=clock.getElapsedTime()*.22;renderer.render(scene,camera);}animate();
 }catch(error){host.textContent='3D preview unavailable on this device. The lessons remain fully accessible.';console.error(error);}
}