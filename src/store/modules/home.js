import home from '../../api/home'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    featuredCategories: null,
    offers: null,
    carousel: null
})

// getters
const getters = {
    featuredCategories: (state, getters, rootState) => {
        return state.featuredCategories;
  },

  offers: (state, getters) => {
    return state.offers;
  },
  carousel: (state, getters) => {
    return state.carousel;
  }
}

// actions
const actions = {
    getCarouselData ({ commit }) {
        home.getCarouselData(carouselData => {
          commit('setCarouselData', carouselData)
        })
      },

      getFeaturedCategories ({ commit }) {
        home.getFeaturedCategories(featuredCategories => {
          commit('setFeaturedCategories', featuredCategories)
        })
      }, 

      getOffers ({ commit }) {
        home.getOffers(offers => {
          commit('setOffers', offers)
        })
      }
}

// mutations
const mutations = {
    setFeaturedCategories (state, featuredCategories) {
        state.featuredCategories = featuredCategories
      },
      setCarouselData (state, carouselData) {
        state.carousel = carouselData
      },
      setOffers (state, offers) {
        state.offers = offers
      },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}