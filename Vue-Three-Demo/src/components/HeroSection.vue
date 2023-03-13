<template>
  <div id="hero-section">
    <navbar id="navbar"></navbar>
    <div id="floating-section">
      <div id="floating-quote">
        <p>Nike Air Force Supreme</p>
        <h2>The Alien Invasion</h2>
        <p>Handdrawn</p>
      </div>
      <viewport></viewport>
    </div>
    <div id="hero-slider">
      <span
        >Express your <span class="slider-color">Soul</span> with your
        <span class="slider-color">Soles</span>.</span
      >
      <h1>
        &nbsp; Express your <span class="slider-color">Soul</span> with your
        <span class="slider-color">Soles</span>.
      </h1>
      <span
        >&nbsp; Express your <span class="slider-color">Soul</span> with your
        <span class="slider-color">Soles</span>.</span
      >
    </div>
    <div id="transition-layer"></div>
  </div>
</template>

<script>
import ViewPort from "./ViewPort.vue";
import Navbar from "./Navbar.vue";
import anime from "animejs";

export default {
  components: {
    viewport: ViewPort,
    navbar: Navbar
  },
  mounted() {
    let elt = document.querySelectorAll("#hero-slider > *");
    anime({
      targets: elt,
      translateX: "-100%",
      duration: 9000,
      easing: "linear",
      loop: true
    });
  }
};
</script>

<style>
#hero-section {
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
#floating-section {
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 40px;
}
#floating-quote {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 40px;
  color: var(--primary);
}
#floating-quote p {
  font-weight: 600;
  font-size: 0.9em;
}
#floating-quote h2 {
  font-size: 2em;
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
h1,
span {
  display: inline-block;
  font-size: 10em;
  font-weight: 900;
}
.slider-color {
  font-size: 1em;
  color: var(--secondary);
}
#transition-layer {
  background-color: white;
  height: 40px;
  width: 100%;
  border-top-right-radius: 3.5rem;
  border-top-left-radius: 3.5rem;
}
</style>
