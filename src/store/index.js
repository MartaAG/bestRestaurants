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
    rating:4.3,
    cuisine:"french"
 },
 { id:6,
   name: "omamo",
   rating:4.0,
   cuisine:"korean"
},
  { id:7,
    name: "hfras",
    rating:3.9,
    cuisine:"polish"
  },
  { id:8,
    name: "gfsdaa",
    rating:3.5,
    cuisine:"french"
  },
  { id:9,
    name: "eryqo",
    rating:3.0,
    cuisine:"taiwanese"
  },
  { id:10,
    name: "nuthing",
    rating:2.0,
    cuisine:"english"
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
