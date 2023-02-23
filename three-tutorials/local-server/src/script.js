import * as THREE from 'three'

// Scene
const scene = new THREE.Scene();
// Create mesh = geometry + material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Camera
const sizes = {
    width: 800,
    height: 600
};

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);
// Renderer
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene, camera);
}
animate();