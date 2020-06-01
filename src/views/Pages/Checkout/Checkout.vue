<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
          <b-col lg="12" sm="12">
          <form-wizard @on-complete="onComplete">
                <tab-content title="Customer Details"
                            icon="ni ni-single-02">
                <customer-details />
                </tab-content>
                <tab-content title="Document Upload"
                            icon="ni ni-cloud-upload-96">
                <document-upload />
                </tab-content>
                <tab-content title="Shipping Details"
                            icon="ni ni-delivery-fast">
                <shipping-details />
                </tab-content>
                <tab-content title="Payment"
                            icon="ni ni-credit-card">
                <payment-method />
                </tab-content>
                <tab-content title="Order status"
                            icon="ni ni-check-bold">
                <order-status />
                </tab-content>
            </form-wizard>
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

import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

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
    ShippingDetails,
    FormWizard,
    TabContent
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
    },
    onComplete: function(){
          alert('Yay. Done!');
       }
  }
};
</script>
<style></style>
