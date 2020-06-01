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
                    <b-col lg="8" sm="12">
                        

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
                    
					          <b-col lg="4" sm="12">
          <card
            header-classes="bg-transparent"
            body-classes="px-lg-7"
            class="card-pricing border-0 text-center mb-4"
          >
            <!--Header-->
            <h4
              slot="header"
              class="text-uppercase ls-1 text-primary py-3 mb-0"
            >
              Cart Total
            </h4>

            <!--Body-->
            <div class="display-2">{{ total | currency }}</div>
          </card>
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
            total: 3000,
        };
    }
}
</script>