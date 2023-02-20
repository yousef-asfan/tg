import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene1 = new THREE.Scene();
const canvas1 = document.getElementById('c1');

let sizeWidth1 = canvas1.clientWidth;
let sizeHeight1 = canvas1.clientHeight;

const camera1 = new THREE.PerspectiveCamera(75, sizeWidth1 / sizeHeight1, 0.1, 1000)

const renderer1 = new THREE.WebGLRenderer({
  canvas: canvas1,
  antialias: true
});
renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer1.setSize(sizeWidth1 , sizeHeight1);
renderer1.setClearColor( 0x1b1b1b, 1);

camera1.position.set(6, 4, 0);
scene1.add(camera1);

const controls1 = new OrbitControls(camera1, canvas1);
controls1.target.set(0, 2.5, 0);
controls1.maxDistance = 12;
controls1.minDistance = 5;
controls1.enablePan = false;

const gridHelper1 = new THREE.GridHelper(10,10);
scene1.add(gridHelper1);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:0xff00ff})
);
scene1.add(cube1);

/**
 * 
 * 
 * 
 * 
 * 
 */

const scene2 = new THREE.Scene();
const canvas2 = document.getElementById('c2');

let sizeWidth2 = canvas2.clientWidth;
let sizeHeight2 = canvas2.clientHeight;

const camera2 = new THREE.PerspectiveCamera(75, sizeWidth2 / sizeHeight2, 0.1, 1000)

const renderer2 = new THREE.WebGLRenderer({
  canvas: canvas2,
  antialias: true
});
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer2.setSize(sizeWidth2 , sizeHeight2);
renderer2.setClearColor( 0x1b1b1b, 1);

camera2.position.set(6, 4, 0);
scene2.add(camera2);

const controls2 = new OrbitControls(camera2, canvas2);
controls2.target.set(0, 2.5, 0);
controls2.maxDistance = 12;
controls2.minDistance = 5;
controls2.enablePan = false;

const gridHelper2 = new THREE.GridHelper(10,10);
scene2.add(gridHelper2);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({color:0x0000ff})
);
scene2.add(cube2);

/**
 * 
 * 
 * 
 * 
 * 
 */

const tick = () => {
  controls1.update();
  renderer1.render(scene1, camera1);
  controls2.update();
  renderer2.render(scene2, camera2);
  window.requestAnimationFrame(tick);
}
tick();


/**
 * LICENSE CREDIT
 * 
 * ASFAN Internatioal Trading Company
 * 
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/AC171C_FA8593_E84854_D3464E.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/9F1A27_F1AF7F_CD5845_D08441.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 * "MatCaps" (https://github.com/nidorx/matcaps/blob/master/thumbnail/7877EE_D87FC5_75D9C7_1C78C0.jpg) Matcaps by nidorx github (https://github.com/nidorx)
 */