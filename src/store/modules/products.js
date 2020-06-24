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
  },

  getProductById: state => product_id => {
    shop.getProductById(product => {
      console.log(product);
      return product;
    }, product_id);
  }
}

// actions
const actions = {
  getAllProducts ({ commit, state }, filterProperties = null) {
    // Pass filter properties here
    const params = new URLSearchParams();
    if (filterProperties != null) {
      params.append('order_by', filterProperties.sort_by);
    }
    params.append('category', state.categories_selected);

    shop.getProducts(params,
      products => {
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
  },

  getRecentProducts ({ commit }) {
    shop.getRecentProducts(recentProducts => {
      commit('setRecentProducts', recentProducts)
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

  setRecentProducts (state, recent_products) {
    state.recent_products = recent_products
  },

  decrementQuantityInInventory (state, { id, quantity }) {
    const product = state.all.find(product => product.id === id)
    product.inventory -= quantity;
  },

  incrementQuantityInInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory++
  },

  addQuantityToInventory (state, { id, quantity }) {
    const product = state.all.find(product => product.id === id)
    product.inventory += quantity
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}