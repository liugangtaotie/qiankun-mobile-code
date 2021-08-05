import store from "./store";

const microApps = [
  {
    name: "sub-home",
    entry: "//localhost:7755/subapp/sub-home/",
    activeRule: "/sub-home",
  },
  {
    name: "sub-first",
    entry: "//localhost:7799/subapp/sub-first/",
    activeRule: "/sub-first",
  },
  {
    name: "sub-react",
    entry: "//localhost:7788/subapp/sub-react/",
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
