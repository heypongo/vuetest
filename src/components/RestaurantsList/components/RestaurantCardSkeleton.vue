<template>
    <div class=" card">
      <div  class="card__image-wrap">
      </div>

      <div class="card__details">
        <h2 class="card__title">
        </h2>
        <p class="card__address">
        </p>
        <p class="card__price">
        </p>
        <p class="card__rating">
        </p>
        <a href=""></a>
      </div>
    </div>
</template>
<script>
  export default {
    name: "RestaurantCard",
  };
</script>
<script setup>
const props = defineProps({
  restaurant: Object
})
</script>
<style scoped lang="scss">
  .card {
      width: 300px;
      height: 450px;
      @apply bg-slate-100 rounded-lg shadow-lg my-5;
  }
  .card__image-wrap {
      width: 300px;
      height: 200px;
      @apply bg-gray-300 rounded-t-lg overflow-hidden animate-pulse;
  }
  .card__image {
      width: 300px;
      height: 200px;
      @apply bg-gray-300 object-cover animate-pulse;
  }
  .card__details {
      @apply  p-6 h-full ;
  }
  .card__title {
      @apply mb-2 w-full h-5 rounded-sm bg-gray-300 animate-pulse;
  }
  .card__address, .card__price, .card__rating {
      @apply mb-2 w-full h-5 rounded-sm bg-gray-300 animate-pulse;
  }
  .btn__card {
      @apply w-full h-5 rounded-sm bg-gray-300 animate-pulse;
  }
 </style>