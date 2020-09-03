export const fruitMixin = {
  data() {
    return {
      fruits:['Mango', 'Orange', 'Banana', 'Papaya', 'Pineapple'],
      filterText: ''
    }
  },
  computed: {
    filteredFruit() {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText);
      })
    }
  },
  created() {
    console.log('Created from mixins!')
  },
};
