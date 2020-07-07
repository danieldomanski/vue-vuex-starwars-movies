<template>
  <div class="max-w-5xl">
    <div class="flex justify-between items-center bg-indigo-500 h-10 text-white uppercase">
      <div class="font-bold cursor-pointer" @click="setFilter('title')">title</div>
      <div class="font-bold cursor-pointer" @click="setFilter('director')">director</div>
      <div class="font-bold cursor-pointer" @click="setFilter('released')">released</div>
      <div>description</div>
    </div>
    <p class="text-red-500 font-bold">{{ filter }}, {{ direction }}</p>
    <MovieItem
      class="card"
      v-for="(movie, index) in movies"
      :movie="movie"
      :key="movie.url"
      :index="index"
    />
  </div>
</template>
<script>
import MovieItem from "../components/MovieItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MovieItem
  },
  data: function() {
    return {
      filter: "title",
      direction: "asc"
    };
  },
  computed: mapGetters({
    movies: "allMovies"
  }),
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
    ...mapActions(["loadMovies"])
  },
  created() {
    this.$store.dispatch("loadMovies");
  }
};
</script>
