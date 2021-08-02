const path = require("path");
const merge = require("webpack-merge");
const packageName = require("./package.json").name;

module.exports = {
  publicPath: "./",
  outputDir: "../../qiankun/main/child/sub-third",
  transpileDependencies: ["common"],
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },

  css: {
    // 配置高于chainWebpack中关于css loader的配置
    modules: false,
    // requireModuleExtension: false, // 启用 CSS modules for all css / pre-processor files(v3用modules v4用requireModuleExtension)
    extract: false, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'tabs-default-color': 'blue',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${path.join(__dirname, "./src/assets/css/theme.less")}"`,
        },
      },
    },
  },

  // eslint-disable-next-line no-dupe-keys
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(false);

    return config;
  },
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
