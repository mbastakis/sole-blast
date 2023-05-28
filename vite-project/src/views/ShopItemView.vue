<template>
  <div>
    <n-carousel :centered-slides="true" :slides-per-view="1" draggable>
      <n-carousel-item v-for="(image, index) in item.images" :key="index">
        <img class="carousel-img" :src="image" />
      </n-carousel-item>
    </n-carousel>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router'
// import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
// import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// import db from '@/store/firebase'
import { NCarousel, NCarouselItem } from 'naive-ui'
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'

export default {
  data() {
    return {
      item: {
        name: 'Example name',
        description: 'A description for example',
        price: '100',
        shoe_model: 'Dunk Above',
        images: [shoe1, shoe2, shoe3]
      }
    }
  },
  components: {
    NCarousel,
    NCarouselItem
  },
  async created() {
    // const route = useRoute()
    // const shoeDetailsCollection = collection(db, 'shoe_details')
    // const shoeDetailsSnapshot = await getDocs(shoeDetailsCollection)
    // const shoeDetailsData = shoeDetailsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    // let shoe = shoeDetailsData.find((item) => item.id === route.params.id)
    // // Fetch high resolution images
    // if (shoe) {
    //   const highResImageDoc = doc(db, 'high_res_images', shoe.id)
    //   const highResImageSnapshot = await getDoc(highResImageDoc)
    //   if (highResImageSnapshot.exists()) {
    //     const storage = getStorage()
    //     // Get download URLs for high-resolution images
    //     const highResImageURLs = await Promise.all(
    //       highResImageSnapshot.data().images.map(async (imagePath) => {
    //         const gsReference = ref(storage, imagePath)
    //         const downloadURL = await getDownloadURL(gsReference)
    //         return downloadURL
    //       })
    //     )
    //     this.item = {
    //       ...shoe,
    //       images: highResImageURLs
    //     }
    //     console.log(this.item)
    //   }
    // }
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
