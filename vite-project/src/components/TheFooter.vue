<template>
  <div id="footer-section">
    <div class="main">
      <div class="header-container">
        <router-link to="/" class="header router-link-logo">
          <div class="logo">
            <FooterLogoSVG />
          </div>
          <NGradientText gradient="linear-gradient(90deg, #D9DDFF 0%, #DABED3 80%)" class="phrase">{{
            $t('footer.title')
          }}</NGradientText>
        </router-link>
        <div class="main-details">
          <div class="pin">
            <PinSVG />
            <div>Karatasiou 13, Naousa Imathia, 59200</div>
          </div>
          <div class="phone">
            <PhoneSVG />
            <div>+30 6989596286</div>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="vertical-line"></div>
      <div class="details-container">
        <div class="details">
          <div class="redirects">
            <router-link class="router-link" to="/shop">
              <div>{{ $t('footer.shop') }}</div>
            </router-link>
            <router-link class="router-link" to="/yourdesign">
              <div>{{ $t('footer.yourdesign') }}</div>
            </router-link>
            <router-link class="router-link" to="/faq">
              <div>{{ $t('footer.faq') }}</div>
            </router-link>
            <router-link class="router-link" to="/about">
              <div>{{ $t('footer.aboutus') }}</div>
            </router-link>
          </div>
          <div class="social">
            <div>{{ $t('footer.social') }}</div>
            <div class="social-icon-container">
              <a
                href="https://www.facebook.com/profile.php?id=100091480560209"
                alt="Link for Sole Blast's Facebook page"
              >
                <FacebookSVG />
              </a>
              <a href="https://www.tiktok.com/@soleblast" alt="Link for Sole Blast's TikTok page">
                <TikTokSVG />
              </a>
              <a
                href="https://www.instagram.com/sole.blast/"
                alt="Link for Sole Blast's Instagram page"
              >
                <InstagramSVG />
              </a>
            </div>
          </div>
          <div class="contact">
            <div>{{ $t('footer.contact') }}</div>
            <div>soleblastofficial@gmail.com</div>
          </div>
          <div class="policies redirects">
            <div>{{ $t('footer.policies') }}</div>
            <router-link class="router-link" to="/policies">
              <div>{{ $t('footer.terms') }}</div>
            </router-link>
          </div>
        </div>
        <div class="banks">
          <BanksSVG />
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
import PhoneSVG from './svg-components/phoneSVG.vue'
import PinSVG from './svg-components/pinSVG.vue'
import BanksSVG from './svg-components/banksSVG.vue'
import { NGradientText } from 'naive-ui'

export default {
  components: { FooterLogoSVG, FacebookSVG, TikTokSVG, InstagramSVG, NGradientText, PhoneSVG, PinSVG, BanksSVG },
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
  font-size: var(--step-0);
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-inline: auto;
}
.header-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-m);
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

.policies {
  gap: 0;
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

.router-link,
.router-link-logo {
  text-decoration: none;
  color: var(--primary);
  cursor: pointer;
  position: relative;
  width: fit-content;
}

.router-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background: var(--primary);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  transform: scaleX(0);
}

.router-link:hover::after {
  transform-origin: bottom left;
  transform: scaleX(1);
}


.pin,
.phone {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}
.details-container {
  width: 100%;
}
.main-details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: var(--space-xs);
}

.banks {
  margin-top: var(--space-m);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  width: 100%;
}

@media (min-width: 558px) {
  .phrase {
    font-size: var(--step-5);
  }
}

@media (min-width: 1300px) {
  #footer-section {
    font-size: var(--step--1);
  }
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
    gap: var(--space-m);
    width: 100%;
  }
  .header {
    width: 100%;
  }
  .header-container {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
