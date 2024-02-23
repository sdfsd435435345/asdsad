import TradeDetail from '@/features/assets/trade-detail'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <TradeDetail />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`features_assets_trade_detail_index_lkvgw3iagt`),
    },
  }
}
