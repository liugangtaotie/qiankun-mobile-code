<template>
  <div class="about">
    <van-nav-bar title="Message" left-text="Back" left-arrow @click-left="$router.go(-1)" />
    <h1>This is an about message</h1>
    <h1>This is an about message</h1>
    <h1>This is an about message</h1>
    <h1>This is an about message</h1>
    <h1>This is an about message</h1>
    <h1>This is an about message</h1>

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
