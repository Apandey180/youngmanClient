import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
        duration: product.duration
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
  itemsInCart: (state, getters) => {
    return getters.cartProducts.reduce((accum, item) => accum + item.quantity, 0)
  },

  getItemFromCart: (state) => (id) => {
    return state.items.find(item => item.id === id)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    debugger;
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('addToCart', { product: product })
      } else {
        commit('incrementItemQtyInCart', {id: product.id})
      }
      // remove 1 item from stock
      commit('products/decrementQuantityInInventory', { id: product.id }, { root: true })
    }
  },

  decrementQuantityInCart ({ state, commit }, product) {
    commit('decrementQuantityInCart', {id: product.id});
    commit('products/incrementQuantityInInventory', { id: product.id }, { root: true })
  },

  increaseDuration ({ state, commit }, product) {
    commit('increaseDuration', { id: product.id })
  },

  decreaseDuration ({ state, commit }, product) {
    commit('decreaseDuration', { id: product.id })
  },

  removeItemFromCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id)
    const cartQuantity = cartItem.quantity;
    commit('removeItemFromCart', {id: product.id});
    commit('products/addQuantityToInventory', { id: product.id, quantity: cartQuantity }, { root: true })
  }

}

// mutations
const mutations = {
  addToCart (state, { product }) {
    product.quantity = 1;
    state.items.push(product);
  },

  incrementItemQtyInCart (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  decrementQuantityInCart (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--;
    if(cartItem.quantity == 0) {
      state.items.filter(item => item.id !== id)
    }
  },

  removeItemFromCart (state, { id }) {
    state.items.filter(item => item.id !== id)
  },

  increaseDuration (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.duration++;
  },

  decreaseDuration (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    if(cartItem.duration > 2)
      cartItem.duration--;
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}