<template>
  <div class="main-body home-page">
    <div class="slider_block">
      <div class="pills_blk">
        <b-row>
          <b-col><b-badge pill variant="light">Rent</b-badge></b-col>
          <b-col><b-badge pill variant="light">Track Order</b-badge></b-col>
          <b-col><b-badge pill variant="light">Offer Zone</b-badge></b-col>
        </b-row>
      </div>

        <home-carousel/>
        <featured-categories/>
        <paginated-list/>
        <customer-reviews/>
        <email-submit/>
    </div>
  </div>
</template>
<script>
  import HomeCarousel from './Home/HomeCarousel';
  import FeaturedCategories from './Home/FeaturedCategories';
  import Widgets from '../Widgets';
  import PaginatedList from './Home/PaginatedList';
  import EmailSubmit from "./Home/EmailSubmit";
  import CustomerReviews from "./Home/CustomerReviews";
 
  export default {
    name: 'starter-page',
    components: {
      HomeCarousel,
      FeaturedCategories,
      PaginatedList,
      EmailSubmit,
      CustomerReviews,
      Widgets
    },
    data() {
      return {};
    }
  };
</script>
<style>
 @import '../../assets/css/home.css';
</style>
