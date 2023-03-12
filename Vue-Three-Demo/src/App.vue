<template>
  <div id="app">
    <herosection></herosection>
    <minigallery></minigallery>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import MiniGallery from './components/MiniGallery.vue'

export default {
  components: {
    herosection: HeroSection,
    minigallery: MiniGallery,
  }
};
</script>

<style>
:root {
  --primary: white;
  --secondary: #282E5C;
  --select: ;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-family: 'Source Sans Pro', sans-serif;
}
#app {
  height: 100%;
}
</style>
