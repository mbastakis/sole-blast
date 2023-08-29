<template>
  <div>
    <iframe
      ref="iframe"
      name="my-hosted-form"
      :data-sc-key="scKey"
      :data-name="name"
      :data-description="description"
      :data-reference="reference"
      :data-amount="amount"
      :data-color="color"
    >
    </iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'

const scKey = 'sbpb_YzYxOWMwNTItYTRlMi00MTM4LTllZmMtYTI3NzFkYjdjMDky'
const name = 'Jasmine Green Tea'
const description = 'Smooth tea with a rich jasmine bouquet'
const reference = '99999'
const amount = '900'
const color = '#282e5c'

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
