const state = () => ({
  user: JSON.parse(localStorage.getItem('youngman.user'))
})

// getters
const getters = {
    name: (state, getters, rootState) => {
        return capitalizeFirstLetter(user.name);
    },
    email: (state, getters) => {
      return user.email;
    },
    firstName: (state, getters) => {
        return user.firstname;
    },
    lastName: (state, getters) => {
        return user.lastname;
    },
    address: (state, getters) => {
        return user.firstname;
    },
    city: (state, getters) => {
        return user.city;
    },
    country: (state, getters) => {
        return user.country;
    },
    pincode: (state, getters) => {
        return user.pincode;
    },
    about: (state, getters) => {
        return user.about;
    },
    orders: (state, getters) => {
        return user.orders;
    },
    outstanding_amount: (state, getters) => {
        return user.outstanding;
    }
}

// actions
const actions = {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

// mutations
const mutations = {
 
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}