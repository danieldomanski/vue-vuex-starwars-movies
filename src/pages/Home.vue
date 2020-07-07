<template>
  <section>
    <h2 class="text-xl">Star wars movie list</h2>
    <MoviesList />
  </section>
</template>
<script>
import MoviesList from "../components/MoviesList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MoviesList,
  },
};
</script>
