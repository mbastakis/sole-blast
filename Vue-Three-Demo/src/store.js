import Vue from "vue";
import Vuex from "vuex";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  GLTFLoader,
  Clock
} from "three-full";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 0,
    height: 0,
    shoe_size: 160,
    camera: null,
    scene: null,
    renderer: null,
    ambientLight: null,
    model: null,
    clock: null
  },
  mutations: {
    SET_VIEWPORT_SIZE(state, { width, height }) {
      state.width = width;
      state.height = height;
    },
    INITIALIZE_RENDERER(state, el) {
      state.renderer = new WebGLRenderer({ antialias: true, alpha: true });
      state.renderer.setPixelRatio(window.devicePixelRatio);
      state.renderer.setSize(state.width, state.height);
      el.appendChild(state.renderer.domElement);
    },
    INITIALIZE_CAMERA(state) {
      state.camera = new PerspectiveCamera(
        // 1. Field of View (degrees)
        45,
        // 2. Aspect ratio
        state.width / state.height
      );
      state.camera.position.z = 500;
    },
    INITIALIZE_SCENE(state) {
      // Scene
      state.scene = new Scene();
      // Light
      state.ambientLight = new AmbientLight(0xffffff, 1);
      state.ambientLight.position.set(-10, 15, 0);
      state.scene.add(state.ambientLight);
      // Calculate shoe size
      let currentWidth = window.innerWidth;
      if (currentWidth <= 430) {
        state.shoe_size = 80;
      } else if (currentWidth <= 641) {
        state.shoe_size = 120;
      } else if (currentWidth <= 961) {
        state.shoe_size = 140;
      } else if (currentWidth >= 1281) {
        state.shoe_size = 180;
      }
      // GLFT
      const loader = new GLTFLoader();
      loader.load(
        "/poly.glb",
        gltf => {
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

          state.renderer.render(state.scene, state.camera);
        },
        undefined,
        error => {
          console.error(error);
        }
      );

      // Fix camera
      state.camera.position.set(30, 40, -45);
      // Clock
      state.clock = new Clock();
    },
  },
  actions: {
    INIT({ /*state,*/ commit }, { width, height, el }) {
      return new Promise(resolve => {
        commit("SET_VIEWPORT_SIZE", { width, height });
        commit("INITIALIZE_RENDERER", el);
        commit("INITIALIZE_CAMERA");
        commit("INITIALIZE_SCENE");

        // Initial scene rendering
        // state.renderer.render(state.scene, state.camera);

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
    }
  }
});
