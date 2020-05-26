<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="right" class="py-4">
       
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row class="starter-page">
        <home-carousel></home-carousel>
        <featured-categories></featured-categories>
        <widgets></widgets>
      </b-row>
      
    </b-container>
  </div>
</template>
<script>
  import HomeCarousel from './HomeCarousel';
  import FeaturedCategories from './FeaturedCategories';
  import Widgets from '../Widgets';

  export default {
    name: 'starter-page',
    components: {
      HomeCarousel,
      FeaturedCategories,
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
