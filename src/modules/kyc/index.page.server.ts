import { t } from '@lingui/macro'
import { getKycDefaultSeoMeta } from '@/helper/kyc'

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: await getKycDefaultSeoMeta(t`features_trade_future_c2c_25101570`),
    },
  }
}

export { onBeforeRender }
