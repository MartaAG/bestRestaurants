import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [
      { id:1,
        name: "jfgd",
        rating:5,
        cuisine:"french"
     },
     { id:2,
       name: "lorem",
       rating:4.9,
       cuisine:"japanese"
    },
    { id:3,
      name: "tudum",
      rating:4.7,
      cuisine:"polish"
   },
   { id:4,
     name: "badum",
     rating:4.5,
     cuisine:"french"
  },
  { id:5,
    name: "dunama",
    rating:5,
    cuisine:"french"
 }
   ]
  },
  mutations: {},
  actions: {},
  getters: {
    allRestaurants: state => state.restaurants
  },
  modules: {}
});
