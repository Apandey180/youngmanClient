<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      img-height="480"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :caption="item.text"
        :img-src="item.image"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)"
        },
        {
          id: 2,
          image: "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (2)"
        },
        {
          id: 3,
          image: "https://source.unsplash.com/LAaSoL0LrYs/1920x1080",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (3)"
        }
      ],
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
  }
};
</script>