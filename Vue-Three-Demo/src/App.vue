<template>
  <div id="app">
    <viewport></viewport>
  </div>
</template>

<script>
import ViewPort from "@/components/ViewPort.vue";

export default {
  components: {
    viewport: ViewPort
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  margin: 0px;
}
canvas {
  position: relative;
}
#app {
  height: 100%;
}
</style>
