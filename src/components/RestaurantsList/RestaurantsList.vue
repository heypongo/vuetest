<template>
  <div v-if="!isLoading" class="restaurantList">
    <router-link
      v-for="restaurant in store.state.restaurantList"
      class="w-fit h-fit"
      :key="`mi-${restaurant.id}`"
      :to="{
        name: 'restaurantDetails',
        params: { restaurantId: restaurant.id },
      }"
    >
      <RestaurantCard v-if="!isLoading" :restaurant="restaurant" />
    </router-link>
  </div>
  <div v-if="isLoading" class="restaurantList">
    <div v-for="(i, index) in 6" class="w-fit h-fit" :key="index">
      <RestaurantCardSkeleton v-if="isLoading" />
    </div>
  </div>
</template>
<script>
export default {
  name: "RestaurantsList",
};
</script>
<script setup>
import { ref, computed, inject } from "vue";
import { useStore } from "vuex";
import RestaurantCard from "@/components/RestaurantsList/components/RestaurantCard.vue";
import RestaurantCardSkeleton from "./components/RestaurantCardSkeleton.vue";
const axios = inject("axios");
const store = useStore();
const locationUser = store.state.locationUser;
const isLoading = computed(() => ref(store.state.isLoading).value);

let initRestaurantList = async () => {
  await axios
    .get("businesses/search", {
      params: {
        location: locationUser,
        limit: 6,
      },
    })
    .then((response) => {
      store.dispatch("setRestaurantList", response.data.businesses);
      console.log("ici");
    })
    .finally(() => {
      store.dispatch("setIsLoading", false);
    });
};

if (store.state.restaurantList.length == 0) {
  store.dispatch("setIsLoading", true);
  initRestaurantList();
}
</script>

<style scoped lang="scss">
.restaurantList {
  @apply flex flex-col md:flex-row md:flex-wrap items-center content-center justify-center;
  margin: 30px;
  padding: 5px;
  a {
    margin: 5px;
  }
}
</style>

