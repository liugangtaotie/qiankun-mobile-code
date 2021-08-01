module.exports = ({ file }) => {
  return {
    plugins: {
      // autoprefixer: {},
      "postcss-px-to-viewport": {
        viewportWidth: 375, // 视口的宽度，对应的时设计稿的宽度/2，一般为750
        unitToConvert: "px",
        viewportHeight: 667, // 视口的高度，对应的是设计稿的高度（也可以不配置）
        unitPrecision: 5, // 指定‘px’转换为视口单位值的小数位数（很多时候无法整除）
        propList: ["*"], // (Array)指定可以转换的css属性，默认是['*']，代表全部属性进行转换
        viewportUnit: "vw", // 指定需要转换成的视口单位，建议使用vw
        fontViewportUnit: "vw",
        selectorBlankList: ["ignore", "tab-bar"], // 指定不需要转换的类
        minPixelValue: 1, // 小于或等于‘1px’不转换为视口单位
        mediaQuery: false, // 允许在媒体查询中转换为‘px’
        replace: true,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 568,
        exclude: [], // 排除node_modules文件中第三方css文件
        // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
      },
    },
  };
};
