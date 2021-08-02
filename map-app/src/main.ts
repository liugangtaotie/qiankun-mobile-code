import "../../common/qiankun/public-path.js";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn"; 
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";
import store from "./store";

let instance = null;

function render(props: any = {} ) {
  const { container } = props;
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

  instance = createApp(App);
  instance
    .use(ElementPlus, { locale })
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#mapapp") : "#mapapp");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log("独立运行");
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: any) {
  console.log("[vue] props from main framework", props);

  render(props);
}

export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = "";
  // instance = null;
}

