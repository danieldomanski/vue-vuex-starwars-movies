<template>
  <div v-if="isLoading" class="flex justify-center items-center h-64">
    <Spinner />
  </div>

  <div class v-else>
    <MovieInfo :currentMovie="currentMovie" />
    <MovieReviews :movieReviews="movieReviews" />
    <Box class="flex flex-col justify-center items-center mt-8">
      <div
        class="w-full flex justify-between items-center cursor-pointer pr-2"
        @click="toggleReviewForm"
      >
        <div class>
          <h3 class="text-xl font-bold uppercase">Add review</h3>
          <p class>Tell others how did you like the movie</p>
        </div>
        <Icon
          icon="chevron-down"
          size="large"
          class="transform transition duration-300 ease-in-out"
          :class="isReviewFormOpened ? 'rotate-180' : 'rotate-0'"
        />
      </div>
      <transition name="fadeHeight">
        <div class="w-full">
          <ReviewForm
            :movie="currentMovie"
            :isOpened="isReviewFormOpened"
            :toggleForm="toggleReviewForm"
          />
        </div>
      </transition>
    </Box>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Icon from "../components/Common/Icon.vue";
import Spinner from "../components/Common/Spinner.vue";
import Box from "../components/Common/Box.vue";
import ReviewForm from "../components/Reviews/ReviewForm.vue";
import MovieReviews from "../components/Movies/MovieReviews.vue";
import MovieInfo from "../components/Movies/MovieInfo.vue";

export default {
  data: function() {
    return {
      isReviewFormOpened: false,
    };
  },
  components: {
    Spinner,
    Icon,
    ReviewForm,
    MovieReviews,
    MovieInfo,
    Box,
  },
  computed: {
    movieReviews: function() {
      return this.reviews.filter(
        (review) => review.movie_id === this.$route.params.id
      );
    },
    ...mapGetters(["currentMovie", "isLoading", "hasError", "reviews"]),
  },
  methods: {
    toggleReviewForm: function() {
      this.isReviewFormOpened = !this.isReviewFormOpened;
    },
    ...mapActions(["loadMovie"]),
  },
  created() {
    if (this.currentMovie.id !== this.$route.params.id) {
      this.$store.dispatch("loadMovie", this.$route.params.id);
    }
  },
};
</script>
<style>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: margin-top 0.3s, visibility 0.3s, max-height 0.5s,
    opacity 0.2s ease-in-out 0.25s;
  max-height: 480px;
  visibility: visible;
  opacity: 1;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  transition: margin-top 0.3s 0.35s, visibility 0.3s 0.35s,
    max-height 0.5s 0.35s, opacity 0.2s ease-in-out;
  opacity: 0;
  visibility: hidden;
  max-height: 0px;
}
</style>
