<template>
  <div class="about text-center">
    <van-nav-bar title="Message" left-text="Back" left-arrow @click-left="$router.go(-1)" />
    <div class="fireworks-model">
      <div class="fireworks" style="left: 15%; top: 5%"></div>
      <div class="fireworks" style="right: 30%; top: 13%; animation-delay: -0.4s"></div>
      <div class="fireworks" style="left: 5%; top: 23%; animation-delay: -1.7s"></div>
      <div class="fireworks" style="right: 45%; top: 8%; animation-delay: -3.1s"></div>
    </div>

    <Footer :content="1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@COM/Footer.vue";

@Component({
  name: "Message",
  components: { Footer },
})
export default class Message extends Vue {
  private active = 0;
}
</script>

<style lang="less" scoped>
.fireworks-model {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #000;
}

.fireworks {
  position: absolute;
  width: 150px;
  height: 150px;
  /*     padding-bottom: 100px; */
  background: url("https://imgservices-1252317822.image.myqcloud.com/image/081320210201435/e9951400.png")
    right top no-repeat;
  background-size: auto 150px;
  animation: fireworks 2s steps(24) infinite, random 8s steps(1) infinite;
}

@keyframes fireworks {
  0% {
    background-position: 0%;
  }
  50%,
  100% {
    background-position: 100% 100%;
  }
}

@keyframes random {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(200%, 50%) scale(0.8);
  }
  50% {
    transform: translate(80%, 80%) scale(1.2);
  }
  75% {
    transform: translate(20%, 60%) scale(0.65);
  }
}

@media screen and (prefers-reduced-motion) {
  /* 禁用不必要的动画 */
  .fireworks {
    animation: none;
  }
}
</style>
