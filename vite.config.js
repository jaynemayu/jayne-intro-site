import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/jayne-intro-site/' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
