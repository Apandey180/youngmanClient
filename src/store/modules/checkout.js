import checkout from "../../api/checkout";

// initial state
const state = () => ({
    customer: null,
    customer_id: null,
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
  },
  
  setCustomerId({ commit, state }, customerId) {
    commit("setCustomerId", customerId);
  }
};

// mutations
const mutations = {
    setCustomerData(state, customerData) {
    state.customer = customerData;
  },
  setCustomerId(state, customerId) {
    state.customer_id = customerId;
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
