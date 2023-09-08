<template>
  <div id="gallery">
    <div class="gallery-container">
      <div v-for="item in renderedItems" :key="item.key">
        <div v-if="loading" class="gallery-item" ref="skeletonGalleryItems">
          <div class="skeleton-image"></div>
          <div class="gallery-item-info">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
        <router-link :to="`/shop/${item.id}`" v-else>
          <div class="gallery-item" ref="galleryItems">
            <img
              :src="item.currentSrc"
              :alt="item.alt"
              @mouseover="item.currentSrc = item.hoverSrc"
              @mouseleave="item.currentSrc = item.defaultSrc"
            />

            <div class="gallery-item-info">
              <h3>{{ item.name }}</h3>
              <n-ellipsis line-clamp="2" class="description">{{ item.description }}</n-ellipsis>
              <h4 class="price">{{ item.price }}€</h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/store/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { NEllipsis } from 'naive-ui'

export default {
  data() {
    return {
      loading: true,
      items: []
    }
  },
  components: {
    NEllipsis
  },
  mounted() {
    setTimeout(() => {
      if (this.$refs.skeletonGalleryItems) {
        this.$refs.skeletonGalleryItems.forEach((item) => {
          item.classList.add('visible')
        })
      }
    }, 250)
  },
  computed: {
    renderedItems() {
      return this.loading ? Array.from({ length: 10 }, (_, i) => ({ key: i })) : this.items
    }
  },
  methods: {},
  async created() {
    const shoeDetailsCollection = collection(db, 'shoe_details')
    const shoeDetailsSnapshot = await getDocs(shoeDetailsCollection)
    const shoeDetailsData = shoeDetailsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const lowResImagesCollection = collection(db, 'low_res_images')
    const lowResImagesSnapshot = await getDocs(lowResImagesCollection)
    const lowResImagesData = lowResImagesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    const storage = getStorage()

    this.items = (
      await Promise.all(
        shoeDetailsData.map(async (shoeDetail) => {
          const matchingImage = lowResImagesData.find((image) => image.id === shoeDetail.id)

          const gsReferenceDefault = ref(storage, matchingImage?.default)
          const gsReferenceHover = ref(storage, matchingImage?.hover)

          try {
            const downloadURLDefault = await getDownloadURL(gsReferenceDefault)
            const downloadURLHover = await getDownloadURL(gsReferenceHover)

            // Pre-fetch the hover image
            const prefetchImage = new Image()
            prefetchImage.src = downloadURLHover

            return {
              ...shoeDetail,
              currentSrc: downloadURLDefault,
              defaultSrc: downloadURLDefault,
              hoverSrc: downloadURLHover
            }
          } catch (e) {
            console.error(`Failed to get download URL for ${shoeDetail.id}`, e)
            return null // return null if there's an error
          }
        })
      )
    ).filter(Boolean) // filter out nulls

    setTimeout(() => {
      if (this.$refs.galleryItems) {
        this.$refs.galleryItems.forEach((item) => {
          item.classList.add('visible')
        })
      }
    }, 250)

    this.loading = false
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
#gallery {
  padding: var(--space-xl) var(--space-m);
  display: grid;
  place-content: center;
}
.gallery-container {
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

  display: inline-block;
  text-decoration: none;
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
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
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
.gallery-item-info .description {
  font-size: var(--step-0);
  font-weight: 400;
}
.gallery-item-info h4 {
  font-size: var(--step-1);
  font-weight: 700;
}
.gallery-item {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1.3s, transform 1.3s;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}

.skeleton-image {
  width: 100%;
  height: 400px;
  width: 400px;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #eee;
}

.skeleton-text {
  width: 80%;
  height: 20px;
  background-color: #eee;
  margin-bottom: 5px;
}
</style>
