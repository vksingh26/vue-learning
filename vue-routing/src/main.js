import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history', //here by-default the mode is hash, which will show # (hash) during routing in url after localhost
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
