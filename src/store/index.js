/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
/**
 * @description
 * I use Vue store to separeta datas for project in multiple files, for easy control datas
 * Import store components
 */
import grid from "./grid";
import socialLinks from "./socialLinks";
import menuItem from "./menuItem";
import footerColumns from "./footerColumns";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    grid,
    socialLinks,
    menuItem,
    footerColumns,
  },
});
