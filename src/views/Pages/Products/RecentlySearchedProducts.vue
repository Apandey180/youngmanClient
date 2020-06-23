<template>
  <div class="main-content">
    
    <b-container align-v="center">
      <b-row>
        <b-col lg="12">
      
          <h2 class="d-inline-block mb-0">Recently Searched Products</h2>
        </b-col>
      </b-row>
        <b-row>
          <b-col sm="6" md="3" lg="3" v-for="item in recent_products" :key="item.id">
            <recent-product v-bind:item="item"></recent-product>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from '../../Components/ProductCard';
import RecentProduct from '../Products/RecentProduct';
export default {

    components: {
        ProductCard,
        RecentProduct
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