<template>
  <div
    class="flex justify-between items-center bg-indigo-500 py-2 md:py-0 md:h-10 my-8 text-white uppercase shadow px-8"
  >
    <div class="flex items-center">
      <Icon icon="list" size="small" />
      <h2 class="ml-2 font-bold">Sort by</h2>
    </div>

    <div class="flex flex-col justify-center sm:flex-row items-center">
      <div
        class="flex items-center cursor-pointer sm:mr-6 py-1 sm:py-0"
        :class="{ 'font-bold': filter === 'title' }"
        @click="setFilter('title')"
      >
        <p class="mr-1">title</p>
        <Icon
          v-show="filter === 'title'"
          icon="chevron-down"
          size="small"
          class="transform transition duration-200 ease-in-out"
          :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
        />
      </div>
      <div
        class="flex items-center cursor-pointer sm:mr-6 py-1 sm:py-0"
        :class="{ 'font-bold': filter === 'director' }"
        @click="setFilter('director')"
      >
        <p class="mr-1">director</p>
        <Icon
          v-show="filter === 'director'"
          icon="chevron-down"
          size="small"
          class="transform transition duration-200 ease-in-out"
          :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
        />
      </div>
      <div
        class="flex items-center cursor-pointer py-1 sm:py-0"
        :class="{ 'font-bold': filter === 'release_date' }"
        @click="setFilter('release_date')"
      >
        <p class="mr-1">released</p>
        <Icon
          v-show="filter === 'release_date'"
          icon="chevron-down"
          size="small"
          class="transform transition duration-200 ease-in-out"
          :class="direction === 'asc' ? 'rotate-180' : 'rotate-0'"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "../Common/Icon.vue";
export default {
  components: {
    Icon
  },
  props: ["filter", "direction", "setFilter"]
};
</script>