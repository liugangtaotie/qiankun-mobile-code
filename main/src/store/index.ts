import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./modules/types";
// import "babel-polyfill";
import { moduleMain } from "./modules/moduleMain/index";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    moduleMain,
  },
};

// eslint-disable-next-line no-dupe-keys
export default new Vuex.Store<RootState>(store)
