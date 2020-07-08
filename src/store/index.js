import Vue from "vue";
import Vuex from "vuex";

import movies from "./modules/movies";
import reviews from "./modules/reviews";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { movies, reviews },
});
