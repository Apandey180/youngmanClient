import customer from "../../api/customer";

// initial state
const state = () => ({
    customer: null
});

// getters
const getters = {
};

// actions
const actions = {
  submitCustomerForm({ commit, state }, customerData) {
    commit("setCustomerData", customerData);
  }
};

// mutations
const mutations = {
    setCustomerData(state, customerData) {
    state.customer = customerData;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
