import test from "../../api/test";

// initial state
const state = () => ({
  childData: null
});

// getters
const getters = {
};

// actions
const actions = {
  submitChildForm({ commit, state }, childData) {
    commit("setChildData", childData);
  }
};

// mutations
const mutations = {
  setChildData(state, childData) {
    state.childData = childData;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
