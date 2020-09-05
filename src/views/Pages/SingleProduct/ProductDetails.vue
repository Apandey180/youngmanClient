<template>
<div>
<h3>{{ product.item_price | currency}}/month</h3>
<small>Offer avilable for duration above 6 months</small>

<h3>Product Delivery</h3>

<!-- <b-form-input type="number" placeholder="Enter Delivery Pincode"   maxlength="6" pa >
  <b-button variant="primary">Primary</b-button>
</b-form-input> -->
<div>
     <p style="font-size: 13px;margin-bottom: 5px;margin-left: 10px; color:black">Width</p>
          
              <input type = "text" id= width name = "width" class = "small_input">&nbsp;
              <input type = "text" id= width name = "width" class = "small_input">
          
          <p style="font-size: 13px;margin-bottom: 5px;margin-left: 10px; color:black">Type</p>
          <input type = "text" id= "min_width" name = "min_width" class = "small_input">&nbsp;
          <input type = "text" id= "max_width" name = "max_width" class = "small_input">
          <p style="font-size: 13px;margin-bottom: 5px;margin-left: 10px; color:black">Height</p>
         <select id="height" name="height" class="small_input">
         <option value="1m">1m</option>
          <option value="2.2m">2.2m</option>
          <option value="2.3m">2.3m</option>
          <option value="3m">3m</option>
          <option value="3.5m">3.5m</option>
          <option value="4m">4m</option>
          </select>
       
</div>


<div class="container">
  
        <b-row class="qty_badges">
          <b-col>
            <p style="font-size: 13px;margin-bottom: 5px;margin-left: 10px; color:black">Quantity</p>
            <b-badge>
              <span class="minus_icon" @click="decreaseQuantity()">-</span>
              <span>{{quantity}}</span>
              <span class="plus_icon" @click="increaseQuantity()">+</span>
            </b-badge>
          </b-col>
          <b-col>
            <p style="font-size: 13px;margin-bottom: 5px;margin-left: 10px; color:black">Duration (Months)</p>
            <b-badge>
              <span class="minus_icon" @click="decreaseDuration()">-</span>
              <span>{{duration}}</span>
              <span class="plus_icon" @click="increaseDuration()">+</span>
            </b-badge>
          </b-col>
        </b-row>

    </div>

        <div class="send_fb_blk">
          <b-input-group style="margin: 0 auto;box-shadow: 1px 1px 5px 1px #ccc;" class="mt-3">
            <b-form-input placeholder="Enter delivery pincode"></b-form-input>
            <b-input-group-append>
              <b-button variant="success" class="rent_now_button">Check Availability</b-button>
            </b-input-group-append>
          </b-input-group>
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

<div style="margin-left:-1314px;margin-top:-83px ">
<center>
      <b-button variant="primary" align="center" @click="addProductToCart(product)">Add to Cart</b-button>
      <b-button variant="primary" align="center" @click="rentNow(product)">Rent Now</b-button>
</center>
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
<style scoped>
.small_input{
   width: 100px; 
   height: 30px;
   background-image: linear-gradient(to right,#ffeb3b 0%, #ffffff 90%, #ffffff 90%, #ffffff 100%) !important;
     border-radius: 35px;
     border: none;

}
.minus_icon{float: left;}
    .plus_icon{float: right;}
 .send_fb_blk {
      margin-top: 60px;
    }
    .send_fb_blk .form-control {
      border: none;
      background: transparent;
    }
    .send_fb_blk .input-group {
      border: 1px solid #ccc;
      border-radius: 20px;
      width: 65%;
    }
    .send_fb_blk .btn {
      border-radius: 20px !important;
      padding: 5px 25px;
      margin: 2px;
      background: #fee501;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      border-color: #fee501;
    }

       .qty_badges .badge {
      min-width: 210px;
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 18px;
      background-color: #fee501;
    }
    .qty_badges {
      margin-top: 58px;}
    .small_images img {
      margin-bottom: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
</style>