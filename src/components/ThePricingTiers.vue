<template>
  <div id="pricingTiers">
    <div class="header">{{ $t('pricingTiers.title') }}</div>
    <div class="container body-container">
      <p>
        {{ $t('pricingTiers.description') }}
      </p>
      <div class="btn" @click="toggleTiers">
        {{
          (tiersVisible ? $t('pricingTiers.btn.hide') : $t('pricingTiers.btn.view')) +
          $t('pricingTiers.btn.suffix')
        }}
        <RotatingTriangeSVG :style="tiersVisible ? rotateArrow : null" />
      </div>
    </div>
    <div class="container">
      <div v-if="tiersVisible" class="pricing-tiers">
        <div class="tier" v-for="tier in tiers" :key="tier.title">
          <div class="tier-header">
            <div class="tier-title">{{ tier.title }}</div>
            <div class="tier-price">{{ tier.price }}</div>
          </div>
          <div class="tier-body">
            <div class="tier-description">{{ tier.description }}</div>
            <div class="tier-features">
              <div class="feature" v-for="feature in tier.features" :key="feature">
                <checkSVG />
                {{ feature }}
              </div>
            </div>
          </div>
        </div>
        <p class="note">
          {{ $t('pricingTiers.note') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import RotatingTriangeSVG from './svg-components/rotatingTriangeSVG.vue'
import checkSVG from './svg-components/checkSVG.vue'

export default {
  data() {
    return {
      tiersVisible: false,
      rotateArrow: {
        transform: 'rotate(-90deg)'
      },
      tiers: [
        {
          title: this.$t('pricingTiers.tiers.0.title'),
          price: this.$t('pricingTiers.tiers.0.price'),
          description: this.$t('pricingTiers.tiers.0.description'),
          features: [
            this.$t('pricingTiers.tiers.0.features.0'),
            this.$t('pricingTiers.tiers.0.features.1')
          ]
        },
        {
          title: this.$t('pricingTiers.tiers.1.title'),
          price: this.$t('pricingTiers.tiers.1.price'),
          description: this.$t('pricingTiers.tiers.1.description'),
          features: [
            this.$t('pricingTiers.tiers.1.features.0'),
            this.$t('pricingTiers.tiers.1.features.1'),
            this.$t('pricingTiers.tiers.1.features.2')
          ]
        },
        {
          title: this.$t('pricingTiers.tiers.2.title'),
          price: this.$t('pricingTiers.tiers.2.price'),
          description: this.$t('pricingTiers.tiers.2.description'),
          features: [
            this.$t('pricingTiers.tiers.2.features.0'),
            this.$t('pricingTiers.tiers.2.features.1'),
            this.$t('pricingTiers.tiers.2.features.2'),
            this.$t('pricingTiers.tiers.2.features.3')
          ]
        }
      ]
    }
  },
  methods: {
    toggleTiers() {
      this.tiersVisible = !this.tiersVisible
    }
  },
  components: { RotatingTriangeSVG, checkSVG }
}
</script>

<style scoped>
#pricingTiers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--secondary);
  width: 90%;
  max-width: 1064px;
  padding-bottom: var(--space-l);
}

.header {
  margin: var(--space-l) auto var(--space-2xs) auto;
  font-weight: 800;
  font-size: var(--step-2);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 var(--space-xs) 0 var(--space-xs);
  gap: var(--space-m);
}
.container p {
  text-align: center;
  font-weight: 600;
  font-size: var(--step-0);
  max-width: 900px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  padding: var(--space-xs) var(--space-s);

  font-size: var(--step-0);
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
}

.btn:hover {
  background-position: left bottom;
  animation: slide 0.3s linear;
  transform: scale(1.1);
}

@keyframes slide {
  0% {
    background-position: right bottom;
  }
  100% {
    background-position: left bottom;
  }
}

.btn svg {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 2.775);
}
.btn svg path {
  transition: stroke 0.3s ease-in-out;
  stroke: var(--primary);
}
.btn:hover svg {
  transform: translateY(0.1em);
}

.btn svg {
  width: 0.8em;
  height: 0.8em;
  margin-left: var(--space-xs);
}

.pricing-tiers {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: var(--space-m);
  height: 100%;
  margin-top: var(--space-m);
}
.tier {
  background-color: #f3f2fa;
  border-radius: 0.5em;
  padding: var(--space-m);
  max-width: 282px;
  height: 100%;
}
.tier-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: var(--space-m);
  gap: var(--space-3xs);
}
.tier-title {
  font-weight: 700;
  font-size: var(--step-1);
  width: 100%;
  text-align: center;
}
.tier-price {
  font-weight: 700;
  font-size: var(--step-3);
  width: 100%;
  text-align: center;
}
.tier-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: var(--space-xl);
  font-size: var(--step-0);
}
.tier-features {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.feature {
  width: 100%;
  border-bottom: 1px solid #c1c0c6;
  padding-bottom: var(--space-2xs);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--space-xs);
}
.feature svg {
  width: 15px;
  height: 15px;
}
.feature path {
  stroke-width: 25;
}

.container .note {
  font-size: var(--step--1);
  font-weight: 600;
  color: var(--secondary);
}
@media (min-width: 961px) {
  .container .note {
    font-size: var(--step-0);
  }
}
</style>
