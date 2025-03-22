import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'api/delete': 'http://localhost:8080',
        allowedHosts: ["weak-towns-push.loca.lt"],
    
    }
  },
  
  plugins: [react()],
})
