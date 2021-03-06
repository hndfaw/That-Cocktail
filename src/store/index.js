import Vuex from "vuex";
import Vue from "vue";
import cocktails from "./modules/cocktailsData";

// load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    cocktails
  }
});
