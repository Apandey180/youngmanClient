<template>
    <div>
        <base-header class="pb-6" style="background-color:#ffe411 !important">
        <b-row align-v="right" class="py-4"> </b-row>
        </base-header>
        <b-container fluid class="mt--6">
        <b-row>
        <b-col lg="8">
            <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h2 class="mb-0">Checkout</h2>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <base-input label="First Name"/>
                  <base-input label="Last Name"/>
                  <base-input label="Email address"/>
                  <base-input label="Phone number"/>
                  <base-input label="Address"/>
                  <base-input label="City"/>
                  <base-input label="State"/>
                  <base-input label="Pincode"/>
                  <b-form-checkbox class="mb-3" v-model="save_to_billing_address">
                        Save this to Billing address
                      </b-form-checkbox>

                  
                  <router-link to="/">
                    <base-button type="primary" class="mb-3">Continue to Payment</base-button>
                  </router-link>
                </form>
              </b-card-body>
            </b-card>
        </b-col>
        <b-col lg="4">
            <card
            header-classes="bg-transparent"
            body-classes="px-lg-7"
            class="card-pricing border-0 text-center mb-4">

            <!--Header-->
            <h4 slot="header" class="text-uppercase ls-1 text-primary py-3 mb-0">Cart Items</h4>

            <!--Body-->
            <div class="display-2">{{ total | currency }}</div>
            <ul class="list-unstyled my-4">
              
              <li v-for="product in products" :key="product.id">
          
          <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                      <i class="fas fa-inventory"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm">{{ product.title }} - {{ product.price | currency }} x
          {{ product.quantity }}</span>
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
export default {
    data() {
        return {
            save_to_billing_address: true
        };
        
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
  }
};
</script>
<style>
</style>