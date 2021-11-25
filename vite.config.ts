import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })],
  resolve:{
    alias:{
      '@' : path.resolve(".", './src')
    },
  },
  server: {
    port: 8080
  }
})

