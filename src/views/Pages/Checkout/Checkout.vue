<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="12" sm="12">
          <form-wizard @on-complete="onComplete" ref="wizard">
            <tab-content
              title="Customer Details"
              icon="ni ni-single-02"
              :before-change="submitCustomerDetails"
            >
              <customer-details />
            </tab-content>
            <tab-content
              title="Document Upload"
              icon="ni ni-cloud-upload-96"
              :before-change="submitDocuments"
            >
              <document-upload />
            </tab-content>
            <tab-content
              title="Shipping Details"
              icon="ni ni-delivery-fast"
              :before-change="submitShippingDetails"
            >
              <shipping-details />
            </tab-content>
            <tab-content
              title="Payment"
              icon="ni ni-credit-card"
              :before-change="makePayment"
            >
              <payment-method />
            </tab-content>
            <tab-content title="Order status" icon="ni ni-check-bold">
              <order-status />
            </tab-content>
          </form-wizard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import CustomerDetails from "./CustomerDetails";
import DocumentUpload from "./DocumentUpload";
import OrderStatus from "./OrderStatus";
import PaymentMethod from "./PaymentMethod";
import ShippingDetails from "./ShippingDetails";
import checkoutApi from "../../../api/checkout";

import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  data() {
    return {
      save_to_billing_address: true,
      // self: this
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
    ...mapState(
      {
        checkoutStatus: state => state.cart.checkoutStatus,
        customer: state=> state.checkout.customer
      }
    ),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
    onComplete: function() {
      alert("Yay. Done!");
      //TODO Gauri: redirect to order details page
    },
    submitCustomerDetails() {
      this.$events.$emit('submitCustomerDetails');
      const customerDetails = this.$store.state.checkout.customer;

      const self = this; // Because of lexical scoping of js. https://stackoverflow.com/questions/55361714/javascript-classes-promises-how-to-access-an-outside-variable-inside-a-then-s
      return new Promise(function(resolve, reject) {
        checkoutApi.createCustomer(customerDetails).then(response => {
          self.$store.dispatch("checkout/setCustomerId", response.data.customer.id);
          self.notify('success', 'Customer details saved')
          resolve(true);
        }).catch(error => {
          self.notify('danger', 'Some error occurred');
          reject(false)
        });
      });
    },
    submitDocuments() {
      this.$events.$emit('submitCustomerDocuments');
      const documents = this.$store.state.checkout.customer_documents;
      console.log(documents);
      const self = this; // Because of lexical scoping of js. https://stackoverflow.com/questions/55361714/javascript-classes-promises-how-to-access-an-outside-variable-inside-a-then-s
      return new Promise(function(resolve, reject) {
        checkoutApi.submitDocuments(documents).then(response => {
          console.log(response);
          self.notify('success', 'Documents Uploaded Successfully')
          resolve(true);
        }).catch(error => {
          console.log(error);
          self.notify('danger', 'Some error occurred');
          // reject(false)
          resolve(true);
        });
      });
    },
    submitShippingDetails() {
      this.$events.$emit('submitShippingDetailsForm');
      const shippingDetails = this.$store.state.checkout.shipping_details;
      const self = this; // Because of lexical scoping of js. https://stackoverflow.com/questions/55361714/javascript-classes-promises-how-to-access-an-outside-variable-inside-a-then-s
      return new Promise(function(resolve, reject) {
        checkoutApi.submitShippingDetailsForm(shippingDetails).then(response => {
          self.notify('success', 'Shipping Details added')
          resolve(true);
        }).catch(error => {
          self.notify('danger', 'Some error occurred');
          reject(false)
        });
      });
    },
    makePayment() {
      return true;
    },
    notify(type = 'default', message) {
        this.$notify({
          message: message,
          timeout: 2000,
          icon: 'ni ni-bell-55',
          type
        });
      },
  }
};
</script>
<style></style>
