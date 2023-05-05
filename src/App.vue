<template>
  <router-view/>
  <ReloadPWA />

  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReloadPWA from "./components/ReloadPWA.vue";
export default defineComponent({
  name: "App",
  components: {
    ReloadPWA,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: #eee;
}
</style>