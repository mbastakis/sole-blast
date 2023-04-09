<template>
  <div id="contact-us">
    <svg class="transition-contact" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,320L21.8,282.7C43.6,245,87,171,131,170.7C174.5,171,218,245,262,256C305.5,267,349,213,393,176C436.4,139,480,117,524,106.7C567.3,96,611,96,655,112C698.2,128,742,160,785,149.3C829.1,139,873,85,916,90.7C960,96,1004,160,1047,165.3C1090.9,171,1135,117,1178,80C1221.8,43,1265,21,1309,53.3C1352.7,85,1396,171,1418,213.3L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
      ></path>
    </svg>

    <div id="last-section-container">
      <div id="contact-section">
        <div class="contact-container">
          <div class="contact-img-1 contact-img desktop">
            <img src="../assets/contact_img_1.jpg" alt="" />
          </div>
          <div class="contact-img-2 contact-img desktop">
            <img src="../assets/contact_img_2.jpg" alt="" />
          </div>
          <div class="text">
            <h1>Get in touch</h1>
            <div class="email-container">
              <div class="container__item">
                <input type="email" class="form__field" placeholder="Your Email Address" />
                <button class="btn btn--primary btn--inside">Send</button>
              </div>
              <div class="container__item container__item--bottom"></div>
            </div>
          </div>
          <div class="contact-img-3 contact-img desktop">
            <img src="../assets/contact_img_3.jpg" alt="" />
          </div>
          <div class="contact-img-4 contact-img desktop">
            <img src="../assets/contact_img_4.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="blob">
        <svg viewBox="0 0 200 200">
          <path
            fill="#282e5c"
            d="M53.7,-58.8C61.2,-46.2,53.2,-23.1,51.9,-1.2C50.7,20.6,56.3,41.2,48.8,51.9C41.2,62.5,20.6,63.2,0.1,63.1C-20.4,63,-40.8,62.1,-56.5,51.4C-72.3,40.8,-83.4,20.4,-78.9,4.5C-74.5,-11.5,-54.4,-22.9,-38.7,-35.6C-22.9,-48.2,-11.5,-62,5.8,-67.8C23.1,-73.6,46.2,-71.5,53.7,-58.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#contact-us {
  width: 100%;
  margin: 0px;

  background: #dabed3;
  background: -moz-linear-gradient(
    top,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  background: -webkit-linear-gradient(
    top,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  background: linear-gradient(
    to bottom,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dabed3', endColorstr='#898acb',GradientType=0 );
  overflow: hidden;
}
.desktop {
  display: none;
}
#last-section-container {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
#contact-section {
  width: min(95%, 1600px);
  height: 30vh;
  background-color: var(--primary);
  border-radius: 2.5rem;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-container {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  grid-area: text;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.text h1 {
  font-size: min(9rem, 10vw);
  color: var(--secondary);
  margin-bottom: 20px;
}
.blob {
  position: absolute;
  bottom: 0;
  left: 0;
  fill: var(--secondary);
  width: 30vmax;
  animation: move 15s ease-in-out infinite;
  transform-origin: 50% 50%;
  overflow: hidden;
  z-index: 2;
}
@keyframes move {
  0% {
    transform: scale(1) translate(-60px, 30%);
  }
  20% {
    transform: scale(0.8, 1) translate(90vw, -13%) rotate(160deg);
  }
  40% {
    transform: scale(0.9, 1) translate(-160px, -80%) rotate(1deg);
  }
  60% {
    transform: scale(1.1) translate(80vw, -30%) rotate(80deg);
  }
  80% {
    transform: scale(1.5) translate(20vw, -40%) rotate(-90deg);
  }
  100% {
    transform: scale(1) translate(-60px, 30%);
  }
}
.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  padding: 0;
  transition: background 200ms ease-in;
  cursor: pointer;
}
.email-container {
  width: min(80vw, 1200px);
}
.btn--primary {
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 8px 26px;
}
.btn--primary:hover {
  background: var(--secondary);
}
.btn--primary:active {
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.btn--primary:focus {
  outline: 0;
}
.btn--inside {
  margin-left: -29%;
}
.form__field {
  width: 95%;
  background: #fff;
  color: #282e5c;
  font: inherit;
  box-shadow: 0px 6px 5px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  padding: 15px 13px;
  transition: all 0.4s;
  border-radius: 1rem;
}
.form__field:hover {
  background: whitesmoke;
}
.form__field:focus {
  outline: 0;
  background: rgba(104, 122, 242, 0.05);
}
::-webkit-input-placeholder {
  color: #282e5c;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #282e5c;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #282e5c;
}
:-ms-input-placeholder {
  color: #282e5c;
}
.transition-contact {
  z-index: 0;
  position: relative;
}
.transition-contact path {
  z-index: 4;
}
@media (min-width: 481px) {
  .btn--inside {
    margin-left: -20%;
  }
}
@media (min-width: 641px) {
  .btn--inside {
    margin-left: -15%;
  }
  @keyframes move {
    0% {
      transform: scale(1) translate(-60px, 30%);
    }
    20% {
      transform: scale(0.8, 1) translate(90vw, -13%) rotate(160deg);
    }
    40% {
      transform: scale(0.9, 1) translate(-160px, -75%) rotate(1deg);
    }
    60% {
      transform: scale(1.1) translate(80vw, -30%) rotate(80deg);
    }
    80% {
      transform: scale(1.5) translate(20vw, -40%) rotate(-90deg);
    }
    100% {
      transform: scale(1) translate(-60px, 30%);
    }
  }
}
@media (min-width: 961px) {
  .btn--inside {
    margin-left: -10%;
  }
}
@media (min-width: 481px) {
}
</style>
