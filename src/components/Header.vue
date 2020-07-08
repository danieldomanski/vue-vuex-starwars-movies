<template>
  <header class="flex items-center justify-between bg-indigo-500 px-4 py-6 sm:p-8 shadow-lg">
    <router-link
      to="/"
      class="flex flex-row-reverse sm:flex-row items-center text-indigo-100 mr-4 sm:mr-0"
    >
      <h1
        class="font-bold uppercase sm:text-xl ml-2 sm:ml-0 text-white sm:mr-2 hover:text-indigo-100 transition duration-200 ease-in-out"
      >Star wars Movies</h1>
      <Icon icon="film" size="medium"></Icon>
    </router-link>

    <router-link
      to="/reviews"
      class="font-bold text-white uppercase hover:text-indigo-100 transition duration-200 ease-in-out text-center text-sm"
    >My reviews</router-link>
  </header>
</template>

<script>
import Icon from "./Common/Icon.vue";

export default {
  components: {
    Icon
  }
};
</script>
