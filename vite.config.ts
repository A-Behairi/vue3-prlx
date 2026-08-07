
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig(({ command }) => ({
  // dev serves the example page; build stays library mode against src/
  root: command === 'serve' ? resolve(__dirname, 'example') : __dirname,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuePrlx',
      fileName: 'VuePrlx',
    },
  },
  plugins: [dts()],
}));