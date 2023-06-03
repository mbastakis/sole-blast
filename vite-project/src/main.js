import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import messages from "@intlify/unplugin-vue-i18n/messages";

console.log(navigator.language);

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    fallbackLocale: 'en',
    availableLocales: ['en', 'gr'],
    messages: messages,
})

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
