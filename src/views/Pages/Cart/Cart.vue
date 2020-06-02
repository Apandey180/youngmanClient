<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="8">
          <b-card>
            <h2>Your Cart</h2>
            <p v-show="!products.length">
              <i>Please add some products to cart.</i>
            </p>
            <b-col sm="12" md="12" lg="12" v-for="item in products" :key="item.id"  style="width: 100%; height:30%;" >
              <cart-item v-bind:item="item"></cart-item >
            </b-col>
            <p>Total: {{ total | currency }}</p>
            <p>
              <router-link to="/checkout">
                <base-button type="primary" :disabled="!products.length"
                  >Checkout</base-button
                >
              </router-link>
            </p>
            <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
          </b-card>
        </b-col>
        <b-col lg="4">
          <card
            header-classes="bg-transparent"
            body-classes="px-lg-7"
            class="card-pricing border-0 text-center mb-4"
          >
            <!--Header-->
            <h4
              slot="header"
              class="text-uppercase ls-1 text-primary py-3 mb-0"
            >
              Cart Items
            </h4>

            <!--Body-->
            <div class="display-2">{{ total | currency }}</div>
            <ul class="list-unstyled my-4">
              <li v-for="product in products" :key="product.id">
                <div class="d-flex align-items-center">
                  <div>
                    <div
                      class="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle"
                    >
                      <i class="fas fa-inventory"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm"
                      >{{ product.title }} - {{ product.price | currency }} x
                      {{ product.quantity }}</span
                    >
                  </div>
                </div>
              </li>
            </ul>

            <!--Footer-->
            <a slot="footer" href="#!" class=" text-muted">Back to Cart</a>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import CartItem from "./CartItem";

export default {

  data(){
    return {
      list : null
    }  
  },
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
  },
  components: {
    CartItem
  }
}

  

</script>
