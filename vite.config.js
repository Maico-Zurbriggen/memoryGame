import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/memoryGame/',
  build: { 
    rollupOptions: { 
      output: { 
        entryFileNames: '[name].js', 
        chunkFileNames: '[name].js', 
        assetFileNames: '[name][extname]', 
      }, 
    }, 
  }, 
})
