<template>
    <b-card no-body>
      <!-- Card header -->
      <b-card-header>
        <h2 class="mb-0">Customer Details</h2>
      </b-card-header>
      <!-- Card body -->
      <b-card-body>
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
        <form class="needs-validation" ref="customerDetailsForm" @submit.prevent="handleSubmit(customerDetailsFormSubmit)">
                  
          <b-row>
            <b-col lg="6" sm="12">
                <base-input label="Company Name" input-classes="form-control-sm" rules="required" v-model="model.customer.company" placeholder="Company Name"/>
                <b-form-group label="Organization/Business Type">
                  <b-form-radio v-model="model.customer.business_type" value="Proprietorship" name="business_type">
                    Proprietorship
                  </b-form-radio>
                  <b-form-radio v-model="model.customer.business_type" value="Partnership" name="business_type">
                      Patnership
                  </b-form-radio>
                  <b-form-radio v-model="model.customer.business_type" value="Limited Liability Partnership (LLP)" name="business_type">
                    Limited Liability Patnership
                  </b-form-radio>
                  <b-form-radio v-model="model.customer.business_type" value="Private Limited" name="business_type">
                    Private Limited
                  </b-form-radio>
                  <b-form-radio v-model="model.customer.business_type" value="Limited" name="business_type">
                    Limited
                  </b-form-radio>
                </b-form-group>     

                <base-input label="MD/CEO/Owner Name" v-model="model.customer.firsr_name" input-classes="form-control-sm" rules="required" placeholder="Name"/>
                <base-input label="MD/CEO/Owner Email" v-model="model.customer.email" input-classes="form-control-sm" rules="required" placeholder="Email"/>
                <base-input label="MD/CEO/Owner Phone" v-model="model.customer.phone_number" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>

                <base-input label="Head Of Purchase Name" v-model="model.customer.purchase_name" input-classes="form-control-sm" rules="required" placeholder="Name"/>
                <base-input label="Head Of Purchase Email" v-model="model.customer.purchase_email" input-classes="form-control-sm" rules="required" placeholder="Email"/>
                <base-input label="Head Of Purchase Phone" v-model="model.customer.purchase_phone_number" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>
            </b-col>
            <b-col lg="6" sm="12">
                <base-input label="GSTIN" v-model="model.customer.gstn" rules="required" input-classes="form-control-sm" placeholder="GSTIN"/>

                <base-input label="Billing Address" v-model="model.customer.billing_address_line" rules="required" input-classes="form-control-sm" placeholder="Billing Address"/>
                <base-input label="Billing City" v-model="model.customer.billing_address_city" rules="required" input-classes="form-control-sm" placeholder="Billing City"/>
                <base-input label="Billing Pincode" v-model="model.customer.billing_address_pincode" rules="required" input-classes="form-control-sm" placeholder="Billing Pincode"/>
                <b-form-checkbox class="mb-3" v-model="model.customer.checkboxes" @change="check($event)">
                  check this box if Billing Address and Mailing Address are the same
                </b-form-checkbox>

                <base-input label="Mailing Address" v-model="model.customer.mailing_address_line" rules="required" input-classes="form-control-sm" placeholder="Mailing Address"/>
                <base-input label="Mailing City" v-model="model.customer.mailing_address_city" rules="required" input-classes="form-control-sm" placeholder="Mailing City"/>
                <base-input label="Mailing Pincode" v-model="model.customer.mailing_address_pincode" rules="required" input-classes="form-control-sm" placeholder="Mailing Pincode"/>

            </b-col>
          </b-row>
        </form>
        </validation-observer>
      </b-card-body>
    </b-card>
</template>
<script>
export default {
    data() {
        return {
        validated: false,
        model: {
          customer: {
            company: '',
            gstn: '',
            business_type: '',

            owner_name: '',
            owner_email: '',
            owner_phone_number: '',
    
            purchase_name: '',
            purchase_email:"",
            purchase_phone_number:"",

            billing_address_line: '',
            billing_address_city: '',
            billing_address_pincode: '',
            
            mailing_address_line:"",
            mailing_address_city: "",
            mailing_address_pincode:"",

            checkboxes: "abc",
          },
        }
        };
    },
    methods: {
      // async customerDetailsFormSubmit() {
      //   console.log(submit)
      // },
      check: function(checked) {
        if (checked) {
          this.model.customer.mailing_address_line = this.model.customer.billing_address_line;
          this.model.customer.mailing_address_city = this.model.customer.billing_address_city;
          this.model.customer.mailing_address_pincode = this.model.customer.billing_address_pincode;
        }
        else{
          this.model.customer.mailing_address_line = "";
          this.model.customer.mailing_address_city = "";
          this.model.customer.mailing_address_pincode = "";
        }
      }
    },
    mounted() {
       this.$events.$on('submitCustomerDetails', () => {
          this.$store.dispatch("customer/submitCustomerForm", this.model.customer);
       });
      },
      beforeDestroy() {
      //  this.$events.$off('submitCustomerDetails');
      }
}
</script>