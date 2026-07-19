import { defineConfig } from 'vite-plus'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: '/wosamma/',
  staged: {
    '*': 'vp check --fix',
  },
  fmt: { semi: false, singleQuote: true },
  lint: {
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
})
