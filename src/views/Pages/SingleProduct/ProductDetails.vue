<template>
<div>
<h3>{{ product.item_price | currency}}/month</h3>
<small>Offer avilable for duration above 6 months</small>

<h3>Product Delivery</h3>

<b-form-input type="number" placeholder="Enter Delivery Pincode"   maxlength="6" pa >
  <b-button variant="primary">Primary</b-button>
</b-form-input>

<div class="container">
    <div class="row">
        <b-col sm="12" md="6" lg="6">
              <h3>Quantity</h3>

               <b-col cols="12">
                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend>
                      <b-button variant="danger" @click="decreaseQuantity()">Subtract</b-button>
                    </b-input-group-prepend>

                    <b-form-input type="number" min="0.00" v-model="quantity" readonly="readonly"></b-form-input>

                    <b-input-group-append>
                      <b-button variant="success" @click="increaseQuantity()">Add</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>

             
        </b-col>
        <b-col sm="12" md="6" lg="6">
            <h3>Duration(Days)</h3>

            <b-col cols="12">
                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend>
                      <b-button variant="danger" @click="decreaseDuration()">Subtract</b-button>
                    </b-input-group-prepend>

                    <b-form-input type="number" min="0.00" v-model="duration" readonly="readonly"></b-form-input>

                    <b-input-group-append>
                      <b-button variant="success" @click="increaseDuration()">Add</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
        </b-col>
    </div>

<div>
    <b-col sm="12" md="12" lg="12">
      <b-row>
      <h3>Product Description</h3>
      </b-row>
      <b-row>
        {{product.description}}
      </b-row>
    </b-col>
</div>

<div style="margin:20px;">
<center>
      <b-button variant="primary" align="center" @click="addProductToCart(product)">Add to Cart</b-button>
      <b-button variant="primary" align="center" @click="rentNow(product)">Rent Now</b-button>
</center>
</div>
</div>


</div>
</template>

<script>

import BaseSlider from '@/components/BaseSlider'

  export default{
  

    props:['product'],
    components: {
      BaseSlider
    },

  data() { 

    return {
      quantity: 1,
      duration: 1,
      slider_options: {step: 1}
    }
  },
  methods: {
    addProductToCart(product) {
      product.quantity = this.quantity;
      product.duration = this.duration;
      
      this.$store.dispatch('cart/addProductToCart', product);
      this.notifyVue('success','Item added to cart')
    },
    rentNow(product) {

    },
    increaseDuration() {
      
        this.duration++;
    },
    decreaseDuration() {
      if(this.duration > 1)
        this.duration--;
    },
    increaseQuantity() {
      if(this.quantity < this.product.inventory)
       this.quantity++;
    },

    decreaseQuantity() {
      if(this.quantity > 1)
        this.quantity--;
    },
    notifyVue(type = 'default', message) {
        this.$notify({
          message: message,
          timeout: 5000,
          icon: 'ni ni-bell-55',
          type
        });
      },
  },
  computed: {
    output() { // Output for computed property!
      return this.counter >= 10 ? '10 or more' : 'Less than 10';
    }
  }




  }
  
  

</script>