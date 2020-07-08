<template>
  <div class="max-w-5xl">
    <div
      class="flex justify-between items-center bg-indigo-500 py-2 md:py-0 md:h-10 my-8 text-white uppercase shadow px-8"
    >
      <div class="flex items-center">
        <Icon icon="list" size="small" />
        <h2 class="ml-2 font-bold">Sort by</h2>
      </div>

      <div class="flex flex-col justify-center sm:flex-row items-center">
        <div
          class="flex items-center cursor-pointer sm:mr-6 py-1 sm:py-0"
          :class="{ 'font-bold': filter === 'title' }"
          @click="setFilter('title')"
        >
          <p class="mr-1">title</p>
          <Icon
            v-show="filter === 'title'"
            icon="chevron-down"
            size="small"
            class="transform transition duration-200 ease-in-out"
            :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
          />
        </div>
        <div
          class="flex items-center cursor-pointer sm:mr-6 py-1 sm:py-0"
          :class="{ 'font-bold': filter === 'director' }"
          @click="setFilter('director')"
        >
          <p class="mr-1">director</p>
          <Icon
            v-show="filter === 'director'"
            icon="chevron-down"
            size="small"
            class="transform transition duration-200 ease-in-out"
            :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
          />
        </div>
        <div
          class="flex items-center cursor-pointer py-1 sm:py-0"
          :class="{ 'font-bold': filter === 'release_date' }"
          @click="setFilter('release_date')"
        >
          <p class="mr-1">released</p>
          <Icon
            v-show="filter === 'release_date'"
            icon="chevron-down"
            size="small"
            class="transform transition duration-200 ease-in-out"
            :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
          />
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center">
      <TrinityRingsSpinner :animation-duration="1000" :size="60" :color="'#667eea'" />
    </div>
    <MovieItem
      v-else-if="sortedMovies.length !== 0"
      class="card"
      v-for="movie in sortedMovies"
      :movie="movie"
      :key="movie.url"
      :index="movie.id"
    />
    <div v-else>
      <Box class="flex justify-center text-lg text-gray-600">
        <p class="text-center">We couldn't find any movies :(</p>
      </Box>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import Icon from "../Common/Icon.vue";
import Box from "../Common/Box.vue";
import { TrinityRingsSpinner } from "epic-spinners";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MovieItem,
    Icon,
    TrinityRingsSpinner,
    Box
  },
  data: function() {
    return {
      filter: "title",
      direction: "asc"
    };
  },
  computed: {
    ...mapGetters({
      movies: "allMovies",
      isLoading: "isLoading"
    }),
    sortedMovies: function() {
      const filter = this.filter;
      const sortedMovies = this.getSortedMovies();

      return this.direction === "des" ? sortedMovies.reverse() : sortedMovies;
    }
  },
  methods: {
    setFilter: function(name) {
      if (this.filter === name) {
        this.toggleDirection();
        return;
      }

      this.filter = name;
      this.direction = "asc";
    },
    toggleDirection: function() {
      this.direction = this.direction === "asc" ? "des" : "asc";
    },
    sortAlphabetically: function() {
      const filter = this.filter;
      return this.movies.sort(function(a, b) {
        if (a[filter] < b[filter]) {
          return -1;
        }
        if (a[filter] > b[filter]) {
          return 1;
        }
        return 0;
      });
    },
    sortByDate: function() {
      const filter = this.filter;
      return this.movies.sort(function(a, b) {
        return new Date(b[filter]) - new Date(a[filter]);
      });
    },
    getSortedMovies: function() {
      switch (this.filter) {
        case "title":
        case "director":
          return this.sortAlphabetically();
          break;
        case "released":
          return this.sortByDate();
          break;
        default:
          return this.sortAlphabetically();
          break;
      }
    },
    ...mapActions(["loadMovies"])
  },
  created() {
    if (this.movies.length === 0) {
      this.$store.dispatch("loadMovies");
    }
  }
};
</script>
