<template>
  <div id="shop-item">
    <div class="carousel-container">
      <div class="carousel-images-container">
        <n-carousel class="carousel" :centered-slides="true" :slides-per-view="1" draggable>
          <n-carousel-item v-for="(image, index) in item.images" :key="index">
            <img class="carousel-img" :src="image" alt="Shoe image" />
          </n-carousel-item>
        </n-carousel>
        <div class="images">
          <div v-for="(image, index) in item.images" :key="index" class="image">
            <img :src="image" alt="Shoe image" />
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
    <n-message-provider>
      <keep-alive>
        <TheShippingInformation
          v-if="isShippingInformationVisible"
          @submit="submitInformation"
          class="section"
        />
      </keep-alive>
    </n-message-provider>

    <div class="payment" v-if="isPaymentVisible">
      <div class="paymentInfo">
        <div class="paymentInfoTitle">{{ $t('shopItem.paymentInfo.title') }}</div>
        <div class="paymentInfoDescription">{{ $t('shopItem.paymentInfo.description') }}</div>
      </div>
      <div class="payment-section">
        <NTabs type="segment">
          <NTabPane name="Credit Card" tab="Credit Card">
            <BasePayment
              @paymentSuccess="submitPayment"
              :name="item.name"
              :description="item.description"
              :reference="generateReferenceData()"
              :amount="item.price * 100"
            />
          </NTabPane>
          <NTabPane name="IBAN" tab="IBAN" class="iban-section">
            {{ $t('shopItem.paymentInfo.iban') }}
            <div class="btn" @click="submitPayment">Complete Order</div>
          </NTabPane>
        </NTabs>
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
import {
  NCarousel,
  NCarouselItem,
  NSelect,
  NFormItem,
  NForm,
  NMessageProvider,
  useMessage,
  NTabs,
  NTabPane
} from 'naive-ui'
import BaseFAQContainer from '@/components/BaseFAQContainer.vue'
import TheShippingInformation from '@/components/TheShippingInformation.vue'
import { ref, nextTick, watchEffect, provide, toRefs, reactive } from 'vue'
import loading_img from '../assets/loading_img.webp'
import { useRouter } from 'vue-router'
import BasePayment from '../components/BasePayment.vue'

export default {
  data() {
    return {
      detailsContainer: null,
      currentScrollTop: 0,
      item: {
        name: 'Loading Name',
        description: 'Loading the description.',
        price: '...',
        model: 'Loading shoe model',
        images: [loading_img, loading_img, loading_img]
      },
      shoeSize: 0,
      shoeSizeOptions: [
        '35.5',
        '36',
        '36.5',
        '37',
        '37.5',
        '38',
        '38.5',
        '39',
        '40',
        '40.5',
        '41',
        '42',
        '42.5',
        '43',
        '44',
        '44.5',
        '45',
        '45.5',
        '46',
        '47',
        '47.5',
        '48.5',
        '49.5'
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
    BaseFAQContainer,
    TheShippingInformation,
    NMessageProvider,
    BasePayment,
    NTabs,
    NTabPane
  },
  setup() {
    const formRef = ref(null)
    const shippingFormRef = ref(null)
    const isShippingInformationVisible = ref(false)
    const isPaymentVisible = ref(false)

    const message = useMessage()
    const router = useRouter()

    const generatedRef = ref(null)

    const state = reactive({
      loading: false
    })

    provide('state', state)

    let form = ref({
      shoeSize: null
    })

    const shoeSizes = ref([
      {
        label: "EU 35.5 - US Men's 4 - US Women's 5.5",
        value: "EU 35.5 - US Men's 4 - US Women's 5.5"
      },
      {
        label: "EU 36 - US Men's 4.5 - US Women's 6",
        value: "EU 36 - US Men's 4.5 - US Women's 6"
      },
      {
        label: "EU 36.5 - US Men's 5 - US Women's 6.5",
        value: "EU 36.5 - US Men's 5 - US Women's 6.5"
      },
      {
        label: "EU 37 - US Men's 5 - US Women's 6.5",
        value: "EU 37 - US Men's 5 - US Women's 6.5"
      },
      {
        label: "EU 37.5 - US Men's 5.5 - US Women's 7",
        value: "EU 37.5 - US Men's 5.5 - US Women's 7"
      },
      {
        label: "EU 38 - US Men's 6 - US Women's 7.5",
        value: "EU 38 - US Men's 6 - US Women's 7.5"
      },
      {
        label: "EU 38.5 - US Men's 6 - US Women's 7.5",
        value: "EU 38.5 - US Men's 6 - US Women's 7.5"
      },
      {
        label: "EU 39 - US Men's 6.5 - US Women's 8",
        value: "EU 39 - US Men's 6.5 - US Women's 8"
      },
      {
        label: "EU 40 - US Men's 7.5 - US Women's 9",
        value: "EU 40 - US Men's 7.5 - US Women's 9"
      },
      {
        label: "EU 40.5 - US Men's 8 - US Women's 9.5",
        value: "EU 40.5 - US Men's 8 - US Women's 9.5"
      },
      {
        label: "EU 41 - US Men's 8.5 - US Women's 10",
        value: "EU 41 - US Men's 8.5 - US Women's 10"
      },
      {
        label: "EU 42 - US Men's 9 - US Women's 10.5",
        value: "EU 42 - US Men's 9 - US Women's 10.5"
      },
      {
        label: "EU 42.5 - US Men's 9.5 - US Women's 11",
        value: "EU 42.5 - US Men's 9.5 - US Women's 11"
      },
      {
        label: "EU 43 - US Men's 10 - US Women's 11.5",
        value: "EU 43 - US Men's 10 - US Women's 11.5"
      },
      {
        label: "EU 44 - US Men's 10.5 - US Women's 12",
        value: "EU 44 - US Men's 10.5 - US Women's 12"
      },
      {
        label: "EU 44.5 - US Men's 11 - US Women's 12.5",
        value: "EU 44.5 - US Men's 11 - US Women's 12.5"
      },
      {
        label: "EU 45 - US Men's 11.5 - US Women's 13",
        value: "EU 45 - US Men's 11.5 - US Women's 13"
      },
      {
        label: "EU 45.5 - US Men's 12 - US Women's 13.5",
        value: "EU 45.5 - US Men's 12 - US Women's 13.5"
      },
      {
        label: "EU 46 - US Men's 12.5 - US Women's 14",
        value: "EU 46 - US Men's 12.5 - US Women's 14"
      },
      {
        label: "EU 47 - US Men's 13 - US Women's 14.5",
        value: "EU 47 - US Men's 13 - US Women's 14.5"
      },
      {
        label: "EU 47.5 - US Men's 13.5 - US Women's 15",
        value: "EU 47.5 - US Men's 13.5 - US Women's 15"
      },
      {
        label: "EU 48.5 - US Men's 14 - US Women's 15.5",
        value: "EU 48.5 - US Men's 14 - US Women's 15.5"
      },
      {
        label: "EU 49.5 - US Men's 15 - US Women's 16.5",
        value: "EU 49.5 - US Men's 15 - US Women's 16.5"
      }
    ])

    // Watch for changes in any form field and emit the change event
    watchEffect(() => {
      // Emit the change event whenever any form value changes
      if (form.value.shoeSize) {
        isShippingInformationVisible.value = false
      }
    })

    function generateReferenceData() {
      if (generatedRef.value) {
        return generatedRef.value
      } else {
        // Get the current timestamp and convert it to a string
        let timestamp = new Date().getTime().toString()
        // Reverse the timestamp string to ensure we are getting the most unique part (the milliseconds)
        let reversedTimestamp = timestamp.split('').reverse().join('')

        // Convert reversed timestamp to base 36 (numbers + letters) and slice the first 10 characters
        let orderCode = parseInt(reversedTimestamp, 10).toString(36).toUpperCase().slice(0, 10)
        console.log('generated ', orderCode)
        generatedRef.value = orderCode
        return orderCode
      }
    }

    return {
      isPaymentVisible,
      isShippingInformationVisible,
      formRef,
      form,
      shoeSizes,
      generatedRef,
      ...toRefs(state),
      rules: {
        shoeSize: { required: true, message: 'Please select a shoe size', trigger: 'change' }
      },
      submitForm() {
        formRef.value.validate((errors) => {
          if (errors) {
            message.error('Please complete the form')
            return false
          } else {
            console.log('submit!')
            isShippingInformationVisible.value = true
            nextTick(() => {
              const shippingInfoElement = document.querySelector('.section')
              if (shippingInfoElement) {
                shippingInfoElement.scrollIntoView({ behavior: 'smooth' })
              }
            })
          }
        })
      },
      submitInformation(formData) {
        state.loading = false
        formRef.value.validate((errors) => {
          shippingFormRef.value = formData
          isPaymentVisible.value = true
          nextTick(() => {
            const shippingInfoElement = document.querySelector('.section')
            if (shippingInfoElement) {
              shippingInfoElement.scrollIntoView({ behavior: 'smooth' })
            }
          })
        })
      },
      async submitPayment() {
        const shoeModel = document.querySelector('.name').innerHTML
        const price = document.querySelector('.price').innerHTML

        const shippingForm = shippingFormRef.value
        console.log(shippingForm)
        const shoeSize = form.value.shoeSize

        // Include orderForm and shippingForm in the request
        const requestData = {
          shippingForm: shippingForm,
          shoeModel: shoeModel,
          shoeSize: shoeSize,
          price: price,
          orderCode: generateReferenceData()
        }

        // Send a POST request to your Netlify function
        const response = await fetch('https://sole-blast.com/.netlify/functions/submitDesign', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(requestData)
        })

        if (!response.ok) {
          state.loading = false
          message.error('Something went wrong please try again later!')
        } else {
          state.loading = false
          message.success('Your order has been submitted!')
          setTimeout(() => {
            router.push('/success')
          }, 500)
        }
      },
      generateReferenceData
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
    },
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      const detailsContainerHeight = this.detailsContainer.clientHeight

      const detailsTop = 0
      const detailsBottom = detailsTop + detailsContainerHeight - window.innerHeight
      const scrollOffset = 10

      if (currentScrollTop > this.lastScrollTop) {
        // We're scrolling down
        if (-1 * this.currentScrollTop <= detailsBottom) {
          this.currentScrollTop -= scrollOffset
          this.detailsContainer.style.top = `${
            -1 * this.currentScrollTop > detailsBottom ? -1 * detailsBottom : this.currentScrollTop
          }px`
        }
      } else {
        // We're scrolling up
        if (-1 * this.currentScrollTop >= detailsTop) {
          this.currentScrollTop += scrollOffset
          this.detailsContainer.style.top = `${
            -1 * this.currentScrollTop < 0 ? 0 : this.currentScrollTop
          }px`
        }
      }

      this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop // For mobile or negative scrolling
    }
  },
  mounted() {
    const view = document.querySelector('#shop-item')
    if (view) {
      view.scrollIntoView({ behavior: 'smooth' })
    }

    this.detailsContainer = document.querySelector('.details-container')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
.section {
  background-color: var(--primary);
  border-radius: 1.5rem;
  width: 100%;
  margin-bottom: var(--space-l);
  margin-inline: auto;
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

.payment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  padding: var(--space-m);
  text-align: center;
  gap: var(--space-s);
  max-width: 900px;

  background-color: var(--primary);
  border-radius: 1.5em;
  margin-inline: auto;
  margin-bottom: var(--space-l);
}
.paymentInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.paymentInfoTitle {
  font-size: var(--step-3);
  font-weight: 800;
}
.paymentInfoDescription {
  font-size: var(--step-0);
  font-weight: 400;
}
.payment-section {
  width: 100%;
}

.iban-section {
  font-size: var(--step-0);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
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
