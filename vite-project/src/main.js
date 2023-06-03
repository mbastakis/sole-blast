import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import messages from "@intlify/unplugin-vue-i18n/messages";

// const language = navigator.language
// const locale = language.includes('gr') || language.includes('el') ? 'gr' : 'en'
const locale = 'en'

const i18n = createI18n({
    legacy: false,
    locale: locale,
    globalInjection: true,
    fallbackLocale: 'en',
    availableLocales: ['en', 'gr'],
    messages: messages,
})

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
