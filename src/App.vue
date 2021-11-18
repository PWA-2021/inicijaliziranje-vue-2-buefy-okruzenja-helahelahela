<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "style.css";
</style>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  components: {
    "app-header": Header,
    "app-content": Content,
  },
};
</script>
