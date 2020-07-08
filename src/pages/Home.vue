<template>
  <section>
    <div class="w-full flex items-center my-8">
      <input class="shadow h-16 pl-6 flex-1" placeholder="Search for a movie" v-model="searchInput" />
      <button class="flex items-center bg-indigo-500 ml-4 text-white h-16 px-6 font-bold uppercase">
        <Icon icon="search" size="small" class="text-white mr-2" />Search
      </button>
    </div>
    <MoviesList :search="search" />
  </section>
</template>
<script>
import MoviesList from "../components/MoviesList.vue";
import Icon from "../components/Icon.vue";
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
  }
};
</script>
