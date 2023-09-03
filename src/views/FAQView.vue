<template>
  <div id="faq">
    <div
      v-for="(section, sectionIndex) in faqSections"
      :key="'section-' + sectionIndex"
      class="faq-container"
    >
      <div class="header">
        <h2>{{ section.title }}</h2>
      </div>

      <BaseFAQContainerVue :faqData="section.items" />
    </div>
  </div>
</template>

<script>
import BaseFAQContainerVue from '../components/BaseFAQContainer.vue'

export default {
  name: 'FAQ',
  data() {
    return {
      faqSections: [
        {
          title: this.$t('faqSections[0].title'),
          keyPrefix: 'general-',
          toggleMethod: this.toggleGeneralInformation,
          items: [
            {
              question: this.$t('faqSections[0].items[0].question'),
              answer: this.$t('faqSections[0].items[0].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[0].items[1].question'),
              answer: this.$t('faqSections[0].items[1].answer'),
              showAnswer: false
            }
          ]
        },
        {
          title: this.$t('faqSections[1].title'),
          keyPrefix: 'order-',
          toggleMethod: this.toggleOrderingProcess,
          items: [
            {
              question: this.$t('faqSections[1].items[0].question'),
              answer: this.$t('faqSections[1].items[0].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[1].items[1].question'),
              answer: this.$t('faqSections[1].items[1].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[1].items[2].question'),
              answer: this.$t('faqSections[1].items[2].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[1].items[3].question'),
              answer: this.$t('faqSections[1].items[3].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[1].items[4].question'),
              answer: this.$t('faqSections[1].items[4].answer'),
              showAnswer: false
            }
          ]
        },
        {
          title: this.$t('faqSections[2].title'),
          keyPrefix: 'pricing-',
          toggleMethod: this.togglePricing,
          items: [
            {
              question: this.$t('faqSections[2].items[0].question'),
              answer: this.$t('faqSections[2].items[0].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[2].items[1].question'),
              answer: this.$t('faqSections[2].items[1].answer'),
              showAnswer: false
            }
          ]
        },
        {
          title: this.$t('faqSections[3].title'),
          keyPrefix: 'product-',
          toggleMethod: this.toggleProductRelatedQuestions,
          items: [
            {
              question: this.$t('faqSections[3].items[0].question'),
              answer: this.$t('faqSections[3].items[0].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[3].items[1].question'),
              answer: this.$t('faqSections[3].items[1].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[3].items[2].question'),
              answer: this.$t('faqSections[3].items[2].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[3].items[3].question'),
              answer: this.$t('faqSections[3].items[3].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[3].items[4].question'),
              answer: this.$t('faqSections[3].items[4].answer'),
              showAnswer: false
            }
          ]
        },
        {
          title: this.$t('faqSections[4].title'),
          keyPrefix: 'shipping-',
          toggleMethod: this.toggleShippingAndReturns,
          items: [
            {
              question: this.$t('faqSections[4].items[0].question'),
              answer: this.$t('faqSections[4].items[0].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[4].items[1].question'),
              answer: this.$t('faqSections[4].items[1].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[4].items[2].question'),
              answer: this.$t('faqSections[4].items[2].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[4].items[3].question'),
              answer: this.$t('faqSections[4].items[3].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[4].items[4].question'),
              answer: this.$t('faqSections[4].items[4].answer'),
              showAnswer: false
            },
            {
              question: this.$t('faqSections[4].items[5].question'),
              answer: this.$t('faqSections[4].items[5].answer'),
              showAnswer: false
            }
          ]
        }
      ],
      active: null
    }
  },
  components: {
    BaseFAQContainerVue
  }
}
</script>

<style scoped>
#faq {
  padding: var(--space-xl) var(--space-xs) var(--space-xl) var(--space-xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
}
.header {
  font-size: var(--step-2);
  font-weight: 800;
  color: var(--secondary);
  text-align: center;
  margin: var(--space-xs) 0 var(--space-m) 0;
  width: 100%;
}
.faq-container {
  width: 100%;
  background-color: var(--primary);
  padding: var(--space-xs) var(--space-s);
  border-radius: 1.5rem;
  max-width: 1200px;
}
</style>
