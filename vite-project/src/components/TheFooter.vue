<template>
  <div id="footer-section">
    <div class="main">
      <router-link to="/" class="header router-link">
        <div class="logo">
          <FooterLogoSVG />
        </div>
        <NGradientText gradient="linear-gradient(90deg, #D9DDFF 0%, #DABED3 80%)" class="phrase"
          >Color Your Walk!</NGradientText
        >
      </router-link>
      <div class="horizontal-line"></div>
      <div class="vertical-line"></div>
      <div class="details">
        <div class="redirects">
          <router-link class="router-link" to="/shop">
            <div>Shop</div>
          </router-link>
          <router-link class="router-link" to="/yourdesign">
            <div>your design</div>
          </router-link>
          <router-link class="router-link" to="/faq">
            <div>faq</div>
          </router-link>
          <router-link class="router-link" to="/about">
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
            <a href="https://www.instagram.com/sole.blast/">
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
    <div class="copywrites">
      <div>©2023 - Sole Blast - All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import FooterLogoSVG from './svg-components/footerLogoSVG.vue'
import FacebookSVG from './svg-components/facebookSVG.vue'
import TikTokSVG from './svg-components/tiktokSVG.vue'
import InstagramSVG from './svg-components/instagramSVG.vue'
import { NGradientText } from 'naive-ui'

export default {
  components: { FooterLogoSVG, FacebookSVG, TikTokSVG, InstagramSVG, NGradientText }
}
</script>

<style scoped>
#footer-section {
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  color: var(--primary);
  box-sizing: border-box;
  display: flex;
  gap: var(--space-m);
  flex-direction: column;
  padding: var(--space-s) var(--space-m);
  font-weight: 500;
  font-size: var(--step--1);
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.logo {
  margin-right: var(--space-m);
}
.phrase {
  font-size: var(--step-4);
  font-weight: 700;
}
.main {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}

.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: var(--primary);
}
.vertical-line {
  width: 1px;
  background-color: var(--primary);
  display: none;
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}
.redirects {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.social {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}
.social-icon-container {
  display: flex;
  gap: var(--space-xs);
}
.copywrites {
  font-size: var(--step--2);
  margin-inline: auto;
}

.router-link {
  text-decoration: none;
  color: var(--primary);
}

@media (min-width: 558px) {
  .phrase {
    font-size: var(--step-5);
  }
}

@media (min-width: 1300px) {
  .main {
    flex-direction: row-reverse;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .horizontal-line {
    display: none;
  }
  .vertical-line {
    display: block;
    padding: 1px;
  }
  .details {
    flex-direction: row;
    align-items: start;
    gap: var(--space-l);
    width: 100%;
  }
  .header {
    width: 100%;
  }
}
</style>
