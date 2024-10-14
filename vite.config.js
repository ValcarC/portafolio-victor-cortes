import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de que el base path sea correcto
  build: {
    outDir: 'dist', // Directorio de salida para la construcción
  },
});