//we can set axios request on each request level or we do create a global configuration
//In this session I have did the configuration on global level as well as on each request level
//check dashboard for request level (component levet)
// check signup for global level

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

// Global request configuration using axios, we can set headers and all

axios.defaults.baseURL = 'https://vue-http-166a8.firebaseio.com/'; //global request configuration
axios.defaults.headers.common['Authorization'] = 'vikash';
axios.defaults.headers.get['Accepts'] = 'application/json';

// Interceptors using axios
axios.interceptors.request.use(config => {
  console.log('Request Interceptors', config);
  return config; //this line is must otherwise interceptor won't work
});

axios.interceptors.response.use(res => {
  console.log('response interceptors', res);
  return res;
})

// if you dont want to execute or remove interceptor or on some condition you want to skip it then use:
axios.interceptors.request.eject();
axios.interceptors.response.eject();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
