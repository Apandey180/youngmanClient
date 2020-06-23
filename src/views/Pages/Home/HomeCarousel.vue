<template>
  <div style="width:100%;height:100%">
    <router-link to="/products">
    <b-carousel
      id="home-carousel"
      v-model="slide"
      :interval="20000"
      img-width="1024"
      img-height="100%"
      controls
      width="100%"
      height="100%"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->

      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :img-src="item.image"
      ></b-carousel-slide>
   
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