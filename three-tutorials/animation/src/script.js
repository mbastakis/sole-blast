import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animations
// Simple Time
// let time = Date.now();

// Threejs clock
// const clock = new THREE.Clock();

// External gsap library
// gsap.to(mesh.position, { x: 2, duration: 2, delay: 2 });
// gsap.to(mesh.position, { x: 0, duration: 2, delay: 4 });

const tick = () => {
    // Simple Time 
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    
    // Threejs clock
    // const elapsedTime = clock.getElapsedTime();
    // mesh.position.x = Math.cos(elapsedTime);
    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.rotation.y = elapsedTime * Math.PI / 2;
    // mesh.rotation.z = elapsedTime;
    
    
    

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick);
}

tick();