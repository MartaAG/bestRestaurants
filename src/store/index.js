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
    getOneRestaurant: (state, restaurantByID) =>
      (state.restaurantByID = restaurantByID)
  },
  actions: {
    //get list of restaurants
    async fetchRestaurants({ commit }) {
      const response = await axios
        .get("/search", {
          params: {
            entity_id: 263,
            entity_type: "city",
            sort: "rating"
          }
        })
        .catch(error => {
          alert(error.message);
        });

      commit("setRestaurants", response.data.restaurants);
    },

    //get one restaurant by ID
    async fetchRestaurantById({ commit }, ID) {
      const response = await axios
        .get("/restaurant", {
          params: {
            res_id: ID
            //this.$route.params.id
          }
        })
        .catch(error => {
          console.log(error);
        });
      console.log("answer:" + response.data);
      commit("getOneRestaurant", response.data);
    }
  },
  getters: {
    //populate with list of restaurants
    allRestaurants: state => state.restaurants,
    resByID: state => state.restaurantByID
    // restaurantsByID: state => {
    //   let restaurantsByID = new Map();
    //   for (const location of state.restaurants) {
    //     restaurantsByID.set(location.restaurant.id, location.restaurant);
    //   }
    //   return restaurantsByID;
    // }
  },
  modules: {}
});
