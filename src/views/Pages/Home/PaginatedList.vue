<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Offers</h6>
        </b-col>
      </b-row>

      <b-row>
        <horizontal-list :items="offers" :options="options">
        <template v-slot:default="{item}">
          <product-card v-bind:item="item"></product-card>
        </template>
      </horizontal-list>
      </b-row>
  
  </div>
</template>


<script>
import home from '../../../api/home';
import HorizontalList from '../../../components/HorizontalList';
import ProductCard from '../../Components/ProductCard';

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
    ProductCard
  },
  computed: {
   
    offers() {
            return this.$store.state.home.offers
        }
  },
  created () {
    this.$store.dispatch('home/getOffers');
  },
}
</script>