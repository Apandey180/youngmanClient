<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Featured Categories</h6>
        </b-col>
      </b-row>

      <b-row>

<div class="scrolling-wrapper">

        <b-col v-for="item in featuredCategories" :key="item.id" xl="3" md="6">
          <!-- Image-Text card -->
          <b-card no-body :img-src="item.image" img-height=300 img-top  :alt="item.alt">
           
            <!-- Card body -->
            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.name}}</b-card-title>
            </b-card-body>
          </b-card>
        </b-col>

</div>
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

<style>
h2 {
  color: white;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.card {
    display: inline-block;
  }

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  
  
}

.card {
    flex: 0 0 auto;
    margin-right: 3px;
  }

.card {
  border: 2px solid red;
  width: 150px;
  height: 75px;
  background: black;
}

.scrolling-wrapper, .scrolling-wrapper-flexbox {
  height: 80px;
  margin-bottom: 20px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>