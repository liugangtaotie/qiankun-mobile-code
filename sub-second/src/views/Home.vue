<template>
  <div>
    <van-grid class="mt10" :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="Text"
      />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private active = 0;

  // 跳转sub-one
  gotoSubOne() {
    history.pushState(null, "sub-one", "/sub-one");
  }

  gotoSubReact() {
    history.pushState(null, "sub-react", "/sub-react");
  }
}
</script>

<style lang="less" scoped>
.home-model {
  width: 100%;
  padding: 10px;
}
.my-swipe .van-swipe-item {
  font-size: 20px;
  line-height: 150px;
  color: #fff;
  text-align: center;
  background-color: #2abc6d;
}
</style>
