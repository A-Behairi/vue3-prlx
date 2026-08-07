
import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig(({ command }) => ({
  root: command === 'serve' ? resolve(import.meta.dirname, 'example') : import.meta.dirname,
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'VuePrlx',
      fileName: 'VuePrlx',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
}));