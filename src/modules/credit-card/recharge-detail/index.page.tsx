import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'
import RechargeDetail from '@/features/assets/recharge-detail'

export function Page() {
  return <RechargeDetail />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`features_assets_recharge_detail_index_csqodcqxdq`),
    },
  }
}
