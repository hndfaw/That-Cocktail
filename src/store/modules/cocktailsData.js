// fetch data here
import axios from "axios";

const state = {
  drinks: [],
  loading: false,
  searchHappened: false
};

const getters = {
  allDrinks: state => state.drinks,
  loadingStatus: state => state.loading,
  searchHappened: state => state.searchHappened
};

const actions = {
  async fetchDrinks({ commit }, payload) {
    const { searchType, searchTerm } = payload;
    commit("setLoadingStatus", true);
    commit("setSearchHappened", true);
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchType}=${searchTerm}`
    );
    commit("setDrinks", response.data.drinks);
    commit("setLoadingStatus", false);
  }
};

const mutations = {
  setDrinks: (state, drinks) => (state.drinks = drinks),
  setLoadingStatus: (state, s) => (state.loading = s),
  setSearchHappened: state => (state.searchHappened = true)
};

export default {
  state,
  getters,
  actions,
  mutations
};
