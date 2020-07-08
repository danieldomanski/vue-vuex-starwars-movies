<template>
  <div class="max-w-5xl">
    <MoviesSortBar
      :filter="filter"
      :direction="direction"
      :setFilter="setFilter"
    />
    <div v-if="isLoading" class="flex justify-center items-center">
      <Spinner />
    </div>
    <MovieItem
      v-else-if="sortedMovies.length !== 0"
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
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem.vue";
import MoviesSortBar from "./MoviesSortBar.vue";
import Icon from "../Common/Icon.vue";
import Box from "../Common/Box.vue";
import Spinner from "../Common/Spinner.vue";

export default {
  components: {
    MovieItem,
    MoviesSortBar,
    Icon,
    Spinner,
    Box,
  },
  data: function() {
    return {
      filter: "title",
      direction: "asc",
    };
  },
  computed: {
    ...mapGetters({
      movies: "allMovies",
      isLoading: "isLoading",
    }),
    sortedMovies: function() {
      const filter = this.filter;
      const sortedMovies = this.getSortedMovies();

      return this.direction === "des" ? sortedMovies.reverse() : sortedMovies;
    },
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
  },
};
</script>
