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
      documentProps: getArtcleDefaultSeoMeta(t`features_announcement_article_index_5101255`),
    },
  }
}

export { onBeforeRender }
