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
    <van-button class="flex mt10" type="primary" @click="$router.push('/about')"
      >home,点击跳转about</van-button
    >
    <div class="flex flex_center single">
      store的count数据 <span class="ml20 f30 t2">{{ $store.state.moduleMain.count }}</span>
    </div>
    <van-button class="flex mt10" type="primary" @click="onClickAdd">add +</van-button>
    <van-button style="margin-left: 10px" class="flex mt10" type="primary" @click="onClickSub"
      >dec -</van-button
    >

    <van-divider />

    <van-grid class="flex flex_around" :gutter="10" :column-num="3">
      <van-grid-item
        v-for="(item, index) in modeuleList"
        :key="index"
        icon="photo-o"
        :text="item.title"
        @click="$router.push(item.path)"
      />
    </van-grid>

    <my-footer :active="0"></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { registerMicroApps, start } from "qiankun";

@Component({
  name: "Home",
})
export default class Home extends Vue {
  private signToShow: Boolean = false; //
  private num: number = 0;
  private active: number = 0;
  private activeTab: number = 0;

  activeModule = ""; // 系统模块

  modeuleList = [
    {
      developmentEntry: "//localhost:7000/",
      enabled: true,
      name: "sub-first",
      normal: "images/module/dvs-village-normal.png",
      path: "/sub-first",
      productionEntry: "/child/sub-first/",
      selected: "images/module/dvs-village-selected.png",
      systemId: "sub-first",
      title: "sub-first",
    },
    {
      developmentEntry: "//localhost:5000/",
      enabled: true,
      name: "sub-second",
      normal: "images/module/dvs-village-normal.png",
      path: "/sub-second",
      productionEntry: "/child/sub-second/",
      selected: "images/module/dvs-village-selected.png",
      systemId: "sub-second",
      title: "sub-second",
    },
  ];

  created() {}

  getActiveRule = (hash: any) => (location: any) => location.hash.startsWith(hash);

  mounted() {
    this.num = this.$store.state.moduleMain.count;

    const array = [
      {
        container: "#mainwrapper",
        entry: "//localhost:7000/",
        name: "sub-first",
        activeRule: this.getActiveRule("#/sub-first"),
      },
      {
        container: "#mainwrapper",
        entry: "//localhost:5000/",
        name: "sub-second",
        activeRule: this.getActiveRule("#/sub-second"),
      },
    ];

    console.log("start loading");
    // TODO  在主应用中注册微应用
    registerMicroApps([...array]);

    // TODO 启动微应用
    start({
      prefetch: "all",
      sandbox: {
        // strictStyleIsolation: true,
        experimentalStyleIsolation: true,
      },
    });
  }

  onClickAdd() {
    this.$store.commit("moduleMain/increment");
  }

  onClickSub() {
    this.$store.commit("moduleMain/subtraction");
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
















