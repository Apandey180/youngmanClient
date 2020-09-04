<template>
    
  <div style="display: flex; justify-content: left;">
      <button type="button" class="btn btn-link text-black" style="margin-top:-8px;padding-bottom:0px">Sort By</button>
      <button type="button" class="btn btn-link" @click="sortByPopularity" style="margin-top:-8px;padding-bottom:0px">Popularity</button>
      <button type="button" class="btn btn-link" @click="sortByPrice" style="margin-top:-8px;padding-bottom:0px">Price low to High</button>
      <button type="button" class="btn btn-link" @click="sortByDate" style="margin-top:-8px;padding-bottom:0px">Newest First</button>
  
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
      this.$store.dispatch('products/getAllProducts', {sort_by: "CREATED_AT"})
    }
  }
}
</script>