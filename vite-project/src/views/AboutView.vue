<script>
import anime from 'animejs'

export default {
  components: {},
  mounted() {
    let elt = document.querySelectorAll('#hero-slider > *')
    let sliderContent = document.querySelector('#hero-slider')
    anime({
      targets: elt,
      translateX: -sliderContent.clientWidth,
      duration: 2000,
      easing: 'linear',
      loop: true
    })
  }
}
</script>

<template>
  <div class="about">
    <div id="hero-slider">
      <span>&nbsp;<span class="slider-color">Color</span> Your Walk.</span>
      <span>&nbsp;<span class="slider-color">Color</span> Your Walk.</span>
      <span>&nbsp;<span class="slider-color">Color</span> Your Walk.</span>
    </div>
  </div>
</template>

<style>
#hero-slider {
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  color: var(--primary);
  overflow: hidden;
}
#hero-slider > * {
  font-weight: 900;
  font-size: 4.5rem;
  font-size: clamp(4.5rem, 3.4rem + 9.5vw, 10rem);
}
.slider-color {
  color: var(--secondary);
}
</style>
