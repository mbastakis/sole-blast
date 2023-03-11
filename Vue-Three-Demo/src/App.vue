<template>
  <div id="app">
    <herosection></herosection>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'

export default {
  components: {
    herosection: HeroSection,
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0px;
}
#app {
  height: 100%;
}
</style>
