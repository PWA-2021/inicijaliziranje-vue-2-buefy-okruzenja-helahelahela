<template>
  <div id="app">
    <top-header></top-header>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "style.css";
</style>

<script>
import Top from "./components/Top.vue";
export default {
  components: {'top-header': Top}
}
</script>
