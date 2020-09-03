import Vue from 'vue'
import App from './App.vue'

// Global filters and this filter will be available throught the app
Vue.filter('to-loweCase', (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Created life cycle from GLobal Mixins!!')
  },
});
new Vue({
  el: '#app',
  render: h => h(App)
})
