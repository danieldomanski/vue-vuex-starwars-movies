<template>
  <section>
    <label class="mt-8 text-gray-600 font-bold uppercase text-xs">Find movies</label>
    <div class="w-full flex flex-col md:flex-row md:items-center mt-2">
      <input
        class="shadow focus:shadow-lg py-4 md:py-0 h-16 pl-4 sm:pl-6 flex-1 transition duration-200 ease-in-out text-sm sm:text-base"
        placeholder="What's the movie title you are looking for?"
        v-on:keyup.enter="searchFilms"
        v-model="searchInput"
      />

      <button
        class="flex items-center bg-indigo-500 md:ml-4 text-white h-12 sm:h-16 px-6 font-bold uppercase hover:bg-indigo-400 transition duration-200 ease-in-out justify-center mt-4 md:mt-0"
        @click="searchFilms"
      >
        <Icon icon="search" size="small" class="text-white mr-2" />
        <p>Search</p>
      </button>
    </div>
    <MoviesList />
  </section>
</template>
<script>
import MoviesList from "../components/Movies/MoviesList.vue";
import Icon from "../components/Common/Icon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data: function() {
    return {
      searchInput: ""
    };
  },
  components: {
    MoviesList,
    Icon
  },
  actions: {
    ...mapActions(["searchMovies"])
  },
  methods: {
    searchFilms: function() {
      this.$store.dispatch("searchMovies", this.searchInput);
    }
  },
  created: function() {
    this.searchInput = "";
  }
};
</script>
