<template>
  <div style="width:100%">
    <b-carousel
      id="home-carousel"
      v-model="slide"
      :interval="2000"
      img-width="100%"
      img-height="480"
      controls
      width="100%"
      height="480"
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

<style>
.carousel .carousel-inner {
  height: 480px;
}

.carousel-inner .carousel-item img{
  min-height:200px;
  object-fit:cover;
}

.item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 480px;
}
</style>