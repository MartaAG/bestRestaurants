import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ErrorCodes from "../views/ErrorCodes.vue";
import index from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:id",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: (to, from, next) => {
      let allRes = index.getters.restaurantsByID;
      if (!allRes.get(to.params.id)) {
        next("/error/404");
      } else {
        next();
      }
    }
  },
  {
    path: "/error/:id",
    name: "Error",
    component: ErrorCodes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
