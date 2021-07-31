import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./registerServiceWorker.ts";
import router from "./router";
import store from "./store";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/css/flex.css";

// Add lazyload directive
import VueLazyload from "vue-lazyload";
import errorImg from '@ASS/images/defaultPhoto.png';
import loadingImg from '@STA/img/loading.gif';

// 全局样式
import "./assets/css/theme.less";
import "vant/lib/index.less"; // 全局引入样式

import cfg from "./api/appConfig";
import * as filters from "./api/filters";
import resDefaultImg from '@ASS/images/defaultPhoto.png'
import docDefaultImg from '@ASS/images/defaultPhoto.png'
import sealDefaultImg from '@ASS/images/defaultPhoto.png'

// 添加图片预览组件
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
let options = {
  fullscreenEl: false,
};
Vue.use(preview, options);

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
  RadioGroup, Radio,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
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
  Sticky,
  Steps,
  Swipe,
  SwipeItem,
  Uploader,
  DatetimePicker,
  Image as VanImage,
  CountDown,
  NavBar,
  Calendar,
  NoticeBar
} from "vant";
// 调试
// import Vconsole from 'vconsole'
// let vConsole:any = new Vconsole()
// Vue.use(vConsole)

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
Vue.use(Grid);
Vue.use(GridItem);
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
Vue.use(Sticky);
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

Vue.config.devtools = true;
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));
Vue.prototype.$cfg = cfg;
Vue.prototype.$cfg.resDefaultImg = resDefaultImg;
Vue.prototype.$cfg.docDefaultImg = docDefaultImg;
Vue.prototype.$cfg.sealDefaultImg = sealDefaultImg;
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.use(Vuex);
Vue.use(preview);
Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  error: errorImg,
  loading: loadingImg
});

/**
 * 导航钩子
 */
router.beforeEach((to:any, from, next) => {
  document.title = to.meta.title || "qiankun-mobile-code";
  return next();
});

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
  // eslint-disable-next-line prettier/prettier
  interface Vue {
    $tools: any
    $api: any
    $cfg: any
    $toast: Toast
    $dialog: Dialog
  }
}

new Vue({
  router,
  store,
  render: (h: (arg0: any) => any) => h(App),
}).$mount("#app");
