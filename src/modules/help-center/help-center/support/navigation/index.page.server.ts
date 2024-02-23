import { t } from '@lingui/macro'
import { getSupportDefaultSeoMeta } from '@/helper/support'

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
      documentProps: getSupportDefaultSeoMeta(t`user.personal_center_06`),
    },
  }
}

export { onBeforeRender }
