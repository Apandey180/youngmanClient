<template>
    <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h2 class="mb-0">Customer Details</h2>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  
                  <b-row>
                    <b-col lg="6" sm="12">
                        <base-input label="Company Name" input-classes="form-control-sm" placeholder="Company Name"/>
                        <base-input label="Head of Purchase">
                         <select class="form-control" id="headOfPurchase">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                        <base-input label="Name" input-classes="form-control-sm" placeholder="Name"/>
                        <base-input label="Email" input-classes="form-control-sm" placeholder="Email"/>
                        <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number"/>
                        <base-input label="Head of Accounts">
                         <select class="form-control" id="headOfAccounts">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                        <base-input label="Name" input-classes="form-control-sm" placeholder="Name"/>
                        <base-input label="Email" input-classes="form-control-sm" placeholder="Email"/>
                        <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number"/>
                        <base-input label="Billing Address">
                        <textarea class="form-control" id="billingAddress1" rows="3" resize="none" placeholder="Billing Address"></textarea>
                        </base-input  >
                         <base-input label="State">
                         <select class="form-control" id="state1">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                      <base-input label="Pincode" input-classes="form-control-sm" placeholder="Pincode"/>


                    </b-col>
                    <b-col lg="6" sm="12">
                      <base-input label="GSTIN" input-classes="form-control-sm" placeholder="GSTIN"/>
                       <base-input label="CEO">
                         <select class="form-control" id="ceo">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>         
                      <base-input label="Name" input-classes="form-control-sm" placeholder="Name"/>
                      <base-input label="Email" input-classes="form-control-sm" placeholder="Email"/>
                      <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number"/>
                      <base-input label="Head of Project">
                         <select class="form-control" id="headOfProject">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                        <base-input label="Name" input-classes="form-control-sm" placeholder="Name"/>
                        <base-input label="Email" input-classes="form-control-sm" placeholder="Email"/>
                        <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number"/>
                         <base-input label="Billing Address">
                        <textarea class="form-control" id="billingAddress2" rows="3" resize="none" placeholder="Billing Address"></textarea>
                        </base-input  >
                         <base-input label="State">
                         <select class="form-control" id="state2">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                      <base-input label="Pincode" input-classes="form-control-sm" placeholder="Pincode"/>
                        


                    </b-col>
                    </b-row>

                  
                  <router-link to="/">
                    <base-button type="primary" class="mb-3 ">Next</base-button>
                  </router-link>
                </form>
              </b-card-body>
            </b-card>
</template>
<script>
export default {
    data() {
        return {

        };
    }
}
</script>