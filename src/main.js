import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

axios.defaults.baseURL = "https://developers.zomato.com/api/v2.1";
axios.defaults.headers.common["user-key"] = process.env.VUE_APP_API_KEY;

axios.interceptors.response.use(
  response => {
    if (process.env.VUE_APP_API_KEY) {
      console.log(response.status);
    }
    return response;
  },
  error => {
    const noKeyError = "noKey";
    if (!process.env.VUE_APP_API_KEY) {
      console.log(error);
      router.replace({
        name: "Error",
        params: { id: noKeyError }
      });
    }
    if (process.env.VUE_APP_API_KEY && error.response.status === 403) {
      console.log(error);
      router.replace({
        name: "Error",
        params: { id: error.response.status }
      });
    }
    if (process.env.VUE_APP_API_KEY && error.response.status === 404) {
      console.log(error);
      router.replace({
        name: "Error",
        params: { id: error.response.status }
      });
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
