import C2cThirdOrderDetail from '@/features/c2c/order/third-detail'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <C2cThirdOrderDetail />
}
export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: await getC2cDefaultSeoMeta(t`features_orders_order_detail_510265`),
    },
  }
}
