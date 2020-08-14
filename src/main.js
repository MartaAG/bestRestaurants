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
    if (!process.env.VUE_APP_API_KEY) {
      alert(
        "Please make a file named '.env.local'. Create a global variable VUE_APP_API_KEY and initialize it with your own key in this file. " +
          error
      );
    }
    if (process.env.VUE_APP_API_KEY && error.response.status === 403) {
      alert("Your key expired or is invalid  " + error);
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
