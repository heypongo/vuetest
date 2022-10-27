<template>
  <TheHeader />
  <!-- The Container -->
  <div class="mx-2 md:mx-24 lg:mx-52" >
   <RestaurantHeader v-if="!isLoading" :restaurantDetails ="restaurantDetails" :messageStateOpening ="messageStateOpening" />
   <RestaurantHeaderSkeleton v-else-if="isLoading" />
   <RestaurantPhotos v-if="!isLoading" :restaurantDetails ="restaurantDetails" />
   <RestaurantPhotosSkeleton v-else-if="isLoading" />
  </div>
  <TheFooter />
</template>

<script>
export default {
  name: "RestaurantDetails",
};
</script>
  
<script setup>
import { inject, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import RestaurantHeader from "@/components/Restaurant/RestaurantHeader.vue"
import RestaurantHeaderSkeleton from "@/components/Restaurant/RestaurantHeaderSkeleton.vue"
import RestaurantPhotos from "@/components/Restaurant/RestaurantPhotos.vue"
import RestaurantPhotosSkeleton from "@/components/Restaurant/RestaurantPhotosSkeleton.vue"

const axios = inject("axios");
const route = useRoute();
const store = useStore();
const isLoading = computed(() => ref(store.state.isLoading).value ) ;
let restaurantId = route.params.restaurantId;
const restaurantDetails = computed(
  () => ref(store.state.restaurantDetails).value
);
const messageStateOpening = restaurantDetails.is_closed
  ? "Momentarily closed"
  : "Actually open";

let fetchRestaurantDetails = async () => {
  store.dispatch("setIsLoading", true);
  await axios
    .get(`businesses/${restaurantId}`, {
      params: {},
    })
    .then((response) => {
      store.dispatch("setRestaurantDetails", response.data);
    })
    .finally(() => {
      store.dispatch("setIsLoading", false);
    });
};

fetchRestaurantDetails();
</script>


