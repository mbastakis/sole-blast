<template>
  <div class="mini-gallery">
    <div id="header"><h1>A Gallery of Sole-ful <br> Creations</h1></div>
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
  </div>
</template>

<script>
export default {
  props: {}
};
</script>

<style scoped>
.mini-gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#header {
  width: 90vw;
  margin: 5% 0px;
}
#header h1 {
  font-size: 2em;
  color: var(--secondary);
}
.mini-gallery-container-phone {
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mini-gallery img {
  border-radius: 1em;
  width: 100%
}
.mini-gallery-container-tablet,
.mini-gallery-container-desktop {
  display: none;
}

@media (min-width:641px)  {
  #header h1 {
    font-size: 3em;
    color: var(--secondary);
  }
  .mini-gallery-container-phone  {
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
    gap: 10px;
  }
  .horizontal-photos {
    display: flex;
    gap: 10px;
  }
  .Picture-8, .Picture-9 {
    width: 50%;
  }
  .Picture-8 img, .Picture-9 img{
    height: 100%;
  }
}

@media (min-width:961px)  {
  #header h1 {
    font-size: 5em;
    color: var(--secondary);
  }
  .mini-gallery-container-tablet {
    display: none;
  }
  .mini-gallery-container-desktop {
    display: block;
    height: 100%;
    width: 90vw;
  }
  .vertical-photos-1 {
    display: grid; 
    grid-template-columns: 0.9fr 0.9fr 1.2fr; 
    grid-template-rows: 0.3fr 0.58fr 0.26fr 0.36fr 0.3fr;
    gap: 10px 10px;
    grid-template-areas:
      "Picture-11 Picture-11 Picture-12"
      "Picture-13 Picture-13 Picture-12"
      "Picture-13 Picture-13 Picture-14"
      "Picture-15 Picture-15 Picture-14"
      "Picture-15 Picture-15 Picture-16"
  }
  .img img{
    max-width: 100%;
    max-height: 100%;
  }
  .img:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
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

</style>
