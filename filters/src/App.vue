<template>
  <div class="container">
    <h1>Filters & Mixins</h1>
    <p>In this module we have created <b><i>filter and mixins</i></b>. Where I have created two filter one is for uppercase and another is for lowecase.</p>
    <p>Another thing we have in this module is mixins. Mixins is generally use to create a common code which we can use at multiple places by importing where we want to use it.</p>
    <p><b><i>Mixins</i></b> are generally created locally for the component on which we want to use it. Meaning create a mixin and inject it where you want to use it.</p>
    <p><b><i><u>Note: </u></i></b>Here we will add more items to array, but it will add only in the firt component but not in all the other component. Because mixins will replicate the same code everywhere behind the scene. So in every component we will have the same array which we can update independently.</p>
    <hr>
    <div class="col-xs-12 text-center">
      <h3>Filters:</h3>
      <p> <b>{{text | toUpperCase | to-loweCase}}</b> : here we have used both the filter lower and uppercase </p>
    </div>
    <div class="col-xs-12 text-center">
      <hr>
      <h3>Filters on Array:</h3>
      <input type="text" v-model="filterText">
      <button class="btn btn-primary" @click="fruits.push('Berris')">Add More Fruits</button>
      <ul class="text-left">
        <li v-for="(fruit, i) in filteredFruit" :key="i">{{fruit}}</li>
      </ul>
    </div>
    <div class="col-xs-12">
      <app-list></app-list>
    </div>
    <div class="col-xs-12">
      <p>Here I have created a mixin which have an array and filter, where we display list and can search items.We are using the same filter and array to display inside filter and mixin componenets</p>
      <p>Here we have greate <b><i>GLobal Mixins</i></b> too, which will be called in every component load. So be aware before created global mixins. Think twice before creating global mixins as its going to effect the whole system.</p>
    </div>
  </div>
</template>

<script>
import ListVue from './List.vue';
import { fruitMixin } from './fruitMixins';
export default {
  data() {
    return {
      text: 'Hello Vikash',
    }
  },
  filters: {  //Local filter, this filter will be available only for this components
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: ListVue
  },
  mixins: [fruitMixin],
  created() {
    console.log('Created life cycle from aap component!');
  },

}
</script>

<style lang="scss">

</style>
