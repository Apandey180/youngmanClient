<template>


<div>
  <b-card no-body :img-src="item.image" img-alt="Card image" img-height="200" img-width="200" img-left class="mb-3">
    <b-card-body v-bind:title="item.title" >
      <b-row>
      <b-col lg="6">
        <label>Duration</label>
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend>
            <b-button variant="danger" @click="decreaseDuration(item)">Subtract</b-button>
          </b-input-group-prepend>

          <b-form-input type="number" min="0.00" v-model="item.duration" readonly="readonly"></b-form-input>

          <b-input-group-append>
            <b-button variant="success" @click="increaseDuration(item)">Add</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      </b-row>
      <b-row>
      <b-col lg="6">
        <label>Quantity</label>
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend>
            <b-button variant="danger" @click="decrementItemQuantity(item)">Subtract</b-button>
          </b-input-group-prepend>

          <b-form-input type="number" min="0.00" v-model="item.quantity" readonly="readonly"></b-form-input>

          <b-input-group-append>
            <b-button variant="success" @click="incrementItemQuantity(item)">Add</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      </b-row>
      <b-row>
      <b-col>
        <b-button pill variant="outline-danger" @click="removeItemFromCart(item)" class="mb-2" size="sm">Remove</b-button>
      </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</div>
    
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
    props:['item'],
        data() {
            return {
           }
        },
        computed:{
          ...mapGetters("cart", {
            quantity: "quantity",
            duration: "duration"
    })
        },
        methods: {
          incrementItemQuantity(item) {
            this.$store.dispatch('cart/addProductToCart', product)
          },
          decrementItemQuantity(item) {
            this.$store.dispatch('cart/decrementQuantityInCart', product)
          },
          removeItemFromCart(item) {
            this.$store.dispatch('cart/removeItemFromCart', product)
          },
          increaseDuration(item) {
            this.$store.dispatch('cart/increaseDuration', product)
          },
          decreaseDuration(item) {
            this.$store.dispatch('cart/decreaseDuration', product)
          }
        }
    }
</script>

<style >
.small{
    width: 40%;
    font-size: 9px;
}
</style>