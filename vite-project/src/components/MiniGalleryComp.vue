<template>
  <div class="mini-gallery">
    <div id="header">
      <h1>Browse our Custom Shoe Store</h1>
    </div>
    <div class="mini-gallery-container-phone">
      <div class="Picture-1 img">
        <img src="../assets/adv_6.png" />
      </div>
      <div class="Picture-2 img">
        <img src="../assets/Screenshot_12.png" />
      </div>
      <div class="Picture-3 img">
        <img src="../assets/nike_graffiti.jpg" />
      </div>
      <div class="Picture-4 img">
        <img src="../assets/floral.jpg" />
      </div>
      <div class="Picture-5 img">
        <img src="../assets/simsons_verticaljpg.jpg" />
      </div>
    </div>
    <div class="mini-gallery-container-tablet">
      <div class="Picture-6 img">
        <img src="../assets/adv_6.png" />
      </div>
      <div class="Picture-7 img">
        <img src="../assets/adv_8.png" />
      </div>
      <div class="horizontal-photos">
        <div class="Picture-8 img">
          <img src="../assets/Screenshot_9.png" />
        </div>
        <div class="Picture-9 img">
          <img src="../assets/Screenshot_8.png" />
        </div>
      </div>
      <div class="Picture-10 img">
        <img src="../assets/nike_graffiti.jpg" />
      </div>
    </div>
    <div class="mini-gallery-container-desktop">
      <div class="vertical-photos-1">
        <div class="Picture-11 img">
          <img src="../assets/adv_6.png" />
        </div>
        <div class="Picture-12 img">
          <img src="../assets/adv_8.png" />
        </div>
        <div class="Picture-13 img">
          <img src="../assets/Screenshot_9.png" />
        </div>
        <div class="Picture-14 img">
          <img src="../assets/Screenshot_8.png" />
        </div>
        <div class="Picture-15 img">
          <img src="../assets/Screenshot_11.png" />
        </div>
        <div class="Picture-16 img">
          <img src="../assets/Screenshot_12.png" />
        </div>
      </div>
    </div>
    <router-link to="/shop" class="router-link">
      <div class="btn">
        View More
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 3L15.2929 15.2929C15.6834 15.6834 15.6834 16.3166 15.2929 16.7071L3 29"
            stroke="#FFE391"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M16 3L28.2929 15.2929C28.6834 15.6834 28.6834 16.3166 28.2929 16.7071L16 29"
            stroke="#EDEFF9"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MiniGallery',
  props: {}
}
</script>

<style scoped>
#header {
  width: 90vw;
  max-width: 120rem;
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
  .Picture-8,
  .Picture-9 {
    width: 50%;
  }
  .Picture-8 img,
  .Picture-9 img {
    height: 100%;
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
    max-width: 120rem;
  }
  .vertical-photos-1 {
    display: grid;
    grid-template-columns: 0.9fr 0.9fr 1.2fr;
    grid-template-rows: 0.3fr 0.58fr 0.26fr 0.36fr 0.3fr;
    gap: var(--space-2xs) var(--space-2xs);
    grid-template-areas:
      'Picture-11 Picture-11 Picture-12'
      'Picture-13 Picture-13 Picture-12'
      'Picture-13 Picture-13 Picture-14'
      'Picture-15 Picture-15 Picture-14'
      'Picture-15 Picture-15 Picture-16';
  }
  .img img {
    max-width: 100%;
    max-height: 100%;
  }
  .img:hover {
    -webkit-transform: scale(1.06);
    -moz-transform: scale(1.06);
    -ms-transform: scale(1.06);
    transform: scale(1.06);
    -webkit-transition: -webkit-transform 0.25s;
    -moz-transition: -moz-transform 0.25s;
    -ms-transition: -ms-transform 0.25s;
    transition: transform 0.75s;
    z-index: 2;
  }
  .Picture-11 {
    grid-area: Picture-11;
  }
  .Picture-12 {
    grid-area: Picture-12;
  }
  .Picture-13 {
    grid-area: Picture-13;
  }
  .Picture-14 {
    grid-area: Picture-14;
  }
  .Picture-15 {
    grid-area: Picture-15;
  }
  .Picture-16 {
    grid-area: Picture-16;
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
}
.btn svg {
  transition: transform 0.3s ease-in-out;
}
.btn svg path {
  transition: stroke 0.3s ease-in-out;
}
.btn:hover {
  transform: scale(1.1);
  color: var(--selected);
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
  stroke: var(--selected);
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
