<template>
  <div id="your-design">
    <TheSVGprocessSection class="section" />
    <ThePricingTiers class="section" />
    <n-message-provider>
      <n-dialog-provider>
        <TheOrderInformation class="section" @submit="submitOrderForm" @change="hideShippingForm" />
      </n-dialog-provider>
      <keep-alive>
        <TheShippingInformation class="section shipping-info" v-if="finishedOrderForm" />
      </keep-alive>
    </n-message-provider>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
import TheSVGprocessSection from '../components/TheSVGprocessSection.vue'
import ThePricingTiers from '../components/ThePricingTiers.vue'
import TheOrderInformation from '../components/TheOrderInformation.vue'
import TheShippingInformation from '../components/TheShippingInformation.vue'
import { NMessageProvider, NDialogProvider } from 'naive-ui'

export default {
  components: {
    TheSVGprocessSection,
    ThePricingTiers,
    TheOrderInformation,
    TheShippingInformation,
    NMessageProvider,
    NDialogProvider
  },
  setup() {
    const finishedOrderForm = ref(false)

    const submitOrderForm = () => {
      finishedOrderForm.value = true
      nextTick(() => {
        const shippingInfoElement = document.querySelector('.shipping-info')
        if (shippingInfoElement) {
          shippingInfoElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }

    const hideShippingForm = () => {
      finishedOrderForm.value = false
    }

    return {
      finishedOrderForm,
      submitOrderForm,
      hideShippingForm
    }
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
  height: 100%;
  overflow: hidden;
  padding-bottom: var(--space-xl);
}
.section {
  background-color: var(--primary);
  border-radius: 1.5rem;
  width: 100%;
}
</style>
