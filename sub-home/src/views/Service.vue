<template>
  <div class="about">
    <van-nav-bar title="Service" left-text="Back" left-arrow @click-left="$router.go(-1)" />
    <h1>This is an about service</h1>
    <h1>This is an about service</h1>
    <h1>This is an about service</h1>
    <h1>This is an about service</h1>
    <h1>This is an about service</h1>
    <h1>This is an about service</h1>

    <Footer :content="2" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@COM/Footer.vue";

@Component({
  name: "Service",
  components: { Footer },
})
export default class Service extends Vue {
  private active = 0;
}
</script>
