<template>
  <article>
    <div id="gallery-transition-layer"></div>
    <section id="first-section" class="thought">
      <div>
        <h1>Our Design Process</h1>
        <p class="left-text-allign">
          At our business, we believe that shoes are more than just a pair of
          functional items to wear. That's why we take each customer's unique
          idea and turn it into a beautiful and wholly unique shoe design.
        </p>
      </div>
    </section>

    <section id="second-section" class="left-chat">
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
      <img src="../assets/email-card-phone.png" alt="">
    </div>
    <figure id="first-figure" class="desktop">
      <img src="../assets/email-card.jpg" alt />
    </figure>

    <figure id="second-figure" class="desktop">
      <img src="../assets/shoes_card.jpg" alt />
    </figure>
    <section id="third-section" class="left-chat">
      <div>
        <h2>Sketch & Approval</h2>
        <img src="../assets/shoes_card.jpg" alt class="mobile"/>
        <p>
          We create a basic sketch of your design and send it your way. Now you
          only have to give us the green light to start painting.
        </p>
      </div>
    </section>

    <section id="forth-section" class="left-chat">
      <div>
        <h2>From sketch to reality</h2>
        <img src="../assets/alien_shoe_showcase_phone.jpg" alt class="mobile"/>
        <p class="left-text-allign">
          Our artists get to work, painting every detail onto your shoe. It's a
          mini masterpiece on your feet! We ship straight to your doorstep. Get
          ready to turn heads with your one-of-a-kind creation.
        </p>
      </div>
    </section>
    <figure id="third-figure" class="desktop">
      <img src="../assets/alien_shoe_showcase.jpg" alt />
    </figure>
  </article>
</template>

<script>
export default {
  data: () => ({
    width: document.documentElement.clientWidth,
    leftChat: [],
    thought: null,
    mobileView: null,
  }),
  mounted() {
    window.addEventListener('resize', this.changeDimensions);
    this.firstSection = document.getElementById('first-section');
    this.secondSection = document.getElementById('second-section');
    this.thirdSection = document.getElementById('third-section');
    this.forthSection = document.getElementById('forth-section');

    if (this.width < 641) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
      this.switchToDesktop();
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.changeDimensions);
  },
  methods: {
    changeDimensions() {
      this.width = document.documentElement.clientWidth;
      
      if (this.mobileView == true && this.width >= 777) {
        console.log('desk check');
        this.mobileView = false;
        this.switchToDesktop();
      } else if (this.mobileView == false && this.width < 777) {
        console.log('mobile check');
        this.mobileView = true;
        this.switchToMobile();
      }
    },
    switchToDesktop() {
      this.firstSection.classList.remove('thought');
      this.secondSection.classList.remove('left-chat');
      this.thirdSection.classList.remove('left-chat');
      this.forthSection.classList.remove('left-chat');
    },
    switchToMobile() {
      this.firstSection.classList.add('thought');
      this.secondSection.classList.add('left-chat');
      this.thirdSection.classList.add('left-chat');
      this.forthSection.classList.add('left-chat');
    }
  }
}
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
  padding-bottom: 30px;
}
.desktop {
  display: none;
}
.mobile {
  display: block;
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
.thought {
  display:flex;
  background-color:#fff;
  padding:20px;
  border-radius: 1.5rem;
  width: 90vw;
  margin-top: 80px;
  position:relative;
  align-items:center;
  justify-content:center;
  text-align:center;
  z-index: 2;
  margin-bottom: -25px;
  /*box-shadow: 10px 10px 5px;*/
}
.thought:before,
.thought:after {
  content:"";
  background-color:#fff;
  border-radius:50%;
  display:block;
  position:absolute;
  z-index:-1;
}
.thought:before {
  width:44px;
  height:44px;
  top:-12px;
  left:28px;
  box-shadow:-50px 30px 0 -12px #fff;
}
.thought:after {
  bottom:-10px;
  right:26px;
  width:30px;
  height:30px;
  box-shadow:40px -34px 0 0 #fff,
             -28px -6px 0 -2px #fff,
             -24px 17px 0 -6px #fff,
             -5px 25px 0 -10px #fff;
  
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
    border-bottom-left-radius: 0;
    background-color: var(--primary);
  }
  #gallery-transition-layer::after {
    content: "";
    width: 100px;
    height: 100px;
    float: right;
    margin-right: calc(100% - (50%) - 100px);
    margin-top: 120px;
    background-color: white;
    border-bottom-right-radius: 10rem;
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
  .thought {
    border-radius: 0px;
  }
  .thought::after {
    display: none;
  }
  .left-chat {
    border-radius: 0;
  }
  .left-chat::after {
    display: none;
  }
  #first-section {
    box-shadow: none;
  }
  #first-section h1 {
    margin-top: 30px;
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
    padding: 1rem;
  }
  h1,
  h2 {
    margin: 15% 0 auto;
    font-size: calc(5vmin + 3vmax);
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
    font-size: calc(1.5vmin + 1.75vmax);
    margin-bottom: 5%;
  }
  .left-text-allign {
    text-align: left;
  }
}
</style>
