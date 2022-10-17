import { createStore } from "vuex";

export default createStore({
	state: {
		locationUser:"NYC",
		restaurantList: [],
		isLoading: false,
		restaurantDetails: [],
	},
	mutations: {
		SET_RESTAURANT_LIST(state, restaurantList) {
			state.restaurantList = restaurantList;
		},
		SET_IS_LOADING(state, isLoading) {
			state.isLoading = isLoading;
		},
		SET_RESTAURANT_DETAILS(state, dataState) {
			state.restaurantDetails = dataState;
		},
	},
	actions: {
		setRestaurantList({ commit }, restaurantList) {
			commit("SET_RESTAURANT_LIST", restaurantList);
		},
		setIsLoading({ commit }, isLoading) {
			commit("SET_IS_LOADING", isLoading);
		},
		setRestaurantDetails({ commit }, dataState) {
			commit("SET_RESTAURANT_DETAILS", dataState);
		},
	},
	modules: {},
});
