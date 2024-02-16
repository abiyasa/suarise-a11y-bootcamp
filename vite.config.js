import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '01-simple-counter': resolve(__dirname, '01-simple-counter/index.html'),
        '02-focus-order': resolve(__dirname, '02-focus-order/index.html'),
        '02-skip-nav': resolve(__dirname, '02-skip-nav/index.html'),
        '03-managing-focus': resolve(__dirname, '03-managing-focus/index.html'),
        '03-modals': resolve(__dirname, '03-modals/index.html'),
        '04-radio-group': resolve(__dirname, '04-radio-group/index.html'),
        '04-radio-group-native': resolve(__dirname, '04-radio-group/index-native.html'),
      }
    }
  }
});
