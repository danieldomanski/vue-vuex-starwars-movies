<template>
  <router-link :to="{ name: 'Movie', params: { id: index } }">
    <Box class="hover:shadow-lg mt-4">
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-600">{{ movie.director }}</p>
        <p>{{ movie.release_date }}</p>
      </div>
      <h1 class="font-bold text-xl pt-1 pb-1">{{ movie.title }}</h1>
      <p
        v-if="movieReviewsCount !== 0"
        class="text-xs font-bold text-indigo-500 uppercase mt-2"
      >
        {{ formattedReviewsStr() }}
      </p>
    </Box>
  </router-link>
</template>
<script>
import Box from "../Common/Box.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Box,
  },
  computed: {
    movieReviewsCount: function() {
      return this.reviews.filter((review) => review.movie_id === this.movie.id)
        .length;
    },
    ...mapGetters(["reviews"]),
  },
  methods: {
    formattedReviewsStr: function() {
      const reviewsCount = this.movieReviewsCount;

      return reviewsCount > 1
        ? `${reviewsCount} reviews`
        : `${reviewsCount} review`;
    },
  },
  props: ["movie", "index"],
};
</script>
