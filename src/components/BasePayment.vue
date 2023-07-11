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
      style="border: none; height: 500px; overflow: hidden"
    >
    </iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const scKey = 'sbpb_YzYxOWMwNTItYTRlMi00MTM4LTllZmMtYTI3NzFkYjdjMDky'
const name = 'Jasmine Green Tea'
const description = 'Smooth tea with a rich jasmine bouquet'
const reference = '99999'
const amount = '10'
const color = '#282e5c'

let iframe = ref(null)

onMounted(() => {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://www.simplify.com/commerce/simplify.pay.js'
  document.body.appendChild(script)
})
</script>

<style scoped>
iframe {
  border: none;
  height: 500px;
  overflow: hidden;
}
</style>
