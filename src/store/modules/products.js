import shop from '../../api/shop'
import * as events from '../mutation-types'

// initial state
const state = () => ({
  all: [],
  categories_options: [],
  materials_options: [],
  additional_options: [],
  width_options: [],

  categories_selected : [1],
  materials_selected: [], 
  additional_selected: [],
  width_selected: [], 

  recent_products: []
})

// getters
const getters = {
  categories_selected: (state) => {
    return state.categories_selected;
  },
  materials_selected: (state) => {
    return state.materials_selected;
  },
  additional_selected: (state) => {
    return state.additional_selected;
  },
  width_selected: (state) => {
    return state.width_selected;
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    // Pass filter properties here
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  },

  getAllCategories ({ commit }) {
    shop.getAllCategories(categories => {
      commit(events.UPDATE_CATEGORIES_FILTER, categories)
    })
  },

  getAllMaterials ({ commit }) {
    shop.getAllMaterials(materials => {
      commit(events.UPDATE_MATERIALS_FILTER, materials)
    })
  },

  getAllAdditional ({ commit }) {
    shop.getAllAdditional(additional => {
      commit(events.UPDATE_ADDITIONAL_FILTER, additional)
    })
  },

  getAllWidth ({ commit }) {
    shop.getAllWidth(width => {
      commit(events.UPDATE_WIDTH_FILTER, width)
    })
  },

  getRecentProducts ({ commit }) {
    shop.getRecentProducts(recentProducts => {
      commit(events.FETCH_RECENT_SEARCH_PRODUCTS, recentProducts)
    })
  },
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  [events.UPDATE_CATEGORIES_FILTER] (state, categories_options) {
    state.categories_options = categories_options
  },

  [events.UPDATE_MATERIALS_FILTER] (state, materials_options) {
    state.materials_options = materials_options
  },

  [events.UPDATE_ADDITIONAL_FILTER] (state, additional_options) {
    state.additional_options = additional_options
  },

  [events.UPDATE_WIDTH_FILTER] (state, width_options) {
    state.width_options = width_options
  },

  [events.FETCH_RECENT_SEARCH_PRODUCTS] (state, recent_products) {
    state.recent_products = recent_products
  },

  [events.DECREMENT_ITEM_QTY_IN_INVENTORY] (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}