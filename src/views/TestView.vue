<template>
  <div id="app">
    <iframe id="paymentFrame"></iframe>
    <button @click="makePayment">Make Payment</button>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  methods: {
    makePayment() {
      var paymentFrame = document.getElementById('paymentFrame')

      window.SimplifyCommerce.hostedPayments(this.paymentResponseHandler, {
        operation: 'create.payment',
        publicKey: 'YOUR_HOSTED_PAYMENTS_ENABLED_PUBLIC_KEY',
        frameId: 'paymentFrame'
      })
    },
    paymentResponseHandler(response) {
      // Handle the payment response here
      if (response.paymentStatus === 'APPROVED') {
        console.log('Payment successful')
      } else {
        console.log('Payment failed')
      }
    }
  }
}
</script>

<style>
/* Here you can style your iframe and the rest of your page */
</style>
