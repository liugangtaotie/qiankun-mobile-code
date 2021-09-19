const path = require("path");
const merge = require("webpack-merge");
const { name } = require("../package.json");

// common parse path
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/subapp/sub-home",
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "assets",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: "index.html",
  transpileDependencies: ["common"],
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
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

    // 配置别名  不配置会报错
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@STA", resolve("static"))
      .set("@ASS", resolve("src/assets"))
      .set("@API", resolve("src/api"))
      .set("@COM", resolve("src/components"))
      .set("@VIE", resolve("src/views"));

    return config;
  },
  devServer: {
    port: 7755,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
