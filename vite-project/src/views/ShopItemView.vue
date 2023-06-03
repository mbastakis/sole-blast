<template>
  <div id="shop-item">
    <div class="carousel-container">
      <div class="carousel-images-container">
        <n-carousel class="carousel" :centered-slides="true" :slides-per-view="1" draggable>
          <n-carousel-item v-for="(image, index) in item.images" :key="index">
            <img class="carousel-img" :src="image" />
          </n-carousel-item>
        </n-carousel>
        <div class="images">
          <div v-for="(image, index) in item.images" :key="index" class="image">
            <img :src="image" />
          </div>
        </div>
      </div>
      <div class="details-container">
        <div class="details">
          <div class="shoe-info">
            <div class="price">{{ item.price }}€</div>
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="shoe-model">{{ item.model }}</div>
            </div>
            <div class="description">{{ item.description }}</div>
          </div>
          <div class="more-info-link" @click="scrollToFAQ">READ MORE</div>
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
    <div class="faq-container">
      <BaseFAQContainer :faqData="faq" />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { getStorage, ref as firebaseRef, getDownloadURL } from 'firebase/storage'
import db from '@/store/firebase'
import { NCarousel, NCarouselItem, NSelect, NFormItem, NForm } from 'naive-ui'
import BaseFAQContainer from '@/components/BaseFAQContainer.vue'
import { ref, nextTick } from 'vue'
import loading_img from '../assets/loading_img.jpg'

export default {
  data() {
    return {
      item: {
        name: 'Loading Name',
        description: 'Loading the description.',
        price: '100',
        model: 'Loading shoe model',
        images: [loading_img, loading_img, loading_img]
      },
      shoeSize: 0,
      shoeSizeOptions: ['42', '43', '44', '45', '46', '47'],
      faq: [
        {
          question: 'What does Sole-Blast stand for?',
          answer:
            "In Sole-Blast, we believe that shoes offer a unique opportunity to unleash your inner creativity, elevate your style and make a lasting impression. That's why we're dedicated to transforming each customer's distinct vision into an awesome one-of-a-kind shoe design. <a class='test' href='/yourdesign'>Order yours now!</a>",
          showAnswer: false
        },
        {
          question: 'What do we offer?',
          answer:
            "\tOur workshop excels in creating custom painted shoes tailored to your individual style. We provide a range of options, including unique designs inspired by your ideas and an exclusive selection of <a href='/shop'>Sole-Blast originals</a> to choose from. \n\n\tIn addition to shoes, our expertise extends to customizing a diverse array of items such as bags, wallets, skateboards, snowboards, and more. If you're seeking a special customization, simply fill out <a href='/yourdesign'>Your Design form</a>, and let us bring your vision to life!",
          showAnswer: false
        }
      ]
    }
  },
  components: {
    NCarousel,
    NCarouselItem,
    NSelect,
    NForm,
    NFormItem,
    BaseFAQContainer
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
        formRef.value.validate((errors) => {
          if (errors) {
            console.log('error submit!!')
            return false
          } else {
            console.log('submit!')
          }
        })
      }
    }
  },
  methods: {
    scrollToFAQ() {
      nextTick(() => {
        const shippingInfoElement = document.querySelector('.faq-container')
        if (shippingInfoElement) {
          shippingInfoElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  },
  mounted() {
    const view = document.querySelector('#shop-item')
    if (view) {
      view.scrollIntoView({ behavior: 'smooth' })
    }
  },
  async created() {
    const route = useRoute()
    const shoeDetailsCollection = collection(db, 'shoe_details')
    const shoeDetailsSnapshot = await getDocs(shoeDetailsCollection)
    const shoeDetailsData = shoeDetailsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    let shoe = shoeDetailsData.find((item) => item.id === route.params.id)
    // Fetch high resolution images
    if (shoe) {
      const highResImageDoc = doc(db, 'high_res_images', shoe.id)
      const highResImageSnapshot = await getDoc(highResImageDoc)
      if (highResImageSnapshot.exists()) {
        const storage = getStorage()
        // Get download URLs for high-resolution images
        const highResImageURLs = await Promise.all(
          highResImageSnapshot.data().images.map(async (imagePath) => {
            const gsReference = firebaseRef(storage, imagePath)
            const downloadURL = await getDownloadURL(gsReference)
            return downloadURL
          })
        )
        this.item = {
          ...shoe,
          images: highResImageURLs
        }
        console.log(this.item)
      }
    }
  }
}
</script>

<style scoped>
.images {
  display: none;
}
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
.details-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  border-bottom-right-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  margin-bottom: var(--space-l);
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-m);

  color: var(--secondary);
  box-sizing: border-box;
  line-height: normal;
  gap: var(--space-s);
  width: 100%;
  max-width: 600px;
}
.shoe-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.price {
  font-size: var(--step-2);
  font-weight: 800;
}

.name {
  font-size: var(--step-3);
  font-weight: 800;
}
.shoe-model {
  font-size: var(--step-0);
  font-weight: 900;
}
.description {
  font-size: var(--step-0);
  font-weight: 400;
}

.more-info-link {
  font-size: var(--step-0);
  font-weight: 800;
  text-decoration: underline;
  cursor: pointer;
  width: fit-content;
  margin-inline: auto;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  padding: var(--space-xs) var(--space-s);

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
}

.btn:hover {
  background-position: left bottom;
  animation: slide 0.3s linear;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  padding: var(--space-s);
  background-color: var(--primary);
  border-top-right-radius: 1.5em;
  border-top-left-radius: 1.5em;
  color: var(--secondary);
}

@media screen and (min-width: 1000px) {
  .carousel {
    display: none;
  }
  .images {
    display: block;
    background-color: var(--primary);
    margin-bottom: var(--space-l);
    border-bottom-left-radius: 1.5em;
    border-top-left-radius: 1.5em;
    padding: var(--space-3xs) 0 var(--space-3xs) var(--space-3xs);
  }
  .carousel-container {
    display: flex;
    justify-content: center;
  }
  .details-container {
    justify-content: start;
    height: fit-content;
    position: sticky;
    top: 0;
    border-top-right-radius: 1.5em;
    border-bottom-left-radius: 0em;
  }
  img {
    border-top-right-radius: 0em;
    border-top-left-radius: 0em;
  }
  .images .image:first-child img {
    border-top-left-radius: 1.5em;
  }
  .images .image:last-child img {
    border-bottom-left-radius: 1.5em;
  }

  .details {
    min-height: 100vh;
    min-height: 100svh;
    justify-content: start;
    gap: var(--space-m);
  }
  .btn {
    margin-top: var(--space-s);
  }
  .price {
    background-color: var(--background);
    padding: var(--space-3xs) var(--space-s);
    border-radius: 0.5em;
    width: fit-content;
  }
  .form {
    margin-top: auto;
  }
}
</style>
