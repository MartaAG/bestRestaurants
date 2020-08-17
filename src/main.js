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
      console.log(error)
      alert(
        "Your API key is absent. To run the app, please make a file named  '.env.local'. Then write in it VUE_APP_API_KEY=<your API KEY>. Save it. Run in console npm run serve. For more information, read readme file."
      );
    }
    if (process.env.VUE_APP_API_KEY && error.response.status === 403) {
      console.log(error)
      alert("Your key expired or is invalid. Please visit https://developers.zomato.com/api#headline2 and request a new API key");
    }
    if (process.env.VUE_APP_API_KEY && error.response.status === 404) {
      console.log(error)
      alert("page you requested does not exist");
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
