<template>
    <div class="mini-gallery">
        <div id="header"><h1>A Gallery of Sole-ful Creations</h1></div>
        <!-- <div id="header"><h1>Step into Our Shoe-tique: A Gallery of Hand-Painted Masterpieces</h1></div> -->
        <div class="mini-gallery-container">
            <div class="Picture-1 img"><img class="img-1" src="../assets/harry-potter.jpg"></div>
            <div class="Picture-2 img"><img class="img-2" src="../assets/floral.jpg"></div>
            <div class="Picture-3 img"><img class="img-3" src="../assets/simsons_verticaljpg.jpg"></div>
            <div class="Picture-4 img"><img class="img-4" src="../assets/anime.jpg"></div>
            <div class="Picture-5 img"><img class="img-5" src="../assets/vans.jpg"></div>
            <div class="Picture-6 img"><img class="img-6" src="../assets/nike_graffiti.jpg"></div>
        </div>
    </div>
</template>
  
<script>
export default {
props: {},
}
</script>

<style>
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
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
img:hover {
    object-fit:scale-down;
}
.img:hover {
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
    -webkit-transition: -webkit-transform 0.25s;
    -moz-transition: -moz-transform 0.25s;
    -ms-transition:  -ms-transform 0.25s;
    transition:  transform 0.75s;
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
    overflow: hidden
}
.Picture-5 { 
    grid-area: Picture-5; 
    width: 100%;
    height: 100%;
    border-top-left-radius: 1.5rem;
    overflow: hidden
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
    overflow: hidden
}
</style>
