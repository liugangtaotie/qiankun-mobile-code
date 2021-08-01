<template>
  <div id="app">
    <!-- <keep-alive><router-view ></router-view></keep-alive> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div id="subapp-viewport"></div>

    <!-- loading -->
    <!-- <BsLoading /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {},
})
export default class App extends Vue {
  // mixins: [eventMixin],
  private isFirst: Boolean = true;

  updated() {
    if (this.isFirst) {
      // var element: any = document.getElementById("__loading");
      const elementMain: any = document.getElementById("__mainLoading");
      // if (element) {
      //   element.outerHTML = "";
      // }
      if (elementMain) {
        elementMain.outerHTML = "";
      }
      this.isFirst = false;
    }
  }

  created() {
    sessionStorage.removeItem("hideLoading");
    window.__hideLoading__ = false;
  }
}
</script>

<style lang='less' scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-size: 12px;
}
</style>

