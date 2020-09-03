<template>
  <div>
    <h3>User Edit logic will go here</h3>
    <p>Edit age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>
<script>
import { eventBus } from '../main';

export default {
  props: ['userAge'],
  methods: {
    editAge() {
      this.userAge = 30;
      //this.$emit('updateAge', this.userAge);
      eventBus.$emit('updateAge', this.userAge);
    }
  },
}
</script>
// here style scoped means below styles will be avaiable only for this component.
<style scoped>
  div {
    width: auto;
    height: auto;
    color: #fff;
    padding: 20px;
    background-color: cornflowerblue;
  }
</style>
