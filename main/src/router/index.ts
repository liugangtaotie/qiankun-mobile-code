import Vue from "vue";
import Router from "vue-router";

/**
 * 路由分模块管理
 */
import _homeRouter from "./_homeRouter"; // 主页模块
Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    ..._homeRouter,
    /**
     * 404 Page
     */
    // {
    //   path: "*",
    //   meta: {
    //     title: "页面找不到了～！～",
    //   },
    //   component: () => import("@VIE/404.vue"),
    // },
  ],
});
