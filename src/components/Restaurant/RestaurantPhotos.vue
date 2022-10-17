<template>
  <div class="restaurant__photos">
    <h2 class="photos__title">Photos</h2>
    <div class="photos__list">
      <img
        v-for="(photo, index) of restaurantDetails.photos"
        :key="index"
        :src="photo"
        alt="photo restaurant"
      />
    </div>
  </div>
</template>
<script setup>
defineProps({
  restaurantDetails: {
    type: Object,
  },
});
</script>
<style scoped lang="scss">
.restaurant {
  &__photos {
    @apply w-full flex flex-col my-2 md:my-8 p-5 bg-gray-800 rounded-xl;
    .photos {
      &__title {
        @apply text-slate-100 my-5;
      }
      &__list {
        @apply flex overflow-x-scroll h-72 md:h-96;
        img {
          @apply h-full mr-2 lg:mr-5 rounded-xl;
        }
      }
    }
  }
}
</style>