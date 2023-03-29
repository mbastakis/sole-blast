<template>
  <div id="hero-section">
    <navbar></navbar>

    <div id="floating-section">
      <viewport></viewport>
      <div id="floating-quote">
        <p>Nike Air Force Supreme</p>
        <h2>The Alien Invasion</h2>
        <p>Handdrawn</p>
      </div>
    </div>
    
    <div>
      <div id="hero-slider">
        <span
          >Express your <span class="slider-color">Soul</span> with your
          <span class="slider-color">Soles</span>.
        </span>
        <h1>
          &nbsp; Express your <span class="slider-color">Soul</span> with your
          <span class="slider-color">Soles</span>.
        </h1>
        <span
          >&nbsp; Express your <span class="slider-color">Soul</span> with your
          <span class="slider-color">Soles</span>.
        </span>
      </div>

      <div id="transition-layer"></div>
  </div>
  </div>
</template>

<script>
import ViewPort from "./ViewPort.vue";
import Navbar from "./Navbar.vue";
import anime from "animejs";

export default {
  components: {
    viewport: ViewPort,
    navbar: Navbar,
  },
  mounted() {
    let elt = document.querySelectorAll("#hero-slider > *");
    anime({
      targets: elt,
      translateX: "-100%",
      duration: 8000,
      easing: "linear",
      loop: true,
    });
  },
};
</script>

<style scoped>
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
  height: 100vh;
  height: 100svh;
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
  margin-top: auto;
}
#floating-section {
  height: 100%;
  position: relative;
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
  font-size: clamp(4.5rem, 3.4rem + 5.5vw, 10rem);
}
.slider-color {
  color: var(--secondary);
}
</style>
#floating-quote {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-left: 20px;
  transform: translateY(-70px);
  color: var(--primary);
  width: 100%;
  overflow-x: hidden;
}
#floating-quote p {
  font-weight: 600;
  font-size: 0.9em;
}
#floating-quote h2 {
  font-size: 2em;
}

h1,
span {
  display: inline-block;
  font-weight: 900;
  font-size: 4.8em;
}



@media (min-width: 481px) {
}
@media (min-width: 641px) {
  #floating-quote {
    transform: translateY(-110px);
  }
  h1,
  span {
    font-size: 6.5em;
  }
  #transition-layer {
    border-top-right-radius: 3.5rem;
    border-top-left-radius: 3.5rem;
  }
}
@media (min-width: 961px) {
  #floating-quote {
    padding-left: 50px;
  }
  h1,
  span {
    font-size: 7.5em;
  }
}
@media (min-width: 1025px) {
}
@media (min-width: 1281px) {
  #floating-section {
    flex-direction: row;
    justify-content: center;
  }
  #floating-quote {
    transform: translateY(0);
  }
  h1,
  span {
    font-size: 9em;
  }
}
