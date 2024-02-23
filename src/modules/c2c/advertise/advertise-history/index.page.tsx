import { AdvertiseHistoryLayout } from '@/features/c2c/advertise/advertise-history'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <AdvertiseHistoryLayout />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/c2c/ads/history',
      documentProps: await getC2cDefaultSeoMeta(
        t`features_c2c_advertise_advertise_history_index_axoles0q04etzph70deca`
      ),
    },
  }
}
