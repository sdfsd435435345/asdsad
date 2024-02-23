import { t } from '@lingui/macro'
import { getKycDefaultSeoMeta } from '@/helper/kyc'

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: await getKycDefaultSeoMeta(t`features_kyc_index_5101110`),
    },
  }
}

export { onBeforeRender }
