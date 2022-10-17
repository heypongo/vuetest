import { inject } from "vue";
const axios = inject("axios");

export default async function  fetchMediaList(searchPath, additionalParams) {
        try {
            await axios
            .get(searchPath, additionalParams)
            .then((response) => {
              this.$store.dispatch("setRestaurantList", response.data.businesses);
              console.log(response.data);
            });
        } catch (error) {
            console.log(error);
        } finally {
            console.log("it's finish");
        }
}
