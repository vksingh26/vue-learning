<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>Here we are working on component communication</p>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div>
      <div>
        <!-- here we are passing `name` as props and will receive the same in app-user-details component -->
        <!-- this is parent, receiving event from child -->
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div>
        <app-user-edit
          :userAge="age"
          @updateAge="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>
<script>

import UserDetailsVue from './UserDetails.vue';
import UserEditVue from './UserEdit.vue';
export default {
  data: function() {
    // here this name will be same as the name what we pass in userdetail component above.
    return {
      name: 'Vikash',
      age: 28
    }
  },
  methods: {
    changeName() {
      this.name = 'Vikash Singh'
    },
    resetName() {
      this.name = 'Vikash';
    }
  },
  components: {
    appUserDetail: UserDetailsVue,
    appUserEdit: UserEditVue
  }
}
</script>
<style lang="scss" scoped>

</style>
