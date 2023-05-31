<template>
  <div id="shop-item">
    <div class="carousel-container">
      <n-carousel :centered-slides="true" :slides-per-view="1" draggable>
        <n-carousel-item v-for="(image, index) in item.images" :key="index">
          <img class="carousel-img" :src="image" />
        </n-carousel-item>
      </n-carousel>
      <div class="details">
        <div class="shoe-info">
          <div class="price">{{ item.price }}$</div>
          <div class="name">{{ item.name }}</div>
          <div class="shoe-model">{{ item.shoe_model }}</div>
          <div class="stars"><n-rate readonly allow-half :default-value="4.5"></n-rate></div>
          <div class="description">{{ item.description }}</div>
          <div class="more-info-link"></div>
        </div>
        <div class="form">
          <n-form
            class="shoe-form"
            ref="formRef"
            :model="form"
            :rules="rules"
            label-placement="top"
          >
            <n-form-item class="flex-row-item" label="SHOE SIZE" path="shoeSize">
              <n-select
                v-model:value="form.shoeSize"
                placeholder="Select shoe size"
                :options="shoeSizes"
              />
            </n-form-item>
            <div class="btn" @click="submitForm">Continue</div>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from 'vue-router'
// import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
// import { getStorage, ref, getDownloadURL } from 'firebase/storage'
// import db from '@/store/firebase'
import { NCarousel, NCarouselItem, NRate, NSelect, NFormItem, NForm } from 'naive-ui'
import { ref } from 'vue'
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
      },
      shoeSize: 22,
      shoeSizeOptions: ['42', '43', '44', '45', '46', '47']
    }
  },
  components: {
    NCarousel,
    NCarouselItem,
    NRate,
    NSelect,
    NForm,
    NFormItem
  },
  setup() {
    const formRef = ref(null)

    let form = ref({
      shoeSize: null
    })

    const shoeSizes = ref([
      { label: '42', value: '42' },
      { label: '43', value: '43' },
      { label: '44', value: '44' },
      { label: '45', value: '45' },
      { label: '46', value: '46' },
      { label: '47', value: '47' }
    ])

    return {
      formRef,
      form,
      shoeSizes,
      rules: {
        shoeSize: { required: true, message: 'Please select a shoe size', trigger: 'change' }
      },
      submitForm() {
        formRef.value.validate((valid) => {
          if (valid) {
            console.log('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
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
.carousel-container {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 1.5em;
  border-top-left-radius: 1.5em;
}
</style>
