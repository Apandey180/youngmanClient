<template>
  <div class="main-content">
    
    <b-container align-v="center">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Recently Searched</h6>
        </b-col>
      </b-row>
        <b-row>
          <b-col sm="3" md="3" lg="3" v-for="item in recent_products" :key="item.id">
            <product-card v-bind:item="item"></product-card>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from '../../Components/ProductCard';
export default {
    components: {
        ProductCard
    },
    data() {
      return {
        currentPage: 1,
        perPage: 6
      };
    },
    computed: {
      recent_products() {
        return this.$store.state.products.recent_products
      }
    },
    methods: {
    
    },
    created () {
      this.$store.dispatch('products/getRecentProducts');
    }
}
</script>