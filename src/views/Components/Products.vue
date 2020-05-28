<template>
<div class="main-content">
  <dashboard-navbar></dashboard-navbar>
  <b-row>
      <b-col align-v="left" sm="3" md="3" lg="3">
        <product-filter></product-filter>
      </b-col>
      <b-col sm="9" md="9" lg="9">
        <b-row>
          <p>Sort By - Poularity - Price-Low to High - Newest First</p>
        </b-row>
        <b-row>
          <b-col sm="1" md="4" lg="4" v-for="item in lists" :key="item.id">
            <product-card v-bind:item="item"></product-card>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="lists"
          align="center"
        ></b-pagination>
      </b-col>
  </b-row>

  <b-row>
    <recently-searched></recently-searched>
  </b-row>
  <content-footer v-if="!$route.meta.hideFooter"></content-footer>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DashboardNavbar from '../Home/SampleNavbar.vue';
import ContentFooter from '../Home/SampleFooter.vue';
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';
import RecentlySearched from './RecentlySearchedProducts';

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    ProductFilter,
    ProductCard,
    RecentlySearched
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6
    };
  },
  computed: {
    lists () {
      // eslint-disable-next-line  TODO: Fix side-effect in computed property
      const list = this.products;
      // Return just page of products needed
      return list.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    numPages () {
      return Math.ceil(this.products.length / this.perPage);
    },
    rows() {
        return this.products.length;
    },
    products() {
      return this.$store.state.products.all;
    }
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
};
</script>
