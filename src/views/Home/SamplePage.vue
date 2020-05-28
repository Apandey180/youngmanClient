<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4">
       
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row class="starter-page">
        <home-carousel/>
        <featured-categories/>
        <paginated-list/>
        <widgets/>
      </b-row>
      
    </b-container>
  </div>
</template>
<script>
  import HomeCarousel from './HomeCarousel';
  import FeaturedCategories from './FeaturedCategories';
  import Widgets from '../Widgets';
  import PaginatedList from './PaginatedList';

  export default {
    name: 'starter-page',
    components: {
      HomeCarousel,
      FeaturedCategories,
      PaginatedList,
      Widgets
    },
    data() {
      return {};
    }
  };
</script>
<style>
  .starter-page {
    min-height: calc(100vh - 380px);
  }
</style>
