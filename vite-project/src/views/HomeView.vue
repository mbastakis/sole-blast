<script>
import HeroSection from '@/components/HeroSectionComp.vue'
import MiniGallery from '@/components/MiniGalleryComp.vue'
import ProcessSection from '@/components/ProcessSectionComp.vue'
import ContactUs from '@/components/ContactUsComp.vue'

export default {
  components: {
    herosection: HeroSection,
    minigallery: MiniGallery,
    processsection: ProcessSection,
    contactus: ContactUs
  }
}
</script>

<template>
  <main>
    <herosection />
    <minigallery />
    <processsection />
    <contactus />
  </main>
</template>

<style></style>
