<template>
    <div class=" card">
      <div  class="card__image-wrap">
        <img
        :src="restaurant.image_url"
        alt=""
        class="card__image"
      />
      </div>

      <div class="card__details">
        <h2 class="card__title">
          {{restaurant.name}}  
        </h2>
        <p  v-if="restaurant.location" class="card__address">
          {{restaurant.location.display_address.join()}}
        </p>
        <p class="card__price">
          price : {{restaurant.price}}
        </p>
        <p class="card__rating">
          rating : {{restaurant.rating}}
        </p>
        <a
          :href="restaurant.url"
          @click.stop
          target="_blank"
          class="btn__card"
          >Book Table 👉</a
        >
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
      @apply bg-white rounded-lg shadow-lg my-5 hover:scale-105 ease-in-out duration-500;
  }
  .card__image-wrap {
      width: 300px;
      height: 200px;
      @apply rounded-t-lg overflow-hidden;
  }
  .card__image {
      width: 300px;
      height: 200px;
      @apply object-cover;
  }
  .card__details {
      @apply p-6 text-base;
  }
  .card__title {
      @apply font-bold mb-2 text-2xl text-gray-800;
  }
  .card__address, .card__price, .card__rating {
      @apply text-gray-800 mb-2;
  }
  .btn__card {
      @apply text-gray-800 text-base hover:text-lg underline ease-in-out duration-300  ;
  }
 </style>