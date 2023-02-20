
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuePrlx',
      fileName: 'VuePrlx',
    },
  },
  plugins: [dts()],
});
// // Plugins
// import vue from '@vitejs/plugin-vue'
// import { transformAssetUrls } from 'vite-plugin-vuetify'
// import nodeResolve from 'rollup-plugin-node-resolve'
// // import babel from 'rollup-plugin-babel'

// // Utilities
// import { defineConfig, Plugin } from 'vite'
// import { fileURLToPath, URL } from 'node:url'

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: 'src/index.js',
//       plugins: [
//         // nodeResolve() as Plugin
//         // babel(),
//       ],
//       output: [
//         {
//           format: 'umd',
//           name: 'VuePrlx',
//           exports: 'named',
//           file: 'dist/v-prlx.js',
//         },
//         {
//           format: 'esm',
//           file: 'dist/v-prlx.esm.js',
//         },
//       ],
//     },
//   },
//   plugins: [
//     vue({
//       template: { transformAssetUrls }
//     })
//   ],
//   define: { 'process.env': {} },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//     extensions: [
//       '.js',
//       '.json',
//       '.jsx',
//       '.mjs',
//       '.ts',
//       '.tsx',
//       '.vue',
//     ],
//   },
//   server: {
//     port: 3000,
//   },
// })
