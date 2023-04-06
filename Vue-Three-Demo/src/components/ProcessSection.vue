<template>
  <div id="process-section">
    <div id="gallery-transition-layer"></div>

    <div class="section-container">
      <section id="header-section" class="thought">
        <div>
          <img src="../assets/design_process.png" alt="" />
        </div>
        <div class="section-text">
          <h1>The Creation Process</h1>
          <p>
            We believe that shoes offer a unique opportunity to unleash your inner
            creativity, elevate your style and make a lasting impression. We're
            dedicated to transforming each customer's distinct vision into an
            awesome one-of-a-kind shoe design.
          </p>
        </div>
      </section>

      <section id="first-section" class="left-chat chat">
        <div>
          <p>
            <span>1. Share Your Vision</span>
            with us HERE_BUTTON and we will bring it to life.
          </p>
        </div>
      </section>

      <section id="second-section" class="right-chat chat">
        <div>
          <p>
            <span> 2. Sketch & Approval </span>
            We're committed to bringing your vision to life just as you
            imagined. That's why we start by creating a preliminary sketch of
            your design and sharing it with you for feedback and approval.
          </p>
        </div>
      </section>

      <section id="third-section" class="left-chat chat">
        <div>
          <p>
            <span>3. From sketch to reality</span>
            Each Sole-Blast shoe is meticulously hand-painted, ensuring a unique
            and eye-catching result. Then it's shipped straight to your
            doorstep. Enjoy!
          </p>
        </div>
      </section>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="mobile process-section-transition"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,128L21.8,149.3C43.6,171,87,213,131,218.7C174.5,224,218,192,262,197.3C305.5,203,349,245,393,234.7C436.4,224,480,160,524,149.3C567.3,139,611,181,655,202.7C698.2,224,742,224,785,234.7C829.1,245,873,267,916,234.7C960,203,1004,117,1047,112C1090.9,107,1135,181,1178,218.7C1221.8,256,1265,256,1309,234.7C1352.7,213,1396,171,1418,149.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ProcessSection",
};
</script>


<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: 0 none;
  position: relative;
}
#gallery-transition-layer {
  height: var(--space-l);
  width: 100%;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background-color: var(--primary);
}
#header-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
svg {
  width: 100%;
  margin-bottom: -5px;
}
@media screen and (min-width: 777px) {
  #header-section {
    flex-wrap: nowrap;
  }
}
</style>

#process-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  color: var(--secondary);
}
.thought {
  display: flex;
  background-color: #fff;
  border-radius: 1.5rem;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  margin: var(--space-xl) var(--space-m) 0 var(--space-m);
  padding: var(--space-m);
}
.thought:before,
.thought:after {
  content: "";
  background-color: #fff;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: -1;
}
.thought:before {
  width: 44px;
  height: 44px;
  top: -12px;
  left: 28px;
  box-shadow: -50px 30px 0 -12px #fff;
}
.thought:after {
  bottom: -10px;
  right: 26px;
  width: 30px;
  height: 30px;
  box-shadow: 40px -34px 0 0 #fff, -28px -6px 0 -2px #fff,
    -24px 17px 0 -6px #fff, -5px 25px 0 -10px #fff;
}
.chat {
  transform: translatey(0px);
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: 1.5rem;
  position: relative;
  margin: var(--space-xl) var(--space-m) 0 var(--space-m);
  padding: var(--space-m);
}
.left-chat::after {
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  content: ".";
  font-weight: bold;
  -webkit-text-fill-color: var(--primary);
  text-align: left;
  font-size: 55px;
  width: 55px;
  height: 11px;
  line-height: 30px;
  border-radius: 11px;
  background-color: var(--primary);
  position: absolute;
  display: block;
  bottom: -35px;
  left: 5px;
  z-index: -2;
}
.right-chat {
  padding: var(--space-m) 0;
}
.right-chat::after {
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  content: ".";
  font-weight: bold;
  -webkit-text-fill-color: var(--primary);
  text-align: right;
  font-size: 55px;
  width: 55px;
  height: 11px;
  line-height: 30px;
  border-radius: 11px;
  background-color: var(--primary);
  position: absolute;
  display: block;
  bottom: -35px;
  right: 5px;
  z-index: -2;
}
.process-section-transition {
  width: 100%;
  margin-top: var(--space-l);
}
h1,
h2 {
  font-size: clamp(var(--step-4), calc(1.77rem + 4.1vw), 4rem);
  font-weight: 800;
  line-height: 1;
  padding-bottom: var(--space-xs);
}
p {
  font-weight: 400;
  font-style: italic;
  font-size: clamp(var(--step-0), 0.5rem + 2.15vw, var(--step-1));
  padding-top: var(--space-s);
}
@keyframes float {
  0% {
    line-height: 20px;
    transform: translatey(0px);
  }
  55% {
    transform: translatey(-1.2rem);
  }
  60% {
    line-height: 10px;
  }
  100% {
    line-height: 20px;
    transform: translatey(0px);
  }
}
