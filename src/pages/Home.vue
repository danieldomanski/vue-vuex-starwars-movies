<template>
  <section>
    <div class="w-full flex items-center my-8">
      <input
        class="shadow h-16 pl-6 flex-1"
        placeholder="Search for a movie"
        v-model="search"
      />
      <button
        class="bg-indigo-500 ml-4 text-white h-16 px-6 font-bold uppercase"
      >
        Search
      </button>
    </div>
    <MoviesList :search="search" />
  </section>
</template>
<script>
import MoviesList from "../components/MoviesList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data: function() {
    return {
      search: "",
    };
  },
  components: {
    MoviesList,
  },
};
</script>
