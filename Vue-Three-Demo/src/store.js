import Vue from "vue";
import Vuex from "vuex";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  GLTFLoader,
  Clock,
  ACESFilmicToneMapping,
  sRGBEncoding,
  HemisphereLight,
  DirectionalLight,
  AmbientLight,
  Box3,
  Vector3,
  HemisphereLightHelper,
  DirectionalLightHelper,
} from "three-full";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 0,
    height: 0,
    shoe_size: 0,
    camera: null,
    scene: null,
    renderer: null,
    model: null,
    clock: null,
    controls: null,
    effectComposer: null,
    hemiLight: null,
    dirLight: null,
    flag: true,
    zRot: 0,
  },
  actions: {
    INIT({ state }, { width, height, el }) {
      return new Promise((resolve) => {
        state.width = width;
        state.height = height;

        // Clock
        state.clock = new Clock();

        // Renderer
        state.renderer = new WebGLRenderer({ antialias: true, alpha: true });
        state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        state.renderer.setSize(state.width, state.height);
        state.renderer.toneMapping = ACESFilmicToneMapping;
        state.renderer.outputEncoding = sRGBEncoding;
        el.appendChild(state.renderer.domElement);

        // Scene
        state.scene = new Scene();

        // Camera
        state.camera = new PerspectiveCamera(
          75,
          state.width / state.height,
          1,
          1000
        );

        // Light
        state.hemiLight = new HemisphereLight(0xffffff, 0x444444, 0.6);
        state.hemiLight.position.set(0, 3, 6);
        state.scene.add(state.hemiLight);
        
        state.dirLight = new DirectionalLight(0xffffff, 0.8);
        state.dirLight.position.set(200, 200, 500);
        state.dirLight.castShadow = true;
        state.dirLight.shadow.camera.top = 180;
        state.dirLight.shadow.camera.bottom = -100;
        state.dirLight.shadow.camera.left = -120;
        state.dirLight.shadow.camera.right = 120;
        state.scene.add(state.dirLight);

        state.scene.add(new AmbientLight(0x404040, 0.5));


        // GLFT
        state.loader = new GLTFLoader();
        state.loader.load(
          "/shoe.glb",
          (gltf) => {
            state.model = gltf.scene;
            state.scene.add(state.model);
        
            const shoeSize = new Vector3(0.3138543045691101, 0.1380571369992008, 0.11502264321959318);
            const aspectRatio = state.width / state.height;
        
            const maxDimension = Math.max(shoeSize.x, shoeSize.y, shoeSize.z);
        
            // Determine which field of view (horizontal or vertical) should be used for the calculation
            const verticalFov = state.camera.fov * Math.PI / 180;
            const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspectRatio);
        
            // Calculate the distances needed for both horizontal and vertical fields of view
            const verticalDistance = maxDimension / (2 * Math.tan(verticalFov / 2));
            const horizontalDistance = maxDimension / (2 * Math.tan(horizontalFov / 2));
        
            // Choose the larger distance to fit the object in the view
            const distance = Math.max(verticalDistance, horizontalDistance);
            const paddingFactor = 1.2; // Adjust this value to control the amount of padding around the object
            const paddedDistance = distance * paddingFactor;
        
            // Set the camera's position
            const box = new Box3().setFromObject(state.model);
            const boxCenter = box.getCenter(new Vector3());
            state.camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + paddedDistance);
        
            // Set the camera to look at the center of the bounding box
            state.camera.lookAt(boxCenter);
        
            state.camera.near = paddedDistance / 10;
            state.camera.far = paddedDistance * 10;
            state.camera.updateProjectionMatrix();
          },
          undefined,
          (error) => {
            console.error(error);
          }
        );
        
        
        

        resolve();
      });
    },
    ANIMATE({ state, dispatch }) {
      function easeInOutBack(x) {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
    
        return x < 0.5
          ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
          : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
      }
    
      function specialAnimation(t) {
        const scaleFactor = 0.1;
        state.model.scale.set(1 + scaleFactor * Math.sin(Math.PI * t), 1, 1 + scaleFactor * Math.sin(Math.PI * t));
      }
    
      window.requestAnimationFrame(() => {
        if (state.model != null) {
          let elapsedTime = state.clock.getElapsedTime();
          const initialHeight = 0.02;
    
          if (elapsedTime < 3) {
            // Load Animation
            state.model.rotation.y = -easeInOutBack(elapsedTime / 3) * (Math.PI * 2.05);
    
            // Make the shoe start from a higher position
            state.model.position.y = initialHeight * (easeInOutBack(elapsedTime / 3));
          } else {
            // Special Animation every 15 seconds
            if (Math.floor(elapsedTime / 15) !== Math.floor((elapsedTime - 1) / 15)) {
              const specialAnimationTime = elapsedTime % 15;
              specialAnimation(specialAnimationTime);
            }
            // Idle Animation
            if (state.flag == true) {
              state.flag = false;
              state.idleElapsed = elapsedTime;
            }
            if (elapsedTime - state.idleElapsed <= 3) {
              state.model.rotation.x =
                easeInOutBack((elapsedTime % state.idleElapsed) / 3) *
                (Math.PI / 12);
              state.model.rotation.z =
                (Math.cos(elapsedTime - state.idleElapsed) - 1) * (Math.PI / 22);
              state.zRot = state.model.rotation.z;
            }
            state.model.position.y = initialHeight + Math.sin(elapsedTime - state.idleElapsed) * Math.PI / 80;
          }
          state.renderer.render(state.scene, state.camera);
        }
        dispatch("ANIMATE");
      });
    },
  },
});
