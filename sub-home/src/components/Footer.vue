<template>
  <!--footer-->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search" badge="5" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="2" to="/service">服务</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/person">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Footer",
  components: {},
})
export default class Footer extends Vue {
  private active = 0;
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
