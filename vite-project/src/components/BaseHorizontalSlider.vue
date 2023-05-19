<template>
  <div ref="marquee" class="marquee" :style="{ fontSize: fontSize }">
    <div
      class="animated-text"
      v-for="(item, index) in repeatedText"
      :key="index"
      :style="{ animationDelay: -index * singleSpeed + 's' }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  name: 'BaseHorizontalSlider',
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fontSize: '1rem',
      repeatedText: [],
      singleSpeed: 0
    }
  },
  mounted() {
    this.singleSpeed = this.speed // animation speed per text block
    this.repeatedText = new Array(3).fill(this.text + '\u00A0') // Add non-breaking space at the end of each text
    this.$el.style.setProperty('--animation-speed', `${this.singleSpeed}s`)
    this.adjustFontSize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    async handleResize() {
      await nextTick()
      this.adjustFontSize()
    },
    adjustFontSize() {
      const containerWidth = this.$refs.marquee.offsetWidth
      const avgCharWidth = this.getAverageCharacterWidth()
      const fontSize = (containerWidth / (this.text.length / avgCharWidth)) * 0.2 // adjusted multiplier

      this.fontSize = `${fontSize}px`
    },
    getAverageCharacterWidth() {
      // Measure the average width of a character using a test element
      const testDiv = document.createElement('div')
      testDiv.style.position = 'absolute'
      testDiv.style.visibility = 'hidden'
      testDiv.style.width = 'auto'
      testDiv.style.fontSize = '1rem'
      testDiv.textContent = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

      document.body.appendChild(testDiv)
      const avgCharWidth = testDiv.offsetWidth / testDiv.textContent.length
      document.body.removeChild(testDiv)

      return avgCharWidth
    }
  }
}
</script>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  position: absolute;
  bottom: var(--space-3xs);
  white-space: nowrap;
  z-index: 0;
}

.animated-text {
  display: inline-block;
  animation: marquee var(--animation-speed) linear infinite;
  font-weight: 800;
  color: var(--primary);
  color: rgba(255, 255, 255, 0.3);
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

@media (max-width: 764px) {
  .marquee {
    bottom: var(--space-m);
  }
}
</style>
