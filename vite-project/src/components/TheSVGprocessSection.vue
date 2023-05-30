<template>
  <div id="TheSVG">
    <div class="header">Create Your Design</div>
    <div class="infographic">
      <svg class="connector" :viewBox="`0 0 ${containerWidth} ${containerHeight}`" ref="connector">
        <path :d="path" fill="transparent" stroke="#F3F2FA" stroke-width="10" />
      </svg>

      <div class="container" ref="infographicContainer">
        <div class="step step-right">
          <p>
            1. Share your vision and let's embark on an artistic journey, creating your unique
            Sole-Blast shoes!
          </p>
          <div ref="step1" class="step1">
            <TheStep1 />
          </div>
        </div>

        <div class="step step-left">
          <p>
            2. Our artists dive into your idea, turning it into a tangible sketch. They shape your
            imagination and await your approval, ensuring your vision is brought to life just as
            you've imagined.
          </p>
          <div ref="step2" class="step2">
            <TheStep2 />
          </div>
        </div>

        <div class="step step-right">
          <p>
            3. This is where the magic happens. Plain shoes are transformed into extraordinary works
            of art. Each pair is meticulously hand-painted, ensuring a unique and captivating
            result.
          </p>
          <div ref="step3" class="step3">
            <TheStep3 />
          </div>
        </div>

        <div class="step step-left">
          <p>
            4. Excitement at your doorstep! Your custom-designed shoes arrive, ready to elevate your
            style.
          </p>
          <div ref="step4" class="step4">
            <TheStep4 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue'
import TheStep1 from '@/components/svg-components/TheStep1.vue'
import TheStep2 from '@/components/svg-components/TheStep2.vue'
import TheStep3 from '@/components/svg-components/TheStep3.vue'
import TheStep4 from '@/components/svg-components/TheStep4.vue'

export default {
  setup() {
    const infographicContainer = ref(null)
    const connector = ref(null)
    const step1 = ref(null)
    const step2 = ref(null)
    const step3 = ref(null)
    const step4 = ref(null)
    const containerWidth = ref(0)
    const containerHeight = ref(0)

    const path = ref('')

    const calculatePath = () => {
      // Get the bounding rectangles of the SVGs and the container
      const containerRect = infographicContainer.value.getBoundingClientRect()
      const step1Rect = step1.value.getBoundingClientRect()
      const step2Rect = step2.value.getBoundingClientRect()
      const step3Rect = step3.value.getBoundingClientRect()
      const step4Rect = step4.value.getBoundingClientRect()

      const step1offset = -17
      const step2offset = 13
      const step3offset = 5
      // Calculate the start and end points of the path relative to the container
      const points = [
        {
          x: step1Rect.left + step2Rect.width / 2 - containerRect.left,
          y: step1Rect.bottom - containerRect.top + step1offset
        },
        {
          x: step2Rect.left + step2Rect.width / 2 - containerRect.left,
          y: step2Rect.top - containerRect.top + 30
        },
        {
          x: step2Rect.left + step2Rect.width / 2 - containerRect.left,
          y: step2Rect.bottom - containerRect.top - step2offset
        },
        {
          x: step3Rect.right - containerRect.left - 10,
          y: step3Rect.top + step3Rect.height / 2 - containerRect.top + step3offset
        },
        {
          x: step3Rect.left - containerRect.left + 10,
          y: step3Rect.top + step3Rect.height / 2 - containerRect.top + step3offset
        },
        {
          x: step4Rect.left + step4Rect.width / 2 - containerRect.left,
          y: step4Rect.top - containerRect.top + 30
        }
      ]

      let point1curve1 = { x: 0, y: 100 }
      let point1curve2 = { x: 50, y: -300 }

      let point3curve1 = { x: 0, y: 100 }
      let point3curve2 = { x: 0, y: -250 }

      let point5curve1 = { x: 90, y: 0 }
      let point5curve2 = { x: 0, y: -100 }

      // If Tablet view (width > 601px) calculate new control points for the curves
      if (window.innerWidth >= 601) {
        point1curve1 = { x: 0, y: 100 }
        point1curve2 = { x: 50, y: -100 }

        point3curve1 = { x: 0, y: 100 }
        point3curve2 = { x: 0, y: -150 }

        point5curve1 = { x: 100, y: 150 }
        point5curve2 = { x: 0, y: -100 }
      }

      let ctrlPoints1 = [
        { x: points[0].x - point1curve1.x, y: points[0].y + point1curve1.y },
        { x: points[1].x, y: points[1].y },
        { x: points[2].x - point3curve1.x, y: points[2].y + point3curve1.y },
        { x: points[3].x, y: points[3].y },
        { x: points[4].x - point5curve1.x, y: points[4].y + point5curve1.y },
        { x: points[5].x, y: points[5].y }
      ]

      let ctrlPoints2 = [
        { x: points[1].x - point1curve2.x, y: points[1].y + point1curve2.y },
        { x: points[1].x, y: points[1].y },
        { x: points[3].x + point3curve2.x, y: points[3].y + point3curve2.y },
        { x: points[3].x, y: points[3].y },
        { x: points[5].x - point5curve2.x, y: points[5].y + point5curve2.y },
        { x: points[5].x, y: points[5].y }
      ]

      // Create the path string
      let pathStr = `M${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        pathStr += ` C${ctrlPoints1[i - 1].x} ${ctrlPoints1[i - 1].y}, ${ctrlPoints2[i - 1].x} ${
          ctrlPoints2[i - 1].y
        }, ${points[i].x} ${points[i].y}`
      }

      return pathStr
    }

    watchEffect(() => {
      if (
        infographicContainer.value &&
        connector.value &&
        step1.value &&
        step2.value &&
        step3.value &&
        step4.value
      ) {
        path.value = calculatePath()
      }
    })

    onMounted(() => {
      if (infographicContainer.value) {
        const rect = infographicContainer.value.getBoundingClientRect()
        containerWidth.value = rect.width
        containerHeight.value = rect.height
      }

      // Recalculate the path and container dimensions when the window is resized
      window.addEventListener('resize', () => {
        if (
          infographicContainer.value &&
          connector.value &&
          step1.value &&
          step2.value &&
          step3.value &&
          step4.value
        ) {
          const rect = infographicContainer.value.getBoundingClientRect()
          containerWidth.value = rect.width
          containerHeight.value = rect.height
          path.value = calculatePath()
        }
      })
    })

    return {
      infographicContainer,
      connector,
      step1,
      step2,
      step3,
      step4,
      path,
      containerWidth,
      containerHeight
    }
  },
  components: {
    TheStep1,
    TheStep2,
    TheStep3,
    TheStep4
  }
}
</script>

<style scoped>
#TheSVG {
  display: grid;
  place-items: center;

  color: var(--secondary);
  padding-bottom: var(--space-2xl);
  max-width: 1400px;
}
.infographic {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.connector {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.header {
  margin: var(--space-l) auto;
  font-weight: 800;
  font-size: var(--step-3);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
}

.step {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  width: 100%;
}
.step p {
  max-width: min(60%, 400px);
  background-color: #f3f2fa;
  padding: var(--space-s);
  font-size: var(--step--1);
  font-weight: 600;
}
.step-right p {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-right: auto;
}
.step-left p {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  margin-left: auto;
}
.step1,
.step3 {
  margin-left: auto;
  margin-right: var(--space-s);
}

.step2,
.step4 {
  margin-left: var(--space-s);
  margin-right: auto;
}

@media (min-width: 601px) {
  #TheSVG {
    margin: auto var(--space-m);
  }
  .header {
    font-size: var(--step-5);
    margin: var(--space-2xl) auto;
  }
  .step {
    flex-direction: row;
    justify-content: space-between;
  }

  .step-left {
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
  }
  .step1,
  .step3 {
    margin-right: var(--space-l);
  }
  .step2,
  .step4 {
    margin-left: var(--space-l);
  }
}

@media (min-width: 961px) {
  .step1,
  .step3 {
    margin-right: auto;
    margin-left: 0;
  }

  .step2,
  .step4 {
    margin-left: auto;
    margin-right: 0;
  }

  .step p {
    font-size: var(--step-0);
  }

  .connector path {
    stroke-width: 20;
  }
}
</style>
