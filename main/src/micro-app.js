import store from "./store";

const microApps = [
  {
    name: "sub-home",
    entry: process.env.VUE_APP_SUB_HOME,
    activeRule: "/sub-home"
  }
  // {
  //   name: 'sub-vue',
  //   entry: process.env.VUE_APP_SUB_VUE,
  //   activeRule: '/sub-vue'
  // }
  // {
  //   name: 'sub-one',
  //   entry: process.env.VUE_APP_SUB_ONE,
  //   activeRule: '/sub-one'
  // },
  // {
  //   name: 'sub-two',
  //   entry: process.env.VUE_APP_SUB_TWO,
  //   activeRule: '/sub-two'
  // },
  // {
  //   name: 'sub-react',
  //   entry: process.env.VUE_APP_SUB_REACT,
  //   activeRule: '/sub-react'
  // }
];

const apps = microApps.map(item => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  };
});

export default apps;
