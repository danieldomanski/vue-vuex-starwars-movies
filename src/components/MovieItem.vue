<template>
  <router-link :to="{ name: 'Movie', params: { id: index } }">
    <div
      class="w-full bg-white shadow p-8 my-4 cursor-pointer hover:shadow-lg transition duration-500 ease-in-out"
    >
      <div class="flex justify-between">
        <p class="text-sm text-gray-600">{{ movie.director }}</p>
        <p>{{ movie.release_date }}</p>
      </div>
      <h1 class="font-bold text-xl pt-1 pb-1">{{ movie.title }}</h1>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["movie", "index"],
};
</script>
