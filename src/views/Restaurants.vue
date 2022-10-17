<template>
  <TheHeader />
  <!-- The Container -->
  <div class="md:mx-52">
    <RestaurantsList />
  </div>
  <TheFooter />
</template>
<script>
export default {
  name: "Restaurants",
};
</script>
    
<script setup>
// import { inject, ref } from "vue";
// import { useStore } from "vuex";
import RestaurantsList from "@/components/RestaurantsList/RestaurantsList.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

// const axios = inject("axios");
// const store = useStore();
// const locationUser = store.state.locationUser

// let fetchRestaurantList = async () => {
//   store.dispatch("setIsLoading", true);
//   await axios
//     .get("businesses/search", {
//       params: {
//         location: locationUser,
//         limit: 6,
//       },
//     })
//     .then((response) => {
//       store.dispatch("setRestaurantList", response.data.businesses);
//     })
//     .finally(() => {
//       store.dispatch("setIsLoading", false);
//     });
// };
// fetchRestaurantList();
</script>