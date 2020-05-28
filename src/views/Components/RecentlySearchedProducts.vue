<template>
    <b-container align-v="center" class="border">
        <b-row>
          <b-col sm="3" md="3" lg="3" v-for="item in items" :key="item.id">
            <product-card v-bind:item="item"></product-card>
          </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ProductCard from './ProductCard';
export default {
    components: {
        ProductCard
    },
    data() {
    return {
      currentPage: 1,
      perPage: 6,
      items: [
        {
          id: 1,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)"
        },
        {
          id: 2,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (2)"
        },
        {
          id: 3,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (3)"
        },
        {
          id: 4,
          title: "Item Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (4)"
        }
      ]
    };
  }
}
</script>