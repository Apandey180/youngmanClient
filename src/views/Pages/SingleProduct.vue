<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      {{product}}
      <b-card v-if="product">
        <h2 slot="header" class="mb-0">{{ product.item_name }}</h2>

        <div class="row">
          <div class="col-md-6 ">
            <b-carousel
              id="product-image-carousel"
              v-model="slide"
              :interval="2000"
              img-width="1024"
              img-height="1024"
              controls
              indicators
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                v-for="item in product.images"
                :key="item.id"
                :img-src="item.image_url"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <div class="col-md-6">
            <product-details v-bind:product="product" />
          </div>
        </div>

        <small slot="footer" class="mb-0"
          >Warranty: {{ product.description }}</small
        >
      </b-card>

      <b-row>
        <b-col sm="12" md="6" lg="6">
          <review />
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <similar-items />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductDetails from "./SingleProduct/ProductDetails";
import Review from "./SingleProduct/Review";
import SimilarItems from "./SingleProduct/SimilarItems";
import shop from '../../api/shop'

export default {
  components: {
    ProductDetails,
    Review,
    SimilarItems
  },

  data() {
    return {
      slide: 0,
      sliding: null
    };
  },

  computed: {
    product() {
      // let product_id = `${this.$route.params.id}`;
      // return  shop.getProductById(product_id);
      console.log(this.$store.state.product)
      return this.$store.state.product;
    }
  },

  methods: {
    rentProduct(product) {},
    addProductToCart(product) {
        this.$store.dispatch('cart/addProductToCart')
    },
     onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },

  mounted() {
  },

  beforeMount() {
    this.$store.dispatch('products/getProductById', `${this.$route.params.id}`);
  }
};
</script>

<style scoped>
.small-text {
  font-size: 18px;
}
.title {
  font-size: 36px;
}
.thumb-image {
  height: 20%;
  width: 100%;
  padding-top: 10%;
}
.block-image {
  height: 100%;
  width: 100%;
}
</style>
