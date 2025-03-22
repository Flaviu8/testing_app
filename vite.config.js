import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'api/delete': ' https://ce7b-2a02-2f08-2e12-3500-a1d6-33bf-d2a5-bf2d.ngrok-free.app',    
    }
  },
  
  plugins: [react()],
})
