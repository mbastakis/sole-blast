<script>
import HeroSection from '@/components/HeroSectionComp.vue'
import MiniGallery from '@/components/MiniGalleryComp.vue'

import { NMessageProvider } from 'naive-ui'
import { defineAsyncComponent } from 'vue'


export default {
  components: {
    herosection: HeroSection,
    minigallery: MiniGallery,
    processsection: defineAsyncComponent(() => import('@/components/ProcessSectionComp.vue')),
    contactus: defineAsyncComponent(() => import('@/components/ContactUsComp.vue')),
    NMessageProvider
  }
}
</script>

<template>
  <main>
    <herosection />
    <minigallery />
    <processsection />
    <n-message-provider>
      <contactus />
    </n-message-provider>
  </main>
</template>

<style></style>
