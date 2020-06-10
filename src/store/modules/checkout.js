import checkout from "../../api/checkout";

// initial state
const state = () => ({
    customer: null,
    customer_documents: null,
    shipping_details: null
});

// getters
const getters = {
};

// actions
const actions = {
  submitCustomerForm({ commit, state }, customerData) {
    commit("setCustomerData", customerData);
  },

  submitCustomerDocuments({ commit, state }, customerDocuments) {
    commit("setCustomerDocuments", customerDocuments);
  },
  
  submitShippingDetails({ commit, state }, shippingDetails) {
    commit("setShippingDetails", shippingDetails);
  }
};

// mutations
const mutations = {
    setCustomerData(state, customerData) {
    state.customer = customerData;
  },
  setCustomerDocuments(state, customerDocuments) {
    state.customer_documents = customerDocuments;
  },
  setShippingDetails(state, shippingDetails) {
    state.shipping_details = shippingDetails;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
