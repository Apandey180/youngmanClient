import shop from '../../api/shop'

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
      commit('setCategories', categories)
    })
  },

  getAllMaterials ({ commit }) {
    shop.getAllMaterials(materials => {
      commit('setMaterials', materials)
    })
  },

  getAllAdditional ({ commit }) {
    shop.getAllAdditional(additional => {
      commit('setAdditional', additional)
    })
  },

  getAllWidth ({ commit }) {
    shop.getAllWidth(width => {
      commit('setWidth', width)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  setCategories (state, categories_options) {
    state.categories_options = categories_options
  },

  setMaterials (state, materials_options) {
    state.materials_options = materials_options
  },

  setAdditional (state, additional_options) {
    state.additional_options = additional_options
  },

  setWidth (state, width_options) {
    state.width_options = width_options
  },

  decrementProductInventory (state, { id }) {
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