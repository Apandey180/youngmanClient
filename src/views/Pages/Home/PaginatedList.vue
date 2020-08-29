<template>
  <div class="row_block offer_grid">
    <b-container fluid class="bv-example-row">
      <b-row>
        <horizontal-list v-if="offers" :items="offers" :options="options">
        <template v-slot:default="{item}">
         <offer-card v-bind:item="item"></offer-card>  

       </template>
      </horizontal-list>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import home from '../../../api/home';
import HorizontalList from '../../../components/HorizontalList';
import ProductCard from '../../Components/ProductCard';
import OfferCard from '../../Components/OfferCard';
import CustomerReview from '../../Components/CustomerReview';
export default {
  data () {
    return { 
      options: {
        responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{start: 768, end: 992, size: 3},{size: 4}],
        item: {class: 'col-sm-4 col-lg-4'},
        list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,
            
            // Because: #app {padding: 80px 24px;}
            padding: 24
          }
        },
    }
  },
  components: {
    HorizontalList,
    ProductCard,
    OfferCard,
    CustomerReview
  },
  computed: {
   
    offers() {
            return this.$store.state.home.offers
        },
        // reviews(){

        // }
  },
  created () {
    this.$store.dispatch('home/getOffers');
  },
}
</script>