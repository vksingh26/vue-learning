<template>
  <div id="app">
    <app-user></app-user>
    <hr>
    <button @click="selectedComponent = 'appQuote'">Quote</button>
    <button @click="selectedComponent = 'appAuthor'">Author</button>
    <button @click="selectedComponent = 'appNew'">New</button>
    <hr>
    <h1>Selected Component: {{selectedComponent}}</h1>
    <!-- we use keep alive to make our comp live otherwise on switching component will be destroyed -->
    <keep-alive>
      <component :is="selectedComponent">
        <h1 slot="title">The Quote!</h1>
        <h4 slot="content">A wonderful Quote!</h4>
      </component>
    </keep-alive>

    <!-- <app-quote>
      <h1 slot="title">The Quote!</h1>
      <h4 slot="content">A wonderful Quote!</h4>
    </app-quote> -->
  </div>
</template>

<script>
import UserVue from './Components/User.vue'
import QuoteVue from './Components/Slots_And_Dynamic_Components/Quote.vue'
import AuthorVue from './Components/Slots_And_Dynamic_Components/Author.vue'
import NewVue from './Components/Slots_And_Dynamic_Components/New.vue'

export default {
  data() {
    return {
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appUser: UserVue,
    appQuote: QuoteVue,
    appAuthor: AuthorVue,
    appNew: NewVue
  }
}
</script>

<style lang="scss">
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
