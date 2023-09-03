<template>
  <div class="policies">
    <div class="policies-container">
      <div class="header">{{ policies.title }}</div>
      <BaseFAQContainer :faqData="policies.items" />
    </div>
  </div>
</template>

<script>
import BaseFAQContainer from '../components/BaseFAQContainer.vue'

export default {
  components: { BaseFAQContainer },
  mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const footer = document.getElementById('footer-section')
    const footerHeight = footer.offsetHeight

    const notFound = document.getElementsByClassName('policies')[0]
    const windowHeight = window.innerHeight

    let notFoundHeight = 0
    if (navbarHeight + footerHeight + 200 < windowHeight) {
      notFoundHeight = windowHeight - navbarHeight - footerHeight
    } else {
      notFoundHeight = windowHeight - navbarHeight
    }

    notFound.style.minHeight = `${notFoundHeight}px`
  },
  data() {
    return {
      policies: {
        title: this.$t('policies.title'),
        items: [
          {
            question: this.$t('policies.items.0.question'),
            answer: this.$t('policies.items.0.answer')
          },
          {
            question: this.$t('policies.items.1.question'),
            answer: this.$t('policies.items.1.answer')
          },
          {
            question: this.$t('policies.items.2.question'),
            answer: this.$t('policies.items.2.answer')
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.policies {
  display: grid;
  place-items: center;
  width: 100%;
  padding: var(--space-xl) var(--space-xs) var(--space-xl) var(--space-xs);
}
.policies-container {
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
