// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {
        // Globally aware variables.
        data: '@import "./tokens/variables.css";',
      },
    },
  },
};
