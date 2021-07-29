import Vue from "vue";
import Vuex from "vuex";
import { initGlobalState } from "qiankun";

Vue.use(Vuex);

// 父应用的初始state
// Vue.observable是为了让initialState变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState: any = Vue.observable({
  user: {
    name: "zhangsan",
  },
});

const actions: any = initGlobalState(initialState);

actions.onGlobalStateChange((newState: { [x: string]: any }, prev: any) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("main change", JSON.stringify(newState), JSON.stringify(prev));

  for (const key in newState) {
    initialState[key] = newState[key];
  }
});

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key: string | number) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部

  return key ? initialState[key] : initialState;
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions,
  modules: {},
});
