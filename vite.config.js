import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow network access
    port: 5173,
    strictPort: false,
    allowedHosts: ['https://chubby-laws-jump.loca.lt/'], // <-- add your LocalTunnel host here
  },
})
