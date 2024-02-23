import ReactDOMClient from 'react-dom/client'
import { ThemeEnum } from '@/constants/base'
import { onInstallForApp } from '@/helper/lifecycle'
import { getSeo } from '@/helper/seo'
import { link } from '@/helper/link'
import AsyncSuspense from '@/components/async-suspense'
import { onInstallForClient } from '@/helper/lifecycle/client'
import { baseCommonStore } from '@/store/common'
import { isRouteInWhitePath } from '@/helper/fusion-api'
import { getRedirectUrl } from '@/helper/auth'
import LoadFail from '@/components/load-fail'
import Layout from './layout'
import '@/style/layout.css'

export const clientRouting = true
export const prefetchStaticAssets = { when: 'VIEWPORT' }
export const hydrationCanBeAborted = true

let root: ReactDOMClient.Root

async function render(pageContext: PageContext) {
  const { Page, pageProps, needSeo, authTo, unAuthTo, path, isHydration } = pageContext
  /** 融合模式下判断* */
  let isBlackList = isRouteInWhitePath(path)
  const container = document.getElementById('page-view')!
  if (isHydration) {
    await onInstallForApp(pageContext)
    const isBlock = await onInstallForClient(pageContext)
    if (isBlock === true) {
      return
    }
    const redirectUrl = getRedirectUrl(authTo, unAuthTo)
    const isRedirectTo = !!redirectUrl
    let appLayout = isBlackList ? (
      <Layout pageContext={pageContext}>
        <LoadFail />
      </Layout>
    ) : needSeo ? (
      <Layout pageContext={pageContext}>{!isRedirectTo && <Page {...pageProps} />}</Layout>
    ) : (
      <AsyncSuspense>
        <Layout pageContext={pageContext}>{!isRedirectTo && <Page {...pageProps} />}</Layout>
      </AsyncSuspense>
    )
    root = ReactDOMClient.hydrateRoot(container, appLayout)
    if (isRedirectTo) {
      link(redirectUrl, { overwriteLastHistoryEntry: true })
    }
    return
  }
  const redirectUrl = getRedirectUrl(authTo, unAuthTo)
  const isRedirectTo = !!redirectUrl
  let appLayout = isBlackList ? (
    <Layout pageContext={pageContext}>
      <LoadFail />
    </Layout>
  ) : needSeo ? (
    <Layout pageContext={pageContext}>{!isRedirectTo && <Page {...pageProps} />}</Layout>
  ) : (
    <AsyncSuspense>
      <Layout pageContext={pageContext}>{!isRedirectTo && <Page {...pageProps} />}</Layout>
    </AsyncSuspense>
  )

  if (!root) {
    root = ReactDOMClient.createRoot(container)
  }
  root.render(appLayout)

  const { title, description } = getSeo(pageContext)
  document.title = title
  document?.querySelector('meta[name="description"]')?.setAttribute('content', description)
  const commonStore = baseCommonStore.getState()
  const theme = commonStore.theme
  document.body.setAttribute('theme', theme || ThemeEnum.dark)
  if (isRedirectTo) {
    link(redirectUrl, { overwriteLastHistoryEntry: true })
  }
}

function onHydrationEnd() {}

export { render, onHydrationEnd }
