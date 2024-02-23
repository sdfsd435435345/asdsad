import { t } from '@lingui/macro'
import { getMarketDefaultSeoMeta } from '@/helper/market/sector'

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {
    footerShow: false,
    fullScreen: true,
  }
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: getMarketDefaultSeoMeta(t`features_message_center_index_5101354`),
    },
  }
}

export { onBeforeRender }
