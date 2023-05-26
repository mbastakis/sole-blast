<script>
import HeroSection from '@/components/HeroSectionComp.vue'
import MiniGallery from '@/components/MiniGalleryComp.vue'
import ProcessSection from '@/components/ProcessSectionComp.vue'
import ContactUs from '@/components/ContactUsComp.vue'

import { NMessageProvider } from 'naive-ui'

export default {
  components: {
    herosection: HeroSection,
    minigallery: MiniGallery,
    processsection: ProcessSection,
    contactus: ContactUs,
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
