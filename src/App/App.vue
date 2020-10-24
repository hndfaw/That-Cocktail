<template>
  <div id="app">
    <NavBar className="nav-bar" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
<style src="./App.css"></style>
