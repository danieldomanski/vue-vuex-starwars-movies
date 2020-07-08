<template>
  <div class :class="{'border-b border-solid border-gray-200 mb-8 pb-8': withBorder}">
    <div class="mb-4">
      <h3 class="font-bold text-xl">{{ review.topic }}</h3>
      <h4 class="text-gray-600">{{ review.name }}</h4>
    </div>
    <p>{{ review.message }}</p>
  </div>
</template>
<script>
export default {
  props: ["review", "movie", "withBorder"]
};
</script>
