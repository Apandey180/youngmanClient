<template>
<div class="main-content">
  <dashboard-navbar></dashboard-navbar>
  <b-row>
      <b-col align-v="left" sm="3" md="3" lg="3">
        <product-filter></product-filter>
      </b-col>
      <b-col sm="9" md="9" lg="9">
        <b-row>
          <p>Sort By - Poularity - Price-Low to High - Newest First</p>
        </b-row>
        <b-row>
          <b-col sm="1" md="4" lg="4" v-for="item in lists" :key="item.id">
            <product-card v-bind:item="item"></product-card>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="lists"
          align="center"
        ></b-pagination>
      </b-col>
  </b-row>

  <b-row>
    <recently-searched></recently-searched>
  </b-row>
  <content-footer v-if="!$route.meta.hideFooter"></content-footer>
</div>
</template>

<script>
import DashboardNavbar from '../Home/SampleNavbar.vue';
import ContentFooter from '../Home/SampleFooter.vue';
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';
import RecentlySearched from './RecentlySearchedProducts';

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    ProductFilter,
    ProductCard,
    RecentlySearched
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
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (1)",
          price: "7500",
          offer: "FLAT 5% off",
          original_price: "8100",
          rating: "4"
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
        },
        {
          id: 5,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (5)"
        },
        {
          id: 6,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (6)"
        },
        {
          id: 7,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (7)"
        },
        {
          id: 8,
          title: "Category Name",
          image: "img/theme/img-1-1000x900.jpg",
          alt: "Image Placeholder",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum. (8)"
        }
      ]
    };
  },
  computed: {
    lists () {
      // eslint-disable-next-line  TODO: Fix side-effect in computed property
      const list = this.items;
      // Return just page of items needed
      return list.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    numPages () {
      return Math.ceil(this.items.length / this.perPage);
    },
    rows() {
        return this.items.length;
    }
  },
  methods: {
  }
};
</script>
