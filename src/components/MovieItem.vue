<template>
  <router-link :to="{ name: 'Movie', params: { id: index + 1 } }">
    <div class="w-full bg-white shadow p-8 my-4 cursor-pointer hover:shadow-lg">
      <p class="text-sm text-gray-600">{{ movie.producer }}</p>
      <h1 class="font-bold text-xl pt-2 pb-1">{{ movie.title }}</h1>
      <p>{{ movie.opening_crawl }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["movie", "index"],
};
</script>
