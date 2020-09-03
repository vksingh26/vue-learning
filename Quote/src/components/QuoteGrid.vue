<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" v-bind:key="index" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
  <!-- here native property is required to delete the whole html from parent. -->
  </div>
</template>

<script>
import QuotesVue from './Quotes.vue'

export default {
    props: ['quotes'],
    components: {
      appQuote: QuotesVue
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index); //passing date from child to parent
      }
    },
}
</script>

<style scoped>

</style>
