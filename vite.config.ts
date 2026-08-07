
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig(({ command }) => ({
  root: command === 'serve' ? resolve(__dirname, 'example') : __dirname,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuePrlx',
      fileName: 'VuePrlx',
    },
  },
  plugins: [dts()],
}));