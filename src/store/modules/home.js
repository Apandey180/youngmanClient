import home from '../../api/home'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    featuredCategories: null,
    offers: null,
    carousel: null,
    topReviews: null,
    specials: null
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
  },
  specials: (state, getters) => {
    return state.specials;
  },
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
      },

      getTopReviews({commit}) {
        home.getTopReviews(reviews => {
          commit('setTopReviews', reviews)
        })
      },
      
      getSpeciality({commit}) {
        home.getSpeciality(specials => {
          commit('setSpeciality', specials)
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
      setTopReviews (state, topReviews) {
        state.topReviews = topReviews
      },
      setSpeciality (state, specials) {
        state.specials = specials
      },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}