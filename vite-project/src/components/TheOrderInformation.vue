<template>
  <div id="orderInfo">
    <div class="info-container">
      <div class="header">Custom Order Information</div>
      <div class="description">
        (WIP)Enter as much detail as you can and be as specific as possible to help us to bring your
        dream design to reality.
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
      <div class="flex-row">
        <n-form-item
          class="flex-row-item"
          label="SHOE MODEL"
          path="shoeModel"
          :validation-status="shoeModelValidationStatus"
          :feedback="shoeModelFeedback"
        >
          <n-select
            class="select"
            v-model:value="form.shoeModel"
            :placeholder="form.useCustomersShoe ? 'Input shoe model' : 'Select shoe model'"
            :options="shoeModels"
            :show-arrow="!form.useCustomersShoe"
            :filterable="form.useCustomersShoe"
            :tag="form.useCustomersShoe"
          />
        </n-form-item>
        <n-form-item class="flex-row-item" label="SHOE SIZE" path="shoeSize">
          <n-select
            :disabled="form.useCustomersShoe"
            v-model:value="form.shoeSize"
            placeholder="Select shoe size"
            :options="shoeSizes"
          />
        </n-form-item>
      </div>
      <n-form-item label="Customize an item you already own?" path="useCustomersShoe">
        <n-switch v-model:value="form.useCustomersShoe" class="switch" />
        <n-tooltip trigger="hover">
          <template #trigger>
            <svg
              width="139"
              height="139"
              viewBox="0 0 139 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="info-svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M139 69.5C139 107.884 107.884 139 69.5 139C31.1162 139 0 107.884 0 69.5C0 31.1162 31.1162 0 69.5 0C107.884 0 139 31.1162 139 69.5ZM88.5502 37.0475C88.5502 42.0173 84.5214 46.0462 79.5516 46.0462C74.5818 46.0462 70.553 42.0173 70.553 37.0475C70.553 32.0777 74.5818 28.0489 79.5516 28.0489C84.5214 28.0489 88.5502 32.0777 88.5502 37.0475ZM51.5028 64.7135C51.5028 61.7459 65.4028 46.7354 79.456 49.4924C85.9273 52.1729 85.2636 58.2357 84.1467 60.8364L72.3719 89.2682C71.7497 90.8637 71.4625 93.6909 75.2917 92.2358C78.9677 90.283 80.844 89.4437 81.3227 89.2682C82.8703 88.646 85.4391 88.2152 83.333 91.47C82.2225 95.4524 77.5094 101.107 75.2917 103.436C72.2124 106.914 63.986 112.693 55.7149 107.983C50.8901 104.882 52.0772 97.5967 53.2738 94.3419C55.0767 88.9332 59.8792 75.4352 64.6657 64.7135C66.8196 59.8887 55.8585 62.3203 51.5028 64.7135Z"
                fill="#282E5C"
              />
            </svg>
          </template>
          If it looks like a duck, walks like a duck, and quacks like a duck, then it probably is a
          duck.
        </n-tooltip>
      </n-form-item>
      <n-form-item label="SHOE DESCRIPTION" path="textareaValue">
        <n-input
          class="textarea"
          v-model:value="form.textareaValue"
          placeholder="uheu (WIP)
          
          
          test 
          
          
          test2"
          type="textarea"
          maxlength="2000"
          show-count
          clearable
        />
      </n-form-item>
      <div class="btn" @click="submitForm">Continue</div>
    </n-form>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed, watch, watchEffect } from 'vue'
import {
  useMessage,
  useDialog,
  NForm,
  NFormItem,
  NSelect,
  NSwitch,
  NInput,
  NUpload,
  NUploadDragger,
  NTooltip
} from 'naive-ui'

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NSelect,
    NSwitch,
    NInput,
    NUpload,
    NUploadDragger,
    NTooltip
  },
  emits: ['submit', 'change'],
  data() {
    return {}
  },
  setup(_, { emit }) {
    const formRef = ref(null)
    const message = ref(null)
    const dialog = useDialog()

    let form = ref({
      shoeModel: null,
      shoeSize: null,
      useCustomersShoe: false,
      textareaValue: ''
    })

    const shoeModels = ref([
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ])

    const shoeSizes = ref([
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ])

    onMounted(() => {
      message.value = useMessage()
    })

    const shoeModelValidationStatus = computed(() => {
      if (
        !form.value.useCustomersShoe &&
        form.value.shoeModel &&
        !shoeModels.value.find((option) => option.value === form.value.shoeModel)
      ) {
        return 'error'
      }
      return 'true'
    })

    const shoeModelFeedback = computed(() => {
      if (shoeModelValidationStatus.value === 'error') {
        return 'Invalid shoe model'
      }
      return ''
    })

    // Watch for changes in the useCustomersShoe field for the dialog
    watch(
      () => form.value.useCustomersShoe,
      (newValue) => {
        if (newValue) {
          dialog.info({
            title: 'Confirmation',
            content:
              'If you wish to provide your own pair of shoes (or any item) by sending them to us, please specify the shoe model in the field above. The shoes must be in brand-new condition.',
            positiveText: 'Understood',
            maskClosable: false,
            closeOnEsc: false,
            onClose: () => {
              form.value.useCustomersShoe = false
            }
          })
        }
      }
    )

    // Watch for changes in any form field and emit the change event
    watchEffect(() => {
      // Emit the change event whenever any form value changes
      if (form.value.shoeModel) emit('change')
      if (form.value.shoeSize) emit('change')
      if (form.value.useCustomersShoe !== undefined) emit('change')
      if (form.value.textareaValue) emit('change')
    })

    return {
      formRef,
      form,
      shoeModels,
      shoeSizes,
      rules: {
        shoeModel: {
          required: true,
          message: 'Please select a shoe model'
        },
        shoeSize: {
          required: true,
          message: 'Please select a shoe size',
          trigger: 'change'
        },
        textareaValue: {
          required: true,
          message: 'Please provide additional information'
        }
      },
      submitForm: async function (e) {
        e.preventDefault()
        formRef.value?.restoreValidation()
        try {
          await formRef.value?.validate(
            (errors) => {
              if (errors) {
                console.error(errors)
                message.value.error('Invalid')
              } else if (shoeModelValidationStatus.value === 'error') {
                console.error('Invalid shoe model')
                message.value.error('Invalid')
              } else {
                console.log(form.value) // Print the whole contents of the form

                message.value.success('Valid')
                this.$emit('submit')
              }
            },
            (rule) => {
              // Skip validation for shoeSize when useCustomersShoe is true
              return !(rule?.trigger === 'change' && form.value.useCustomersShoe)
            }
          )
        } catch (error) {
          console.log(error)
        }
      },
      shoeModelValidationStatus,
      shoeModelFeedback
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
.flex-row {
  display: flex;
  align-items: center;
  gap: var(--space-s);
}
.flex-row-item {
  width: 100%;
}
.textarea {
  min-height: 150px;
}
.info-svg {
  width: 22px;
  height: 22px;
  margin-left: var(--space-xs);
}
</style>
