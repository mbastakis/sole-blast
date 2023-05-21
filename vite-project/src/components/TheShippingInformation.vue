<template>
  <div id="shippingInfo">
    <div class="info-container">
      <div class="header">Shipping Information</div>
      <div class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod tempore quisquam saepe.
      </div>
    </div>

    <n-form class="shipping-form" ref="formRef" :model="form" :rules="rules" label-placement="top">
      <div class="resp-flex-row">
        <n-form-item class="resp-flex-row-item" label="FULL NAME" path="fullName">
          <n-input v-model:value="form.fullName" placeholder="Enter full name" />
        </n-form-item>

        <n-form-item class="resp-flex-row-item" label="PHONE NUMBER" path="phoneNumber">
          <n-input v-model:value="form.phoneNumber" placeholder="Enter phone number" />
        </n-form-item>
      </div>

      <div class="flex-row">
        <n-form-item class="flex-row-item" label="EMAIL" path="email">
          <n-input v-model:value="form.email" placeholder="Enter email" />
        </n-form-item>

        <n-form-item class="flex-row-item" label="CONFIRM EMAIL" path="confirmEmail">
          <n-input v-model:value="form.confirmEmail" placeholder="Confirm email" />
        </n-form-item>
      </div>

      <div class="space"></div>

      <div class="resp-flex-row">
        <n-form-item class="resp-flex-row-item" label="STREET ADDRESS" path="streetAddress">
          <n-input v-model:value="form.streetAddress" placeholder="Enter street address" />
        </n-form-item>

        <n-form-item class="resp-flex-row-item" label="COUNTRY" path="country">
          <n-select
            v-model:value="form.country"
            placeholder="Select country"
            :options="countries"
          />
        </n-form-item>
      </div>

      <div class="flex-row">
        <n-form-item class="flex-row-item" label="TOWN/CITY" path="townCity">
          <n-input v-model:value="form.townCity" placeholder="Enter town or city" />
        </n-form-item>

        <n-form-item class="flex-row-item" label="POSTCODE" path="postcode">
          <n-input v-model:value="form.postcode" placeholder="Enter postcode" />
        </n-form-item>
      </div>

      <n-form-item label="SHIPPING NOTES" path="shippingNotes">
        <n-input
          v-model:value="form.shippingNotes"
          placeholder="Enter any shipping notes"
          type="textarea"
        />
      </n-form-item>

      <div class="btn" @click="submitForm">Continue to Payment</div>
    </n-form>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useMessage, NForm, NFormItem, NSelect, NInput } from 'naive-ui'

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NSelect,
    NInput
  },
  setup() {
    const formRef = ref(null)
    const message = ref(null)

    let form = ref({
      fullName: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
      streetAddress: '',
      townCity: '',
      postcode: '',
      country: null,
      shippingNotes: ''
    })

    onMounted(() => {
      message.value = useMessage()
    })

    // Add validation rules
    const rules = {
      fullName: {
        required: true,
        message: 'Please enter your full name'
      },
      email: [
        { required: true, message: 'Please enter your email' },
        { type: 'email', message: 'Please enter a valid email' }
      ],
      confirmEmail: [
        { required: true, message: 'Please confirm your email' },
        {
          validator: () => {
            if (form.value.confirmEmail === form.value.email) {
              return true
            } else return false
          },
          message: 'Emails do not match'
        }
      ],
      phoneNumber: [
        { required: true, message: 'Please enter your phone number' },
        {
          validator: () => {
            const pattern = /^\+?[1-9]\d{1,14}$/ // Simple regex for international phone number
            if (!pattern.test(form.value.phoneNumber)) {
              return false
            }
          },
          message: 'Please enter a valid phone number'
        }
      ],
      streetAddress: {
        required: true,
        message: 'Please enter your street address'
      },
      townCity: {
        required: true,
        message: 'Please enter your town or city'
      },
      postcode: {
        required: true,
        message: 'Please enter your postcode'
      },
      country: {
        required: true,
        message: 'Please select your country'
      }
    }

    const countries = [
      { label: 'Country 1', value: 'country1' },
      { label: 'Country 2', value: 'country2' }
      // add more countries here
    ]

    const submitForm = (e) => {
      e.preventDefault()
      formRef.value?.validate((errors) => {
        if (!errors) {
          console.log(form.value) // Print the whole contents of the form
          message.value.success('Valid')

          // Add your form submission logic here
        } else {
          console.log(errors)
          message.value.error('Invalid')
        }
      })
    }

    return {
      formRef,
      form,
      rules,
      countries,
      submitForm
    }
  }
})
</script>

<style scoped>
#shippingInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--secondary);
  gap: var(--space-m);
  padding: 0 var(--space-m) var(--space-l) var(--space-m);
  max-width: 1400px;
}
.info-container {
  text-align: center;
}
.header {
  margin: var(--space-l) auto var(--space-2xs) auto;
  font-weight: 800;
  font-size: var(--step-2);
}
.description {
  font-size: var(--step-0);
  font-weight: 600;
  padding: 0 var(--space-xs) 0 var(--space-xs);
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary);
  padding: var(--space-xs) var(--space-s);

  font-size: var(--step-0);
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

.shipping-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.flex-row {
  display: flex;
  gap: var(--space-s);
  width: 100%;
}
.flex-row-item {
  width: 100%;
}

.resp-flex-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.resp-flex-row-item {
  width: 100%;
}
.space {
  height: var(--space-l);
}
@media (min-width: 604px) {
  .resp-flex-row {
    flex-wrap: nowrap;
    gap: var(--space-s);
  }
}
</style>
