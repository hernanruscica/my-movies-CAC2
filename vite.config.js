import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Si estás usando un subdirectorio, cambia '/' por '/<nombre-repositorio>/'
})

