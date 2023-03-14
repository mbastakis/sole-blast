import Vue from "vue";
import Vuex from "vuex";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  GLTFLoader,
  Clock,
  ACESFilmicToneMapping,
  sRGBEncoding,
  HemisphereLight,
  HemisphereLightHelper,
  DirectionalLight,
  DirectionalLightHelper,
  OrbitControls,
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
    clock: null,
    controls: null,
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
      state.renderer.toneMapping = ACESFilmicToneMapping;
			state.renderer.toneMappingExposure = 1;
			state.renderer.outputEncoding = sRGBEncoding;
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
      // LIGHTS

				const hemiLight = new HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set(25, 25, 0);
				state.scene.add( hemiLight );

				// const hemiLightHelper = new HemisphereLightHelper( hemiLight, 10 );
				// state.scene.add( hemiLightHelper );

				//

				const dirLight = new DirectionalLight( 0xffffff, 1 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set(30, 40, -45);
				dirLight.position.multiplyScalar( 30 );
				state.scene.add( dirLight );
				

      // const dirLightHelper = new DirectionalLightHelper( dirLight, 10 );
      // state.scene.add( dirLightHelper );
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
      // Controller
      // function render() {

			// 	state.renderer.render( state.scene, state.camera );

			// }
      // state.controls = new OrbitControls( state.camera, state.renderer.domElement );
      // state.controls.addEventListener( 'change', render ); // use if there is no animation loop
      // state.controls.minDistance = 20;
      // state.controls.maxDistance = 100;
      // state.controls.target.set( 0, 0, - 0.2 );
      // state.controls.update();
      // GLFT
      const loader = new GLTFLoader();
      loader.load(
        "/optimized_2.glb",
        gltf => {
          state.model = gltf.scene;
          state.model.position.set(-10, 5, 0);
          state.model.rotation.y = Math.PI / 7 ;

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
