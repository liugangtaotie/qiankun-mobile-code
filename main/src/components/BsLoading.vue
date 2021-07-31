<template>
  <div class="loading-wrap" v-show="isLoading">
    <div class="loading">
      <van-loading size="40px" color="#2abc6d" />
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  computed: {
    isLoading() {
      return this.$store.state.moduleMain.loading;
    },
  },
};
</script>

<style lang="less" scoped>
.loading-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.651);

  .loading {
    padding: 20px;
    margin: auto;
    border-radius: 10px;
  }
}
</style>
