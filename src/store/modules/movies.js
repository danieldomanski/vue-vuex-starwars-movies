import * as api from "../../api";
import * as types from "../mutation-types";

// initial state
const state = {
  movies: [],
};

// getters
const getters = {
  allMovies: (state) => state.movies,
};

// actions
const actions = {
  async loadMovies({ commit }) {
    const movies = await api.getAllFilms();
    console.log({ movies });
    commit(types.FETCHED_MOVIES, { movies: movies.results });
  },
};

// mutations
const mutations = {
  [types.FETCHED_MOVIES](state, { movies }) {
    state.movies = movies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
