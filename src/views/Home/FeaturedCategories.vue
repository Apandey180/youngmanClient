<template>
  <div>
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Featured Categories</h6>
        </b-col>
      </b-row>

      <b-row>
        <b-col v-for="item in featuredCategories" :key="item.id" xl="3" md="6">
          <!-- Image-Text card -->
          <b-card no-body title="Title">
            <!-- Card image -->
            <img class="card-img-top" :src="item.image" :alt="item.alt">
            <!-- Card body -->
            <b-card-body>
              <b-card-title class="h2 mb-0">{{item.title}}</b-card-title>
              <b-card-text class="mt-4">{{item.text}}</b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
  
  </div>
</template>
<script>
 

  export default {
  components: {
  },
  data() {
    return {
      featuredCategories: [
        {
          id: 1,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)"
        },
        {
          id: 2,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (2)"
        },
        {
          id: 3,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (3)"
        },
        {
          id: 4,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (4)"
        }
      ],
      slide: 0,
      sliding: null
    };
  },
};
</script>
