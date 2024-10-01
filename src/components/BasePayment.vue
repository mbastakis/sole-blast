<template>
  <div>
    <iframe
      ref="iframe"
      name="my-hosted-form"
      data-sc-key="`process.env.FIREBASE_API`"
      :data-name="name"
      :data-description="description"
      :data-reference="reference"
      :data-amount="amount"
      data-color="#282e5c"
    >
    </iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps } from 'vue'

// Defining props
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reference: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  }
})

let iframe = ref(null)

const emits = defineEmits(['paymentSuccess', 'paymentFailure'])

onMounted(() => {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://www.simplify.com/commerce/simplify.pay.js'
  document.body.appendChild(script)

  SimplifyCommerce.hostedPayments(function (response) {
    if (response.data.paymentStatus == 'APPROVED') {
      // emit paymentSuccess event
      emits('paymentSuccess')
    }
  })
})
</script>

<style scoped>
iframe {
  border: none;
  height: 480px;
  width: 100%;
  overflow: hidden;
}
</style>
