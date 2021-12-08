import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  build: {
    outDir: 'app/build',
  },
  plugins: [
    svelte(),
    WindiCSS({
      scan: {
        dirs: ['src'],
        fileExtensions: ['svelte', 'ts'],
      },
    }),
  ],
});
