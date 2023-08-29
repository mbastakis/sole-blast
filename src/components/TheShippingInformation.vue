<template>
  <div id="shippingInfo">
    <div class="info-container">
      <div class="header">Shipping Information</div>
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

      <n-form-item label="" path="checkbox" class="checkbox">
        <n-checkbox v-model:checked="form.checkbox" />
        <div class="text">
          I accept the
          <router-link to="/policies" class="link">Terms & Conditions</router-link>
        </div>
      </n-form-item>

      <div class="btn" @click="submitForm" :class="{ 'is-loading': loading }">
        {{ loading ? 'Processing...' : 'Continue to Payment' }}
      </div>
    </n-form>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, inject, toRefs } from 'vue'
import { useMessage, NForm, NFormItem, NSelect, NInput, NCheckbox } from 'naive-ui'

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NSelect,
    NInput,
    NCheckbox
  },
  emits: ['submit'],
  setup(_, { emit }) {
    const formRef = ref(null)
    const message = ref(null)

    const state = inject('state')

    let form = ref({
      fullName: '',
      email: '',
      confirmEmail: '',
      phoneNumber: '',
      streetAddress: '',
      townCity: '',
      postcode: '',
      country: null,
      shippingNotes: '',
      checkbox: false
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
      },
      checkbox: [
        {
          required: true,
          message: 'Please agree to the terms and conditions'
        },
        {
          validator: () => {
            if (form.value.checkbox) {
              return true
            } else return false
          },
          message: 'Please agree to the terms and conditions'
        }
      ]
    }

    const countries = [
      { label: 'Åland Islands', value: 'Åland Islands' },
      { label: 'Albania', value: 'Albania' },
      { label: 'Algeria', value: 'Algeria' },
      { label: 'Afghanistan', value: 'Afghanistan' },
      { label: 'Andorra', value: 'Andorra' },
      { label: 'Angola', value: 'Angola' },
      { label: 'Anguilla', value: 'Anguilla' },
      { label: 'Antigua & Barbuda', value: 'Antigua & Barbuda' },
      { label: 'Argentina', value: 'Argentina' },
      { label: 'Armenia', value: 'Armenia' },
      { label: 'Aruba', value: 'Aruba' },
      { label: 'Australia', value: 'Australia' },
      { label: 'Austria', value: 'Austria' },
      { label: 'Azerbaijan', value: 'Azerbaijan' },
      { label: 'Bahamas', value: 'Bahamas' },
      { label: 'Bahrain', value: 'Bahrain' },
      { label: 'Bangladesh', value: 'Bangladesh' },
      { label: 'Barbados', value: 'Barbados' },
      { label: 'Belarus', value: 'Belarus' },
      { label: 'Belgium', value: 'Belgium' },
      { label: 'Belize', value: 'Belize' },
      { label: 'Benin', value: 'Benin' },
      { label: 'Bermuda', value: 'Bermuda' },
      { label: 'Bhutan', value: 'Bhutan' },
      { label: 'Bolivia', value: 'Bolivia' },
      { label: 'Bosnia & Herzegovina', value: 'Bosnia & Herzegovina' },
      { label: 'Botswana', value: 'Botswana' },
      { label: 'Brazil', value: 'Brazil' },
      { label: 'British Indian Ocean Territory', value: 'British Indian Ocean Territory' },
      { label: 'British Virgin Islands', value: 'British Virgin Islands' },
      { label: 'Brunei', value: 'Brunei' },
      { label: 'Bulgaria', value: 'Bulgaria' },
      { label: 'Burkina Faso', value: 'Burkina Faso' },
      { label: 'Burundi', value: 'Burundi' },
      { label: 'Cambodia', value: 'Cambodia' },
      { label: 'Cameroon', value: 'Cameroon' },
      { label: 'Canada', value: 'Canada' },
      { label: 'Cape Verde', value: 'Cape Verde' },
      { label: 'Caribbean Netherlands', value: 'Caribbean Netherlands' },
      { label: 'Cayman Islands', value: 'Cayman Islands' },
      { label: 'Central African Republic', value: 'Central African Republic' },
      { label: 'Chad', value: 'Chad' },
      { label: 'Chile', value: 'Chile' },
      { label: 'China', value: 'China' },
      { label: 'Christmas Island', value: 'Christmas Island' },
      { label: 'Cocos (Keeling) Islands', value: 'Cocos (Keeling) Islands' },
      { label: 'Colombia', value: 'Colombia' },
      { label: 'Comoros', value: 'Comoros' },
      { label: 'Congo - Brazzaville', value: 'Congo - Brazzaville' },
      { label: 'Congo - Kinshasa', value: 'Congo - Kinshasa' },
      { label: 'Cook Islands', value: 'Cook Islands' },
      { label: 'Costa Rica', value: 'Costa Rica' },
      { label: 'Croatia', value: 'Croatia' },
      { label: 'Curaçao', value: 'Curaçao' },
      { label: 'Cyprus', value: 'Cyprus' },
      { label: 'Czechia', value: 'Czechia' },
      { label: 'Côte d’Ivoire', value: 'Côte d’Ivoire' },
      { label: 'Denmark', value: 'Denmark' },
      { label: 'Djibouti', value: 'Djibouti' },
      { label: 'Dominica', value: 'Dominica' },
      { label: 'Dominican Republic', value: 'Dominican Republic' },
      { label: 'Ecuador', value: 'Ecuador' },
      { label: 'Egypt', value: 'Egypt' },
      { label: 'El Salvador', value: 'El Salvador' },
      { label: 'Equatorial Guinea', value: 'Equatorial Guinea' },
      { label: 'Eritrea', value: 'Eritrea' },
      { label: 'Estonia', value: 'Estonia' },
      { label: 'Eswatini', value: 'Eswatini' },
      { label: 'Ethiopia', value: 'Ethiopia' },
      { label: 'Falkland Islands', value: 'Falkland Islands' },
      { label: 'Faroe Islands', value: 'Faroe Islands' },
      { label: 'Fiji', value: 'Fiji' },
      { label: 'Finland', value: 'Finland' },
      { label: 'France', value: 'France' },
      { label: 'French Guiana', value: 'French Guiana' },
      { label: 'French Polynesia', value: 'French Polynesia' },
      { label: 'French Southern Territories', value: 'French Southern Territories' },
      { label: 'Gabon', value: 'Gabon' },
      { label: 'Gambia', value: 'Gambia' },
      { label: 'Georgia', value: 'Georgia' },
      { label: 'Germany', value: 'Germany' },
      { label: 'Ghana', value: 'Ghana' },
      { label: 'Gibraltar', value: 'Gibraltar' },
      { label: 'Greece', value: 'Greece' },
      { label: 'Greenland', value: 'Greenland' },
      { label: 'Grenada', value: 'Grenada' },
      { label: 'Guadeloupe', value: 'Guadeloupe' },
      { label: 'Guatemala', value: 'Guatemala' },
      { label: 'Guernsey', value: 'Guernsey' },
      { label: 'Guinea', value: 'Guinea' },
      { label: 'Guinea-Bissau', value: 'Guinea-Bissau' },
      { label: 'Guyana', value: 'Guyana' },
      { label: 'Haiti', value: 'Haiti' },
      { label: 'Honduras', value: 'Honduras' },
      { label: 'Hong Kong SAR', value: 'Hong Kong SAR' },
      { label: 'Hungary', value: 'Hungary' },
      { label: 'Iceland', value: 'Iceland' },
      { label: 'India', value: 'India' },
      { label: 'Indonesia', value: 'Indonesia' },
      { label: 'Iraq', value: 'Iraq' },
      { label: 'Ireland', value: 'Ireland' },
      { label: 'Isle of Man', value: 'Isle of Man' },
      { label: 'Israel', value: 'Israel' },
      { label: 'Italy', value: 'Italy' },
      { label: 'Jamaica', value: 'Jamaica' },
      { label: 'Japan', value: 'Japan' },
      { label: 'Jersey', value: 'Jersey' },
      { label: 'Jordan', value: 'Jordan' },
      { label: 'Kazakhstan', value: 'Kazakhstan' },
      { label: 'Kenya', value: 'Kenya' },
      { label: 'Kiribati', value: 'Kiribati' },
      { label: 'Kosovo', value: 'Kosovo' },
      { label: 'Kuwait', value: 'Kuwait' },
      { label: 'Kyrgyzstan', value: 'Kyrgyzstan' },
      { label: 'Laos', value: 'Laos' },
      { label: 'Latvia', value: 'Latvia' },
      { label: 'Lebanon', value: 'Lebanon' },
      { label: 'Lesotho', value: 'Lesotho' },
      { label: 'Liberia', value: 'Liberia' },
      { label: 'Libya', value: 'Libya' },
      { label: 'Liechtenstein', value: 'Liechtenstein' },
      { label: 'Lithuania', value: 'Lithuania' },
      { label: 'Luxembourg', value: 'Luxembourg' },
      { label: 'Macao SAR', value: 'Macao SAR' },
      { label: 'Madagascar', value: 'Madagascar' },
      { label: 'Malawi', value: 'Malawi' },
      { label: 'Malaysia', value: 'Malaysia' },
      { label: 'Maldives', value: 'Maldives' },
      { label: 'Mali', value: 'Mali' },
      { label: 'Malta', value: 'Malta' },
      { label: 'Martinique', value: 'Martinique' },
      { label: 'Mauritania', value: 'Mauritania' },
      { label: 'Mauritius', value: 'Mauritius' },
      { label: 'Mayotte', value: 'Mayotte' },
      { label: 'Moldova', value: 'Moldova' },
      { label: 'Monaco', value: 'Monaco' },
      { label: 'Mongolia', value: 'Mongolia' },
      { label: 'Montenegro', value: 'Montenegro' },
      { label: 'Montserrat', value: 'Montserrat' },
      { label: 'Morocco', value: 'Morocco' },
      { label: 'Mozambique', value: 'Mozambique' },
      { label: 'Myanmar (Burma)', value: 'Myanmar (Burma)' },
      { label: 'Namibia', value: 'Namibia' },
      { label: 'Nauru', value: 'Nauru' },
      { label: 'Nepal', value: 'Nepal' },
      { label: 'Netherlands', value: 'Netherlands' },
      { label: 'New Caledonia', value: 'New Caledonia' },
      { label: 'New Zealand', value: 'New Zealand' },
      { label: 'Nicaragua', value: 'Nicaragua' },
      { label: 'Niger', value: 'Niger' },
      { label: 'Nigeria', value: 'Nigeria' },
      { label: 'Niue', value: 'Niue' },
      { label: 'Norfolk Island', value: 'Norfolk Island' },
      { label: 'North Macedonia', value: 'North Macedonia' },
      { label: 'Norway', value: 'Norway' },
      { label: 'Oman', value: 'Oman' },
      { label: 'Pakistan', value: 'Pakistan' },
      { label: 'Palestinian Territories', value: 'Palestinian Territories' },
      { label: 'Panama', value: 'Panama' },
      { label: 'Papua New Guinea', value: 'Papua New Guinea' },
      { label: 'Paraguay', value: 'Paraguay' },
      { label: 'Peru', value: 'Peru' },
      { label: 'Philippines', value: 'Philippines' },
      { label: 'Pitcairn Islands', value: 'Pitcairn Islands' },
      { label: 'Poland', value: 'Poland' },
      { label: 'Portugal', value: 'Portugal' },
      { label: 'Qatar', value: 'Qatar' },
      { label: 'Réunion', value: 'Réunion' },
      { label: 'Romania', value: 'Romania' },
      { label: 'Russia', value: 'Russia' },
      { label: 'Rwanda', value: 'Rwanda' },
      { label: 'Samoa', value: 'Samoa' },
      { label: 'San Marino', value: 'San Marino' },
      { label: 'São Tomé & Príncipe', value: 'São Tomé & Príncipe' },
      { label: 'Saudi Arabia', value: 'Saudi Arabia' },
      { label: 'Senegal', value: 'Senegal' },
      { label: 'Serbia', value: 'Serbia' },
      { label: 'Seychelles', value: 'Seychelles' },
      { label: 'Sierra Leone', value: 'Sierra Leone' },
      { label: 'Singapore', value: 'Singapore' },
      { label: 'Sint Maarten', value: 'Sint Maarten' },
      { label: 'Slovakia', value: 'Slovakia' },
      { label: 'Slovenia', value: 'Slovenia' },
      { label: 'Solomon Islands', value: 'Solomon Islands' },
      { label: 'Somalia', value: 'Somalia' },
      { label: 'South Africa', value: 'South Africa' },
      {
        label: 'South Georgia & South Sandwich Islands',
        value: 'South Georgia & South Sandwich Islands'
      },
      { label: 'South Korea', value: 'South Korea' },
      { label: 'South Sudan', value: 'South Sudan' },
      { label: 'Spain', value: 'Spain' },
      { label: 'Sri Lanka', value: 'Sri Lanka' },
      { label: 'St. Barthélemy', value: 'St. Barthélemy' },
      { label: 'St. Helena', value: 'St. Helena' },
      { label: 'St. Kitts & Nevis', value: 'St. Kitts & Nevis' },
      { label: 'St. Lucia', value: 'St. Lucia' },
      { label: 'St. Martin', value: 'St. Martin' },
      { label: 'St. Pierre & Miquelon', value: 'St. Pierre & Miquelon' },
      { label: 'St. Vincent & Grenadines', value: 'St. Vincent & Grenadines' },
      { label: 'Sudan', value: 'Sudan' },
      { label: 'Suriname', value: 'Suriname' },
      { label: 'Svalbard & Jan Mayen', value: 'Svalbard & Jan Mayen' },
      { label: 'Sweden', value: 'Sweden' },
      { label: 'Switzerland', value: 'Switzerland' },
      { label: 'Taiwan', value: 'Taiwan' },
      { label: 'Tajikistan', value: 'Tajikistan' },
      { label: 'Tanzania', value: 'Tanzania' },
      { label: 'Thailand', value: 'Thailand' },
      { label: 'Timor-Leste', value: 'Timor-Leste' },
      { label: 'Togo', value: 'Togo' },
      { label: 'Tokelau', value: 'Tokelau' },
      { label: 'Tonga', value: 'Tonga' },
      { label: 'Trinidad & Tobago', value: 'Trinidad & Tobago' },
      { label: 'Tunisia', value: 'Tunisia' },
      { label: 'Turkey', value: 'Turkey' },
      { label: 'Turkmenistan', value: 'Turkmenistan' },
      { label: 'Turks & Caicos Islands', value: 'Turks & Caicos Islands' },
      { label: 'Tuvalu', value: 'Tuvalu' },
      { label: 'U.S. Outlying Islands', value: 'U.S. Outlying Islands' },
      { label: 'Uganda', value: 'Uganda' },
      { label: 'Ukraine', value: 'Ukraine' },
      { label: 'United Arab Emirates', value: 'United Arab Emirates' },
      { label: 'United Kingdom', value: 'United Kingdom' },
      { label: 'United States', value: 'United States' },
      { label: 'Uruguay', value: 'Uruguay' },
      { label: 'Uzbekistan', value: 'Uzbekistan' },
      { label: 'Vanuatu', value: 'Vanuatu' },
      { label: 'Vatican City', value: 'Vatican City' },
      { label: 'Venezuela', value: 'Venezuela' },
      { label: 'Vietnam', value: 'Vietnam' },
      { label: 'Wallis & Futuna', value: 'Wallis & Futuna' },
      { label: 'Western Sahara', value: 'Western Sahara' },
      { label: 'Yemen', value: 'Yemen' },
      { label: 'Zambia', value: 'Zambia' },
      { label: 'Zimbabwe', value: 'Zimbabwe' }
    ]

    const submitForm = async (e) => {
      e.preventDefault()
      try {
        const errors = await formRef.value?.validate()
        if (!errors) {
          state.loading = true
          emit('submit', form.value)
        } else {
          console.log(errors)
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      formRef,
      form,
      rules,
      countries,
      submitForm,
      ...toRefs(state)
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
.checkbox {
  display: flex;
  flex-direction: column;
  margin: var(--space-s) 0 var(--space-2xs) 0;
  font-size: var(--step--2);
  font-weight: 600;
  color: var(--secondary);
}

.checkbox .text {
  margin-left: var(--space-xs);
}

.is-loading {
  animation: slide 2s ease-in-out infinite;
}
@keyframes slide {
  0% {
    background-position: right bottom;
  }
  100% {
    background-position: left bottom;
  }
}

@media (min-width: 604px) {
  .resp-flex-row {
    flex-wrap: nowrap;
    gap: var(--space-s);
  }
}
</style>
