import C2cOrders from '@/features/c2c/order'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <C2cOrders />
}
export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: await getC2cDefaultSeoMeta(t`features_c2c_order_index_9sxn_zndgpumcd8duio4u`),
    },
  }
}
