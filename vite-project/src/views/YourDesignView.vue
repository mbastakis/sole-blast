<template>
  <div id="your-design">
    <TheSVGprocessSection class="section" />
    <ThePricingTiers class="section" />
    <n-message-provider>
      <TheOrderInformation class="section" />
      <TheShippingInformation class="section" />
    </n-message-provider>
  </div>
</template>

<script>
import TheSVGprocessSection from '../components/TheSVGprocessSection.vue'
import ThePricingTiers from '../components/ThePricingTiers.vue'
import TheOrderInformation from '../components/TheOrderInformation.vue'
import TheShippingInformation from '../components/TheShippingInformation.vue'
import { NMessageProvider } from 'naive-ui'

export default {
  components: {
    TheSVGprocessSection,
    ThePricingTiers,
    TheOrderInformation,
    TheShippingInformation,
    NMessageProvider
  }
}
</script>

<style scoped>
#your-design {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--space-xl);
}
.section {
  background-color: var(--primary);
  border-radius: 1.5rem;
  width: 100%;
}
</style>
