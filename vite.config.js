import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Usando el puerto por defecto de Vite
    open: true, // Abre el navegador automáticamente
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Útil si usas JSX sin importar React manualmente
  },
});
