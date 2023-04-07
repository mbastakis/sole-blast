<template>
  <div id="gallery">
    <div class="gallery">
      <div class="gallery-container">
        <div
          class="gallery-item"
          v-for="item in items"
          :key="item.title"
          ref="galleryItems"
        >
          <img
            :src="item.src"
            @mouseenter="mouseEnter(item)"
            @mousemove="mouseMove(item)"
            @mouseleave="mouseLeave(item)"
            :alt="item.alt"
          />
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
export default {
  data() {
    return {
      onGalleryItemBool: false,
      items: [
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 1",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 2",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 3",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 4",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 5",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 6",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 7",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 8",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 9",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 10",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 11",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
        {
          src: require("@/assets/img1.png"),
          images: [
            require("@/assets/img2.png"),
            require("@/assets/img3.png"),
            require("@/assets/img4.png"),
            require("@/assets/img5.png"),
            require("@/assets/img6.png"),
            require("@/assets/img7.png"),
            require("@/assets/img8.png"),
          ],
          alt: "Nike Shoe 1",
          title: "Design Name 12",
          description: "Nike Dunk Low Next Nature",
          price: "100",
        },
      ],
    };
  },
  computed: {
    onGalleryItem() {
      return !this.onGalleryItemBool;
    },
  },
  methods: {
    mouseEnter(item) {
      item.src = item.images[Math.floor(Math.random() * 7)];
    },
    mouseMove(item) {
      const d = new Date();
      item.src = item.images[Math.floor((d.getTime() / 1000) % 7)];
    },
    mouseLeave(item) {
      item.src = require("@/assets/img1.png");
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.galleryItems.forEach((item) => {
        item.classList.add("visible");
      });
    }, 100);
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-family: "Source Sans Pro", sans-serif;
}
#gallery {
  display: flex;
  flex-direction: column;
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
.gallery-item:hover {
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem 1.5rem 0 0;
  transition: transform 500ms ease-in-out;
}
.gallery-item img:hover {
  --transition-property: transform;
  --transision-duration: 200ms;

  transition: var(--transition-property) var(--transision-duration) ease-in-out;
  transform: translateY(-5%);
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
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
.gallery-item {
  /* Add these lines */
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1.3s, transform 1.3s;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
