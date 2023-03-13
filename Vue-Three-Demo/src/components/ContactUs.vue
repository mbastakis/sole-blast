<template>
  <div id="contact-us">
    <svg viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,192L21.8,197.3C43.6,203,87,213,131,213.3C174.5,213,218,203,262,170.7C305.5,139,349,85,393,64C436.4,43,480,53,524,74.7C567.3,96,611,128,655,149.3C698.2,171,742,181,785,181.3C829.1,181,873,171,916,186.7C960,203,1004,245,1047,245.3C1090.9,245,1135,203,1178,170.7C1221.8,139,1265,117,1309,117.3C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        data-darkreader-inline-fill=""
        style="--darkreader-inline-fill:#007acc;"
      ></path>
    </svg>

    <div id="last-section-container">
      <div class="blob">
        <svg version="1.1" viewBox="0 0 310 350">
          <path
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
          />
        </svg>
      </div>
      <div id="contact-section">
        <div class="contact-container">
          <div class="contact-img-1 contact-img">
            <img src="../assets/contact_img_1.jpg" alt="" />
          </div>
          <div class="contact-img-2 contact-img">
            <img src="../assets/contact_img_2.jpg" alt="" />
          </div>
          <div class="text">
            <h1>Get in touch</h1>
            <div class="email-container">
              <div class="container__item">
                <input
                  type="email"
                  class="form__field"
                  placeholder="Your Email Address"
                />
                <button class="btn btn--primary btn--inside">Send</button>
              </div>
              <div class="container__item container__item--bottom"></div>
            </div>
          </div>
          <div class="contact-img-3 contact-img">
            <img src="../assets/contact_img_3.jpg" alt="" />
          </div>
          <div class="contact-img-4 contact-img">
            <img src="../assets/contact_img_4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#contact-us {
  width: 100%;
  margin: 0px;
  margin-top: -60px;

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
}
#last-section-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
#contact-section {
  width: 95%;
  background-color: var(--primary);
  border-radius: 3.5rem;
  z-index: 3;
  display: flex;
  margin-bottom: 15vh;
}
#footer-section {
}
.contact-container {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-template-rows: 5fr 5fr 5fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "img-1 img-2"
    "text text"
    "img-3 img-4";
}
.contact-img {
  width: 100%;
  height: 100%;
}
.contact-img img {
  border-radius: 2.5rem;
}
.contact-img-1 {
  grid-area: img-1;
  transform: translateY(35%);
}
.contact-img-1 img {
  margin-left: 8vw;
}
.contact-img-2 {
  grid-area: img-2;
  transform: translateY(40%);
}
.contact-img-2 img {
  margin-left: 25vw;
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
.contact-img-3 {
  grid-area: img-3;
  transform: translateY(-20%);
  width: 50%;
}
.contact-img-3 img {
  margin-left: 14vw;
}
.contact-img-4 {
  grid-area: img-4;
  width: 30%;
}
.contact-img-4 img {
  transform: translateY(-35%);
  margin-left: 20vw;
}
.blob {
  position: absolute;
  top: 50%;
  left: 0;
  fill: var(--secondary);
  width: 30vmax;
  z-index: 0;
  animation: move 15s ease-in-out infinite;
  transform-origin: 50% 50%;
  overflow: hidden;
}
@keyframes move {
  0% {
    transform: scale(1) translate(-60px, 0px);
  }
  20% {
    transform: scale(0.8, 1) translate(110vw, -60px) rotate(160deg);
  }
  40% {
    transform: scale(0.9, 1) translate(-60px, -300px) rotate(1deg);
  }
  60% {
    transform: scale(1.3) translate(40vw, -550px) rotate(80deg);
  }
  80% {
    transform: scale(1.6) translate(20vw, -200px) rotate(-90deg);
  }
  100% {
    transform: scale(1) translate(-60px, 0px);
  }
}
.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
}
.btn--primary {
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
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
  margin-left: -96px;
}
.form__field {
  width: 20vw;
  background: #fff;
  color: #282e5c;
  font: inherit;
  box-shadow: 0px 6px 5px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  padding: 22px 18px;
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
</style>
