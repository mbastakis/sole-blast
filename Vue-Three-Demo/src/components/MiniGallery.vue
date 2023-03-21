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
  height: 100vh;
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
.mini-gallery {
  width: 100%;
  height: 1520px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
} 
#header {
  width: 85vw;
}
#header h1 {
  font-size: 5rem;
  margin-bottom: 60px;
  margin-top: 20px;
  width: 750px;
  color: var(--secondary);
}
.mini-gallery-container {
  height: 1244px;
  width: 85vw;
  display: grid;
  grid-template-columns: 0.25fr 0.21fr 0.22fr 0.32fr;
  grid-template-rows: 0.5fr 0.2fr 0.3fr;
  grid-auto-columns: 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "Picture-1 Picture-2 Picture-2 Picture-3"
    "Picture-4 Picture-4 Picture-5 Picture-3"
    "Picture-4 Picture-4 Picture-5 Picture-6";
}
.mini-gallery-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.mini-gallery-container img:hover {
  object-fit: scale-down;
}
.img:hover {
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
  -webkit-transition: -webkit-transform 0.25s;
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  transition: transform 0.75s;
}
.Picture-1 {
  grid-area: Picture-1;
  width: 100%;
  height: 100%;
  border-top-left-radius: 3.5rem;
  border-bottom-right-radius: 3.5rem;
  overflow: hidden;
}
.img-1 {
  object-position: 60%;
}
.Picture-2 {
  grid-area: Picture-2;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 1.5rem;
  overflow: hidden;
}
.Picture-3 {
  grid-area: Picture-3;
  width: 100%;
  height: 100%;
  border-top-right-radius: 3.5rem;
  border-bottom-left-radius: 1.5rem;
  overflow: hidden;
}
.img-3 {
  object-position: 20%;
}
.Picture-4 {
  grid-area: Picture-4;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 3.5rem;
  border-top-right-radius: 3.5rem;
  overflow: hidden;
}
.Picture-5 {
  grid-area: Picture-5;
  width: 100%;
  height: 100%;
  border-top-left-radius: 1.5rem;
  overflow: hidden;
}
.img-5 {
  object-position: 35%;
}
.Picture-6 {
  grid-area: Picture-6;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 3.5rem;
  border-top-left-radius: 1.5rem;
  overflow: hidden;
}
