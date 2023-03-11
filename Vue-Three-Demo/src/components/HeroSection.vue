<template>
    <div id="hero-section">
        <div id="navbar">
            <ul>
                <li>Gallery</li>
            </ul>
            ShoeLogo
            <ul>
                <li>About Us</li>
            </ul>
        </div>
            <div id="floating-section">
                <div id="floating-quote">
    
                </div>
                <viewport></viewport>
            </div>
            <div id="hero-slider">
                Be yourself Win your Enemies
            </div>
    </div>
</template>

<script>
import ViewPort from "./ViewPort.vue";

export default {
    components: {
    viewport: ViewPort
  }
}
</script>

<style>
#hero-section {
    height: 750px;
    background: rgb(218,190,211);
    background: linear-gradient(90deg, rgba(218,190,211,1) 0%, rgba(169,177,224,1) 46%, rgba(137,138,203,1) 100%);
}
</style>