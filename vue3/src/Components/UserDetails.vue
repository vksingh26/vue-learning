<template>
  <div>
    <h3>User Details will go here.</h3>
    <p>Many Details</p>
    <!-- always remember the myName we are using inside interpolation {{}} will be same as props `myName` -->
    <p>User Name: {{ myName }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <!-- below button having a function which is coming from user which is a parent to here which is a child. This is called callback way of communication -->
    <!-- we created the resetFn in parent and accessing it here and the name should be same inside the props what we pass from parent -->
    <button @click="resetFn">Reset From Parent</button>
  </div>
</template>
<script>
import { eventBus } from '../main';

export default {
  //props: ['myName'],
    //we can validate this props
  props: {
    myName: {
      type: String,
    },
    resetFn: Function,
    userAge: Number,
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = 'Vikash';
      this.$emit('nameWasReset', this.myName); //communication from child to parent, this is child
    },
  },
  created() { //this created lifecycle method will always be used outside methods
    console.log('create');
    eventBus.$on('updateAge', (data) => {
      this.userAge = data;
    });
  },

}
</script>
<style lang="scss" scoped>
  div {
    height: auto;
    color: #fff;
    padding: 20px;
    background-color: lightcoral;
  }
</style>
