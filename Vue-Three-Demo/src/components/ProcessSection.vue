<template>
  <div id="process-section">
    <div id="gallery-transition-layer"></div>

    <div class="section-container">
      <section id="header-section" class="thought section">
        <div class="header-section-image">
          <img src="../assets/design_process.png" alt="" />
        </div>
        <div class="header-section-text">
          <h1>The Creation Process</h1>
          <p>
            We believe that shoes offer a unique opportunity to unleash your
            inner creativity, elevate your style and make a lasting impression.
            We're dedicated to transforming each customer's distinct vision into
            an awesome one-of-a-kind shoe design.
          </p>
        </div>
      </section>

      <section id="first-section" class="left-chat chat">
        <div>
          <div class="first-section-text">
            <div>
              <span>1. Share Your Vision</span>
              with us and we will bring it to life.
            </div>
            <router-link to="/yoursole" class="router-link">
              <div class="btn">
                <div>Here</div>
                <svg
                  width="10"
                  height="30"
                  viewBox="-5 -5 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.65527 17.724C9.8356 17.724 10.8029 16.6639 11.6024 16.6639C12.6626 16.6639 14.2527 18.254 16.1962 17.3706"
                    stroke="#A1A5C0"
                    stroke-width="1.5"
                  />
                  <path
                    d="M1.00211 18.0773C0.981086 16.9842 1.11763 15.8886 1.38437 14.8101M1.38437 14.8101C2.23886 6.4162 14.6067 0.0555414 17.2571 1.11562C19.9074 2.1757 14.8627 7.4449 11.6032 9.77318C10.3664 10.6566 6.30261 9.77318 6.65598 10.1265C7.00935 10.4799 8.42283 12.2467 8.42283 12.2467C6.04246 14.1267 4.47297 14.6359 1.38437 14.8101Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section
        id="second-section"
        class="right-chat chat section right-section"
      >
        <div class="section-image">
          <img src="../assets/sketch_process_section_2.png" alt="" />
        </div>
        <div class="section-text">
          <span> 2. Sketch & Approval </span>
          We're committed to bringing your vision to life just as you imagined.
          That's why we start by creating a preliminary sketch of your design
          and sharing it with you for feedback and approval.
        </div>
      </section>

      <section id="third-section" class="left-chat chat section">
        <div class="last-section-image">
          <img src="../assets/Group 1 (2).png" alt="" />
        </div>
        <div class="section-text">
          <span>3. From sketch to reality</span>
          Each Sole-Blast shoe is meticulously hand-painted, ensuring a unique
          and eye-catching result. Then it's shipped straight to your doorstep.
          Enjoy!
        </div>
      </section>
    </div>

    <div class="bottom-buttons">
      <div class="btn">
        <div>Your Design</div>
      </div>
      <span>Or</span>
      <div class="btn">
        <div>Shop Now</div>
      </div>
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
.section-container {
  padding: var(--space-xl) var(--space-s);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  max-width: 90rem;
  margin-inline: auto;
}
.section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: var(--space-m);
}
.right-section {
  flex-direction: row-reverse;
}
.thought {
  background-color: #fff;
  border-radius: 1.5rem;
  padding: var(--space-xs);
  z-index: 2;
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
.header-section-image {
  width: 100%;
}
.header-section-image img {
  border-radius: 1.5rem;
  object-fit: cover;
  object-position: 40% 56%;
  width: 100%;
  height: clamp(14rem, 65vw, 20rem);
}
.header-section-text {
  display: grid;
  place-items: center;
  text-align: center;
  gap: var(--space-s);
  font-size: calc(var(--step-0) + 0.15rem);
  color: var(--secondary);
}
.header-section-text h1 {
  font-size: var(--step-4);
  font-weight: 700;
  color: var(--secondary);
}
.chat {
  transform: translatey(0px);
  color: var(--secondary);
  background-color: var(--primary);
  border-radius: 1.5rem;
  position: relative;
  padding: var(--space-s) var(--space-xs);
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
  bottom: -25px;
  left: 5px;
  z-index: -2;
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
  bottom: -25px;
  right: 5px;
  z-index: -2;
}
.chat span {
  font-size: var(--step-0);
  font-weight: 800;
}
svg {
  width: 100%;
  margin-bottom: -5px;
}
.section-image {
  width: 100%;
  height: auto;
}
.section-image img {
  border-radius: 1.5rem;
  object-fit: scale-down;
  width: 100%;
  max-height: 25rem;
}
.last-section-image {
  width: 100%;
  height: auto;
}
.last-section-image img {
  object-fit: cover;
  width: 100%;
}
.first-section-text {
  display: flex;
  flex-direction: row;
  font-size: calc(var(--step-0) + 0.15rem);
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-m);
}
.first-section-text span {
  font-weight: 800;
  font-size: var(--step-1);
}
.section-text {
  text-align: start;
  font-size: calc(var(--step-0) + 0.15rem);
}
.section-text span {
  font-weight: 800;
  font-size: var(--step-1);
}
.bottom-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 var(--space-s);
  width: 100%;
}
.bottom-buttons .btn {
  margin: 0;
  font-size: var(--step-0);
  width: calc(8rem + 15vw);
  text-align: center;
}
.bottom-buttons span {
  font-size: var(--step-0);
  font-weight: 700;
  color: var(--primary);
  margin-inline: var(--space-m);
}
@keyframes float {
  0% {
    line-height: 20px;
    transform: translatey(0px);
  }
  55% {
    transform: translatey(-0.6rem);
  }
  60% {
    line-height: 10px;
  }
  100% {
    line-height: 20px;
    transform: translatey(0px);
  }
}
@keyframes write {
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-8deg);
  }
  87.5% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@media screen and (min-width: 777px) {
  .section {
    flex-wrap: nowrap;
  }
  .thought {
    background: none;
  }
  .thought::after,
  .thought::before {
    display: none;
  }
  .chat {
    background: none;
  }
  .chat::after {
    display: none;
  }
  #header-section {
    padding: 0;
  }
  #first-section {
    padding: var(--space-m) 0;
  }
  #second-section {
    padding: 0;
  }
  #third-section {
    padding: 0;
  }
  .header-section-image img {
    width: 100%;
    height: clamp(20rem, 55vh, 35rem);
    object-fit: cover;
    border: 7px solid hsla(0, 0%, 100%, 0.3);
  }
  .header-section-text h1 {
    font-size: var(--step-5);
  }
  .header-section-text {
    text-align: start;
    font-size: var(--step-1);
    padding: var(--space-s) var(--space-l);
  }
  .section-container {
    gap: 0;
  }
  #first-section .btn {
    margin-top: 0;
  }
  .first-section-text {
    font-size: var(--step-1);
  }
  .first-section-text span {
    font-size: var(--step-2);
  }
  .section-text {
    font-size: var(--step-1);
  }
  .section-text span {
    font-size: var(--step-2);
  }
  .section-image {
    width: 100%;
    height: 100%;
  }
  .section-image img {
    max-height: none;
    border: 7px solid hsla(0, 0%, 100%, 0.5);
  }
  .bottom-buttons .btn {
    font-size: var(--step-1);
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--secondary);
  width: clamp(6rem, 5rem + 10vw, 8rem);
  padding: var(--space-2xs) var(--space-xs);
  font-size: var(--step-0);
  color: var(--primary);
  font-weight: 700;
  border-radius: 0.5em;
  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in;
  position: relative;
  margin-left: auto;
  margin-top: var(--space-2xs);
  outline: 3px solid hsla(0, 0%, 100%, 0.5);
}
.btn:hover {
  transform: scale(1.1);
  color: var(--selected);
}
.btn svg {
  width: 1.7rem;
  transition: transform 0.3s ease-in-out;
}
.btn svg path {
  transition: stroke 0.3s ease-in-out;
}
.btn:hover svg {
  transform: translateX(0.2em);
}
.btn svg path:nth-child(1) {
  stroke: var(--selected);
}
.btn svg path:nth-child(2) {
  stroke: var(--primary);
}
.btn:hover svg path:nth-child(1) {
  stroke: var(--primary);
}
.btn:hover svg path:nth-child(2) {
  animation: write 2s ease-in-out;
  stroke: var(--selected);
}
.router-link {
  text-decoration: none;
}
</style>
