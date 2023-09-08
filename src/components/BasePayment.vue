<template>
  <div>
    <iframe
      ref="iframe"
      name="my-hosted-form"
      data-sc-key="sbpb_YzYxOWMwNTItYTRlMi00MTM4LTllZmMtYTI3NzFkYjdjMDky"
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
    default: 'Jasmine Green Tea'
  },
  description: {
    type: String,
    default: 'Smooth tea with a rich jasmine bouquet'
  },
  reference: {
    type: String,
    default: '99991'
  },
  amount: {
    type: String,
    default: '100'
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
    console.log(response)
    if (response.paymentStatus == 'APPROVED') {
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
