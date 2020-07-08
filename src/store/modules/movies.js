import * as types from "../mutation-types";
import * as api from "../../api";
// initial state
const state = {
  movies: [],
  currentMovie: {},
  isLoading: false,
  hasError: false,
};

// getters
const getters = {
  allMovies: (state) => state.movies,
  currentMovie: (state) => state.currentMovie,
  isLoading: (state) => state.isLoading,
  hasError: (state) => state.hasError,
};

// actions
const actions = {
  async loadMovies({ commit }) {
    const movies = await api.getAllFilms();
    console.log({ movies });
    commit(types.FETCHED_MOVIES, { movies: movies.results });
    try {
      commit(types.FETCHED_MOVIES_PENDING, { isLoading: true });
      const movies = await api.getAllFilms();

      commit(types.FETCHED_MOVIES, { movies: movies.results });
      setTimeout(() => {
        commit(types.FETCHED_MOVIES_PENDING, { isLoading: false });
      }, 750);
    } catch {
      commit(types.FETCHED_MOVIES_ERROR, { hasError: true });
      commit(types.FETCHED_MOVIES_PENDING, { isLoading: false });
    }
  },
  async loadMovie({ commit }, id) {
    try {
      commit(types.FETCHED_MOVIES_PENDING, { isLoading: true });
      const movie = await api.getFilmById(id);

      commit(types.FETCHED_MOVIE, { currentMovie: movie });
      setTimeout(() => {
        commit(types.FETCHED_MOVIES_PENDING, { isLoading: false });
      }, 750);
    } catch {
      commit(types.FETCHED_MOVIES_ERROR, { hasError: true });
      commit(types.FETCHED_MOVIES_PENDING, { isLoading: false });
    }
  },
};

// mutations
const mutations = {
  [types.FETCHED_MOVIES](state, { movies }) {
    console.log({ movies });
    state.movies = movies;
  },
  [types.FETCHED_MOVIE](state, { currentMovie }) {
    state.currentMovie = currentMovie;
  },
  [types.FETCHED_MOVIES_PENDING](state, { isLoading }) {
    state.isLoading = isLoading;
  },
  [types.FETCHED_MOVIES_ERROR](state, { hasError }) {
    state.hasError = hasError;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
