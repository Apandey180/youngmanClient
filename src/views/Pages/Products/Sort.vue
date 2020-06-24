<template>
    
  <div style="display: flex; justify-content: left;">
      <button type="button" class="btn btn-link text-black">Sort By</button>
      <button type="button" class="btn btn-link" @click="sortByPopularity">Popularity</button>
      <button type="button" class="btn btn-link" @click="sortByPrice">Price low to High</button>
      <button type="button" class="btn btn-link" @click="sortByDate">Newest First</button>
  
</div>

</template>

<script>
export default {
  methods: {
    sortByPopularity() {
      this.$store.dispatch('products/getAllProducts',{sort_by: "RATING"})
    },
    sortByPrice() {
      this.$store.dispatch('products/getAllProducts', {sort_by: "PRICE"})
    },
    sortByDate() {
      this.$store.dispatch('products/getAllProducts', {sort_by: "DATE"})
    }
  }
}
</script>