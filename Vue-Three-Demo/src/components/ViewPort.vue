<template>
  <div class="viewport"></div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      height: 0
    };
  },
  methods: {
    ...mapMutations(["RESIZE"]),
    ...mapActions(["INIT", "ANIMATE"])
  },
  mounted() {
    this.INIT({
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight,
      el: this.$el
    }).then(() => {
      this.ANIMATE();
    });
  }
};
</script>

<style>
.viewport {
  height: 700px;
  width: 100%;
  margin: 0 auto;
}
</style>
