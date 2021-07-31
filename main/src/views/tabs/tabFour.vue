<template>
  <div class="home-model tcenter">
    <van-tabs v-model="activeTab">
      <van-tab v-for="index in 4" :title="'tab' + index" :key="index">
        content of tab {{ index }}
      </van-tab>
    </van-tabs>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <div class="single">tabFour</div>
    <my-footer :active="3"></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TabFour",
})
export default class TabFour extends Vue {
  private activeTab = 0;
}
</script>

<style lang='less' scoped>
.home-model {
  width: 100%;
  height: 100vh;
  padding: 10px;
}

.single {
  width: 100%;
  height: 50px;
  margin-top: 20px;
}
</style>
