import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  base: '/cc/',  // ← این مهمه! برای GitHub Pages
  build: {
    outDir: 'dist',  // خروجی build
    assetsDir: 'assets',
    sourcemap: true,  // برای debug
  }
})