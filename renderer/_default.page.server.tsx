import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr'
import { ThemeEnum, ThemeBackGroundColor } from '@/constants/base'
import { getSeo } from '@/helper/seo'
import { onInstallForApp } from '@/helper/lifecycle'
import { onInstallForServer } from '@/helper/lifecycle/server'
import AsyncSuspense from '@/components/async-suspense'
import { renderToStaticNodeStream } from 'react-dom/server'
import {
  extractMetaData,
  generateBasicMetaData,
  generateOGMetaData,
  generateTwitterMetaData,
} from '@/helper/layout/metadata'
import Layout from './layout'

const passToClient = [
  'pageProps',
  'documentProps',
  'locale',
  'routeParams',
  'theme',
  'layoutParams',
  'path',
  'host',
  'headers',
  'needSeo',
  'authTo',
  'unAuthTo',
  'layoutProps',
]
async function render(pageContext: PageContext) {
  pageContext = await onInstallForServer(pageContext)
  await onInstallForApp(pageContext)
  const { Page, pageProps, userAgent, theme = ThemeEnum.dark, needSeo, layoutProps } = pageContext
  const themeColor = ThemeBackGroundColor[theme]
  const App = needSeo ? (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  ) : (
    <AsyncSuspense>
      <Layout pageContext={pageContext}>
        <Page {...pageProps} />
      </Layout>
    </AsyncSuspense>
  )
  const stream = await renderToStaticNodeStream(App)

  const { title, description } = getSeo(pageContext)
  const metaData = extractMetaData(layoutProps, title, description)
  const { imgWebIcon } = metaData

  const serverTitle = pageContext?.path === '/' ? metaData.webTitle : title

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        ${dangerouslySkipEscape(generateBasicMetaData(metaData))}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta http-equiv="Cache-Control" content="max-age=180">
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="${themeColor}">
        <link rel="manifest" href="/manifest.json">
        <link rel="icon" href="${imgWebIcon}" />

        ${dangerouslySkipEscape(generateOGMetaData(metaData, serverTitle))}

        ${dangerouslySkipEscape(generateTwitterMetaData(metaData, serverTitle))}

      </head>
      <body theme="${theme}">
        <div id="page-view">${stream}</div>
      </body>
    </html>` as any

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
    },
  }
}
export { render }
export { passToClient }
