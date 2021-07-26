<template>
  <div>
    <div class="home-model">
      <van-notice-bar
        text="Technology is the common soul of the people who developed it."
        left-icon="volume-o"
      />

      <!--swipe 轮播图-->
      <van-swipe class="my-swipe mt10" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>

      <van-grid class="mt10" :gutter="10" :column-num="3">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>

      <van-grid class="mt10" :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="Text" />
      </van-grid>
    </div>

    <!--footer-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" badge="5">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="2">服务</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private active = 0;
}
</script>

<style lang="less" scoped>
.home-model {
  width: 100%;
  height: 100vh;
  padding: 10px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
