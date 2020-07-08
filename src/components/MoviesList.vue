<template>
  <div class="max-w-5xl">
    <div
      class="flex justify-between items-center bg-indigo-500 h-10 my-8 text-white uppercase shadow px-8"
    >
      <div class="flex items-center">
        <Icon icon="list" size="small" />
        <h2 class="ml-2 font-bold">Sort by</h2>
      </div>

      <div class="flex items-center">
        <div
          class="flex items-center cursor-pointer mr-6"
          :class="{ 'font-bold': filter === 'title' }"
          @click="setFilter('title')"
        >
          <p class="mr-1">title</p>
          <Icon
            v-show="filter === 'title'"
            :icon="direction === 'asc' ? 'chevron-down' : 'chevron-up'"
            size="small"
          />
        </div>
        <div
          class="flex items-center cursor-pointer mr-6"
          :class="{ 'font-bold': filter === 'director' }"
          @click="setFilter('director')"
        >
          <p class="mr-1">director</p>
          <Icon
            v-show="filter === 'director'"
            :icon="direction === 'asc' ? 'chevron-down' : 'chevron-up'"
            size="small"
          />
        </div>
        <div
          class="flex items-center cursor-pointer"
          :class="{ 'font-bold': filter === 'release_date' }"
          @click="setFilter('release_date')"
        >
          <p class="mr-1">released</p>
          <Icon
            v-show="filter === 'release_date'"
            :icon="direction === 'asc' ? 'chevron-down' : 'chevron-up'"
            size="small"
          />
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="flex justify-center items-center">
      <TrinityRingsSpinner
        :animation-duration="1000"
        :size="60"
        :color="'#667eea'"
      />
    </div>
    <MovieItem
      v-else
      class="card"
      v-for="movie in sortedMovies"
      :movie="movie"
      :key="movie.url"
      :index="getMovieIndex(movie)"
    />
    {{ search }}
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import Icon from "./Icon.vue";
import { TrinityRingsSpinner } from "epic-spinners";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MovieItem,
    Icon,
    TrinityRingsSpinner,
  },
  data: function() {
    return {
      filter: "title",
      direction: "asc",
    };
  },
  props: ["search"],
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
    getMovieIndex: function(movie) {
      return movie.url.substring(
        movie.url.lastIndexOf("/") - 1,
        movie.url.length - 1
      );
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
    ...mapActions(["loadMovies"]),
  },
  created() {
    if (this.movies.length === 0) {
      this.$store.dispatch("loadMovies");
    }
  },
};
</script>
