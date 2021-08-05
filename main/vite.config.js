import path, { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  base: "./",

  // define: {
  //   global: JSON.stringify({}),
  // },

  // 项目根目录
  root: process.cwd(),

  // 依赖优化选项
  optimizeDeps: {
    // exclude: ["underscore"],
  },

  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },

  plugins: [createVuePlugin()],

  // 构建
  build: {
    // 传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },

    // chunk 大小警告的限制
    chunkSizeWarningLimit: 800, // FIXME: 鸵鸟 = =...

    // 浏览器兼容性  "esnext"|"modules"
    target: "modules",
    // 输出路径
    outDir: "dist",
    // 生成静态资源的存放路径
    assetsDir: "assets",
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // @rollup/plugin-commonjs 插件的选项
    commonjsOptions: {},
    // 构建的库
    //当设置为 true，构建后将会生成 manifest.json 文件
    manifest: false,
    // 设置为 false 可以禁用最小化混淆，
    // 或是用来指定使用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: "terser",

    // 设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    // 启用/禁用 brotli 压缩大小报告
    brotliSize: true,
  },

  server: {
    open: true,

    host: "0.0.0.0",

    port: 8080,
    // Load proxy configuration from .env
    // proxy: createProxy(VITE_PROXY),
    proxy: {
      "/xxxx": {
        target: "xxxx",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/xxxx/, ""),
      },
    },

    hmr: {
      overlay: true,
    },
  },
});
