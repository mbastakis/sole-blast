import Vue from 'vue'
import App from './App.vue'
import FloatingShoe from './components/FloatingShoe.vue';


const app = Vue.createApp(App);
app.component('FloatingShoe', FloatingShoe);
app.mount('#app');
