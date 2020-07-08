<template>
  <router-link :to="{ name: 'Movie', params: { id: index } }">
    <Box class="hover:shadow-lg mt-4">
      <div class="flex justify-between">
        <p class="text-sm text-gray-600">{{ movie.director }}</p>
        <p>{{ movie.release_date }}</p>
      </div>
      <h1 class="font-bold text-xl pt-1 pb-1">{{ movie.title }}</h1>
    </Box>
  </router-link>
</template>
<script>
import Box from "./Box.vue";
export default {
  components: {
    Box
  },
  props: ["movie", "index"]
};
</script>
