import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  VueI18nPlugin({
    include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    strictMessage: false,
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // Listen on all network interfaces
    host: true,
    // Set a specific port (optional, only if you want to override the default port)
    port: 3000,
    watch: {
      usePolling: true,
    },
  }
})
