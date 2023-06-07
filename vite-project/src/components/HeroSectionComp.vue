<template>
  <div id="hero-section">
    <div id="floating-section">
      <viewport></viewport>
      <div id="floating-quote">
        <p>Nike Air Force 1 Supreme</p>
        <h2>The Alien Invasion</h2>
        <p>{{ $t('hero-section.description') }}</p>
      </div>
    </div>

    <div class="bottom-section">
      <BaseHorizontalSlider :text="$t('hero-section.sliding-text')" speed="10" />
      <div id="transition-layer"></div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    viewport: defineAsyncComponent(() => import('@/components/ViewPortComp.vue')),
    BaseHorizontalSlider: defineAsyncComponent(() =>
      import('@/components/BaseHorizontalSlider.vue')
    )
  },
  mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const heroSection = document.getElementById('hero-section')
    const windowHeight = window.innerHeight

    const heroSectionHeight = windowHeight - navbarHeight

    heroSection.style.height = `${heroSectionHeight}px`
  }
}
</script>
<style scoped>
#hero-section {
  height: 85vh;
  height: 85svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#transition-layer {
  background-color: white;
  height: var(--space-m);
  width: 100%;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  position: absolute;
  bottom: 0;
}
#floating-section {
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 1;
}
#floating-quote {
  position: absolute;
  bottom: clamp(10%, 20%, 50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
  padding: var(--space-s);
  color: var(--primary);

  text-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
}
#floating-quote p {
  font-weight: 600;
  font-size: var(--step--1);
}
#floating-quote h2 {
  font-size: var(--step-2);
}
.bottom-section {
  position: relative;
}

@media (min-width: 961px) {
  #floating-quote {
    padding-left: var(--space-l);
    bottom: 50%;
  }
}
</style>
