import { t } from '@lingui/macro'
import { getArtcleDefaultSeoMeta } from '@/helper/support'

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
      documentProps: {
        ...getArtcleDefaultSeoMeta(t`features_help_center_support_search_index_5101078`),
      },
    },
  }
}

export { onBeforeRender }
