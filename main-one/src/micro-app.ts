import store from "./store";

const microApps = [
  {
    name: "sub-home",
    entry: import.meta.env.VUE_APP_SUB_HOME,
    activeRule: "/sub-home",
  },
  {
    name: "sub-first",
    entry: import.meta.env.VUE_APP_SUB_FIRST,
    activeRule: "/sub-first",
  },
  {
    name: "sub-react",
    entry: import.meta.env.VUE_APP_SUB_REACT,
    activeRule: "/sub-react",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState, // 下发getGlobalState方法
    },
  };
});

export default apps;
