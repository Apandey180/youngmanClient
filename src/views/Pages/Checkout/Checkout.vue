<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="12">
          <div>
            <b-tabs pills class="nav-pills-circle">
              <b-tab active>
                <template v-slot:title>
                  <i class="ni ni-cloud-upload-96 mr-2"></i>
                </template>
                <customer-details />
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <i class="ni ni-cloud-upload-96 mr-2"></i>
                </template>
                <document-upload />
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <i class="ni ni-calendar-grid-58 mr-2"></i>
                </template>
                <shipping-details />
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <i class="ni ni-calendar-grid-58 mr-2"></i>
                </template>
                <payment-method />
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <i class="ni ni-calendar-grid-58 mr-2"></i>
                </template>
                <order-status />
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
import CustomerDetails from "./CustomerDetails";
import DocumentUpload from "./DocumentUpload";
import OrderStatus from "./OrderStatus";
import PaymentMethod from "./PaymentMethod";
import ShippingDetails from "./ShippingDetails";

export default {
  data() {
    return {
      save_to_billing_address: true
    };
  },
  components: {
    CustomerDetails,
    DocumentUpload,
    OrderStatus,
    PaymentMethod,
    ShippingDetails
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
<style></style>
