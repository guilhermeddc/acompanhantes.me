module.exports = {
  // publicPath: '/vue',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/app.scss";',
      },
    },
  },
};
