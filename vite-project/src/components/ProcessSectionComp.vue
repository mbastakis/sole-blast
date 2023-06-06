<template>
  <div id="process-section">
    <div id="gallery-transition-layer"></div>

    <div class="section-container">
      <section id="header-section" class="thought section">
        <div class="header-section-image">
          <img src="../assets/Process_Section_Step1.png" alt="" />
        </div>
        <div class="header-section-text">
          <h1>{{ $t('process-section.title') }}</h1>
          <p>
            {{ $t('process-section.description') }}
          </p>
        </div>
      </section>

      <section id="first-section" class="left-chat chat">
        <div>
          <div class="first-section-text">
            <div>
              <span>{{ $t('process-section.step1.title') }}</span>
              {{ $t('process-section.step1.description') }}
            </div>
            <router-link to="/yourdesign" class="router-link">
              <div class="btn">
                <div>{{ $t('process-section.yourdesignBtn') }}</div>
                <featherSVG class="featherSVG" />
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section id="second-section" class="right-chat chat section right-section">
        <div class="section-image">
          <img src="../assets/Process_Section_Step2.png" alt="" />
        </div>
        <div class="section-text">
          <span> {{ $t('process-section.step2.title') }}</span>
          {{ $t('process-section.step2.description') }}
        </div>
      </section>

      <section id="third-section" class="left-chat chat section">
        <div class="last-section-image">
          <img src="../assets/Process_Section_Step3.png" alt="" />
        </div>
        <div class="section-text">
          <span>{{ $t('process-section.step3.title') }}</span>
          {{ $t('process-section.step3.description') }}
        </div>
      </section>
    </div>

    <div class="bottom-buttons">
      <router-link to="/yourdesign" class="router-link">
        <div class="btn">
          <div>{{ $t('process-section.yourdesignBtn2') }}</div>
        </div>
      </router-link>
      <span>{{ $t('process-section.splitBtn') }}</span>
      <router-link to="/shop" class="router-link">
        <div class="btn">
          <div>{{ $t('process-section.galleryBtn') }}</div>
        </div>
      </router-link>
    </div>

    <processSectionTransitionSVG />
  </div>
</template>

<script>
import featherSVG from '@/components/svg-components/featherSVG.vue'
import processSectionTransitionSVG from '@/components/svg-components/processSectionTransitionSVG.vue'

export default {
  name: 'ProcessSection',
  components: { featherSVG, processSectionTransitionSVG }
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
  content: '';
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
  box-shadow: 40px -34px 0 0 #fff, -28px -6px 0 -2px #fff, -24px 17px 0 -6px #fff,
    -5px 25px 0 -10px #fff;
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
  content: '.';
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
  content: '.';
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
  max-width: 20rem;
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
    padding: var(--space-s) 0;
  }
  #third-section {
    padding: var(--space-s) 0;
  }
  .header-section-image img {
    width: 100%;
    min-width: 20rem;
    height: clamp(15rem, 45vh, 45rem);
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
  .last-section-image {
    min-width: 25rem;
  }
  .section-image img {
    min-width: 20rem;
    border: 7px solid hsla(0, 0%, 100%, 0.5);
  }
  .bottom-buttons .btn {
    font-size: var(--step-1);
    width: calc(8rem + 15vw);
  }
}

.bottom-buttons .btn:hover {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
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

  background: linear-gradient(90deg, var(--selected) 50%, transparent 50%),
    linear-gradient(90deg, var(--selected) 50%, var(--secondary) 50%) var(--space-xs);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
  background-position: left bottom;
  animation: slide 0.3s linear;
}
svg {
  margin-bottom: -5px;
}
.btn :deep(.featherSVG) {
  width: 1.7rem;
  transition: transform 0.3s ease-in-out;
}
.btn :deep(.featherSVG path) {
  transition: stroke 0.3s ease-in-out;
}
.btn:hover :deep(.featherSVG) {
  transform: translateX(0.2em);
}
.btn:hover :deep(.featherSVG path:nth-child(2)) {
  animation: write 2s ease-in-out;
}
.router-link {
  text-decoration: none;
}

@keyframes slide {
  0% {
    background-position: right bottom;
  }
  100% {
    background-position: left bottom;
  }
}
</style>
