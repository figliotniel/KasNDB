import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Konfigurasi Vite untuk proyek KasNDB
export default defineConfig({
  plugins: [vue()],
  // Base URL untuk GitHub Pages deployment
  base: '/KasNDB/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
