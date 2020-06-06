<template>
  <div>
    <base-header class="pb-6" style="background-color:#ffe411 !important">
      <b-row align-v="right" class="py-4"> </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="12" sm="12">
          <form-wizard @on-complete="onComplete">
            <tab-content
              title="Customer Details"
              icon="ni ni-single-02"
              :before-change="submitChild"
            >
              <test-child />
            </tab-content>

            <tab-content title="Order status" icon="ni ni-check-bold">
              <p>Step 2</p>
            </tab-content>
          </form-wizard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TestChild from "./TestChild";

import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  data() {
    return {};
  },
  components: {
    TestChild,
    FormWizard,
    TabContent
  },
  computed: {
    ...mapState("test", {
      childData: state => state.test.childData
    }),
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    submitChild() {
      // emit event so that child form tries to submit
      this.$events.$emit("submitTest");

    // create a promise and resolve it if form validation is successful and saved to db successfully
    // reject if error occurs
    console.log("yayyy");
    console.log(this.$store.state.test.childData);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.count < 1) {
            this.count++;
            reject("This is a custom validation error message. Click next again to get rid of the validation");
          } else {
            this.count = 0;
            resolve(true);
          }
        }, 1000);
      });
      
    }
  }
};
</script>
<style></style>
