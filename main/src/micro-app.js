import store from "./store";

// 开发环境
const devEntry = {
  home: "//localhost:7755/subapp/sub-home/",
  online_consult: "//localhost:7799/subapp/sub-first/",
};

// 线上环境
const proEntry = {
  home: `//${location.pathname}/subapp/sub-home/`,
  online_consult: `//${location.pathname}/subapp/sub-first/`,
};

const microApps = [
  {
    name: "sub-home",
    entry:
      import.meta.env.MODE === "development" ? devEntry.home : proEntry.home,
    activeRule: "/sub-home",
  },
  {
    name: "sub-first",
    entry:
      import.meta.env.MODE === "development"
        ? devEntry.online_consult
        : proEntry.online_consult,
    activeRule: "/sub-first",
  },
  // {
  //   name: "sub-react",
  //   entry: "//localhost:7788/subapp/sub-react/",
  //   activeRule: "/sub-react",
  // },
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
