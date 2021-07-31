<template>
  <div>
    <van-tabbar v-model="activeIndex" @change="onChangeTabbar">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search" dot>two</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">three</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="3">four</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "MyFooter",
})
export default class MyFooter extends Vue {
  @Prop({ type: Number, default: 0 }) active;
  private activeIndex = 0;

  mounted() {
    this.activeIndex = this.active;
  }

  onChangeTabbar() {
    const activeIndex = this.activeIndex;
    switch (activeIndex) {
      case 0:
        return this.$router.push("/home");
      case 1:
        return this.$router.push("/tabTwo");
      case 2:
        return this.$router.push("/tabThree");
      case 3:
        return this.$router.push("/tabFour");
      default:
        return true;
    }
  }
}
</script>

<style lang='less' scoped>
</style>
















