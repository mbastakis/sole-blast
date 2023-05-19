<!-- BaseAnimateOnScroll.vue -->
<template>
  <div v-observe class="animate-on-scroll" :class="[animationClass, visibleClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    animationClass: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visibleClass: ''
    }
  },
  directives: {
    observe: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                binding.instance.visibleClass = 'visible'
              } else {
                binding.instance.visibleClass = ''
              }
            })
          },
          {
            threshold: 1.0
          }
        )

        observer.observe(el)
        el.__vue_observer__ = observer
      },
      beforeUnmount(el) {
        // Clean up the observer when the component is unmounted
        if (el.__vue_observer__) {
          el.__vue_observer__.disconnect()
          delete el.__vue_observer__
        }
      }
    }
  }
}
</script>
