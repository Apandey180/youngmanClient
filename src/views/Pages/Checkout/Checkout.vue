<template>
    <div>
        <base-header class="pb-6" style="background-color:#ffe411 !important">
        <b-row align-v="right" class="py-4"> </b-row>
        </base-header>
        <b-container fluid class="mt--6">
        <b-row>
        <b-col lg="12">
            <div>
  <b-tabs pills>
    <b-tab active>
      <template v-slot:title>
        <i class="ni ni-cloud-upload-96 mr-2"></i> Home
      </template>
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
    </b-tab>

    <b-tab>
      <template v-slot:title>
        <i class="ni ni-bell-55 mr-2"></i> Profile
      </template>
      <p class="p-3">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </b-tab>

    <b-tab>
      <template v-slot:title>
        <i class="ni ni-calendar-grid-58 mr-2"></i> Messages
      </template>
      <p class="p-3">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>
    </b-tab>
  </b-tabs>
</div>

            
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