<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Offers</h6>
        </b-col>
      </b-row>

      <b-row>
        <horizontal-list :items="offers" :options="{responsive: [{size: 1}]}">
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