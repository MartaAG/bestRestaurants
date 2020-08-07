import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: []
  },
  mutations: {
    setRestaurants: (state, restaurants) => (state.restaurants = restaurants)
  },
  actions: {
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
          console.log(error);
        });

      commit("setRestaurants", response.data.restaurants);
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
