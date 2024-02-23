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
      documentProps: getMarketDefaultSeoMeta(
        t`modules_c2c_payments_collection_account_index_page_server_aasetypgwjtzqxdz3dzrv`
      ),
    },
  }
}

export { onBeforeRender }
