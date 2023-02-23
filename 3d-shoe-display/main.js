import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.112.1/build/three.module.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GlitchPass } from 'https://cdn.jsdelivr.net/npm/three@0.112.1/examples/jsm/postprocessing/GlitchPass.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

// Add bloom
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
const glitchPass = new GlitchPass();
bloomPass.threshold = 10;
bloomPass.strength = 10;
bloomPass.radius = 10;
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);
// gives glitching effect
// composer.addPass( glitchPass );

let model;
loader.load('./poly.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);
  gltf.scene.scale.set(20, 20, 20); // Adjust the scale as needed
}, undefined, (error) => {
  console.error(error);
});

function animate() {
  requestAnimationFrame(animate);

  // Update the bloom effect
  composer.render();

//   renderer.render(scene, camera);
}
animate();

let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0,
};

renderer.domElement.addEventListener('mousedown', function(event) {
  isDragging = true;
});

renderer.domElement.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const deltaMove = {
      x: event.offsetX - previousMousePosition.x,
      y: event.offsetY - previousMousePosition.y
    };

    const deltaRotationQuaternion = new THREE.Quaternion()
      .setFromEuler(new THREE.Euler(
        toRadians(deltaMove.y * 1),
        toRadians(deltaMove.x * 1),
        0,
        'XYZ'
      ));

    model.quaternion.multiplyQuaternions(deltaRotationQuaternion, model.quaternion);
  }

  previousMousePosition = {
    x: event.offsetX,
    y: event.offsetY,
  };
});

renderer.domElement.addEventListener('mouseup', function(event) {
  isDragging = false;
});

function toRadians(angle) {
  return angle * (Math.PI / 180);
}
