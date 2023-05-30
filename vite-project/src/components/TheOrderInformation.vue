<template>
  <div id="orderInfo">
    <div class="info-container">
      <div class="header">Custom Order Information</div>
      <div class="description">
        (WIP)Enter as much detail as you can and be as specific as possible to help us to bring your
        dream design to reality.
      </div>
    </div>
    <n-tabs type="segment">
      <n-tab-pane name="Shoe">
        <div class="container">
          <div class="upload">
            <div class="label">REFERENCE IMAGES</div>
            <n-upload multiple directory-dnd action="" :max="5">
              <n-upload-dragger>
                <div>Click or drag a file to this area to upload</div>
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
            <n-form-item label="Want to customize a shoe you already own?" path="useCustomersShoe">
              <n-switch v-model:value="form.useCustomersShoe" class="switch" />
              <n-tooltip trigger="hover">
                <template #trigger>
                  <infoSVG class="info-svg" />
                </template>
                If it looks like a duck, walks like a duck, and quacks like a duck, then it probably
                is a duck.
              </n-tooltip>
            </n-form-item>
            <n-form-item label="SHOE DESCRIPTION" path="textareaValue">
              <n-input
                class="textarea"
                v-model:value="form.textareaValue"
                placeholder="(WIP) Enter details about your design."
                type="textarea"
                maxlength="2000"
                show-count
                clearable
              />
            </n-form-item>
            <div class="btn" @click="submitForm">Continue</div>
          </n-form>
        </div>
      </n-tab-pane>
      <!-- Any item view -->
      <n-tab-pane name="Other Item">
        <div class="container">
          <div class="upload">
            <div class="label">REFERENCE IMAGES</div>
            <n-upload multiple directory-dnd action="" :max="5">
              <n-upload-dragger>
                <div>Click or drag a file to this area to upload</div>
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
            <n-form-item label="ITEM NAME" path="itemname">
              <n-input v-model:value="form2.itemname" placeholder="Enter the name of the item" />
            </n-form-item>
            <n-form-item label="DESIGN DESCRIPTION" path="textareaValue">
              <n-input
                class="textarea"
                v-model:value="form2.textareaValue"
                placeholder="(WIP) Enter details about your design."
                type="textarea"
                maxlength="2000"
                show-count
                clearable
              />
            </n-form-item>
            <div class="btn" @click="submitForm2">Continue</div>
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
    infoSVG
  },
  emits: ['submit', 'change'],
  data() {
    return {}
  },
  setup(_, { emit }) {
    const formRef = ref(null)
    const form2Ref = ref(null)
    const message = ref(null)
    const dialog = useDialog()

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
      if (form2.value.itemname) emit('change')
      if (form2.value.textareaValue) emit('change')
    })

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
      submitForm2: async function (e) {
        e.preventDefault()
        form2Ref.value?.restoreValidation()
        try {
          await form2Ref.value?.validate((errors) => {
            if (errors) {
              console.error(errors)
              message.value.error('Invalid')
            } else {
              console.log(form.value) // Print the whole contents of the form

              message.value.success('Valid')
              this.$emit('submit')
            }
          })
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
