module.exports = {
  transpileDependencies: ["common"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "qiankun-example";
      return args;
    });
  },

  devServer: {
    port: 8080,

    open: true,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
