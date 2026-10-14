import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const DEFAULT_PORT = 8443

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development'
  const port = Number(process.env.PORT) || DEFAULT_PORT

  return {
    build: {
      sourcemap: isDevelopment ? 'inline' : false,
      minify: !isDevelopment,
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      port,
      strictPort: true,
    },
    preview: {
      port,
    },
  }
})
