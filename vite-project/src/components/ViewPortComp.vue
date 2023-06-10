<template>
  <div id="canvas"></div>
</template>

<script>
// import {
//   Scene,
//   PerspectiveCamera,
//   WebGLRenderer,
//   Clock,
//   ACESFilmicToneMapping,
//   sRGBEncoding,
//   HemisphereLight,
//   DirectionalLight,
//   AmbientLight,
//   Box3,
//   Vector3
// } from 'three'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// export default {
//   name: 'ViewPortComp',
//   data() {
//     return {}
//   },
//   methods: {
//     easeInOutBack(x) {
//       const c1 = 1.70158
//       const c2 = c1 * 1.525

//       return x < 0.5
//         ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
//         : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
//     },
//     specialAnimation(t) {
//       const scaleFactor = 0.1
//       this.model.scale.set(
//         1 + scaleFactor * Math.sin(Math.PI * t),
//         1,
//         1 + scaleFactor * Math.sin(Math.PI * t)
//       )
//     },
//     lerp(a, b, t) {
//       return a + (b - a) * t
//     },
//     init() {
//       this.width = this.$el.offsetWidth
//       this.height = this.$el.offsetHeight
//       // Clock
//       this.clock = new Clock()
//       // Renderer
//       this.renderer = new WebGLRenderer({ antialias: true, alpha: true })
//       this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//       this.renderer.setSize(this.width, this.height)
//       this.renderer.toneMapping = ACESFilmicToneMapping
//       this.renderer.outputEncoding = sRGBEncoding
//       this.$el.appendChild(this.renderer.domElement)
//       // Scene
//       this.scene = new Scene()
//       // Camera
//       this.camera = new PerspectiveCamera(75, this.width / this.height, 1, 1000)
//       // Light
//       this.hemiLight = new HemisphereLight(0xffffff, 0x444444, 0.6)
//       this.hemiLight.position.set(0, 3, 6)
//       // this.scene.add(this.hemiLight)
//       this.dirLight = new DirectionalLight(0xffffff, 1)
//       this.dirLight.position.set(200, 200, 500)
//       this.dirLight.castShadow = true
//       this.dirLight.shadow.camera.top = 180
//       this.dirLight.shadow.camera.bottom = -100
//       this.dirLight.shadow.camera.left = -120
//       this.dirLight.shadow.camera.right = 120
//       this.scene.add(this.dirLight)
//       this.scene.add(new AmbientLight(0x404040, 0.5))
//       // GLFT
//       this.loader = new GLTFLoader()
//       this.loader.load('/alien_shoe2.glb', (gltf) => {
//         this.model = gltf.scene
//         this.scene.add(this.model)
//         const shoeSize = new Vector3(0.3138543045691101, 0.1380571369992008, 0.11502264321959318)
//         const aspectRatio = this.width / this.height
//         const maxDimension = Math.max(shoeSize.x, shoeSize.y, shoeSize.z)
//         // Determine which field of view (horizontal or vertical) should be used for the calculation
//         const verticalFov = (this.camera.fov * Math.PI) / 180
//         const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspectRatio)
//         // Calculate the distances needed for both horizontal and vertical fields of view
//         const verticalDistance = maxDimension / (2 * Math.tan(verticalFov / 2))
//         const horizontalDistance = maxDimension / (2 * Math.tan(horizontalFov / 2))
//         // Choose the larger distance to fit the object in the view
//         const distance = Math.max(verticalDistance, horizontalDistance)
//         const paddingFactor = 1.2 // Adjust this value to control the amount of padding around the object
//         const paddedDistance = distance * paddingFactor
//         // Set the camera's position
//         const box = new Box3().setFromObject(this.model)
//         const boxCenter = box.getCenter(new Vector3())
//         this.camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + paddedDistance)
//         // Set the camera to look at the center of the bounding box
//         this.camera.lookAt(boxCenter)
//         this.camera.near = paddedDistance / 10
//         this.camera.far = paddedDistance * 10
//         this.camera.updateProjectionMatrix()
//       })
//       this.flag = true
//       // Animation
//       const loop = () => {
//         requestAnimationFrame(loop)
//         if (this.model == null) return

//         let elapsedTime = this.clock.getElapsedTime()
//         const initialHeight = 0.02
//         if (elapsedTime < 3) {
//           // Load Animation
//           this.model.rotation.y = -this.easeInOutBack(elapsedTime / 3) * (Math.PI * 2.05)
//           // Make the shoe start from a higher position
//           this.model.position.y = initialHeight * this.easeInOutBack(elapsedTime / 3)
//         } else {
//           // Special Animation every 15 seconds
//           if (Math.floor(elapsedTime / 15) !== Math.floor((elapsedTime - 1) / 15)) {
//             const specialAnimationTime = elapsedTime % 15
//             this.specialAnimation(specialAnimationTime)
//           }
//           // Idle Animation
//           if (this.flag == true) {
//             this.flag = false
//             this.idleElapsed = elapsedTime
//             this.initialZRotation = null // Reset initial z-axis rotation
//           }
//           const timeSinceIdle = elapsedTime - this.idleElapsed
//           if (timeSinceIdle <= 3) {
//             this.model.rotation.x =
//               this.easeInOutBack((elapsedTime % this.idleElapsed) / 3) * (Math.PI / 12)
//             this.model.rotation.z = (Math.cos(elapsedTime - this.idleElapsed) - 1) * (Math.PI / 22)
//             this.zRot = this.model.rotation.z
//           } else {
//             // Save the initial z-axis rotation at the end of the first 3 seconds of idle animation
//             if (this.initialZRotation === null) {
//               this.initialZRotation = this.model.rotation.z
//             }
//             // Add small up and down rotation on z-axis after the first 3 seconds of idle animation
//             const zRotationAmplitude = 0.03 // Adjust this value to change the amplitude of z-axis rotation
//             const targetZRotation =
//               this.initialZRotation +
//               zRotationAmplitude * Math.sin(((timeSinceIdle - 3) * Math.PI) / 2)
//             this.model.rotation.z = this.lerp(this.model.rotation.z, targetZRotation, 0.1)
//           }
//           this.model.position.y = initialHeight + (Math.sin(timeSinceIdle) * Math.PI) / 80
//         }
//         this.renderer.render(this.scene, this.camera)
//       }
//       loop()
//     },
//     onWindowResize() {
//       this.width = this.$el.offsetWidth
//       this.height = this.$el.offsetHeight

//       this.camera.aspect = this.width / this.height
//       this.camera.updateProjectionMatrix()

//       this.renderer.setSize(this.width, this.height)

//       // Update shoe size
//       const shoeSize = new Vector3(0.3138543045691101, 0.1380571369992008, 0.11502264321959318)
//       const aspectRatio = this.width / this.height
//       const maxDimension = Math.max(shoeSize.x, shoeSize.y, shoeSize.z)
//       // Determine which field of view (horizontal or vertical) should be used for the calculation
//       const verticalFov = (this.camera.fov * Math.PI) / 180
//       const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspectRatio)
//       // Calculate the distances needed for both horizontal and vertical fields of view
//       const verticalDistance = maxDimension / (2 * Math.tan(verticalFov / 2))
//       const horizontalDistance = maxDimension / (2 * Math.tan(horizontalFov / 2))
//       // Choose the larger distance to fit the object in the view
//       const distance = Math.max(verticalDistance, horizontalDistance)
//       const paddingFactor = 1.2 // Adjust this value to control the amount of padding around the object
//       const paddedDistance = distance * paddingFactor
//       // Set the camera's position
//       const box = new Box3().setFromObject(this.model)
//       const boxCenter = box.getCenter(new Vector3())
//       this.camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + paddedDistance)
//       // Set the camera to look at the center of the bounding box
//       this.camera.lookAt(boxCenter)
//       this.camera.near = paddedDistance / 10
//       this.camera.far = paddedDistance * 10
//       this.camera.updateProjectionMatrix()
//     }
//   },
//   mounted() {
//     this.init()
//     window.addEventListener('resize', this.onWindowResize, false)
//   },
//   beforeUnmount() {
//     window.removeEventListener('resize', this.onWindowResize)
//   }
// }
</script>

<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
