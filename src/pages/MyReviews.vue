<template>
  <div class="about">
    <h1 class="text-4xl font-bold text-center">Reviews</h1>
    <div v-if="reviews.length !== 0">
      <div class="bg-white shadow p-8 mt-8" :key="review.url" v-for="(review) in reviews">
        <div class="flex justify-between mb-4">
          <h2 class="font-bold text-2xl text-indigo-600">{{ allMovies[review.movie_id].title }}</h2>
          <router-link :to="`/movies/${review.movie_id}`">
            <button
              class="transition duration-200 ease-in-out border border-solid border-indigo-500 text-indigo-500 ml-4 text-white py-2 px-6 font-bold uppercase hover:bg-indigo-500 hover:text-white"
            >Go to movie</button>
          </router-link>
        </div>

        <ReviewItem :review="review" />
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col items-center justify-center bg-white shadow p-8 mt-8">
        <p class="text-gray-600">You haven't written any reviews yet!</p>
        <router-link
          to="/"
          class="font-bold text-indigo-600 uppercase mt-4"
        >Browse movies we prepared for you</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ReviewItem from "../components/ReviewItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ReviewItem
  },
  computed: {
    ...mapGetters(["reviews", "allMovies"])
  },
  methods: {
    getReviewedMovie: function(review) {
      this.movies.find(movie => movie.id === review.movie_id);
    }
  }
};
</script>