<template>
  <div class="carousel_blk" style="margin-top:300px">
    <router-link to="/products">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        class="home_slider"
      >
        <!-- Text slides with image -->
        <b-carousel-slide v-for="item in carouselItems" :key="item.id">
          <template v-slot:img>
            <img :src="item.image" alt="Slider Image">
          </template>
        </b-carousel-slide>
      </b-carousel>
      </router-link>
  </div>
</template>

<script>
import home from '../../../api/home';
export default {
  components: {
  },
  data() {
    return {
      
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }, 
  computed: {
    carouselItems() {
            return this.$store.state.home.carousel
        }
  },
  created () {
    this.$store.dispatch('home/getCarouselData');
  }
};
</script>