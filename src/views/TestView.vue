<template>
  <div id="app">
    <iframe id="paymentFrame"></iframe>
    <button @click="makePayment">Make Payment</button>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  mounted() {
    this.initializePayment()
  },
  methods: {
    initializePayment() {
      if (window.SimplifyCommerce) {
        window.SimplifyCommerce.hostedPayments(this.paymentResponseHandler, {
          operation: 'create.payment',
          publicKey: 'sbpb_YzYxOWMwNTItYTRlMi00MTM4LTllZmMtYTI3NzFkYjdjMDky',
          sandbox: true,
          frameId: 'paymentFrame'
        })
      }
    },
    makePayment() {
      // Trigger your payment process
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
