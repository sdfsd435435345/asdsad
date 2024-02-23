/* eslint-disable */
// https://vitejs.dev/config/
import { defineConfig, loadEnv, UserConfig } from 'vite'
import pkg from './package.json'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import legacy from '@vitejs/plugin-legacy'
import ssr from 'vite-plugin-ssr/plugin'
import macrosPlugin from 'vite-plugin-babel-macros'
import postcssPresetEnv from 'postcss-preset-env'
import vavite from 'vavite'
// import ViteFontmin from 'vite-fontmin'
import { injectEnvConfig } from './build'
// import { sentryVitePlugin } from '@sentry/vite-plugin'
import { vitePlugins } from './src/nbit'


const { dependencies } = pkg
// Packages we want in the vendor aka the deps needed in the entire app.
const globalVendorPackages = [
  '@nbit/vant',
  'ahooks',
  'react-use',
  'lodash',
  'express',
  '@nbit/react',
  '@nbit/utils',
  'firebase',
  'react',
  'react-dom',
  'react-router-dom',
  '@arco-design/web-react',
]
function renderChunks(deps: Record<string, string>) {
  let chunks = {}
  Object.keys(deps).forEach(key => {
    if (globalVendorPackages.includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

process.env.VITE_MARKCOIN_BUSINESS_ID = process.env.VITE_MARKCOIN_BUSINESS_ID || '120057'
const id = process.env.VITE_MARKCOIN_BUSINESS_ID
export default async ({ mode }) => {
  const isCiBuild = mode === 'ci'
  const isDevelopment = mode === 'development'
  const env = loadEnv(mode, process.cwd())
  const { VITE_PORT, VITE_NEWBIT_ENV } = env
  await injectEnvConfig(env, mode, id)
  const enabledSentry = false
  const enabledSourceMap = false
  return defineConfig({
    // legacy: { buildSsrCjsExternalHeuristics: true },
    server: {
      port: Number(VITE_PORT),
      host: 'localhost',
    },
    buildSteps: [
      { name: 'client' },
      {
        name: 'server',
        config: {
          build: {
            // ssr: true,
            rollupOptions: {
              output: {
                // We have to disable this for multiple entries
                inlineDynamicImports: false,
              },
            },
          },
        },
      },
    ],
    plugins: [
      isDevelopment ? vitePlugins.cssModuleHMR() : {},
      // vavite({
      //   serverEntry: '/server/index.ts',
      //   serveClientAssetsInDev: true,
      // }),
      tsconfigPaths(),
      macrosPlugin(),
      legacy({
        renderLegacyChunks: !isCiBuild,
      }),
      postcssPresetEnv(),
      react(),
      createStyleImportPlugin({
        libs: [
          {
            libraryName: '@nbit/vant',
            resolveStyle: name => {
              if (['area', 'config-provider', 'datetime-picker', 'hooks'].includes(name)) {
                return ''
              }
              return `@nbit/vant/es/${name}/style/index.css`
            },
          },
        ],
      }),
      // ViteFontmin({
      //   fontSrc: './src/assets/font/**/*.*',
      //   fontDest: './public/font',
      //   fileExt: ['ts'],
      //   include: 'src/locales/**/*',
      // }),
    ],
    build: {
      target: 'es2020',
      outDir: './dist',
      sourcemap: enabledSourceMap,
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       vendor: globalVendorPackages,
      //       ...renderChunks(dependencies),
      //     },
      //   },
      // },
    },
    css: {
      modules: {
        generateScopedName: '[folder]-[name]__[local]--[hash:base64:3]',
        scopeBehaviour: 'global',
      },
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020',
      },
    },
  } as UserConfig)
}
