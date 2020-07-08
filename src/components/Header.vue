<template>
  <header class="flex justify-between bg-indigo-500 p-8 shadow-lg">
    <router-link to="/" class="flex items-center text-indigo-100">
      <h1 class="font-bold uppercase text-xl text-white mr-2">Star wars Movies</h1>
      <Icon icon="film" size="medium"></Icon>
    </router-link>

    <div id="nav">
      <router-link to="/reviews" class="font-bold text-white uppercase">My reviews</router-link>
    </div>
  </header>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  }
};
</script>
