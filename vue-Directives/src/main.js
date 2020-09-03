import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {   //this is global directive
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'Coral';
  }
})

Vue.directive('highlightByUser', {   //this is global directive
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
})

Vue.directive('highlightUsingArg', {   //this is global directive with binding
  bind(el, binding, vnode) {
    if(binding.arg === 'background') {  //here background is coming from html as args
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
    
  }
})

Vue.directive('highlightUsingModifier', {   //this is global directive with modifier
  bind(el, binding, vnode) {
    let delayed = 0;
    if(binding.modifiers['delayed']) {  //modifier is an object here so we can pass multiple using (dot) from html
      delayed = 3000;
    }

    setTimeout(() => {
      if(binding.arg === 'background') {  //here background is coming from html as args
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delayed)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
