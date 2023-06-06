<template>
  <div class="mini-gallery">
    <div id="header">
      <h1>{{ $t('mini-gallery.title') }}</h1>
    </div>
    <div class="mini-gallery-container-phone">
      <div class="img">
        <router-link :to="urls[3]">
          <img :src="images[3]" />
        </router-link>
      </div>
      <div class="img">
        <router-link :to="urls[1]">
          <img :src="images[1]" />
        </router-link>
      </div>
      <div class="img">
        <router-link :to="urls[2]">
          <img :src="images[2]" />
        </router-link>
      </div>
      <div class="img">
        <router-link :to="urls[0]">
          <img :src="images[0]" />
        </router-link>
      </div>
      <div class="img">
        <router-link :to="urls[5]">
          <img :src="images[5]" />
        </router-link>
      </div>
    </div>
    <div class="mini-gallery-container-tablet">
      <div class="img">
        <router-link :to="urls[3]">
          <img :src="images[3]" />
        </router-link>
      </div>
      <div class="img">
        <router-link :to="urls[4]">
          <img :src="images[4]" />
        </router-link>
      </div>
      <div class="horizontal-photos">
        <div class="img">
          <router-link :to="urls[0]">
            <img :src="images[0]" />
          </router-link>
        </div>
        <div class="img">
          <router-link :to="urls[5]">
            <img :src="images[5]" />
          </router-link>
        </div>
      </div>
      <div class="img">
        <router-link :to="urls[1]">
          <img :src="images[1]" />
        </router-link>
      </div>
    </div>
    <div class="mini-gallery-container-desktop">
      <div class="vertical-photos-1">
        <div class="Picture-1 img">
          <router-link :to="urls[3]">
            <img :src="images[3]" />
          </router-link>
        </div>
        <div class="Picture-2 img">
          <router-link :to="urls[4]">
            <img :src="images[4]" />
          </router-link>
        </div>
        <div class="Picture-3 img">
          <router-link :to="urls[1]">
            <img :src="images[1]" />
          </router-link>
        </div>
        <div class="Picture-4 img">
          <router-link :to="urls[2]">
            <img :src="images[2]" />
          </router-link>
        </div>
        <div class="Picture-5 img">
          <router-link :to="urls[0]">
            <img :src="images[0]" />
          </router-link>
        </div>
        <div class="Picture-6 img">
          <router-link :to="urls[5]">
            <img :src="images[5]" />
          </router-link>
        </div>
      </div>
    </div>
    <router-link to="/shop" class="router-link">
      <div class="btn">
        {{ $t('mini-gallery.button') }}
        <DoubleRightArrowSVG />
      </div>
    </router-link>
  </div>
</template>

<script>
import DoubleRightArrowSVG from './svg-components/doubleRightArrowSVG.vue'
import img3 from '../assets/miniGallery/alien_comix1.webp'
import img2 from '../assets/miniGallery/charizard_1.jpg'
import img1 from '../assets/miniGallery/girl.jpg'
import img4 from '../assets/miniGallery/rick_and_morty.jpg'
import img5 from '../assets/miniGallery/street.jpg'
import img6 from '../assets/miniGallery/watergun1.jpg'

export default {
  name: 'MiniGallery',
  props: {},
  components: { DoubleRightArrowSVG },
  data() {
    return {
      images: [img1, img2, img3, img4, img5, img6],
      urls: [
        '/shop/NyFcl9nE3aZZ53W3tpqS',
        '/shop/6JodqmfS3yEsLLIRtegk',
        '/shop/QgcY3Rtm054CihLz1hwu',
        '/shop/B0tRhIehvws7RHwwUieD',
        '/shop/EtZ1V8IUVs4Z9pJWe7L1',
        '/shop/6M0K7mSnqncsCSmN4e6w'
      ]
    }
  }
}
</script>

<style scoped>
#header {
  width: 90vw;
  max-width: 1700px;
  align-content: start;
  padding: var(--space-s) 0;

  font-size: var(--step--1);
  color: var(--secondary);
  font-weight: 900;
}
.mini-gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary);
}
.mini-gallery-container-phone {
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.mini-gallery img {
  border-radius: 1em;
  width: 100%;
}
.mini-gallery-container-tablet,
.mini-gallery-container-desktop {
  display: none;
}
@media (min-width: 641px) {
  #header {
    font-size: var(--step-2);
  }
  .mini-gallery-container-phone {
    display: none;
  }
  .mini-gallery-container-desktop {
    display: none;
  }
  .mini-gallery-container-tablet {
    display: block;
    height: 100%;
    width: 90vw;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }
  .horizontal-photos {
    display: flex;
    gap: var(--space-xs);
  }
}

@media (min-width: 961px) {
  .mini-gallery-container-tablet {
    display: none;
  }
  .mini-gallery-container-desktop {
    display: block;
    height: 100%;
    width: 90vw;
    max-width: 1700px;
  }
  .vertical-photos-1 {
    display: grid;
    grid-template-columns: 0.9fr 0.9fr 1.2fr;
    grid-template-rows: 0.3fr 0.58fr 0.26fr 0.36fr 0.3fr;
    gap: var(--space-2xs) var(--space-2xs);
    grid-template-areas:
      'Picture-1 Picture-1 Picture-2'
      'Picture-1 Picture-1 Picture-2'
      'Picture-3 Picture-3 Picture-2'
      'Picture-3 Picture-3 Picture-2'
      'Picture-3 Picture-3 Picture-2'
      'Picture-3 Picture-3 Picture-4'
      'Picture-5 Picture-5 Picture-4'
      'Picture-5 Picture-5 Picture-6'
      'Picture-5 Picture-5 Picture-6';
  }
  .img {
    transition: transform 200ms ease-in-out;
    display: grid;
    place-items: center;
  }
  .img:hover {
    -webkit-transform: scale(1.06);
    -moz-transform: scale(1.06);
    -ms-transform: scale(1.06);
    transform: scale(1.06);
    --transition-property: transform;
    --transision-duration: 500ms;

    transition: var(--transition-property) var(--transision-duration) ease-in-out;
    transform: translateY(-5%);
    z-index: 2;
  }
  .Picture-1 {
    grid-area: Picture-1;
  }
  .Picture-2 {
    grid-area: Picture-2;
  }
  .Picture-3 {
    grid-area: Picture-3;
  }
  .Picture-4 {
    grid-area: Picture-4;
  }
  .Picture-5 {
    grid-area: Picture-5;
  }
  .Picture-6 {
    grid-area: Picture-6;
  }
  .Picture-17 {
    grid-area: Picture-17;
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  padding: var(--space-xs) var(--space-s);

  font-size: var(--step-2);
  color: var(--primary);
  font-weight: 700;
  border-radius: 0.5em;
  margin-top: var(--space-l);
  margin-bottom: var(--space-3xs);
  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in;

  background: linear-gradient(90deg, var(--selected) 50%, transparent 50%),
    linear-gradient(90deg, var(--selected) 50%, var(--secondary) 50%) var(--space-xs);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background-position: left bottom;
  animation: slide 0.3s linear;
  transform: scale(1.1);
}

@keyframes slide {
  0% {
    background-position: right bottom;
  }
  100% {
    background-position: left bottom;
  }
}

.btn svg {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 2.775);
}
.btn svg path {
  transition: stroke 0.3s ease-in-out;
  stroke: var(--primary);
}
.btn:hover svg {
  transform: translateX(0.3em);
}
.btn svg {
  width: 0.8em;
  height: 0.8em;
  margin-left: var(--space-xs);
}
.router-link {
  text-decoration: none;
}
</style>
