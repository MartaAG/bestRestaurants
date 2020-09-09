import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
    currentRestaurant: [],
    cachedRestaurantsByID: new Map()
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
    setRestaurant: (state, restaurant) =>
      (state.currentRestaurant = restaurant),

    addToCache: (state, restaurant) => {
      state.cachedRestaurantsByID.set(restaurant.id, restaurant);
    }
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

    // get restaurant from cache or fetch it if not available
    async fetchRestaurantFromCache({ commit, state }, ID) {
      if (state.cachedRestaurantsByID.has(ID)) {
        commit("setRestaurant", state.cachedRestaurantsByID.get(ID));
      } else {
        try {
          const response = await axios.get("/restaurant", {
            params: {
              res_id: ID
            }
          });
          commit("setRestaurant", response.data);
          commit("addToCache", response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  },
  getters: {
    //populate with list of restaurants
    allRestaurants: state => state.restaurants,
    //get one restaurant by id
    resByID: state => state.currentRestaurant
  },
  modules: {}
});
