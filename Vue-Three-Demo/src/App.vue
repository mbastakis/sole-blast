<template>
  <div id="app">
    <herosection></herosection>
    <minigallery></minigallery>
    <processsection></processsection>
    <contactus></contactus>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import MiniGallery from "./components/MiniGallery.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ContactUs from "./components/ContactUs.vue";

export default {
  components: {
    herosection: HeroSection,
    minigallery: MiniGallery,
    processsection: ProcessSection,
    contactus: ContactUs,
  },
};
</script>

<style>
:root {
  --primary: white;
  --secondary: #282e5c;
  --select: ;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  height: 100%;
}
</style>
