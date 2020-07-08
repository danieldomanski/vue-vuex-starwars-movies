<template>
  <div v-if="isLoading" class="flex justify-center items-center h-64">
    <TrinityRingsSpinner :animation-duration="1000" :size="60" :color="'#667eea'" />
  </div>

  <div class v-else>
    <Box>
      <div class="flex flex-col-reverse md:flex-row items-center justify-between">
        <h1 class="text-3xl font-bold">{{ currentMovie.title }}</h1>
        <p class="sm:text-lg">{{ formattedDate }}</p>
      </div>

      <p class="text-gray-600 mt-2">directed by {{ currentMovie.director }}</p>
      <p class="text-gray-600 mb-8">produced by {{ currentMovie.producer }}</p>
      <p class="md:text-lg">{{ currentMovie.opening_crawl }}</p>
    </Box>

    <Box class="flex flex-col sm:flex-row justify-around mt-8">
      <div class="flex flex-col items-center text-lg text-purple-700">
        <Icon icon="user" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Characters</h3>
        <p class="font-bold">{{ currentMovie.characters.length }}</p>
      </div>
      <div class="flex flex-col items-center text-lg text-purple-700 mt-6 sm:mt-0">
        <Icon icon="globe" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Planets</h3>
        <p class="font-bold">{{ currentMovie.planets.length }}</p>
      </div>
      <div class="flex flex-col items-center text-lg text-purple-700 mt-6 sm:mt-0">
        <Icon icon="users" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Species</h3>
        <p class="font-bold">{{ currentMovie.species.length }}</p>
      </div>
      <div class="flex flex-col items-center text-purple-700 mt-6 sm:mt-0">
        <Icon icon="star" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3 text-lg">Starships</h3>
        <p class="font-bold text-lg">{{ currentMovie.starships.length }}</p>
      </div>
    </Box>
    <section class="mt-8">
      <Box
        v-if="movieReviews.length === 0"
        class="flex flex-col justify-center items-center md:text-lg text-center"
      >
        <p class="text-gray-600">This film has no reviews yet.</p>
        <p class="font-bold text-gray-600">Don't be shy. Always be the bravest!</p>
      </Box>
      <Box v-else class="bg-white p-8 shadow">
        <h3 class="text-2xl font-bold uppercase mb-8">Reviews</h3>
        <ReviewItem
          :key="review.url"
          v-for="(review, index) in movieReviews"
          :review="review"
          :withBorder="index !== movieReviews.length - 1"
        />
      </Box>
    </section>

    <Box class="flex flex-col justify-center items-center mt-8">
      <div
        class="w-full flex justify-between items-center cursor-pointer px-2"
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
import { TrinityRingsSpinner } from "epic-spinners";
import Icon from "../components/Common/Icon.vue";
import ReviewForm from "../components/Reviews/ReviewForm.vue";
import ReviewItem from "../components/Reviews/ReviewItem.vue";
import Box from "../components/Common/Box.vue";

export default {
  data: function() {
    return {
      isReviewFormOpened: false
    };
  },
  components: {
    TrinityRingsSpinner,
    Icon,
    ReviewForm,
    ReviewItem,
    Box
  },
  computed: {
    formattedDate: function() {
      const date = new Date(this.currentMovie.release_date);

      return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    movieReviews: function() {
      return this.reviews.filter(
        review => review.movie_id === this.$route.params.id
      );
    },
    ...mapGetters(["currentMovie", "isLoading", "hasError", "reviews"])
  },
  methods: {
    toggleReviewForm: function() {
      this.isReviewFormOpened = !this.isReviewFormOpened;
    },
    ...mapActions(["loadMovie"])
  },
  created() {
    if (this.currentMovie.id !== this.$route.params.id) {
      this.$store.dispatch("loadMovie", this.$route.params.id);
    }
  }
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