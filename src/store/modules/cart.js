import shop from '../../api/shop'
import * as events from '../mutation-types'

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
        title: product.title,
        price: product.price,
        quantity
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
    commit('setCheckoutStatus', null)
    debugger;
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit(events.ADD_TO_CART, { id: product.id })
      } else {
        commit(events.INCREMENT_ITEM_QTY_IN_CART, cartItem)
      }
      // remove 1 item from stock
      commit('products/'+ events.DECREMENT_ITEM_QTY_IN_INVENTORY, { id: product.id }, { root: true })
    }
  }
}

// mutations
const mutations = {
  [events.ADD_TO_CART] (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  [events.INCREMENT_ITEM_QTY_IN_CART] (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
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