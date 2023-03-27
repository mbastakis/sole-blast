<template>
  <div class="viewport"></div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    ...mapMutations(["RESIZE"]),
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
  height: 572px;
  width: 100%;
  margin: 0 auto;
}
@media (min-width:481px)  { 
  .viewport {
    height: 672px;
  }
}
@media (min-width:1281px)  { 
  .viewport {
    height: 772px;
  }
}
</style>
