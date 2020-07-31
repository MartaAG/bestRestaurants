import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: []
  },
  mutations: {},
  actions: {
    async fetchRestaurants() {
      const response = await axios.get("/search", {
        entity_id:263,
        entity_type: "city",
        sort:"rating",
        order: "desc"
      });

      console.log(response.data)
    }
  },
  getters: {
    allRestaurants: state => state.restaurants
  },
  modules: {}
});
