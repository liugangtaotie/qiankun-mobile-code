<template>
  <div class="home-model">
    <van-notice-bar
      text="Technology is the common soul of the people who developed it."
      left-icon="volume-o"
    />

    <div class="flex flex_center single mt10">
      global 中 store的count数据 <span class="ml20 f30 t2">{{ num }}</span>
    </div>

    <div class="flex flex_center">
      <van-button class="flex mt10" type="primary" @click="onClickAdd">add +</van-button>
      <van-button style="margin-left: 10px" class="flex mt10" type="primary" @click="onClickSub"
        >dec -</van-button
      >
    </div>

    <van-divider />

    <van-grid class="flex flex_around" :gutter="10" :column-num="3">
      <van-grid-item icon="photo-o" text="sub-home" @click="gotoSubHome" />
      <van-grid-item icon="photo-o" text="sub-react" @click="gotoSubReact" />
    </van-grid>

    <van-divider />

    <van-grid class="mt10" :gutter="10">
      <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="Text2" />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  [x: string]: any;
  private active = 0;

  private num = 0;

  mounted() {
    this.num = this.$store.state.global.num;
  }

  // 跳转sub-home
  gotoSubHome() {
    history.pushState(null, "sub-home", "/sub-home");
  }

  gotoSubReact() {
    history.pushState(null, "sub-react", "/sub-react");
  }

  // +1
  onClickAdd() {
    this.$store.commit("global/setGlobalState", { num: ++this.num });
  }

  // -1
  onClickSub() {
    this.$store.commit("global/setGlobalState", { num: --this.num });
  }
}
</script>

<style lang="less" scoped>
.home-model {
  width: 100%;
  padding: 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #2abc6d;
}
</style>
