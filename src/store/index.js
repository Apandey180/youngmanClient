import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import home from './modules/home'
import createLogger from 'vuex/dist/logger'

// https://vuex.vuejs.org
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})