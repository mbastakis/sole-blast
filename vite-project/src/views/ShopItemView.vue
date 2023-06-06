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
          <div class="features">
            <div class="feature">⭐️ {{ $t('shopItem.features[0]') }}</div>
            <div class="feature">✔️ {{ $t('shopItem.features[1]') }}</div>
            <div class="feature">🖌️ {{ $t('shopItem.features[2]') }}</div>
            <div class="feature">💎 {{ $t('shopItem.features[3]') }}</div>
            <div class="feature">🚚 {{ $t('shopItem.features[4]') }}</div>
            <div class="description2">
              <p>
                {{ $t('shopItem.description') }}
              </p>
            </div>
            <div class="more-info-link" @click="scrollToFAQ">{{ $t('shopItem.more-info') }}</div>
          </div>
          <div class="form">
            <n-form
              class="shoe-form"
              ref="formRef"
              :model="form"
              :rules="rules"
              label-placement="top"
            >
              <n-form-item class="flex-row-item" :label="$t('shopItem.size-label')" path="shoeSize">
                <n-select
                  v-model:value="form.shoeSize"
                  :placeholder="$t('shopItem.size-placeholder')"
                  :options="shoeSizes"
                />
              </n-form-item>
              <div class="btn" @click="submitForm">{{ $t('shopItem.button') }}</div>
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
      shoeSizeOptions: [
        '35.5','36','36.5','37','37.5','38','38.5','39','40','40.5','41','42',
        '42.5','43','44','44.5','45','45.5','46','47','47.5','48.5','49.5'
      ], 
      faq: [
        {
          question: this.$t('shopItem.faq[0].question'),
          answer:
            this.$t('shopItem.faq.0.answer.title') +
            '\
                <ul style="padding-left: var(--space-m); padding-top: var(--space-s);"> \
                  <li>' +
            this.$t('shopItem.faq.0.answer.bullets.0') +
            '</li> \
                  <li>' +
            this.$t('shopItem.faq.0.answer.bullets.1') +
            '</li> \
                  <li>' +
            this.$t('shopItem.faq.0.answer.bullets.2') +
            '</li> \
                </ul><br>' +
            this.$t('shopItem.faq.0.answer.end')
        },
        {
          question: this.$t('shopItem.faq.1.question'),
          answer:
            this.$t('shopItem.faq.1.answer.description.0') +
            '<br><br>' +
            this.$t('shopItem.faq.1.answer.description.1') +
            '<br><br>' +
            this.$t('shopItem.faq.1.answer.description.2')
        },
        {
          question: this.$t('shopItem.faq.2.question'),
          answer:
            this.$t('shopItem.faq.2.answer.description.0') +
            '<br><br>' +
            this.$t('shopItem.faq.2.answer.description.1')
        },
        {
          question: this.$t('shopItem.faq.3.question'),
          answer:
            this.$t('shopItem.faq.3.answer.description.0') +
            '<br><br>' +
            this.$t('shopItem.faq.3.answer.description.1')
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
      { label: "EU 35.5 - US Men's 4 - US Women's 5.5", value: 'Option 1' },
      { label: "EU 36 - US Men's 4.5 - US Women's 6", value: 'Option 2' },
      { label: "EU 36.5 - US Men's 5 - US Women's 6.5", value: 'Option 3' },
      { label: "EU 37 - US Men's 5 - US Women's 6.5", value: 'Option 4' },
      { label: "EU 37.5 - US Men's 5.5 - US Women's 7", value: 'Option 5' },
      { label: "EU 38 - US Men's 6 - US Women's 7.5", value: 'Option 6' },
      { label: "EU 38.5 - US Men's 6 - US Women's 7.5", value: 'Option 7' },
      { label: "EU 39 - US Men's 6.5 - US Women's 8", value: 'Option 8' },
      { label: "EU 40 - US Men's 7.5 - US Women's 9", value: 'Option 9' },
      { label: "EU 40.5 - US Men's 8 - US Women's 9.5", value: 'Option 10' },
      { label: "EU 41 - US Men's 8.5 - US Women's 10", value: 'Option 11' },
      { label: "EU 42 - US Men's 9 - US Women's 10.5", value: 'Option 12' },
      { label: "EU 42.5 - US Men's 9.5 - US Women's 11", value: 'Option 13' },
      { label: "EU 43 - US Men's 10 - US Women's 11.5", value: 'Option 14' },
      { label: "EU 44 - US Men's 10.5 - US Women's 12", value: 'Option 15' },
      { label: "EU 44.5 - US Men's 11 - US Women's 12.5", value: 'Option 16' },
      { label: "EU 45 - US Men's 11.5 - US Women's 13", value: 'Option 17' },
      { label: "EU 45.5 - US Men's 12 - US Women's 13.5", value: 'Option 18' },
      { label: "EU 46 - US Men's 12.5 - US Women's 14", value: 'Option 19' },
      { label: "EU 47 - US Men's 13 - US Women's 14.5", value: 'Option 20' },
      { label: "EU 47.5 - US Men's 13.5 - US Women's 15", value: 'Option 21' },
      { label: "EU 48.5 - US Men's 14 - US Women's 15.5", value: 'Option 22' },
      { label: "EU 49.5 - US Men's 15 - US Women's 16.5", value: 'Option 23' }
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
  background-color: var(--background);
  padding: var(--space-3xs) var(--space-s);
  border-radius: 0.5em;
  width: fit-content;
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
.description2 {
  font-size: var(--step-0);
  font-weight: 400;
  margin-top: var(--space-s);
  margin-bottom: var(--space-s);
}

.features {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}
.feature {
  font-size: var(--step-0);
  font-weight: 600;
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
    justify-content: space-between;
    padding: var(--space-2xl) var(--space-m);
  }
  .features {
    gap: var(--space-s);
  }

  .btn {
    margin-top: var(--space-s);
  }
  .description2 {
    font-size: var(--step-0);
    font-weight: 400;
    margin-top: var(--space-m);
    margin-bottom: var(--space-m);
  }
}
</style>
