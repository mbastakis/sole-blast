<template>
  <div id="footer-section">
    <div class="main">
      <div class="header">
        <div class="logo">
          <FooterLogoSVG />
        </div>
        <div class="phrase">Color Your Walk</div>
      </div>
      <div class="line"></div>
      <div class="details">
        <div class="redirects">
          <router-link to="/shop">
            <div>Shop</div>
          </router-link>
          <router-link to="/yourdesign">
            <div>your design</div>
          </router-link>
          <router-link to="/faq">
            <div>faq</div>
          </router-link>
          <router-link to="/about">
            <div>about us</div>
          </router-link>
        </div>
        <div class="social">
          <div>social</div>
          <div class="social-icon-container">
            <a href="https://www.facebook.com/">
              <FacebookSVG />
            </a>
            <a href="https://www.instagram.com/">
              <TikTokSVG />
            </a>
            <a href="https://www.twitter.com/">
              <InstagramSVG />
            </a>
          </div>
        </div>
        <div class="contact">
          <div>contact</div>
          <div>soleblastofficial@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
  <div class="copywrites">
    <div>©2023 - Sole Blast - All Rights Reserved</div>
  </div>
</template>

<script>
import FooterLogoSVG from './svg-components/footerLogoSVG.vue'
import FacebookSVG from './svg-components/facebookSVG.vue'
import TikTokSVG from './svg-components/tiktokSVG.vue'
import InstagramSVG from './svg-components/instagramSVG.vue'

export default { components: { FooterLogoSVG, FacebookSVG, TikTokSVG, InstagramSVG } }
</script>

<style></style>
