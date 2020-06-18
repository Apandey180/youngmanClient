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
                        

                        <base-input label="Consignee" input-classes="form-control-sm" placeholder="Consignee" v-model="shipping_details.company"/>
                    <base-input label="GSTIN" input-classes="form-control-sm" placeholder="GSTIN" v-model="shipping_details.gstn" />
                    <base-input label="Site Contact Person Name" input-classes="form-control-sm" placeholder="Site Contact Person Name" v-model="shipping_details.site_contact_name"/>
                    <base-input label="Email" input-classes="form-control-sm" placeholder="Email"  v-model="shipping_details.site_contact_email" />
                    <base-input label="Mobile Number" input-classes="form-control-sm" placeholder="Mobile Number"  v-model="shipping_details.site_contact_phone" />
                    <base-input label="Shipping Address">
                    <textarea class="form-control" id="shippingAddress" rows="3" v-model="shipping_details.delivery_address_line"></textarea>
                    </base-input>
                    <base-input label="State" input-classes="form-control-sm" placeholder="State"  v-model="shipping_details.delivery_address_state" />
                    <base-input label="Pincode" input-classes="form-control-sm" placeholder="Pincode"  v-model="shipping_details.delivery_address_pincode" />

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
            shipping_details:{
              company:'',
              gstn:'',
              site_contact_name:'',
              site_contact_email:'',
              site_contact_phone:'',
              delivery_address_line:'',
              delivery_address_state:'',
              delivery_address_pincode:'',
              customer_id:''
            }
        };
    },
    mounted() {
      if(this.$store.state.checkout.customer.id)
      {
        this.shipping_details.company = this.$store.state.checkout.customer.company;
        this.shipping_details.gstn = this.$store.state.checkout.customer.gstn;
        this.shipping_details.customer_id = this.$store.state.checkout.customer.id;
      }
      this.$events.$on('submitShippingDetailsForm', () => {
        this.$store.dispatch("checkout/submitShippingDetails", this.shipping_details);
      });
    },
}
</script>