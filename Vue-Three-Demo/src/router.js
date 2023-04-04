import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import YourSole from "./views/YourSole.vue";
import FAQ from "./views/FAQ.vue";
import About from "./views/About.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/yoursole',
      name: 'yoursole',
      component: YourSole,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
