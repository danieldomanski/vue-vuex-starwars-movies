import * as types from "../mutation-types";

const defaultReviewInput = {
  name: "",
  topic: "",
  message: "",
};

// initial state
const state = {
  reviews: [],
  reviewInput: { ...defaultReviewInput },
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
  addReview({ commit, state }, movie) {
    console.log({ movie });
    commit(types.SET_REVIEWS, {
      review: {
        ...state.reviewInput,
        movie_id: movie.id,
        movie_title: movie.title,
        created_date: new Date().toLocaleDateString(),
      },
    });
  },
};

// mutations
const mutations = {
  [types.UPDATE_NAME](state, name) {
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
  [types.RESET_REVIEW_INPUT](state) {
    state.reviewInput = { ...defaultReviewInput };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
