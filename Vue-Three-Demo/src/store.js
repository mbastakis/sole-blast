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
    INIT({ state, commit }, { width, height, el }) {
      return new Promise((resolve) => {
        state.width = width;
        state.height = height;

        // Clock
        state.clock = new Clock();

        // Renderer
        state.renderer = new WebGLRenderer({ antialias: true, alpha: true});
        state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        state.renderer.setSize(state.width, state.height);
        state.renderer.toneMapping = ACESFilmicToneMapping;
        // state.renderer.toneMappingExposure = 1;
        state.renderer.outputEncoding = sRGBEncoding;
        el.appendChild(state.renderer.domElement);
        
        // Scene
        state.scene = new Scene();

        // Camera
        state.camera = new PerspectiveCamera(
          45,
          state.width / state.height,
          1,
          100
        );
        state.camera.position.x = 40;

        // Light
        state.hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.2);
        state.hemiLight.position.set(0, 43, 0);
        state.scene.add(state.hemiLight);

        state.dirLight = new DirectionalLight(0xffffff, 0.8);
        state.dirLight.color.setHSL(0.1, 1, 0.95);
        state.dirLight.position.set(40, 1, 0);
        state.scene.add(state.dirLight);

        state.scene.add( new AmbientLight( 0x404040 ) );

        // Calculate shoe size
        state.shoe_size = 100;
        state.camera_offset = 0;

        // GLFT
        state.loader = new GLTFLoader();
        state.loader.load(
          "/shoe.glb",
          (gltf) => {
            state.model = gltf.scene;

            let currentWidth = window.innerWidth;
            if (currentWidth >= 1281) {
              state.shoe_size = 110;
              state.camera_offset = 3.5;
            }
            else if (currentWidth >= 961) {
              state.shoe_size = 100;
              state.camera_offset = 2.9;
            }
            else if (currentWidth >= 641) {
              state.shoe_size = 83;
              state.camera_offset = 2.2;
            }
            else if (currentWidth >= 481) {
              state.shoe_size = 65;
              state.camera_offset = 2;
            }
            else if (currentWidth >= 320) {
              state.shoe_size = 55;
              state.camera_offset = 1.7;
            }

            gltf.scene.scale.set(
              state.shoe_size,
              state.shoe_size,
              state.shoe_size
            );
            state.scene.add(state.model);
            state.camera.lookAt(
              state.model.position.x,
              state.model.position.y,
              state.model.position.z - state.camera_offset
            );
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
      function easeInOutBack(x){
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        
        return x < 0.5
          ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
          : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
      }
      window.requestAnimationFrame(() => {
        if (state.model != null) {
          let elapsedTime = state.clock.getElapsedTime();
          
          if ( elapsedTime < 3) {
            // Load Animation
            state.model.rotation.y = -easeInOutBack(elapsedTime / 3) *  (Math.PI * 2.1);
          }
          else {
            // Idle Animation
            if (state.flag == true) {
              state.flag = false;
              state.idleElapsed = elapsedTime;
            }
            if (elapsedTime - state.idleElapsed <= 3) {
              state.model.rotation.z = easeInOutBack(elapsedTime % state.idleElapsed / 3) * (-Math.PI / 7);
            }
            state.model.position.y = Math.sin(elapsedTime - state.idleElapsed) * (Math.PI );
            state.model.rotation.x = (Math.cos(elapsedTime - state.idleElapsed) - 1) * (Math.PI / 22);
          }
          state.renderer.render(state.scene, state.camera);
        }
        dispatch("ANIMATE");
      });
    },
  },
});
