import { defineConfig } from 'vite'
import vitePluginPug from 'vite-plugin-pug-transformer'

const options = { pretty: true }

export default defineConfig({
  plugins: [
    vitePluginPug()
  ]
})
