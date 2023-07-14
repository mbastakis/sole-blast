<template>
  <div id="success">
    <div class="success-container">
      <successSVG class="svg" />
      <div class="message">
        <h1>Success!</h1>
        <p>Please check your email for the order information. Thank you for your purchase!</p>
      </div>
    </div>
  </div>
</template>

<script>
import successSVG from '../components/svg-components/successSVG.vue'

export default {
  name: 'SuccessView',
  components: { successSVG },
  mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight
    const footer = document.getElementById('footer-section')
    const footerHeight = footer.offsetHeight
    const notFound = document.getElementById('success')
    const windowHeight = window.innerHeight
    let notFoundHeight = 0
    if (navbarHeight + footerHeight + 200 < windowHeight) {
      notFoundHeight = windowHeight - navbarHeight - footerHeight
    } else {
      notFoundHeight = windowHeight - navbarHeight
    }
    notFound.style.height = `${notFoundHeight}px`
  }
}
</script>

<style scoped>
#success {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-s);
}
.success-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: var(--space-xl) var(--space-m) var(--space-xl) var(--space-2xl);
  margin-left: calc(var(--space-xl) * -1);
  z-index: 0;
  border-radius: 1.5em;
}
.svg {
  z-index: 1;
}
h1 {
  font-size: var(--step-4);
  color: var(--secondary);
}
p {
  font-size: var(--step-0);
  text-align: center;
  color: var(--secondary);
}
@media (max-width: 1275px) {
  .message {
    padding: var(--space-2xl) var(--space-xl) var(--space-xl) var(--space-xl);
    margin-left: 0;
    margin-top: calc(var(--space-2xl) * -1);
  }
  .success-container {
    flex-direction: column;
  }
  .svg {
    scale: 0.8;
  }
}
</style>
