import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import routes from "./router";
// import { store as commonStore } from 'common'
import store from "./store";
import VueRouter from "vue-router";

import "./assets/css/reset.css";
import "./assets/css/style.css";

// 全局样式
import "./assets/css/theme.less";

import {
  Area,
  List,
  Cell,
  Icon,
  Button,
  CellGroup,
  Empty,
  Field,
  Col,
  Row,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Toast,
  Tab,
  Tabs,
  Divider,
  Tabbar,
  TabbarItem,
  ActionSheet,
  Search,
  IndexBar,
  IndexAnchor,
  Popup,
  Picker,
  Switch,
  TreeSelect,
  Dialog,
  Progress,
  PullRefresh,
  Loading,
  Tag,
  Stepper,
  SwipeCell,
  Step,
  Steps,
  Swipe,
  SwipeItem,
  Uploader,
  DatetimePicker,
  Image as VanImage,
  CountDown,
  NavBar,
  Calendar,
  NoticeBar,
} from "vant";

Vue.use(Area);
Vue.use(List);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Button);
Vue.use(CellGroup);
Vue.use(Empty);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Divider);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(ActionSheet);
Vue.use(Search);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Switch);
Vue.use(TreeSelect);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Progress);
Vue.use(PullRefresh);
Vue.use(Tag);
Vue.use(Stepper);
Vue.use(SwipeCell);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Uploader);
Vue.use(DatetimePicker);
Vue.use(VanImage);
Vue.use(CountDown);
Vue.use(NavBar);
Vue.use(Calendar);
Vue.use(NoticeBar);

Vue.config.productionTip = false;

let instance: any = null;

function render(props: any = {}) {
  const { container, routerBase } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  const userInfo = { name: "我是独立运行时名字叫张三" }; // 假设登录后取到的用户信息
  store.commit("global/setGlobalState", { user: userInfo });

  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props: any) {
  console.log("[vue] props from main framework", props);

  // commonStore.globalRegister(store, props)

  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
