<template>
  <article>
    <div id="gallery-transition-layer"></div>
    <section id="first-section" class="thought">
      <div class="section-text">
        <h1>Our Design Process</h1>
        <p class="left-text-allign">
          At our business, we believe that shoes are more than just a pair of
          functional items to wear. That's why we take each customer's unique
          idea and turn it into a beautiful and wholly unique shoe design.
        </p>
      </div>
      <div id="design_process" class="desktop">
        <img src="../assets/design_process.png" alt="" />
      </div>
    </section>

    <section id="second-section" class="left-chat reveal">
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
    <div class="right-chat mobile">
      <img src="../assets/email-card-phone.png" alt="" />
    </div>
    <figure id="first-figure" class="desktop reveal">
      <img src="../assets/email-card.jpg" alt="" />
    </figure>

    <figure id="second-figure" class="desktop reveal">
      <img src="../assets/shoes_card.jpg" alt="" />
    </figure>
    <section id="third-section" class="left-chat reveal">
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

    <section id="forth-section" class="left-chat reveal">
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
    <div id="process-section-transition" class="mobile">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,128L21.8,149.3C43.6,171,87,213,131,218.7C174.5,224,218,192,262,197.3C305.5,203,349,245,393,234.7C436.4,224,480,160,524,149.3C567.3,139,611,181,655,202.7C698.2,224,742,224,785,234.7C829.1,245,873,267,916,234.7C960,203,1004,117,1047,112C1090.9,107,1135,181,1178,218.7C1221.8,256,1265,256,1309,234.7C1352.7,213,1396,171,1418,149.3L1440,128L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </div>
  </article>
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
      this.thirdSection.classList.remove("left-chat");
      this.forthSection.classList.remove("left-chat");
      window.addEventListener("scroll", this.reveal);
      window.addEventListener("scroll", this.resetReveal);
    },
    switchToMobile() {
      this.firstSection.classList.add("thought");
      this.secondSection.classList.add("left-chat");
      this.thirdSection.classList.add("left-chat");
      this.forthSection.classList.add("left-chat");
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
article {
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
.chat-photo {
  margin-top: -15px;
  margin-bottom: 20px;
}
#gallery-transition-layer {
  height: 30px;
  width: 100%;
  border-bottom-right-radius: 3.5rem;
  border-bottom-left-radius: 3.5rem;
  background-color: var(--primary);
}
section {
  width: 90vw;
  margin: 20px 0;
}
h1,
h2 {
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 30px;
}
p {
  text-align: left;
  width: 100%;
  font-weight: 400;
  font-style: italic;
  font-size: 1.15rem;
  margin-bottom: 5%;
}
.thought {
  display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 1.5rem;
  width: 90vw;
  margin-top: 80px;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  margin-bottom: -25px;
  /*box-shadow: 10px 10px 5px;*/
}
.thought p {
  text-align: center;
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
.left-chat {
  transform: translatey(0px);
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: 1.5rem;
  position: relative;
  /*box-shadow: 10px 10px 5px;*/
  padding: 20px;
  margin: 100px 0 50px 0;
}
.left-chat::after {
  transform: translatey(0px);
  animation: float2 5s ease-in-out infinite;
  content: ".";
  font-weight: bold;
  -webkit-text-fill-color: var(--primary);
  /*text-shadow: 11px 11px 5px var(--secondary);*/
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
  /*box-shadow: 11px 11px 5px var(--secondary);*/
  z-index: -2;
}
.right-chat {
  display: flex;
  justify-content: center;
  transform: translatey(0px);
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: 1.5rem;
  position: relative;
  /*box-shadow: 10px 10px 5px;*/
  padding: 10px 0;
  margin: 15px 0 -35px 0;
  width: 90vw;
}
.right-chat::after {
  transform: translatey(0px);
  animation: float2 5s ease-in-out infinite;
  content: ".";
  font-weight: bold;
  -webkit-text-fill-color: var(--primary);
  /*text-shadow: 11px 11px 5px var(--secondary);*/
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
  /*box-shadow: 11px 11px 5px var(--secondary);*/
  z-index: -2;
}
#forth-section {
  margin-top: 15px;
}
#process-section-transition {
  width: 100%;
  margin-bottom: -4px;
}
@keyframes float2 {
  0% {
    line-height: 30px;
    transform: translatey(0px);
  }
  55% {
    transform: translatey(-20px);
  }
  60% {
    line-height: 10px;
  }
  100% {
    line-height: 30px;
    transform: translatey(0px);
  }
}
@media screen and (min-width: 481px) {
  p {
    font-size: 1.3rem;
  }
  .left-chat {
    padding: 30px;
  }
}
@media screen and (min-width: 641px) {
  h1,
  h2 {
    font-size: 4.25rem;
  }
  .left-chat {
    padding: 35px;
  }
  p {
    font-size: 1.65rem;
  }
}
@media screen and (min-width: 777px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  article {
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    align-content: normal;
    padding-bottom: 0px;
  }
  #gallery-transition-layer {
    height: 120px;
    width: 100%;
    border-bottom-right-radius: 3.5rem;
    border-bottom-left-radius: 3.5rem;
    background-color: var(--primary);
    z-index: 1;
  }
  section {
    background: var(--primary);
    color: var(--secondary);
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 0 10vh auto;
    position: sticky;
    top: 0;
    padding: 5vmin;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  #first-section {
    box-shadow: none;
    width: 100%;
    display: flex;
    padding: 0;
    border-top-right-radius: 3.5rem;
    border-top-left-radius: 3.5rem;
    margin-top: 100px;
  }
  #first-section .section-text {
    width: calc(50% + 1px);
    padding: 5vmin 5vmin 10vh 5vmin;
  }
  #first-section h1 {
    margin-top: 30%;
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
  figure {
    background: #eee;
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 auto 10vh 0;
    position: sticky;
    top: 0;
    overflow: hidden;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  #design_process {
    z-index: 0;
    width: calc(50% + 1px);
    margin: 0 0 10vh auto;
    position: sticky;
    top: 0;
  }
  #design_process img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    border-top-left-radius: 3.5rem;
    border-top-right-radius: 3.5rem;
    border-bottom-left-radius: 3.5rem;
  }
  figure:nth-of-type(1),
  section:nth-of-type(1) {
    margin: 0 0 10vh 0;
    width: 50%;
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
  h1,
  h2 {
    margin: 30% 0 auto;
    font-size: 3.7em;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    word-spacing: 0.5rem;
  }
  p {
    text-align: right;
    width: 100%;
    font-weight: 400;
    font-style: italic;
    font-size: 2.3rem;
    margin-bottom: 5%;
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
@media (min-width: 961px) {
  h1,
  h2,
  #first-section h1 {
    font-size: 4.29em;
    margin-top: 20%;
  }
}
@media (min-width: 1025px) {
  h1,
  h2,
  #first-section h1 {
    font-size: 5.18em;
    margin-top: 20%;
  }
}
</style>
