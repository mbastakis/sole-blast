<template>
  <div id="app">
    <navbar></navbar>
    <div class="gallery">
      <div class="gallery-container">
        <div class="gallery-item" v-for="item in items" :key="item.title">
          <img :src="item.src" :alt="item.alt" />
          <div class="gallery-item-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <h4 class="price">{{ item.price }}€</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 1",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 2",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 3",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 4",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 5",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 6",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 7",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 8",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 9",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 10",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 11",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          alt: "Nike Shoe 1",
          title: "Design Name 12",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
      ],
    };
  },
  components: {
    navbar,
  },
};
</script>

<style>
:root {
  --primary: white;
  --secondary: #282e5c;

  --step--2: clamp(0.78rem, calc(0.72rem + 0.31vw), 0.96rem);
  --step--1: clamp(0.94rem, calc(0.85rem + 0.46vw), 1.2rem);
  --step-0: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --step-1: clamp(1.35rem, calc(1.17rem + 0.91vw), 1.88rem);
  --step-2: clamp(1.62rem, calc(1.37rem + 1.26vw), 2.34rem);
  --step-3: clamp(1.94rem, calc(1.6rem + 1.72vw), 2.93rem);
  --step-4: clamp(2.33rem, calc(1.87rem + 2.31vw), 3.66rem);
  --step-5: clamp(2.8rem, calc(2.18rem + 3.09vw), 4.58rem);

  --space-3xs: clamp(0.31rem, calc(0.29rem + 0.11vw), 0.38rem);
  --space-2xs: clamp(0.56rem, calc(0.5rem + 0.33vw), 0.75rem);
  --space-xs: clamp(0.88rem, calc(0.79rem + 0.43vw), 1.13rem);
  --space-s: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
  --space-m: clamp(1.69rem, calc(1.49rem + 0.98vw), 2.25rem);
  --space-l: clamp(2.25rem, calc(1.99rem + 1.3vw), 3rem);
  --space-xl: clamp(3.38rem, calc(2.98rem + 1.96vw), 4.5rem);
  --space-2xl: clamp(4.5rem, calc(3.98rem + 2.61vw), 6rem);
  --space-3xl: clamp(6.75rem, calc(5.97rem + 3.91vw), 9rem);
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-family: "Source Sans Pro", sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  background: #dabed3;
  background: -moz-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: linear-gradient(
    135deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dabed3', endColorstr='#898acb',GradientType=1 );
}
.gallery {
  padding: var(--space-xl) var(--space-m);
  display: grid;
  place-content: center;
}
.gallery-container {
  --min: 10ch;
  --gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-m);
  max-width: 120rem;
}
.gallery-item {
  display: flex;
  flex-direction: column;
  min-width: 17rem;
  max-width: 25rem;
  background: var(--primary);
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}
.gallery-item-info {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: var(--space-xs);
  gap: var(--space-3xs);
  color: var(--secondary);
}
.gallery-item-info h3 {
  font-size: var(--step-2);
  font-weight: 700;
}
.gallery-item-info p {
  font-size: var(--step-0);
  font-weight: 400;
}
.gallery-item-info h4 {
  font-size: var(--step-1);
  font-weight: 700;
}
</style>
