import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
const url = 'https://vue-http-166a8.firebaseio.com/data.json';
//const url2 = ''https://vue-http-166a8.firebaseio.com';'
Vue.http.options.root = url;
// Vue.http.options.header = ''
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // if(request.method === 'POST') {
  //   request.method = 'PUT';
  // }
  // next(); //we can change response here inside next method
})
new Vue({
  el: '#app',
  render: h => h(App)
})
