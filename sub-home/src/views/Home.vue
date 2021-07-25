<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">Tab</van-tabbar-item>
      <van-tabbar-item icon="search">Tab</van-tabbar-item>
      <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
      <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
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
