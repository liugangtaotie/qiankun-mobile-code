import store from "./store";

function getActiveRule(hash: any) {
  return (location: any) => location.hash.startsWith(hash);
}

const microApps = [
  {
    container: "#subapp-viewport",
    entry: "//localhost:7000/",
    name: "sub-first",
    activeRule: getActiveRule("#/sub-first"),
  },
  {
    container: "#subapp-viewport",
    entry: "//localhost:5000/",
    name: "sub-second",
    activeRule: getActiveRule("#/sub-second"),
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    path: "/" + item.name,
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: "", // 下发getGlobalState方法
    },
    developmentEntry: item.entry,
    productionEntry: "/child/" + item.name,
  };
});

export default apps;
