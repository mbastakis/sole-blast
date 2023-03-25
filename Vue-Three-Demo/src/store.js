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
        state.renderer.toneMappingExposure = 1;
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
        state.camera.position.set(30, 40, -45);
        
        // Light
        state.hemiLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
        state.hemiLight.color.setHSL(0.6, 1, 0.6);
        state.hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        state.hemiLight.position.set(25, 25, 0);
        state.scene.add(state.hemiLight);

        state.dirLight = new DirectionalLight(0xffffff, 1);
        state.dirLight.color.setHSL(0.1, 1, 0.95);
        state.dirLight.position.set(30, 40, -45);
        state.dirLight.position.multiplyScalar(30);
        state.scene.add(state.dirLight);
        state.scene.add( new AmbientLight( 0x404040 ) );

        // Calculate shoe size
        let currentWidth = window.innerWidth;
        if (currentWidth <= 430) {
          state.shoe_size = 75;
        } else if (currentWidth <= 641) {
          state.shoe_size = 115;
        } else if (currentWidth <= 961) {
          state.shoe_size = 135;
        } else if (currentWidth >= 1281) {
          state.shoe_size = 175;
        }

        // GLFT
        state.loader = new GLTFLoader();
        state.loader.load(
          "/optimized_2.glb",
          (gltf) => {
            state.model = gltf.scene;
            state.model.position.set(-10, 5, 0);
            state.model.rotation.y = Math.PI / 7;

            gltf.scene.scale.set(
              state.shoe_size,
              state.shoe_size,
              state.shoe_size
            );
            state.scene.add(state.model);
            state.camera.lookAt(
              state.model.position.x,
              state.model.position.y,
              state.model.position.z
            );
            state.camera.position.x += 10;
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
      window.requestAnimationFrame(() => {
        if (state.model != null) {
          let elapsedTime = state.clock.getElapsedTime();
          state.model.position.y = Math.sin(elapsedTime) * Math.PI;
          state.model.position.x = Math.cos(elapsedTime);
          state.model.position.z = (Math.sin(elapsedTime) * Math.PI) / 4;
          state.renderer.render(state.scene, state.camera);
        }
        dispatch("ANIMATE");
      });
    },
  },
});
