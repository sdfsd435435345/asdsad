import C2cOrderAppeal from '@/features/c2c/order/appeal'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <C2cOrderAppeal />
}
export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: await getC2cDefaultSeoMeta(t`features_c2c_order_appeal_index_iuiem_zlsewnnvwfxq_dk`),
    },
  }
}
