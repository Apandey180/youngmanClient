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
                        <base-input label="Company Name" input-classes="form-control-sm" rules="required" v-model="model.companyName" placeholder="Company Name"/>
                   <b-form-radio-group v-model="model.radios.radio1">
                        <div>
                          <b-form-radio
                            value="checked"
                            name="unchecked"
                            class="mb-3">
                            Proprietorship
                          </b-form-radio>
                        </div>
                        <div>
                          <b-form-radio
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                          Patnership
                        </b-form-radio>
                        </div>
                        <div>
                          <b-form-radio
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                           Limited Liability Patnership
                          </b-form-radio>
                        </div>
                        <div>
                          <b-form-radio
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                          Private Limited
                        </b-form-radio>
                        </div>
                        
                        <div>
                          <b-form-radio
                            value="unchecked"
                            name="checked"
                            class="mb-3">
                           Limited
                        </b-form-radio>
                        </div>
                    </b-form-radio-group>     

                       <base-input label="MD/CEO/Owner Name" v-model="model.customerName" input-classes="form-control-sm" rules="required" placeholder="Name"/>
                       <base-input label="MD/CEO/Owner Email" v-model="model.customerEmail" input-classes="form-control-sm" rules="required" placeholder="Email"/>
                        <base-input label="MD/CEO/Owner Phone" v-model="model.customerPhone" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>
                       <base-input label="Head Of Purchase Name" v-model="model.headOfAccountsName" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>
                       <base-input label="Head Of Purchase Email" v-model="model.headOfAccountsEmail" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>
                       <base-input label="Head Of Purchase Phone" v-model="model.headOfAccountsPhone" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>

                        

                    </b-col>
                    <b-col lg="6" sm="12">
                      <base-input label="GSTIN" v-model="model.gstin" rules="required" input-classes="form-control-sm" placeholder="GSTIN"/>
                      <base-input label="Billing Address" v-model="model.billingAddress" rules="required" input-classes="form-control-sm" placeholder="Billing Address"/>
                      <base-input label="Billing City" v-model="model.billingCity" rules="required" input-classes="form-control-sm" placeholder="Billing City"/>
                      <base-input label="Billing Pincode" v-model="model.billingPincode" rules="required" input-classes="form-control-sm" placeholder="Billing Pincode"/>
                      <b-form-checkbox class="mb-3" v-model="model.checkboxes.unchecked">
                        check this box if Billing Address and Mailing Address are the same
                       </b-form-checkbox>

                      <base-input label="Mailing Address" v-model="model.mailingAddress" rules="required" input-classes="form-control-sm" placeholder="Mailing Address"/>
                      <base-input label="Mailing City" v-model="model.mailingCity" rules="required" input-classes="form-control-sm" placeholder="Mailing City"/>
                      <base-input label="Mailing Pincode" v-model="model.mailingPincode" rules="required" input-classes="form-control-sm" placeholder="Mailing Pincode"/>



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
          companyName: '',
          headOfPurchase: '',
          customerName: '',
          customerEmail: '',
          customerPhone: '',
        

          headOfAccountsName:"",
          headOfAccountsEmail:"",
          headOfAccountsPhone:"",

          billingAddress: '',
          billingState: '',
          billingPincode: '',
          gstin: '',
          ceo: '',
          billingCity:"",
          mailingAddress: "",
          mailingCity:"",

          radios: {
          radio1: 'checked'
        },
        checkboxes: {
          unchecked: false,
          checked: true,
        },
        }
        };
    },
    methods: {

    
      async customerDetailsFormSubmit() {
        console.log(submit)
      }
    },
    ready() {
       // this.$events.$on('submitCustomerDetails', () => {
       //   this.$refs.submitCustomerDetailsButton.click();
       //   console.log("event catched")
       // });
      },
      beforeDestroy() {
       // this.$events.$off('submitCustomerDetails');
      }
}
</script>