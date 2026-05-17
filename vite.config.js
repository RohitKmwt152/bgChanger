import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'bgChanger',
      filename: 'remoteEntry.js',

      exposes: {
        './bootstrap': './src/bootstrap.jsx',
      },

      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,

    // IMPORTANT
    modulePreload: false,
  },

  server: {
    port: 5173,
    cors: true,
  },

  preview: {
    port: 5173,
  },

  // IMPORTANT FOR CLOUDFARE
  base: '/',
})