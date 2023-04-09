import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Gallery from './views/Gallery.vue';
import YourSole from './views/YourSole.vue';
import FAQ from './views/FAQ.vue';
import About from './views/About.vue';

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
