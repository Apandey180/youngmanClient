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

              <base-slider v-model="quantity" :options="slider_options"></base-slider>

              <b-row class="mt-3">
                <b-col cols="6"><span class="range-slider-value">{{quantity}} Pcs</span></b-col>
              </b-row>
        </b-col>
        <b-col sm="12" md="6" lg="6">
            <h3>Duration(Days)</h3>

            <base-slider v-model="days" :options="slider_options"></base-slider>

              <b-row class="mt-3">
                <b-col cols="6"><span class="range-slider-value">{{days}} Days</span></b-col>
              </b-row>
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
      quantity: 0,
      days: 0,
      slider_options: {step: 1}

    }
  },
  methods: {
    addProductToCart(product) {

    },
    rentNow(product) {

    }
  },
  computed: {
    output() { // Output for computed property!
      return this.counter >= 10 ? '10 or more' : 'Less than 10';
    }
  }




  }
  
  

</script>