<template>
  <div class="faq-container">
    <div v-for="(item, index) in faqData" :key="index" class="faq-item" @click="toggle(index)">
      <div class="question">
        {{ item.question }}
        <span class="toggle-icon">{{ activeIndex === index ? '-' : '+' }}</span>
      </div>
      <div
        class="answer"
        :style="activeIndex === index ? expandedAnswerStyle : collapsedAnswerStyle"
        v-html="item.answer"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFAQContainer',
  props: {
    faqData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: null,
      expandedAnswerStyle: { opacity: '1', maxHeight: '100vh', transform: 'translateY(0)' },
      collapsedAnswerStyle: { opacity: '0', maxHeight: '0', transform: 'translateY(-10px)' }
    }
  },
  methods: {
    toggle(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    }
  }
}
</script>

<style scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
}

.faq-item {
  cursor: pointer;
  color: var(--secondary);
}

.question {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: var(--step-1);
}

.toggle-icon {
  margin-left: 1rem;
}

.answer {
  font-size: var(--step-0);
  padding-left: 1rem;
  padding-top: var(--space-xs);
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s cubic-bezier(1, -1.27, 0.23, 1.39),
    max-height 0.3s cubic-bezier(1, -1.27, 0.23, 1.39),
    transform 0.3s cubic-bezier(1, -1.27, 0.23, 1.39);
  overflow: hidden;
}

.toggle-icon {
  display: none;
}

.answer {
  padding-left: 0;
}

@media (min-width: 641px) {
  .toggle-icon {
    display: block;
  }

  .answer {
    padding-left: 1rem;
  }
}
</style>
