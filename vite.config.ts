import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'encchris.github.io';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    tailwindcss()
  ],
})
