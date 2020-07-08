<template>
  <div class="about">
    <h1 class="text-4xl font-bold text-center">Reviews</h1>
    <ul v-if="reviews.length !== 0" class="mt-8">
      <Box
        class="mt-6 hover:shadow-lg cursor-pointer"
        :key="review.url"
        v-for="review in reviews"
      >
        <div class="flex flex-col-reverse sm:flex-row justify-between mb-4">
          <h2 class="font-bold text-2xl text-indigo-600">
            {{ review.movie_title }}
          </h2>
          <router-link :to="`/movies/${review.movie_id}`">
            <button
              class="transition duration-200 ease-in-out border border-solid border-indigo-500 text-indigo-500 sm:ml-4 mb-4 sm:mb-0 text-white py-2 px-6 font-bold uppercase hover:bg-indigo-500 hover:text-white text-sm"
            >
              Go to movie
            </button>
          </router-link>
        </div>

        <ReviewItem :review="review" />
      </Box>
    </ul>
    <div v-else>
      <Box
        class="flex flex-col items-center justify-center bg-white shadow p-8 mt-8 text-center"
      >
        <p class="text-gray-600">You haven't written any reviews yet!</p>
        <router-link to="/" class="font-bold text-indigo-600 uppercase mt-4"
          >Browse movies we prepared for you</router-link
        >
      </Box>
    </div>
  </div>
</template>
<script>
import ReviewItem from "../components/Reviews/ReviewItem.vue";
import Box from "../components/Common/Box.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ReviewItem,
    Box,
  },
  computed: {
    ...mapGetters(["reviews", "allMovies"]),
  },
  methods: {
    getReviewedMovie: function(review) {
      return this.allMovies.find((movie) => {
        return movie.id === review.movie_id;
      });
    },
  },
};
</script>
