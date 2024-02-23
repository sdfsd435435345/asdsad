import { CoinDetailsLayout } from '@/features/assets/coin-details/coin-details'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <CoinDetailsLayout />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`modules_assets_coin_details_index_page_rg50yg6hwndwshlhafsha`),
    },
  }
}
