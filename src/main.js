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

//interceptors
axios.interceptors.request.use(
  config => {
    if (process.env.VUE_APP_API_KEY) {
      console.info("✉️ ", config);
    }
    return config;
  },
  error => {
    if (process.env.VUE_APP_API_KEY) {
      console.error("✉️ ", error);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (response.status === 403) {
      alert("please use your API key to run the app");
    }
    return response;
  },
  error => {
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
