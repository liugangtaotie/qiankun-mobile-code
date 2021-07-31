<template>
  <div class="about-model tcenter">
    <van-button class="flex" type="primary" @click="$router.push('/home')"
      >about,点击跳转home</van-button
    >
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
    <div class="single">about</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import BsDialog from "@COM/BsDialog/index.vue";

@Component({
  name: "About",
  // components: { BsDialog },
})
export default class About extends Vue {
  private signToShow: Boolean = false; //

  created() {}

  mounted() {}
}
</script>

<style lang='less' scoped>
.about-model {
  width: 100%;
  height: 100vh;
  margin-top: 50px;
}

.single {
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
</style>
















