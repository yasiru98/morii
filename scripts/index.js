import * as THREE from './threejs/three.module.js';
import {
  OrbitControls
} from './threejs/OrbitControls.js'

import {
  GLTFLoader
} from './threejs/postprocessing/GLTFLoader.js';
import {
  ShaderPass
} from './threejs/postprocessing/ShaderPass.js';
import {
  RenderPass
} from './threejs/postprocessing/RenderPass.js';
import {
  EffectComposer
} from './threejs/postprocessing/EffectComposer.js';
import {
  UnrealBloomPass
} from './threejs/postprocessing/UnrealBloomPass.js';


/* Create globals*/
var raycaster, mouse, composer;
var memoriis = [];

/* create the scene and camera */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000);
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
document.body.appendChild(renderer.domElement);
renderer.domElement.addEventListener('click', onClick, false);



raycaster = new THREE.Raycaster();
 mouse = new THREE.Vector2();
/* CAMERA CONTROLS */
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = .3;
controls.enableDamping = true;
controls.dampingFactor = .01;
camera.position.set(0, 20, 300);


/* LIGHTS */

// const light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
const light = new THREE.PointLight( 0x404040, 5, 500 );
light.position.set( 0, 0, 0 );
scene.add(light);

var camLight = new THREE.PointLight(0xffffff);
camLight.position.set(1, 1, 2);
camera.add(camLight);

/*CREATE GEOMETRY */

const parent = new THREE.Group();
scene.add(parent);
parent.position.set(0, 0, 0);

//sphere geometry
const geometryOne = new THREE.SphereGeometry(200, 32, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0x000000,
  wireframe: true,
  visible: false
});
const sphere = new THREE.Mesh(geometryOne, material);
sphere.transparent = true;
scene.add(sphere);


sphere.geometry.computeBoundingSphere();
sphere.geometry.computeBoundingBox();
var minX, maxX, minY, maxY, minZ, maxZ;
console.log(sphere.geometry.boundingBox)
console.log(sphere.geometry.boundingSphere)

minX = sphere.geometry.boundingBox.min.x + 80;
maxX = sphere.geometry.boundingBox.max.x - 80;
minY = sphere.geometry.boundingBox.min.y + 80;
maxY = sphere.geometry.boundingBox.max.y - 80;
minZ = sphere.geometry.boundingBox.min.z + 80;
maxZ = sphere.geometry.boundingBox.max.z - 80;

//Ico Geometry
var geometry = new THREE.IcosahedronGeometry(10, 5);
geometry.computeBoundingBox();
// Ico material
var blueMat = new THREE.MeshPhongMaterial({
  color: new THREE.Color("rgb(26,35,213)"),
  emissive: new THREE.Color("rgb(55,64,128)"),
  specular: new THREE.Color("rgb(255,155,255)"),
  shininess: 5,
  transparent: 1,
  flatShading: true,
  opacity: 1
});

//Ico geometry
var blueMaterial = new THREE.ShaderMaterial({
  flatShading: true,
  uniforms: {
    color1: {
      value: new THREE.Color("blue")
    },
    color2: {
      value: new THREE.Color("purple")
    },
    bboxMin: {
      value: geometry.boundingBox.min
    },
    bboxMax: {
      value: geometry.boundingBox.max
    }
  },
  vertexShader: `
      uniform vec3 bboxMin;
      uniform vec3 bboxMax;
    
      varying vec2 vUv;
  
      void main() {
        vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
  fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
    
      varying vec2 vUv;
      
      void main() {
        
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
});


for (let i = 0; i < 25; i++) {

  var newMaterial = new THREE.MeshNormalMaterial({
    flatShading: true
  });
  var Ico = new THREE.Mesh(geometry, newMaterial);
  Ico.rotation.z = 0.5;
  scene.add(Ico);
  parent.add(Ico);
  memoriis.push(Ico);
  Ico.position.set(getMinMax(minX, maxX), getMinMax(minY, maxY), getMinMax(minZ, maxZ));


  //draw lines
  var lineMat = new THREE.LineBasicMaterial({
    color: 0x000000,
    linewidth: 30
  });
  const lineGeometry = new THREE.Geometry();
  lineGeometry.vertices.push(parent.position, memoriis[i].position);
  var line = new THREE.Line(lineGeometry, lineMat);
  scene.add(line)

}

/*Bloom Effects */
const renderScene = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1, .4, 0);


composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bloomPass );


/* Mouse hover*/
function onClick() {

  // event.preventDefault();

  // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // raycaster.setFromCamera(mouse, camera);

  // var intersects = raycaster.intersectObject(scene, true);

  // if (intersects.length > 0) {

  //     var object = intersects.object;

  //     object.material.color.set(Math.random() * 0xffffff);

  // }


}



function onWindowResize() {

  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );
  composer.setSize( width, height );

}
window.addEventListener( 'resize', onWindowResize );

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  //do animations here

  composer.render();

  //render animations
  //renderer.render(scene, camera);
}
animate();

function getMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}