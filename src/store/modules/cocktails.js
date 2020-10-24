// fetch data here
import axios from "axios";

const state = {
  drinks: [],
  loading: false
};

const getters = {
  allDrinks: state => state.drinks,
  loadingStatus: state => state.loading
};

const actions = {
  async fetchDrinks({ commit }, payload) {
    const { searchType, searchTerm } = payload;
    commit("setLoadingStatus", true);
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchType}=${searchTerm}`
    );
    commit("setDrinks", response.data.drinks);
    commit("setLoadingStatus", false);
  }
};

const mutations = {
  setDrinks: (state, drinks) => (state.drinks = drinks),
  setLoadingStatus: (state, s) => (state.loading = s)
};

export default {
  state,
  getters,
  actions,
  mutations
};
