<template>
  <div id="contact-us">
    <svg class="transition-contact" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,320L21.8,282.7C43.6,245,87,171,131,170.7C174.5,171,218,245,262,256C305.5,267,349,213,393,176C436.4,139,480,117,524,106.7C567.3,96,611,96,655,112C698.2,128,742,160,785,149.3C829.1,139,873,85,916,90.7C960,96,1004,160,1047,165.3C1090.9,171,1135,117,1178,80C1221.8,43,1265,21,1309,53.3C1352.7,85,1396,171,1418,213.3L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
      ></path>
    </svg>

    <div id="last-section-container">
      <div id="contact-section">
        <div class="contact-title">Contact Us</div>
        <n-form
          class="contact-form"
          ref="formRef"
          :model="form"
          :rules="rules"
          label-placement="top"
        >
          <div class="resp-flex-row">
            <n-form-item class="resp-flex-row-item" label="FULL NAME" path="fullName">
              <n-input v-model:value="form.fullName" placeholder="Enter full name" />
            </n-form-item>

            <n-form-item class="resp-flex-row-item" label="EMAIL" path="email">
              <n-input v-model:value="form.email" placeholder="Enter email" />
            </n-form-item>
          </div>

          <n-form-item label="MESSAGE" path="message">
            <n-input
              v-model:value="form.message"
              placeholder="Enter your message"
              type="textarea"
            />
          </n-form-item>

          <div class="btn" @click="submitForm">Send Message</div>
        </n-form>
      </div>

      <div class="blob">
        <svg viewBox="0 0 200 200">
          <path
            fill="#282e5c"
            d="M53.7,-58.8C61.2,-46.2,53.2,-23.1,51.9,-1.2C50.7,20.6,56.3,41.2,48.8,51.9C41.2,62.5,20.6,63.2,0.1,63.1C-20.4,63,-40.8,62.1,-56.5,51.4C-72.3,40.8,-83.4,20.4,-78.9,4.5C-74.5,-11.5,-54.4,-22.9,-38.7,-35.6C-22.9,-48.2,-11.5,-62,5.8,-67.8C23.1,-73.6,46.2,-71.5,53.7,-58.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useMessage, NForm, NFormItem, NInput } from 'naive-ui'

export default defineComponent({
  name: 'ContactUsComp',
  components: {
    NForm,
    NFormItem,
    NInput
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
  height: 50vh;
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
}
.contact-title {
  font-size: var(--step-5);
  font-weight: 700;
  color: var(--secondary);
  margin-top: var(--space-m);
}
.contact-form {
  width: 100%;
  padding: var(--space-m) var(--space-xl);
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
