import Vue from "vue";
import App from "./App.vue";
/**
 * Import Vuex/ Vue-store to project
 */
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
