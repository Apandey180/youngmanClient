<template>
  <div class="row_block featured_grid">
      <h6 class="h2 d-inline-block mb-0">Categories</h6>

      <b-container fluid class="bv-example-row home_slider_blk" style="margin-top:-5px">
        <horizontal-list v-if="featuredCategories"  :items="featuredCategories" :options="options">
          <template v-slot:default="{item}">
          
              <div class="col-sm-4 col-lg-4 overflow-hidden img-container">
                <router-link to="/products">
                  <img :src="item.image" class="image rounded img__img"/>
                  <div class="img__description_layer">
                    <p class="text">{{item.name}}</p>
                  </div>
                </router-link>
              </div>
          </template>
        </horizontal-list>
      </b-container>
  
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
      options: {
        responsive: [{size: 4}],
        item: {class: 'col-sm-4 col-lg-4'},
        list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,
            
            // Because: #app {padding: 80px 24px;}
            padding: 24
          }
        },
    };
  },
  computed: {
        featuredCategories() {
            return this.$store.state.home.featuredCategories;
        }
  },
  beforeCreate () {
    this.$store.dispatch('home/getFeaturedCategories');
  }
};
</script>

<style scoped>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .ImageBoxed {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.img-container:hover .image {
  opacity: 0.3;
}

.img-container:hover .middle {
  opacity: 1;
}

.text {
  color: black;
  font-size: 16px;
  padding: 16px 32px;
}
</style>