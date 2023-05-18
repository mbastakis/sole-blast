<template>
  <div>
    <div class="mobile-shop" v-if="item">
      <div class="top-section">
        <div class="title">
          <svg
            @click="goBack"
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6667 2L3 12.5M3 12.5L14.6667 23M3 12.5H28"
              stroke="#282e5c"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
          <h1>{{ item.title }}</h1>
        </div>
        <div>
          <Carousel
            id="gallery"
            :items-to-show="1"
            :wrap-around="true"
            :autoplay="5000"
            v-model="currentSlide"
          >
            <Slide class="img-carousel" v-for="(img, index) in item.images" :key="index">
              <div class="carousel__item"><img :src="img" alt="" /></div>
            </Slide>
          </Carousel>

          <Carousel
            id="thumbnails"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide v-for="slide in item.images.length" :key="slide">
              <div class="carousel__item" @click="slideTo(slide - 1)">
                <div class="slide-item">{{}}</div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
      <div class="info-container">
        <div id="shoe-model" class="shoe-info">
          Model:
          <h3>{{ item.description }}</h3>
        </div>
        <div id="shoe-size" class="shoe-info">
          Size:
          <select v-model="selectedSize">
            <option disabled selected>Choose an option</option>
            <option value="US 5">US 5</option>
            <option value="US 6">US 6</option>
            <option value="US 7">US 7</option>
            <option value="US 8">US 8</option>
            <option value="US 9">US 9</option>
            <option value="US 10">US 10</option>
            <option value="US 11">US 11</option>
            <option value="US 12">US 12</option>
          </select>
        </div>
        <div class="btn">
          <button @click="addToCart(item)">
            <span>${{ item.price }}</span> Buy Now
          </button>
        </div>
      </div>
    </div>
    <div class="desktop-shop" v-if="item">
      <div class="image-container">
        <div v-for="(img, index) in item.images" :key="index" class="desktop-image">
          <img :src="img" alt="" />
        </div>
      </div>
      <div id="text-container">test</div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentSlide: 0,
      timer: null,
      selectedSize: 'Choose an option'
    }
  },
  mounted() {
    const navbar = document.querySelector('#navbar').offsetHeight
    const topSection = document.querySelector('#text-container')
    if (!topSection || !navbar) return
    topSection.style.top = `${navbar}px`
    console.log('here')
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(['selectedItem']),
    item() {
      return this.selectedItem
    },
    currentImg: function () {
      return this.item.images[Math.abs(this.currentIndex) % this.item.images.length]
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
.mobile-shop {
  display: flex;
}
.desktop-shop {
  display: none;
}
.shoe-info {
  display: flex;
  gap: 0.5em;
}
.mobile-shop {
  display: flex;
  flex-direction: column;
}
.top-section {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: var(--space-s) var(--space-s) var(--space-xl) var(--space-s);
  margin-bottom: calc(-1 * var(--space-l));
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-s);
  position: relative;
}
.title svg {
  position: absolute;
  left: 0;
}
.title h1 {
  font-size: var(--step-3);
  color: var(--secondary);
}
.info-container {
  z-index: 1;
  background: var(--primary);
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  padding: var(--space-s);
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  color: var(--secondary);
  font-weight: 600;
}
.btn button {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: var(--step-1);
  font-weight: 400;
  padding: var(--space-2xs) var(--space-s);
  border-radius: 0.5em;
  border: none;
  background: var(--secondary);
  color: #f0f2fd;
}
.btn button span {
  margin-right: var(--space-xs);
  color: var(--primary);
  font-weight: 800;
}
.mobile-shop img {
  width: 100%;
  border-radius: 1.5em;
}
.slide-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--secondary);
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
}
.carousel__slide--active .slide-item {
  background: var(--secondary);
  color: var(--primary);
}
#shoe-size {
  display: flex;
  align-items: center;
}
#shoe-size select {
  border: none;
  background: var(--secondary);
  color: var(--primary);
  padding: var(--space-2xs) var(--space-s);
  border-radius: 0.5em;
}
@media screen and (min-width: 777px) {
  .mobile-shop {
    display: none;
  }
  .desktop-shop {
    display: flex;
  }
  .image-container {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .desktop-image,
  .desktop-image img {
    object-fit: cover;
  }
  .text-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    position: sticky;
    top: calc(-20vh);
    right: 0;
    height: 100vh;
  }
}
</style>
