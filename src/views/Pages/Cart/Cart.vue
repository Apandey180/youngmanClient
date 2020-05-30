<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
         <b-card>
      <h2>Your Cart</h2>
      <p v-show="!products.length"><i>Please add some products to cart.</i></p>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price | currency }} x
          {{ product.quantity }}
        </li>
      </ul>
      <p>Total: {{ total | currency }}</p>
      <p>
          <router-link to="/checkout">
          <base-button type="primary" :disabled="!products.length">Checkout</base-button>
          </router-link>
      </p>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
         </b-card>
    </b-container>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>
