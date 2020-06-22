<template>
  <div>
    <base-header class="pb-6" style="background-color:#f7dd38 !important">
      <b-row align-v="right" class="py-4">
       
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row class="starter-page">
        <home-carousel/>
        <featured-categories/>
        <paginated-list/>
      </b-row>
      
    </b-container>
   <email-submit/>

  </div>
</template>
<script>
  import HomeCarousel from './Home/HomeCarousel';
  import FeaturedCategories from './Home/FeaturedCategories';
  import Widgets from '../Widgets';
  import PaginatedList from './Home/PaginatedList';
  import EmailSubmit from "./Home/EmailSubmit";
 
  export default {
    name: 'starter-page',
    components: {
      HomeCarousel,
      FeaturedCategories,
      PaginatedList,
      EmailSubmit,
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
