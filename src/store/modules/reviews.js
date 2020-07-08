import * as types from "../mutation-types";

// initial state
const state = {
  reviews: [],
  reviewInput: {
    name: "",
    topic: "",
    message: "",
  },
};

// getters
const getters = {
  inputName: (state) => state.reviewInput.name,
  inputTopic: (state) => state.reviewInput.topic,
  inputMessage: (state) => state.reviewInput.message,
  reviews: (state) => state.reviews,
};

// actions
const actions = {
  addReview({ commit, state }, id) {
    commit(types.SET_REVIEWS, {
      review: {
        ...state.reviewInput,
        movie_id: id,
        created_date: new Date().toLocaleDateString(),
      },
    });
  },
};

// mutations
const mutations = {
  [types.UPDATE_NAME](state, name) {
    console.log({ state, name });
    state.reviewInput.name = name;
  },
  [types.UPDATE_TOPIC](state, topic) {
    state.reviewInput.topic = topic;
  },
  [types.UPDATE_MESSAGE](state, message) {
    state.reviewInput.message = message;
  },
  [types.SET_REVIEWS](state, { review }) {
    state.reviews = state.reviews.concat(review);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
