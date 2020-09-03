<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a <b><i>Quote</i></b> to delete it
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGridVue from './components/QuoteGrid.vue'
import NewQuoteVue from './components/NewQuote.vue';
import HeaderVue from './components/Header.vue'
export default {
  data() {
    return {
      quotes: ['Some dummy quotes'],
      maxQuotes: 10,
    }
  },
  methods: {
    newQuote(quote) {
      if(this.quotes.length >= 10) {
        return alert('Please delete some quotes!!!')
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1)
    }
  },
  components: {
    appQuoteGrid: QuoteGridVue,
    appNewQuote: NewQuoteVue,
    appHeader: HeaderVue
  }
}
</script>

<style lang="scss">

</style>
