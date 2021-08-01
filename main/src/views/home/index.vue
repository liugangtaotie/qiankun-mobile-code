<template>
  <div class="home-model tcenter">
    <van-notice-bar
      text="Technology is the common soul of the people who developed it."
      left-icon="volume-o"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-divider />

    <van-grid class="flex flex_around" :gutter="10" :column-num="3">
      <van-grid-item
        v-for="(item, index) in microApps"
        :key="index"
        icon="photo-o"
        :text="item.name"
        @click="$router.push(item.path)"
      />
    </van-grid>

    <van-divider />

    <van-button class="flex mt10" type="primary" @click="$router.push('/about')"
      >home,点击跳转about</van-button
    >
    <div class="flex flex_center single">
      store的count数据 <span class="ml20 f30 t2">{{ num }}</span>
    </div>
    <van-button class="flex mt10" type="primary" @click="onClickAdd">add +</van-button>
    <van-button style="margin-left: 10px" class="flex mt10" type="primary" @click="onClickSub"
      >dec -</van-button
    >

    <my-footer :active="0"></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { registerMicroApps, start } from "qiankun";
import microApps from "../../micro-app";

@Component({
  name: "Home",
})
export default class Home extends Vue {
  [x: string]: any;
  private signToShow: Boolean = false; //
  private num: number = this.$store.getGlobalState("num");
  private active: number = 0;
  private activeTab: number = 0;
  private microApps = JSON.parse(JSON.stringify(microApps));

  activeModule = ""; // 系统模块

  created() {}

  getActiveRule = (hash: any) => (location: any) => location.hash.startsWith(hash);

  mounted() {
    let microAppsArr = [];
    microApps.forEach((item) => {
      microAppsArr.push({
        container: item.container,
        entry: item.entry,
        name: item.name,
        activeRule: item.activeRule,
      });
    });

    console.log("start loading");
    // TODO  在主应用中注册微应用
    registerMicroApps([...microAppsArr]);

    // TODO 启动微应用
    start({
      prefetch: "all",
      sandbox: {
        // strictStyleIsolation: true,
        experimentalStyleIsolation: true,
      },
    });
  }

  // +1
  onClickAdd() {
    this.$store.setGlobalState({ num: ++this.num });
  }

  // -1
  onClickSub() {
    this.$store.setGlobalState({ num: --this.num });
  }
}
</script>

<style lang='less' scoped>
.home-model {
  width: 100%;
  height: 100vh;
  padding: 10px;
}

.my-swipe .van-swipe-item {
  font-size: 20px;
  line-height: 150px;
  color: #fff;
  text-align: center;
  background-color: #07c160;
}

.single {
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
</style>
















