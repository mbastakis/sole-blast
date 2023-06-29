<script setup>
import Navbar from './components/NavbarComp.vue'
import TheFooter from './components/TheFooter.vue'
import { NConfigProvider, NMessageProvider } from 'naive-ui'

const themeOverrides = {
  Select: {
    peers: {
      InternalSelection: {
        color: 'var(--background)',
        placeholderColor: 'var(--secondary)',
        borderHover: '1px solid var(--secondary)'
      },
      InternalSelectMenu: {}
    }
  },
  Switch: {
    railColorActive: 'var(--secondary)',
    railColor: 'var(--background)'
  },
  Form: {
    labelTextColor: 'var(--secondary)',
    labelFontWeight: '600',
    labelFontSizeTopMedium: 'var(--step--2)',
    feedbackTextColor: '#d03050'
  },
  Input: {
    color: 'var(--background)',
    placeholderColor: 'var(--secondary)',
    borderHover: '1px solid var(--secondary)',
    fontSizeMedium: 'var(--step--2)'
  },
  Upload: {
    draggerColor: 'var(--background)',
    draggerBorder: '1px dashed var(--secondary)'
  },
  Dialog: {
    fontSize: 'var(--step--1)',
    textColor: 'var(--secondary)',
    iconColorInfo: 'var(--secondary)',
    titleFontSize: 'var(--step-1)',
    peers: {
      Button: {
        fontSizeSmall: 'var(--step-0)',
        paddingSmall: 'var(--space-xs) var(--space-s)',
        colorInfo: 'var(--secondary)',
        colorHoverInfo: 'var(--selected)',
        colorPressedInfo: 'var(--selected)',
        borderInfo: 'none'
      }
    }
  },
  Tabs: {
    colorSegment: 'var(--background)',
    tabTextColorSegment: 'var(--secondary)',
    tabTextColorActiveSegment: 'var(--secondary)',
    tabFontSizeMedium: 'var(--step-0)',
    fontWeightStrong: '700'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <navbar />
    <router-view class="router-view" v-slot="{ Component }">
      <transition name="page-opacity" mode="out-in">
        <n-message-provider>
          <component :is="Component" />
        </n-message-provider>
      </transition>
    </router-view>
  </n-config-provider>
  <the-footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap');

:root {
  --primary: white;
  --secondary: #282e5c;
  --background: #f3f2fa;
  --selected: #4954a8;

  --step--2: clamp(0.78rem, calc(0.72rem + 0.31vw), 0.96rem);
  --step--1: clamp(0.94rem, calc(0.85rem + 0.46vw), 1.2rem);
  --step-0: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --step-1: clamp(1.35rem, calc(1.17rem + 0.91vw), 1.88rem);
  --step-2: clamp(1.62rem, calc(1.37rem + 1.26vw), 2.34rem);
  --step-3: clamp(1.94rem, calc(1.6rem + 1.72vw), 2.93rem);
  --step-4: clamp(2.33rem, calc(1.87rem + 2.31vw), 3.66rem);
  --step-5: clamp(2.8rem, calc(2.18rem + 3.09vw), 4.58rem);

  --space-3xs: clamp(0.31rem, calc(0.29rem + 0.11vw), 0.38rem);
  --space-2xs: clamp(0.56rem, calc(0.5rem + 0.33vw), 0.75rem);
  --space-xs: clamp(0.88rem, calc(0.79rem + 0.43vw), 1.13rem);
  --space-s: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --space-m: clamp(1.69rem, calc(1.49rem + 0.98vw), 2.25rem);
  --space-l: clamp(2.25rem, calc(1.99rem + 1.3vw), 3rem);
  --space-xl: clamp(3.38rem, calc(2.98rem + 1.96vw), 4.5rem);
  --space-2xl: clamp(4.5rem, calc(3.98rem + 2.61vw), 6rem);
  --space-3xl: clamp(6.75rem, calc(5.97rem + 3.91vw), 9rem);
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif; /* fallback */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: #dabed3;
  background-image: linear-gradient(
    to right bottom,
    #dabed3,
    #d4bbd5,
    #cdb8d8,
    #c5b5da,
    #bab3dd,
    #b2afdc,
    #a9abdc,
    #a0a7db,
    #9aa0d7,
    #9499d3,
    #8e91cf,
    #898acb
  );
  font-family: 'Source Sans Pro', Arial, sans-serif;
  min-height: 100vh;
  min-height: 100svh;
}
/* Fade transition */
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: opacity 0.3s ease;
}
.page-opacity-enter,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
