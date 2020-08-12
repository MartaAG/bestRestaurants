import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: []
  },
  mutations: {
    setRestaurants: (state, restaurants) => {
      //check if featured_image exists, if no change it to placeholder.
      for (var location of restaurants) {
        location.restaurant.featured_image = location.restaurant.featured_image
          ? location.restaurant.featured_image
          : "https://cdn.vuetifyjs.com/images/cards/cooking.png";
      }
      state.restaurants = restaurants;
    }
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        const response = await axios.get("/search", {
          params: {
            entity_id: 263,
            entity_type: "city",
            sort: "rating"
          }
        });

        commit("setRestaurants", response.data.restaurants);
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  getters: {
    allRestaurants: state => state.restaurants,
    restaurantsByID: state => {
      let restaurantsByID = new Map();
      for (const location of state.restaurants) {
        restaurantsByID.set(location.restaurant.id, location.restaurant);
      }
      return restaurantsByID;
    }
  },
  modules: {}
});
