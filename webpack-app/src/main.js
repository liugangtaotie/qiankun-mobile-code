import "../../common/qiankun/public-path.js";
import actions from "../../common/qiankun/actions.js";
import { createApp } from "vue";

import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";
import store from "./store";

let instance = null;

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  const { container } = props;
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  instance = createApp(App);
  instance
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#webpackapp") : "#webpackapp");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);

  render(props);
}

export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = "";
  // instance = null;
}
