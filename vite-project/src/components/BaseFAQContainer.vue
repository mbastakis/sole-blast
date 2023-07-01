<template>
  <div class="faq-container">
    <div v-for="(item, index) in faqData" :key="index" class="faq-item" @click="toggle(index)">
      <div class="question">
        {{ item.question }}
        <span class="toggle-icon" :class="{ 'rotate-to-x': activeIndex === index }">+</span>
      </div>
      <div
        class="answer"
        :style="activeIndex === index ? expandedAnswerStyle : collapsedAnswerStyle"
        v-html="item.answer"
        :ref="(el) => (answerRefs[index] = el)"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'BaseFAQContainer',
  props: {
    faqData: {
      type: Array,
      required: true
    },
    openQuestionIndex: {
      // New prop
      type: Number,
      required: false,
      default: null
    }
  },
  setup(props) {
    const activeIndex = ref(props.openQuestionIndex)
    const answerRefs = ref([])
    const router = useRouter()

    const expandedAnswerStyle = { opacity: '1', maxHeight: '3000vh', transform: 'translateY(0)' }
    const collapsedAnswerStyle = { opacity: '0', maxHeight: '0', transform: 'translateY(-10px)' }

    const toggle = (index) => {
      if (activeIndex.value === index) {
        activeIndex.value = null
      } else {
        activeIndex.value = index
      }
    }

    onMounted(async () => {
      await nextTick()

      answerRefs.value.forEach((ref) => {
        const links = ref.querySelectorAll('a')
        links.forEach((link) => {
          link.addEventListener('click', (e) => {
            e.preventDefault()
            const href = e.target.getAttribute('href')
            console.log(href)
            router.push(href)
          })
        })
      })
    })

    return {
      ...toRefs(props),
      activeIndex,
      answerRefs,
      expandedAnswerStyle,
      collapsedAnswerStyle,
      toggle
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
  border-bottom: dashed 1px var(--secondary);
}

.question {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  font-size: var(--step-1);
  padding-top: var(--space-xs);
}

.toggle-icon {
  margin-left: 1rem;
}

.answer {
  font-size: var(--step-0);
  padding-left: 1rem;
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs);
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
  user-select: none;
}

.answer {
  padding-left: 0;
}

@media (min-width: 641px) {
  .toggle-icon {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
    transform: rotate(0);
    font-size: var(--step-2);
  }

  .toggle-icon.rotate-to-x {
    transform: rotate(45deg);
  }

  .answer {
    padding-left: 1rem;
  }
}
</style>
