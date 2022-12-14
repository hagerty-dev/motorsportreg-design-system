// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {
        data: '@import "./tokens/variables.css";',
      },
    },
  },
};
