import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
    restaurantByID: []
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
    },
    //get restaurant by ID
    setCurrentRestaurant: (state, restaurantByID) =>
      (state.restaurantByID = restaurantByID)
  },
  actions: {
    //get list of restaurants
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
    },

    //get one restaurant by ID
    async fetchRestaurantById({ commit }, ID) {
      try {
        const response = await axios.get("/restaurant", {
          params: {
            res_id: ID
          }
        });

        commit("setCurrentRestaurant", response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  getters: {
    //populate with list of restaurants
    allRestaurants: state => state.restaurants,
    //get one restaurant by id
    resByID: state => state.restaurantByID
  },
  modules: {}
});
