<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Featured Categories</h6>
        </b-col>
      </b-row>

      <b-row>
        <horizontal-list :items="featuredCategories" :options="{responsive: [{size: 1}]}">
        <template v-slot:default="{item}">
          <b-card no-body :img-src="item.image" img-height=300 img-width=200 img-top  :alt="item.alt">
           
            <!-- Card body -->
            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.name}}</b-card-title>
            </b-card-body>
          </b-card>
        </template>
      </horizontal-list>
      </b-row>
  
  </div>
</template>

<script>
  import home from '../../../api/home';

  import HorizontalList from '../../../components/HorizontalList';

  export default {
  components: {
     HorizontalList
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

