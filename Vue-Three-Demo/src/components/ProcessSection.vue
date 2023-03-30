<template>
  <div id="process-section">
    <div id="gallery-transition-layer"></div>

    <section id="first-section" class="thought">
      <div class="section-text">
        <h1>Our Design Process</h1>
        <p>
          At our business, we believe that shoes are more than just a pair of
          functional items to wear. That's why we take each customer's unique
          idea and turn it into a beautiful and wholly unique shoe design.
        </p>
      </div>
      <div id="design_process" class="desktop">
        <img src="../assets/design_process.png" alt="" />
      </div>
    </section>

    <section id="second-section" class="left-chat chat reveal">
      <div>
        <h2 id="communication-header">
          Share Your<br />
          Vision
        </h2>
        <p class="left-text-allign">
          Simply provide us with your unique prompt and any details you want us
          to include in the design. We'll then suggest the perfect shoe or work
          with you to find the ideal canvas for your creation.
        </p>
      </div>
    </section>
    <div class="right-chat chat mobile">
      <img src="../assets/email-card-phone.png" alt="" />
    </div>
    <figure id="first-figure" class="desktop reveal">
      <img src="../assets/email-card.jpg" alt="" />
    </figure>

    <figure id="second-figure" class="desktop reveal">
      <img src="../assets/shoes_card.jpg" alt="" />
    </figure>
    <section id="third-section" class="left-chat chat reveal">
      <div>
        <h2>
          Sketch &<br />
          Approval
        </h2>
        <img src="../assets/shoes_card.jpg" alt="" class="mobile chat-photo" />
        <p>
          We create a basic sketch of your design and send it your way. Now you
          only have to give us the green light to start painting.
        </p>
      </div>
    </section>

    <section id="forth-section" class="left-chat chat reveal">
      <div>
        <h2>From sketch to reality</h2>
        <img
          src="../assets/alien_shoe_showcase_phone.jpg"
          alt=""
          class="mobile chat-photo"
        />
        <p class="left-text-allign">
          Our artists get to work, painting every detail onto your shoe. It's a
          mini masterpiece on your feet! We ship straight to your doorstep. Get
          ready to turn heads with your one-of-a-kind creation.
        </p>
      </div>
    </section>
    <figure id="third-figure" class="desktop reveal">
      <img src="../assets/alien_shoe_showcase.jpg" alt />
    </figure>

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
  data: () => ({
    width: document.documentElement.clientWidth,
    leftChat: [],
    thought: null,
    mobileView: null,
    sections: [],
    figures: [],
    revealChecks: [false, false, false],
    currentReveal: 0,
  }),
  mounted() {
    this.sections = [
      document.getElementById("second-section"),
      document.getElementById("second-figure"),
      document.getElementById("forth-section"),
    ];
    this.figures = [
      document.getElementById("first-figure"),
      document.getElementById("third-section"),
      document.getElementById("third-figure"),
    ];
    window.addEventListener("resize", this.changeDimensions);
    this.firstSection = document.getElementById("first-section");
    this.secondSection = document.getElementById("second-section");
    this.thirdSection = document.getElementById("third-section");
    this.forthSection = document.getElementById("forth-section");

    if (this.width < 777) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
      this.switchToDesktop();
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.changeDimensions);
  },
  methods: {
    changeDimensions() {
      this.width = document.documentElement.clientWidth;

      if (this.mobileView == true && this.width >= 777) {
        this.mobileView = false;
        this.switchToDesktop();
      } else if (this.mobileView == false && this.width < 777) {
        this.mobileView = true;
        this.switchToMobile();
      }
    },
    switchToDesktop() {
      this.firstSection.classList.remove("thought");
      this.secondSection.classList.remove("left-chat");
      this.secondSection.classList.remove("chat");
      this.thirdSection.classList.remove("left-chat");
      this.thirdSection.classList.remove("chat");
      this.forthSection.classList.remove("left-chat");
      this.forthSection.classList.remove("chat");
      window.addEventListener("scroll", this.reveal);
      window.addEventListener("scroll", this.resetReveal);
    },
    switchToMobile() {
      this.firstSection.classList.add("thought");
      this.secondSection.classList.add("left-chat");
      this.secondSection.classList.add("chat");
      this.thirdSection.classList.add("left-chat");
      this.thirdSection.classList.add("chat");
      this.forthSection.classList.add("left-chat");
      this.forthSection.classList.add("chat");
      window.removeEventListener("scroll", this.reveal);
      window.removeEventListener("scroll", this.resetReveal);
    },
    resetReveal() {
      var elementTop = document
        .getElementById("first-section")
        .getBoundingClientRect().top;
      if (elementTop > 0) {
        this.revealChecks = [false, false, false];
        if (this.currentReveal === 3) {
          window.addEventListener("scroll", this.reveal);
        }
        this.sections[0].classList.remove("active");
        this.sections[1].classList.remove("active");
        this.sections[2].classList.remove("active");
        this.figures[0].classList.remove("active");
        this.figures[1].classList.remove("active");
        this.figures[2].classList.remove("active");
        this.currentReveal = 0;
      }
    },
    reveal() {
      var windowHeight = window.innerHeight;
      var elementTop =
        this.sections[this.currentReveal].getBoundingClientRect().top;
      var elementVisible = 0;
      if (elementTop < windowHeight - elementVisible) {
        this.sections[this.currentReveal].scrollIntoView({
          behavior: "instant",
          block: "start",
          inline: "start",
        });
        this.figures[this.currentReveal].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
        this.sections[this.currentReveal].classList.add("active");
        this.figures[this.currentReveal].classList.add("active");
        if (!this.revealChecks[this.currentReveal]) {
          this.revealChecks = [false, false, false];
          this.revealChecks[this.currentReveal] = true;
          setTimeout(() => {
            this.currentReveal += 1;
            if (this.currentReveal === 3) {
              window.removeEventListener("scroll", this.reveal);
            }
          }, 500);
        }
      }
    },
  },
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
#process-section {
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

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  color: var(--secondary);
}
.desktop {
  display: none;
}
.mobile {
  display: block;
}
#gallery-transition-layer {
  height: var(--space-l);
  width: 100%;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background-color: var(--primary);
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
@media screen and (min-width: 777px) {
  #process-section {
    display: block;
  }
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  #gallery-transition-layer {
    height: var(--space-2xl);
  }
  section {
    background-color: var(--primary);
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 auto 10vh 0;
    position: sticky;
    top: 0;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure {
    width: calc(50% - 1px);
    height: 100vh;
    margin: 0 auto 10vh 0;
    position: sticky;
    top: 0;
    overflow: hidden;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  #first-section {
    width: 100%;
    margin-top: var(--space-3xl);
    box-shadow: none;
    display: flex;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
  }
  #first-section .section-text {
    width: calc(50% + 1px);
    padding: var(--space-3xl) var(--space-m);
    display: flex;
    justify-content: space-between;
  }
  .section-text h1 {
    text-align: center;
  }
  #design_process {
    z-index: 0;
    width: calc(50% + 1px);
  }
  #design_process img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }
  #second-section {
    z-index: 2;
  }
  #third-section {
    z-index: 4;
  }
  #forth-section {
    box-shadow: 0 -19px 19px 2px rgba(0, 0, 0, 0.1);
    z-index: 6;
  }
  #first-figure {
    z-index: 1;
  }
  #second-figure {
    z-index: 3;
  }
  #third-figure {
    z-index: 5;
  }

  figure:nth-of-type(1n) {
    margin: 0 0 10vh auto;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure:nth-of-type(2n) {
    margin: 0 auto 10vh 0;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  section:nth-of-type(2n) {
    margin: 0 auto 10vh 0;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure:last-of-type,
  section:last-of-type {
    margin-bottom: 0;
  }
  section::before {
    background: inherit;
    z-index: 100;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 7vmin;
    height: 7vmin;
    transform: translate(calc(-50% + 1px), -50%) rotate(-45deg);
    clip-path: polygon(-15% -15%, 110% 0%, 0% 110%);
    box-shadow: -4px -2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 1.5vmin 0 0 0;
  }
  section:nth-of-type(2n)::before {
    left: auto;
    right: 0;
    transform: translate(calc(50% - 1px), -50%) rotate(-45deg) scale(-1);
  }
  figure img {
    z-index: 1;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
  }
  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .left-text-allign {
    text-align: left;
  }
  .reveal {
    opacity: 0;
    transition: 1s all ease;
  }
  .reveal.active {
    opacity: 1;
  }
}
</style>
@media (min-width: 961px) { h1, h2, #first-section h1 { font-size: 4.29em;
margin-top: 20%; } } @media (min-width: 1025px) { h1, h2, #first-section h1 {
font-size: 5.18em; margin-top: 20%; } }
