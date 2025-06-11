import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Asegura que se enlace al host correcto
    port: 3000,        // Puerto personalizado
    open: true,        // Abre el navegador automáticamente
  },
});