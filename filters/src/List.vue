<template>
  <div class="container">
    <h1>List using mixins</h1>
    <hr>
    <div class="col-xs-12 text-left">
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="(fruit, i) in filteredFruit" :key="i">{{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixins';
export default {
  mixins: [fruitMixin],
  created() {
    console.log('Created life cycle from list componenet');
  },
}
</script>

<style lang="scss">

</style>
