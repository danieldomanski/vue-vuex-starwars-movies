<template>
  <div>
    <div :key="movie.url" class="card" v-for="movie in movies">
      <div class="content">
        <div class="header">{{ movie.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    HelloWorld,
  },
  computed: mapGetters({
    movies: "allMovies",
  }),
  methods: mapActions(["loadMovies"]),
  created() {
    this.$store.dispatch("loadMovies");
  },
};
</script>
