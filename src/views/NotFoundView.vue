<template>
  <div id="notFound">
    <div class="text-container">
      <div class="header">404</div>
      <div class="text">{{ $t('notFound.text') }}</div>
      <router-link class="router-link" to="/">
        <div class="btn">{{ $t('notFound.btn') }}</div>
      </router-link>
    </div>
    <alienSpaceShipSVG class="svg" />
  </div>
</template>
<script>
import alienSpaceShipSVG from '@/components/svg-components/alienSpaceShipSVG.vue'
export default {
  name: 'NotFoundView',
  components: {
    alienSpaceShipSVG
  },
  mounted() {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar.offsetHeight

    const footer = document.getElementById('footer-section')
    const footerHeight = footer.offsetHeight

    const notFound = document.getElementById('notFound')
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
#notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: var(--step-5);
  font-weight: 700;
  color: var(--primary);
  position: relative;
}
.header {
  z-index: 2;
  position: relative;
}
.text {
  font-size: var(--step-1);
  font-weight: 500;
  max-width: 500px;
  margin-bottom: var(--space-m);
  z-index: 2;
  position: relative;
}
.btn {
  position: relative;
  width: 80%;
  text-align: center;
  background: var(--secondary);
  padding: var(--space-xs) var(--space-xs);

  font-size: var(--step-2);
  color: var(--primary);
  font-weight: 700;
  border-radius: 0.5em;
  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in;

  background: linear-gradient(90deg, var(--selected) 50%, transparent 50%),
    linear-gradient(90deg, var(--selected) 50%, var(--secondary) 50%) var(--space-xs);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  z-index: 2;
}

.btn:hover {
  background-position: left bottom;
  animation: slide 0.3s linear;
}
.router-link {
  text-decoration: none;
}

@media (max-width: 733px) {
  .svg {
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .text-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  #notFound {
    width: 100%;
    padding: 0 var(--space-s);
  }
}
</style>
