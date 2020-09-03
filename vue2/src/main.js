import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

//global component registration
Vue.component('app-server', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
