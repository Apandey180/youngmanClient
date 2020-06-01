<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Featured Categories</h6>
        </b-col>
      </b-row>

      <b-row>
        <b-col v-for="item in featuredCategories" :key="item.id" xl="3" md="6">
    
          <b-card no-body :img-src="item.image" img-height=300 img-top  :alt="item.alt">
           

            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.name}}</b-card-title>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
  
  </div>
</template>

<script>
  import home from '../../../api/home';

  export default {
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
        featuredCategories() {
            return this.$store.state.home.featuredCategories
        }
  },
  created () {
    this.$store.dispatch('home/getFeaturedCategories');
  }
};
</script>

