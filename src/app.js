import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import feather from "vue-icon";

Vue.use(feather, "v-icon");

import "./styles/tailwind.css";

new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
});
