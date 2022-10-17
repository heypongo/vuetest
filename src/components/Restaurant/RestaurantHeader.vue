<template>
  <div class="restaurant__header">
    <div class="header__hero">
      <img :src="restaurantDetails.image_url" alt="image hero" />
    </div>
    <div class="header__infos">
      <h1>{{ restaurantDetails.name }}</h1>
      <div
        class="header__state"
        :class="restaurantDetails.is_closed ? 'state--closed' : 'state--open'"
      >
        {{ messageStateOpening }}
      </div>
      <p class="restaurant__phone">phone : {{ restaurantDetails.phone }}</p>
      <p class="restaurant__address">location : {{ restaurantAddress }}</p>
      <p class="restaurant__price">price : {{ restaurantDetails.price }}</p>
      <div class="restaurant__rating">
        rating :
        <div class="flex items-center ml-2">
          <svg
            v-for="index of 5"
            :key="index"
            class="w-5 h-5"
            :class="
              index <= restaurantDetails.rating
                ? 'text-yellow-400'
                : 'text-slate-300'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </div>
        <p class="ml-2">{{ restaurantDetails.rating }} / 5</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed} from "vue"
const props = defineProps({
  restaurantDetails: {
    type: Object,
  },
  messageStateOpening:{
    type: String,
  }
});
const restaurantAddress = props.restaurantDetails.location.display_address ? props.restaurantDetails.location.display_address.join(' ') : ' ';
</script>
<style scoped lang="scss">
.restaurant {
  &__rating {
    @apply flex flex-col md:flex-row;
  }
  &__header {
    @apply w-full flex flex-col md:flex-row justify-center my-5 p-5  bg-gray-100 rounded-xl;
    .header {
      &__hero {
        @apply w-52 md:w-80 h-52 md:h-80 rounded-xl overflow-hidden;
        img {
          @apply object-cover h-full w-full;
        }
      }
      &__infos {
        @apply flex flex-col p-2 pl-8;
      }
      &__state {
        @apply text-center my-2 rounded-md;
        &.state--closed {
          @apply bg-red-100 text-red-600;
        }
        &.state--open {
          @apply bg-green-100 text-green-600;
        }
      }
    }
  }
}
</style>