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
                        <base-input label="Head of Purchase" v-model="model.headOfPurchase">
                         <select class="form-control" id="headOfPurchase">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                        <base-input label="Name" v-model="model.customerName" input-classes="form-control-sm" rules="required" placeholder="Name"/>
                        <base-input label="Email" v-model="model.customerEmail" input-classes="form-control-sm" rules="required" placeholder="Email"/>
                        <base-input label="Mobile Number" v-model="model.customerPhone" input-classes="form-control-sm" rules="required" placeholder="Mobile Number"/>
                        <base-input label="Head of Accounts" rules="required" v-model="model.headOfAccounts">
                         <select class="form-control" id="headOfAccounts">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                        <base-input label="Name" v-model="model.contactPersonName" rules="required" input-classes="form-control-sm" placeholder="Name"/>
                        <base-input label="Email" v-model="model.contactPersonEmail" rules="required" input-classes="form-control-sm" placeholder="Email"/>
                        <base-input label="Mobile Number" v-model="model.contactPersonMobile" rules="required" input-classes="form-control-sm" placeholder="Mobile Number"/>
                        <base-input label="Billing Address" rules="required" v-model="model.billingAddress">
                        <textarea class="form-control"  id="billingAddress1" rows="3" resize="none" placeholder="Billing Address"></textarea>
                        </base-input  >
                         <base-input label="State" v-model="model.billingState">
                         <select class="form-control" id="state1">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                      <base-input label="Pincode" rules="required" v-model="model.billingPincode" input-classes="form-control-sm" placeholder="Pincode"/>


                    </b-col>
                    <b-col lg="6" sm="12">
                      <base-input label="GSTIN" v-model="model.gstin" rules="required" input-classes="form-control-sm" placeholder="GSTIN"/>
                       <base-input label="CEO" v-model="model.ceo" rules="required">
                         <select class="form-control" id="ceo">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>         
                      <base-input label="Name" v-model="model.headOfProjectName" rules="required" input-classes="form-control-sm" placeholder="Name"/>
                      <base-input label="Email" v-model="model.headOfProjectEmail" rules="required" input-classes="form-control-sm" placeholder="Email"/>
                      <base-input label="Mobile Number" v-model="model.headOfProjectMobileNumber" rules="required" input-classes="form-control-sm" placeholder="Mobile Number"/>
                      <base-input label="Head of Project" v-model="model.headOfProject" rules="required">
                         <select class="form-control" id="headOfProject">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                    </b-col>
                    </b-row>
                    <button ref="submitCustomerDetailsButton">Submit</button>
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
          headOfAccounts: '',

          contactPersonName: '',
          contactPersonEmail: '',
          contactPersonMobile: '',
          billingAddress: '',
          billingState: '',
          billingPincode: '',
          gstin: '',
          ceo: '',

          headOfProject: '',
          headOfProjectMobileNumber: '',
          headOfProjectEmail: '',
          headOfProjectName: '',
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