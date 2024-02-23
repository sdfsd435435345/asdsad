import { getInmailPageRoutePath } from '@/helper/route/inmail'
import { getInmailDefaultSeoMeta } from '@/helper/inmail'
import { t } from '@lingui/macro'

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {
    footerShow: false,
    fullScreen: true,
  }
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${getInmailPageRoutePath()}`,
      pageProps,
      layoutParams,
      documentProps: getInmailDefaultSeoMeta(t`features_message_index_5101228`),
    },
  }
}

export { onBeforeRender }
