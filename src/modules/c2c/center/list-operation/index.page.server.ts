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
        t`modules_c2c_center_list_operation_index_page_server_8ni3dwd_fnwmpftbuhzj4`
      ),
    },
  }
}

export { onBeforeRender }
