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
  },
  actions: {
    INIT({ state }, { width, height, el }) {
      return new Promise((resolve) => {
        state.width = width;
        state.height = height;

        // Clock
        state.clock = new Clock();

        // Renderer
        state.renderer = new WebGLRenderer({ antialias: true/*, alpha: true */});
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
        state.hemiLight.position.set(100, 200, 100);
        state.scene.add(state.hemiLight);
        
        state.dirLight = new DirectionalLight(0xffffff, 0.8);
        state.dirLight.position.set(400, 200, -200);
        state.dirLight.castShadow = true;
        state.dirLight.shadow.camera.top = 180;
        state.dirLight.shadow.camera.bottom = -100;
        state.dirLight.shadow.camera.left = -120;
        state.dirLight.shadow.camera.right = 120;
        state.scene.add(state.dirLight);

        state.scene.add(new AmbientLight(0x404040, 0.5));

        // Calculate shoe size
        state.shoe_size = 100;
        state.camera_offset = 0;

        // GLFT
        state.loader = new GLTFLoader();
        state.loader.load(
          "/shoe.glb",
          (gltf) => {
            state.model = gltf.scene;
            state.scene.add(state.model);
            
            const box = new Box3().setFromObject(state.model);
            const boxCenter = box.getCenter(new Vector3());

            const boxSize = box.getSize(new Vector3());
            const maxDimension = Math.max(boxSize.x, boxSize.y, boxSize.z);
            const scaleFactor = 2 / maxDimension;
            state.model.scale.set(scaleFactor, scaleFactor, scaleFactor);

            const boxSizeAfterScaling = boxSize.multiplyScalar(scaleFactor);
            const distance = boxSizeAfterScaling.y / 2 / Math.tan((state.camera.fov * Math.PI / 180) / 2);

            // Update the camera's position to fit the state.model within the viewport
            const cameraOffset = Math.max(boxSizeAfterScaling.x, boxSizeAfterScaling.y, boxSizeAfterScaling.z);
            // state.camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + cameraOffset);
            state.camera.position.set(0,0, 2);

            // Set the camera to look at the center of the bounding box
            state.camera.lookAt(boxCenter);
            console.log(state.camera.position);

            state.camera.near = distance / 10;
            state.camera.far = distance * 10;
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
      window.requestAnimationFrame(() => {
        if (state.model != null) {
          let elapsedTime = state.clock.getElapsedTime();

          // if (elapsedTime < 3) {
          //   // Load Animation
          //   state.model.rotation.y =
          //     -easeInOutBack(elapsedTime / 3) * (Math.PI * 2.1);
          // } else {
          //   // Idle Animation
          //   if (state.flag == true) {
          //     state.flag = false;
          //     state.idleElapsed = elapsedTime;
          //   }
          //   if (elapsedTime - state.idleElapsed <= 3) {
          //     state.model.rotation.z =
          //       easeInOutBack((elapsedTime % state.idleElapsed) / 3) *
          //       (-Math.PI / 7);
          //   }
          //   state.model.position.y =
          //     Math.sin(elapsedTime - state.idleElapsed) * Math.PI;
          //   state.model.rotation.x =
          //     (Math.cos(elapsedTime - state.idleElapsed) - 1) * (Math.PI / 22);
          // }
          state.renderer.render(state.scene, state.camera);
        }
        dispatch("ANIMATE");
      });
    },
  },
});
