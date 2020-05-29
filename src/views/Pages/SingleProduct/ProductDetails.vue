<template>
<div>
<h3></h3>
<h2>Rs /month</h2>
offer avilable for duration above 6 months

<h3>Product Delivery</h3>


<b-form-input type="text" placeholder="Enter Delivery Pincode"   maxlength="6" pa >
<b-button variant="primary">Primary</b-button>
</b-form-input>

<div class="container">
    <div class="row">
        <div class="col-sm-6">
              <h2>Quantity</h2>

            <div class="input-group">
                
                  <button v-on:click="decreaseCounter(0)" class="button rounded shadow success">
                                  <b-icon-dash></b-icon-dash>


                </button>
                
    <b-form-input v-model="counter" placeholder="Enter your name"  value="counter" ></b-form-input>
                
                  <button v-on:click="increaseCounter(30)" class="button rounded shadow warning">
                 <b-icon-plus></b-icon-plus>

                </button>
                
            </div>
        </div>
        <div class="col-sm-6">
                                      <h2>Duration(Days)</h2>

            <div class="input-group">
                <button v-on:click="decreasedays(0)" class="button rounded shadow success">
                                   <b-icon-dash></b-icon-dash>

                </button>
                
             <b-form-input v-model="counter1" placeholder="Enter your name"  value="counter1" ></b-form-input>
                
                  <button v-on:click="increasedays(31)" class="button rounded shadow warning">
                                  <b-icon-plus></b-icon-plus>

                </button>
                
            </div>
        </div>
    </div>
</div>


<h3>Warranty</h3>

<p>{{product.description}}
</p>

<h3>Product Description</h3>

<p>{{product.description}}</p>
</div>
</template>

<script>



  export default{
  

    props:['product'],

  data() { 

    return {

counter: 0,
counter1:0

    }   // Initial Value 
  },
  methods: {
    increaseCounter(increaseLimit) { // Increase
      if (this.counter < increaseLimit) this.counter++;
    },
    decreaseCounter(decreaseLimit) { // Decrease
      if (this.counter > decreaseLimit) this.counter--;
    }, 
    resetCounter() { // Reset
      this.counter = 0;
    },
       increasedays(increaseLimit) { // Increase
      if (this.counter1 < increaseLimit) this.counter1++;
    },
    
    decreasedays(decreaseLimit) { // Decrease
      if (this.counter1 > decreaseLimit) this.counter1--;
    }, 
 
  },
  computed: {
    output() { // Output for computed property!
      return this.counter >= 10 ? '10 or more' : 'Less than 10';
    }
  }




  }
  
  

</script>