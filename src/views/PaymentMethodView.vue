<template>
  <div class="payment">
    <div class="payment-container">
      <div class="header">{{ payment.title }}</div>
      <BaseFAQContainer :faqData="payment.items" :openQuestionIndex="0" />
    </div>
  </div>
</template>

<script>
import BaseFAQContainer from '../components/BaseFAQContainer.vue'

export default {
  components: { BaseFAQContainer },
  async mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const footer = document.getElementById('footer-section')
    const footerHeight = footer.offsetHeight

    const notFound = document.getElementsByClassName('payment')[0]
    const windowHeight = window.innerHeight

    let notFoundHeight = 0
    if (navbarHeight + footerHeight + 200 < windowHeight) {
      notFoundHeight = windowHeight - navbarHeight - footerHeight
    } else {
      notFoundHeight = windowHeight - navbarHeight
    }

    notFound.style.minHeight = `${notFoundHeight}px`

    this.$nextTick(() => {
      const btn = document.getElementsByClassName('btn')[0]
      if (!btn) return
      btn.addEventListener('click', this.handleCopy)
    })
  },
  data() {
    return {
      payment: {
        title: 'Payment Methods',
        items: [
          {
            question: 'IBAN',
            answer:
              'You can pay for your orders via IBAN transfer. If you just completed an order there will be an email sent to your email. Please use the unique order code sent to your email as the payment description. Our IBAN number is:<br><br> <span style="display: flex; justify-content: center; align-items: center"><strong style="margin-right: var(--space-s);">GR3302 6017 1000 0600 2006 48005</strong> <br> \
              <div class="btn" style="border: 1px solid var(--secondary); border-radius: 25%; padding: var(--space-3xs) var(--space-2xs); z-index: 10;">Copy</div></span>\
              <br>\
              <div>Copyright © 2023 Soleblast. All rights reserved.</div>\
              '
          },
          {
            question: 'Credit Card',
            answer: 'Comming soon. We are working on it.'
          },
          {
            question: 'PayPal',
            answer: 'Comming soon. We are working on it.'
          }
        ]
      }
    }
  },
  methods: {
    handleCopy(e) {
      e.preventDefault()
      const el = document.createElement('textarea')
      el.value = 'GR3302601710000600200648005'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style scoped>
.payment {
  display: grid;
  place-items: center;
  width: 100%;
  padding: var(--space-xl) var(--space-xs) var(--space-xl) var(--space-xs);
}
.payment-container {
  padding: var(--space-m) var(--space-l);
  background-color: var(--primary);
  border-radius: 1.5rem;
  max-width: 1400px;
}
.header {
  font-size: var(--step-2);
  font-weight: 800;
  color: var(--secondary);
  text-align: center;
  margin: var(--space-xs) 0 var(--space-m) 0;
  width: 100%;
}
</style>
