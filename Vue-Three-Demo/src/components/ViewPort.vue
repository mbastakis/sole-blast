<template>
  <div class="viewport"></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    ...mapActions(["INIT", "ANIMATE"]),
  },
  mounted() {
    this.INIT({
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight,
      el: this.$el,
    }).then(() => {
      this.ANIMATE();
    });
  },
};
</script>

<style>
.viewport {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
