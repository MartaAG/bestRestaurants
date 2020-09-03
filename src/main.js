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
    const HTTPErrors = [403, 404];
    let errorID;
    if (!process.env.VUE_APP_API_KEY) {
      errorID = "noKey";
    } else if (HTTPErrors.includes(error.response.status)) {
      errorID = error.response.status.toString();
    }
    console.log(error);
    router.replace({
      name: "Error",
      params: { id: errorID }
    });

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
