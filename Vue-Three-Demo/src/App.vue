<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    transitionName() {
      switch (this.$route.name) {
        case "gallery":
          return "rise-up";
        case "faq":
          return "fade";
        default:
          return "fade"; // Default transition for other routes
      }
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100%;
}

#app {
  position: relative;
  height: 100%;
}
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Rise-up transition */
.rise-up-enter-active,
.rise-up-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.rise-up-enter {
  transform: translateY(100%);
  opacity: 0;
}
.rise-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
