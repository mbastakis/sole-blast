<template>
  <div id="orderInfo">
    <div class="info-container">
      <div class="header">{{ $t('orderInfo.title') }}</div>
      <div class="description">
        {{ $t('orderInfo.description') }}
      </div>
    </div>
    <n-tabs type="segment" :on-before-leave="resetFiles">
      <n-tab-pane :name="$t('orderInfo.shoeTab')">
        <div class="container">
          <div class="upload">
            <div class="label">{{ $t('orderInfo.refImg.label') }}</div>
            <n-upload
              multiple
              directory-dnd
              :max="5"
              :custom-request="customRequest"
              :on-remove="handleUploadRemove"
              list-type="image"
            >
              <n-upload-dragger>
                <imageSVG />
                <div>{{ $t('orderInfo.refImg.placeholder') }}</div>
              </n-upload-dragger>
            </n-upload>
          </div>

          <n-form
            class="shoe-form"
            ref="formRef"
            :model="form"
            :rules="rules"
            label-placement="top"
          >
            <div class="flex-row resp-flex-row">
              <n-form-item
                class="flex-row-item"
                :label="$t('orderInfo.shoeModel.label')"
                path="shoeModel"
                :validation-status="shoeModelValidationStatus"
                :feedback="shoeModelFeedback"
              >
                <n-select
                  class="select"
                  v-model:value="form.shoeModel"
                  :placeholder="shoeModelPlaceholder"
                  :options="shoeModels"
                  :show-arrow="!form.useCustomersShoe"
                  :filterable="form.useCustomersShoe"
                  :tag="form.useCustomersShoe"
                />
              </n-form-item>
              <n-form-item
                class="flex-row-item"
                :label="$t('orderInfo.shoeSize.label')"
                path="shoeSize"
              >
                <n-select
                  :disabled="form.useCustomersShoe"
                  v-model:value="form.shoeSize"
                  :placeholder="$t('orderInfo.shoeSize.placeholder')"
                  :options="shoeSizes"
                />
              </n-form-item>
            </div>
            <n-form-item :label="$t('orderInfo.radioBtn.label')" path="useCustomersShoe">
              <n-switch v-model:value="form.useCustomersShoe" class="switch" />
              <n-tooltip trigger="hover">
                <template #trigger>
                  <infoSVG class="info-svg" />
                </template>
                {{ $t('orderInfo.radioBtn.tooltip') }}
              </n-tooltip>
            </n-form-item>
            <n-form-item :label="$t('orderInfo.shoeDescription.label')" path="textareaValue">
              <n-input
                class="textarea"
                v-model:value="form.textareaValue"
                :placeholder="$t('orderInfo.shoeDescription.placeholder')"
                type="textarea"
                maxlength="2000"
                show-count
                clearable
              />
            </n-form-item>
            <div class="btn" @click="submitForm">{{ $t('orderInfo.btn') }}</div>
          </n-form>
        </div>
      </n-tab-pane>
      <!-- Any item view -->
      <n-tab-pane :name="$t('orderInfo.otherTab')">
        <div class="container">
          <div class="upload">
            <div class="label">{{ $t('orderInfo.refImg.label') }}</div>
            <n-upload
              multiple
              directory-dnd
              :max="5"
              :custom-request="customRequest"
              :on-remove="handleUploadRemove"
              list-type="image"
            >
              <n-upload-dragger>
                <imageSVG />
                <div>{{ $t('orderInfo.refImg.placeholder') }}</div>
              </n-upload-dragger>
            </n-upload>
          </div>

          <n-form
            class="shoe-form"
            ref="form2Ref"
            :model="form2"
            :rules="rules2"
            label-placement="top"
          >
            <n-form-item :label="$t('orderInfo.itemName.label')" path="itemname">
              <n-input
                v-model:value="form2.itemname"
                :placeholder="$t('orderInfo.itemName.placeholder')"
              />
            </n-form-item>
            <n-form-item :label="$t('orderInfo.designDescription.label')" path="textareaValue">
              <n-input
                class="textarea"
                v-model:value="form2.textareaValue"
                :placeholder="$t('orderInfo.designDescription.placeholder')"
                type="textarea"
                maxlength="2000"
                show-count
                clearable
              />
            </n-form-item>
            <div class="btn" @click="submitForm2">{{ $t('orderInfo.btn') }}</div>
          </n-form>
        </div>
      </n-tab-pane>
    </n-tabs>
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
  NTooltip,
  NTabs,
  NTabPane
} from 'naive-ui'
import infoSVG from './svg-components/infoSVG.vue'
import imageSVG from './svg-components/imageSVG.vue'

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NSelect,
    NSwitch,
    NInput,
    NUpload,
    NUploadDragger,
    NTooltip,
    NTabs,
    NTabPane,
    infoSVG,
    imageSVG
  },
  emits: ['submit', 'change'],
  data() {
    return {}
  },
  methods: {},
  computed: {
    shoeModelPlaceholder() {
      return !this.form.useCustomersShoe
        ? this.$t('orderInfo.shoeModel.placeholder')
        : this.$t('orderInfo.shoeModel.placeholder2')
    }
  },
  setup(_, { emit }) {
    const formRef = ref(null)
    const form2Ref = ref(null)
    const message = ref(null)
    const dialog = useDialog()

    const uploadedFiles = ref([])
    const stringUploadedFiles = ref([])

    let form = ref({
      shoeModel: null,
      shoeSize: null,
      useCustomersShoe: false,
      textareaValue: ''
    })

    let form2 = ref({
      itemname: null,
      textareaValue: ''
    })

    const shoeModels = ref([
      { label: 'Nike Air Force 1 Low', value: 'Nike Air Force 1 Low' },
      { label: 'Nike Air Force 1 High', value: 'Nike Air Force 1 High' },
      { label: 'Nike Dunk Low', value: 'Nike Dunk Low' },
      { label: 'Vans Slip-On', value: 'Vans Slip-On' },
      { label: 'Vans Old Skool', value: 'Vans Old Skool' },
      { label: 'Vans Classic', value: 'Vans Classic' },
      { label: 'Dr. Martens 1460', value: 'Dr. Martens 1460' },
      { label: 'Air Jordan 1 Mid', value: 'Air Jordan 1 Mid' }
    ])

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

    onMounted(() => {
      message.value = useMessage()
      window.$message = useMessage()
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
              'While we typically handle the purchase of shoes in your preferred size, you have the option to provide your special pair of shoes by shipping them to us. Please specify the shoe model in the field above. The shoes must be in brand-new condition.',
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
      if (form2.value.itemname) emit('change')
      if (form2.value.textareaValue) emit('change')
    })

    // Upload functionality

    const fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.onload = function (event) {
          // event.target.result is the base64 string
          resolve(event.target.result)
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.readAsDataURL(file.file)
      })
    }
    const customRequest = async (options) => {
      // Allow only the new image to pass
      for (let i = 0; i < uploadedFiles.value.length; i++) {
        if (uploadedFiles.value[i].id === options.file.id) {
          return
        }
      }
      // Check if file is an image
      if (!options.file.type.startsWith('image/')) {
        window.$message.error('Uploaded file is not an image')
        options.onError()
        return
      }
      // Check file size
      const maxSizeInBytes = 1 * 1024 * 1024 // 1 MB in bytes
      if (options.file.file.size > maxSizeInBytes) {
        window.$message.error('Image size should not exceed 1MB')
        options.onError()
        return
      }

      let base64Image = await fileToBase64(options.file)
      stringUploadedFiles.value.push(base64Image)
      uploadedFiles.value.push(options.file)
    }
    const handleUploadRemove = (files) => {
      // Remove file from `uploadedFiles` array
      for (let i = 0; i < uploadedFiles.value.length; i++) {
        if (uploadedFiles.value[i].id === files.file.id) {
          uploadedFiles.value.splice(i, 1)
          stringUploadedFiles.value.splice(i, 1)
          break
        }
      }
    }
    const resetFiles = () => {
      uploadedFiles.value = []
      stringUploadedFiles.value = []

      return true
    }

    return {
      formRef,
      form2Ref,
      form,
      form2,
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
      rules2: {
        itemname: {
          required: true,
          message: 'Please enter the name of the item'
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
                message.value.error('Invalid')
              } else {
                message.value.success('Valid')
                this.$emit('submit', form.value, stringUploadedFiles.value)
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
      submitForm2: async function (e) {
        e.preventDefault()
        form2Ref.value?.restoreValidation()
        try {
          await form2Ref.value?.validate((errors) => {
            if (errors) {
              console.error(errors)
              message.value.error('Invalid')
            } else {
              message.value.success('Valid')
              this.$emit('submit', form2.value, stringUploadedFiles.value)
            }
          })
        } catch (error) {
          console.log(error)
        }
      },
      shoeModelValidationStatus,
      shoeModelFeedback,
      fileToBase64,
      customRequest,
      handleUploadRemove,
      resetFiles,
      uploadedFiles,
      stringUploadedFiles
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: var(--secondary);
  gap: var(--space-m);
}
.info-container {
  text-align: center;
}
.header {
  margin: var(--space-l) auto var(--space-2xs) auto;
  font-weight: 800;
  font-size: var(--step-2);
  text-align: center;
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
.resp-flex-row {
  flex-direction: column;
  gap: 0;
}
.flex-row-item {
  width: 100%;
}
.textarea {
  min-height: 250px;
}
.info-svg {
  width: 22px;
  height: 22px;
  margin-left: var(--space-xs);
}

@media (min-width: 640px) {
  .resp-flex-row {
    flex-direction: row;
    gap: var(--space-s);
  }
}
</style>
