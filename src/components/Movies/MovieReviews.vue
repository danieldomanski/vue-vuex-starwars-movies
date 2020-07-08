<template>
  <section class="mt-8">
    <Box
      v-if="movieReviews.length === 0"
      class="flex flex-col justify-center items-center md:text-lg text-center"
    >
      <p class="text-gray-600">This film has no reviews yet.</p>
      <p class="font-bold text-gray-600">Don't be shy. Always be the bravest!</p>
    </Box>
    <Box v-else class="bg-white p-8 shadow">
      <h3 class="text-2xl font-bold uppercase mb-8">Reviews</h3>
      <ReviewItem
        :key="review.url"
        v-for="(review, index) in movieReviews"
        :review="review"
        :withBorder="index !== movieReviews.length - 1"
      />
    </Box>
  </section>
</template>
<script>
import Box from "../Common/Box.vue";
import ReviewItem from "../Reviews/ReviewItem.vue";
export default {
  components: {
    ReviewItem,
    Box
  },
  props: ["movieReviews"]
};
</script>