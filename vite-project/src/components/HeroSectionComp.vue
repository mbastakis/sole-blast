<template>
  <div id="hero-section">
    <div id="floating-section">
      <viewport></viewport>
      <div id="floating-quote">
        <p>Nike Air Force 1 Supreme</p>
        <h2>The Alien Invasion</h2>
        <p>Hand-Drawn</p>
      </div>
    </div>

    <div id="hero-slider-wrapper">
      <div id="hero-slider">
        <span>&nbsp;<span class="slider-color">Color</span> Your Walk. </span>
        <h1>&nbsp;<span class="slider-color">Color</span> Your Walk.</h1>
        <span>&nbsp;<span class="slider-color">Color</span> Your Walk. </span>
      </div>
      <div id="transition-layer"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    viewport: defineAsyncComponent(() => import('@/components/ViewPortComp.vue'))
  },
  mounted() {
    let elt = document.querySelectorAll('#hero-slider > *')
    let sliderContent = document.querySelector('#hero-slider')
    anime({
      targets: elt,
      translateX: [-sliderContent.clientWidth, 0],
      duration: 8000,
      easing: 'linear',
      loop: true
    })
  }
}
</script>
<style scoped>
#hero-section {
  height: 85vh;
  height: 85svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#transition-layer {
  background-color: white;
  height: var(--space-m);
  width: 100%;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
}
#hero-slider {
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  color: var(--primary);
  overflow: hidden;
}
#floating-section {
  width: 100%;
  position: relative;
  height: 100%;
}
#floating-quote {
  position: absolute;
  bottom: clamp(8%, 10%, 50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
  padding: 0 var(--space-l);
  color: var(--primary);
}
#floating-quote p {
  font-weight: 600;
  font-size: var(--step--1);
}
#floating-quote h2 {
  font-size: var(--step-2);
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
