<template>
  <div id="contact-us">
    <contactTransitionSVG />

    <div id="last-section-container">
      <div id="contact-section">
        <div class="contact-title">{{ $t('contact.title') }}</div>
        <n-form
          class="contact-form"
          ref="formRef"
          :model="form"
          :rules="rules"
          label-placement="top"
        >
          <div class="resp-flex-row">
            <n-form-item
              class="resp-flex-row-item"
              :label="$t('contact.name-label')"
              path="fullName"
            >
              <n-input
                v-model:value="form.fullName"
                :placeholder="$t('contact.name-placeholder')"
              />
            </n-form-item>

            <n-form-item class="resp-flex-row-item" :label="$t('contact.email-label')" path="email">
              <n-input v-model:value="form.email" :placeholder="$t('contact.email-placeholder')" />
            </n-form-item>
          </div>

          <n-form-item :label="$t('contact.message-label')" path="message">
            <n-input
              v-model:value="form.message"
              :placeholder="$t('contact.message-placeholder')"
              type="textarea"
            />
          </n-form-item>

          <div class="btn" @click="submitForm">{{ $t('contact.button') }}</div>
        </n-form>
      </div>

      <div class="blob">
        <blobSVG />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMessage, NForm, NFormItem, NInput } from 'naive-ui'
import contactTransitionSVG from '@/components/svg-components/contactTransitionSVG.vue'
import blobSVG from '@/components/svg-components/blobSVG.vue'

export default defineComponent({
  name: 'ContactUsComp',
  components: {
    NForm,
    NFormItem,
    NInput,
    contactTransitionSVG,
    blobSVG
  },
  setup() {
    const formRef = ref(null)
    const message = useMessage()

    let form = ref({
      fullName: '',
      email: '',
      message: ''
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
      message: {
        required: true,
        message: 'Please enter your message'
      }
    }

    const submitForm = async (e) => {
      e.preventDefault()
      try {
        const result = await formRef.value?.validate()
        if (result) {
          console.log(form.value) // Print the whole contents of the form
          message.success('Valid')
          // Add your form submission logic here
        } else {
          console.log('Form invalid')
          message.error('Invalid')
        }
      } catch (errors) {
        console.log(errors)
        message.error('Invalid')
      }
    }

    return {
      formRef,
      form,
      rules,
      submitForm
    }
  }
})
</script>

<style scoped>
#contact-us {
  width: 100%;
  margin: 0px;
  padding: 0px;
  margin-top: -5px;

  background: #dabed3;
  background: -moz-linear-gradient(
    top,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  background: -webkit-linear-gradient(
    top,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  background: linear-gradient(
    to bottom,
    #dabed3 15%,
    #a9b1e0 54%,
    #a9b1e0 54%,
    #898acb 99%,
    #898acb 99%
  );
  overflow: hidden;
}
#last-section-container {
  width: 100%;
  min-height: 50vh;
  min-height: 50svh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
#contact-section {
  width: min(95%, 1600px);
  background-color: var(--primary);
  border-radius: 2.5rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: var(--space-m) 0px;
}
.contact-title {
  font-size: var(--step-5);
  font-weight: 700;
  color: var(--secondary);
  margin-top: var(--space-m);
}
.contact-form {
  width: 100%;
  padding: var(--space-m) var(--space-m);
}
.contact-form .resp-flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-s);
}
.contact-form .resp-flex-row-item {
  width: 100%;
}
.blob {
  position: absolute;
  bottom: 0;
  left: 0;
  fill: var(--secondary);
  width: 30vmax;
  animation: move 15s ease-in-out infinite;
  transform-origin: 50% 50%;
  overflow: hidden;
  z-index: 2;
}
@keyframes move {
  0% {
    transform: scale(1) translate(-60px, 30%);
  }
  20% {
    transform: scale(0.8, 1) translate(90vw, -13%) rotate(160deg);
  }
  40% {
    transform: scale(0.9, 1) translate(-160px, -80%) rotate(1deg);
  }
  60% {
    transform: scale(1.1) translate(80vw, -30%) rotate(80deg);
  }
  80% {
    transform: scale(1.5) translate(20vw, -40%) rotate(-90deg);
  }
  100% {
    transform: scale(1) translate(-60px, 30%);
  }
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
</style>
