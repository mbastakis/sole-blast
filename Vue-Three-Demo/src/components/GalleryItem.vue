<template>
  <div class="gallery-item-detail">
    <img :src="imageUrl" :alt="title" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "GalleryItemDetail",
  props: {
    imageUrl: String,
    title: String,
    description: String,
  },
};
</script>

<style>
.gallery-item-detail {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: -1;
  position: absolute;
  top: 0;
  background: var(--primary);
}

.gallery-item-detail img {
  width: 100%;
  height: auto;
}
</style>
