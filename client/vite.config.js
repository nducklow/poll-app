import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const ASSET_URL = process.env.ASSET_URL || 'http://localhost:3001';
// console.log(ASSET_URL)
export default defineConfig({
  // base: `${ASSET_URL}/dist/`,
  plugins: [react()],
  server: {
    base: '/client/dist',
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: ASSET_URL,
        changeOrigin: true,
        secure: false,
      }, 
    } 

  }
})