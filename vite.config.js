import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Responsive_portfolio/',
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'],
  },
})