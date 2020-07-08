<template>
  <div>
    <Box>
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <h1 class="text-3xl font-bold">{{ currentMovie.title }}</h1>
        <p class="sm:text-lg">{{ currentMovie.date_string }}</p>
      </div>

      <p class="text-gray-600 mt-2">directed by {{ currentMovie.director }}</p>
      <p class="text-gray-600 mb-8">produced by {{ currentMovie.producer }}</p>
      <p class="md:text-lg">{{ currentMovie.opening_crawl }}</p>
    </Box>

    <Box class="flex flex-col sm:flex-row justify-around mt-8">
      <div class="flex flex-col items-center text-lg text-purple-700">
        <Icon icon="user" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Characters</h3>
        <p class="font-bold">{{ currentMovie.characters.length }}</p>
      </div>
      <div
        class="flex flex-col items-center text-lg text-purple-700 mt-6 sm:mt-0"
      >
        <Icon icon="globe" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Planets</h3>
        <p class="font-bold">{{ currentMovie.planets.length }}</p>
      </div>
      <div
        class="flex flex-col items-center text-lg text-purple-700 mt-6 sm:mt-0"
      >
        <Icon icon="users" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3">Species</h3>
        <p class="font-bold">{{ currentMovie.species.length }}</p>
      </div>
      <div class="flex flex-col items-center text-purple-700 mt-6 sm:mt-0">
        <Icon icon="star" size="large" />
        <h3 class="uppercase text-gray-700 mt-2 mb-3 text-lg">Starships</h3>
        <p class="font-bold text-lg">{{ currentMovie.starships.length }}</p>
      </div>
    </Box>
  </div>
</template>
<script>
import Box from "../Common/Box.vue";
import Icon from "../Common/Icon.vue";
export default {
  components: {
    Box,
    Icon,
  },
  props: ["currentMovie"],
};
</script>
