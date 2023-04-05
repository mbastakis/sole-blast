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

  background: #dabed3;
  background: -moz-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: linear-gradient(
    135deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dabed3', endColorstr='#898acb',GradientType=1 );
}
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Rise-up transition */
.rise-up-enter-active,
.rise-up-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
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
