<template>
  <div id="orderInfo">
    <div class="info-container">
      <div class="header">Custom Order Information</div>
      <div class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod tempore quisquam saepe.
      </div>
    </div>

    <div class="upload">
      <div class="label">REFERENCE IMAGES</div>
      <n-upload multiple directory-dnd action="" :max="5">
        <n-upload-dragger>
          <div>Click or drag a file to this area to upload</div>
        </n-upload-dragger>
      </n-upload>
    </div>

    <n-form class="shoe-form" ref="formRef" :model="form" :rules="rules" label-placement="top">
      <n-form-item label="SHOE MODEL" path="shoeModel">
        <n-select
          class="select"
          v-model:value="form.shoeModel"
          placeholder="Select shoe model"
          :options="shoeModels"
        />
      </n-form-item>
      <n-form-item label="SHOE SIZE" path="shoeSize">
        <n-select
          v-model:value="form.shoeSize"
          placeholder="Select shoe size"
          :options="shoeSizes"
        />
      </n-form-item>
      <n-form-item label="Use Customer's Shoe?" path="useCustomersShoe">
        <n-switch v-model:value="form.useCustomersShoe" />
      </n-form-item>
      <n-form-item label="SHOE DESCRIPTION" path="textareaValue">
        <n-input
          v-model:value="form.textareaValue"
          placeholder="Enter any additional information"
          type="textarea"
        />
      </n-form-item>
      <div class="btn" @click="submitForm">Continue</div>
    </n-form>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import {
  useMessage,
  NForm,
  NFormItem,
  NSelect,
  NSwitch,
  NInput,
  NUpload,
  NUploadDragger
} from 'naive-ui'

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NSelect,
    NSwitch,
    NInput,
    NUpload,
    NUploadDragger
  },
  data() {
    return {}
  },
  setup() {
    const formRef = ref(null)
    const message = ref(null)

    let form = ref({
      shoeModel: null,
      shoeSize: null,
      useCustomersShoe: false,
      textareaValue: ''
    })

    onMounted(() => {
      message.value = useMessage()
    })

    return {
      formRef,
      form,
      shoeModels: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
        { label: 'Option 3', value: 'Option 3' }
      ],
      shoeSizes: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
        { label: 'Option 3', value: 'Option 3' }
      ],
      rules: {
        shoeModel: {
          required: true,
          message: 'Please select a shoe model'
        },
        shoeSize: {
          required: true,
          message: 'Please select a shoe size'
        },
        textareaValue: {
          required: true,
          message: 'Please provide additional information'
        }
      },
      submitForm(e) {
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
    }
  }
})
</script>

<style scoped>
#orderInfo {
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
.label {
  font-weight: 600;
  font-size: var(--step--2);
  margin-bottom: var(--space-3xs);
}
.upload {
  width: 100%;
}
.shoe-form {
  width: 100%;
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
