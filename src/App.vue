<script setup>
import SiteBar from './components/SideBar.vue';
import Experience from './components/Experience.vue';
</script>

<template>
  <div class="container">
    <SiteBar />
    <Experience />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

.container {
  display: flex;
  height: 100vh; 
  margin: 0; 
}
</style>
