import store from "./store";

function getActiveRule(hash: any) {
  return (location: any) => location.hash.startsWith(hash);
}

const microApps = [
  {
    entry: "//localhost:7000/",
    name: "sub-first",
    activeRule: getActiveRule("#/sub-first"),
  },
  {
    entry: "//localhost:9000/",
    name: "sub-third",
    activeRule: getActiveRule("#/sub-third"),
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    path: "/" + item.name,
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState, // 下发getGlobalState方法
    },
    developmentEntry: item.entry,
    productionEntry: "/child/" + item.name,
  };
});

export default apps;
