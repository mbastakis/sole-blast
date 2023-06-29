<template>
  <div id="your-design">
    <TheSVGprocessSection class="section" />
    <ThePricingTiers class="section" />
    <n-message-provider>
      <n-dialog-provider>
        <TheOrderInformation class="section" @submit="submitOrderForm" @change="hideShippingForm" />
      </n-dialog-provider>
      <keep-alive>
        <TheShippingInformation
          class="section shipping-info"
          v-if="finishedOrderForm"
          @submit="submitShippingForm"
        />
      </keep-alive>
    </n-message-provider>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import TheSVGprocessSection from '../components/TheSVGprocessSection.vue'
import ThePricingTiers from '../components/ThePricingTiers.vue'
import TheOrderInformation from '../components/TheOrderInformation.vue'
import TheShippingInformation from '../components/TheShippingInformation.vue'
import { NMessageProvider, NDialogProvider, useMessage } from 'naive-ui'

export default {
  components: {
    TheSVGprocessSection,
    ThePricingTiers,
    TheOrderInformation,
    TheShippingInformation,
    NMessageProvider,
    NDialogProvider,
    useMessage
  },
  data() {
    return {
      finishedOrderForm: false,
      orderForm: null,
      shippingForm: null,
      uploadedImages: null
    }
  },
  setup() {
    window.$message = useMessage()
  },
  methods: {
    async submitYourDesign() {
      // Convert base64 images to attachments
      const attachments = this.uploadedImages.map((file, index) => {
        let base64Image = file.split(',')[1] // Remove the Data URL prefix
        return {
          filename: `attachment${index + 1}.jpg`, // Name your file
          content: base64Image, // your base64 image
          encoding: 'base64' // specify it's base64
        }
      })

      // Include orderForm and shippingForm in the request
      const requestData = {
        attachments,
        orderForm: this.orderForm,
        shippingForm: this.shippingForm
      }

      // Send a POST request to your Netlify function
      await fetch('./.netlify/functions/submitYourDesign', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestData)
      }).then((res) => {
        if (res.status === 200) {
          window.$message.success('Your design was submitted successfully!')
        } else {
          window.$message.error('There was an error submitting your design. Please try again.')
        }
      })
    },
    clearForms() {
      this.orderForm = null
      this.shippingForm = null
      this.uploadedImages = null
      this.finishedOrderForm = false
    },
    submitOrderForm(formData, uploadedImages) {
      this.orderForm = formData
      this.uploadedImages = uploadedImages

      this.finishedOrderForm = true
      nextTick(() => {
        const shippingInfoElement = document.querySelector('.shipping-info')
        if (shippingInfoElement) {
          shippingInfoElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    submitShippingForm(formData) {
      this.shippingForm = formData
      // Add some logic to check if the email was sent

      // Try to send email
      this.submitYourDesign()
    },
    hideShippingForm() {
      this.finishedOrderForm = false
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
