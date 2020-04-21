/* eslint-disable prettier/prettier */
/**
 * @description
 * Module to import SCSS files to each VUE component and Vue application
 */
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "./src/scss/styles.scss";
        @import "./src/scss/mixins.scss";
        `
      }
    }
  }
};
