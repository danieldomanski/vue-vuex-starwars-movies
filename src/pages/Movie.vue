<template>
  <div v-if="isLoading" class="flex justify-center items-center h-64">
    <TrinityRingsSpinner :animation-duration="1000" :size="60" :color="'#667eea'" />
  </div>

  <div class v-else>
    <div class="bg-white shadow w-full p-8">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">{{ currentMovie.title }}</h1>
        <p class="text-lg">{{ formattedDate }}</p>
      </div>

      <p class="text-gray-600 mt-2">directed by {{ currentMovie.director }}</p>
      <p class="text-gray-600 mb-8">produced by {{ currentMovie.producer }}</p>
      <p class="text-lg">{{ currentMovie.opening_crawl }}</p>
    </div>

    <div class="flex justify-around bg-white shadow w-full p-8 mt-8">
      <div class="flex flex-col items-center text-lg text-purple-700">
        <Icon icon="user" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Characters</h3>
        <p class="font-bold">{{ currentMovie.characters.length }}</p>
      </div>
      <div class="flex flex-col items-center text-lg text-purple-700">
        <Icon icon="globe" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Planets</h3>
        <p class="font-bold">{{ currentMovie.planets.length }}</p>
      </div>
      <div class="flex flex-col items-center text-lg text-purple-700">
        <Icon icon="users" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Species</h3>
        <p class="font-bold">{{ currentMovie.species.length }}</p>
      </div>
      <div class="flex flex-col items-center text-purple-700">
        <Icon icon="star" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3 text-lg">Starships</h3>
        <p class="font-bold text-lg">{{ currentMovie.starships.length }}</p>
      </div>
    </div>
    <section class="mt-8">
      <div
        v-if="movieReviews.length === 0"
        class="flex flex-col justify-center items-center bg-white shadow p-8 text-lg"
      >
        <p>This film has no reviews yet.</p>
        <p class="font-bold text-indigo-600">Don't be shy. Always be the bravest!</p>
      </div>
      <div v-else class="bg-white p-8 shadow">
        <h3 class="text-2xl font-bold uppercase mb-8">Reviews</h3>
        <ReviewItem
          :key="review.url"
          v-for="(review, index) in movieReviews"
          :review="review"
          :withBorder="index !== movieReviews.length - 1"
        />
      </div>
    </section>

    <!-- <button
      @click="toggleReviewForm"
      class="transition duration-500 ease-in-out self-end border-2 border-indigo-600 border-solid text-indigo-600 hover:bg-indigo-500 hover:text-white py-2 px-6 font-bold uppercase mt-8 w-full h-16"
    >
      Add review
    </button>-->

    <section class="flex flex-col justify-center items-center bg-white p-8 shadow mt-16">
      <div
        class="w-full flex justify-between items-center cursor-pointer"
        @click="toggleReviewForm"
      >
        <div class>
          <h3 class="text-xl font-bold uppercase">Add review</h3>
          <p class>Tell others how did you like the movie</p>
        </div>
        <Icon :icon="isReviewFormOpened ? 'chevron-up' : 'chevron-down'" size="large" />
      </div>
      <transition name="fadeHeight">
        <div class="w-full">
          <ReviewForm :isOpened="isReviewFormOpened" />
        </div>
      </transition>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { TrinityRingsSpinner } from "epic-spinners";
import Icon from "../components/Icon.vue";
import ReviewForm from "../components/ReviewForm.vue";
import ReviewItem from "../components/ReviewItem.vue";

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
    ReviewItem
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
      return this.reviews.filter(review => review.id === this.$route.params.id);
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
    this.$store.dispatch("loadMovie", this.$route.params.id);
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