<template>
<div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Offers</h6>
        </b-col>
      </b-row>
<!-- TODO: Covert this to grid layout -->
<div id="lists">
 
  <div >
       <b-card-group deck>
          <!-- Image-Text card -->
          <b-card no-body title="Title" style="max-width: 20rem;" :img-src="item.image" img-height=300 img-top  v-for="item in lists" :key="item.id">
            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.title}}</b-card-title>
              <b-card-text class="mt-4">{{item.text}}</b-card-text>
            </b-card-body>
          </b-card>
        </b-card-group>
  </div>
 
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="lists"
      align="center"
    ></b-pagination>
</div>
</div>
</template>

<script>
import home from '../../../api/home';
export default {
  data () {
    return { 
      currentPage: 1,
      perPage: 4
    }
  },
computed: {
    lists () {
      if(!this.offers)
        return 0;
      // eslint-disable-next-line  TODO: Fix side-effect in computed property
      const list = this.offers;
      // Return just page of items needed
      return list.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    numPages () {
      if(!this.offers)
        return 0;
      return Math.ceil(this.offers.length / this.perPage);
    },
    rows() {
      if(!this.offers)
        return 0;
        return this.offers.length;
    },
    offers() {
            return this.$store.state.home.offers
        }
  },
  created () {
    this.$store.dispatch('home/getOffers');
  },
}
</script>