<template>
    <b-card no-body>
              <!-- Card header -->
              <b-card-header>
                <h2 class="mb-0">Shipping Details</h2>
              </b-card-header>
              <!-- Card body -->
              <b-card-body>
                <form>
                  <b-row>
                    <b-col lg="6" sm="12">
                        

                        <base-input label="Consignee" input-classes="form-control-sm" placeholder="Consignee"/>
                    <base-input label="GSTIN" input-classes="form-control-sm" placeholder="GSTIN" />
                    <base-input label="Site Contact Person Name" input-classes="form-control-sm" placeholder="Site Contact Person Name" />
                    <base-input label="Email" input-classes="form-control-sm" placeholder="Email" />
                    <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number" />
                    <base-input label="Shipping Address">
                    <textarea class="form-control" id="shippingAddress" rows="3"></textarea>
                    </base-input>
                    <base-input label="State">
                         <select class="form-control" id="state">
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                           <option></option>
                          </select>
                        </base-input>
                    <base-input label="Pincode" input-classes="form-control-sm" placeholder="Pincode" />

                    </b-col>
                    
					          <b-col lg="6" sm="12">
                        
                     <h2>3000</h2>

                    </b-col>
                    </b-row>   

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