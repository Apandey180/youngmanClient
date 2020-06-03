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

          <b-form-input type="number" min="0.00" v-model="cartItem.duration" readonly="readonly"></b-form-input>

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

          <b-form-input type="number" min="0.00" v-model="cartItem.quantity" readonly="readonly"></b-form-input>

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
       
        computed: {
        cartItem () {
            return this.$store.state.cart.items.find(cartitems => cartitems.id === this.item.id)
          },
        },
        methods: {
          incrementItemQuantity(item) {
            this.$store.dispatch('cart/addProductToCart', item)
          },
          decrementItemQuantity(item) {
            this.$store.dispatch('cart/decrementQuantityInCart', item)
          },
          removeItemFromCart(item) {
            this.$store.dispatch('cart/removeItemFromCart', item)
          },
          increaseDuration(item) {
            this.$store.dispatch('cart/increaseDuration', item)
          },
          decreaseDuration(item) {
            this.$store.dispatch('cart/decreaseDuration', item)
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