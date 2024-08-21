import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // This helps in environments where file changes are not detected automatically
    },
    host: true, // This ensures it works across different networks (like LAN)
    port: 2169, // Set a specific port if needed
  },
})
