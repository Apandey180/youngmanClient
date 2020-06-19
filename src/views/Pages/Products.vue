<template>
<div>
  <base-header class="pb-6" style="background-color:#ffe411 !important">
    <b-row align-v="right" class="py-4">
    </b-row>
  </base-header>
  <b-container fluid class="mt--6">
  <b-row>
    <!--b-col align-v="left" sm="3" md="3" lg="3">
      <product-filter></product-filter>
    </b-col-->
    <b-col sm="12" md="12" lg="12">
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
        align="center">
      </b-pagination>
    </b-col>
  </b-row>

  <!--b-row>
    <recently-searched></recently-searched>
  </b-row-->
  <router-view></router-view>
  </b-container>
  </div>
</template>
<script>
  import { FadeTransition } from 'vue2-transitions';
  import { mapState, mapActions } from 'vuex';
  import ProductFilter from './Products/ProductFilter';
  import ProductCard from '../Components/ProductCard';
  import RecentlySearched from './Products/RecentlySearchedProducts';

  export default {
    components: {
      FadeTransition,
      ProductFilter,
      ProductCard,
      RecentlySearched
    },
    data() {
      return {
        currentPage: 1,
        perPage: 6,
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
    created () {
      this.$store.dispatch('products/getAllProducts')
    },
    methods: {
      initScrollbar() {
        let docClasses = document.body.classList;
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          // if we are on windows OS we activate the perfectScrollbar function
          initScrollbar('scrollbar-inner');

          docClasses.add('perfect-scrollbar-on');
        } else {
          docClasses.add('perfect-scrollbar-off');
        }
      }
    }
  };
</script>
