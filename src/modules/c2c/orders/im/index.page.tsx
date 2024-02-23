import C2cOrderIm from '@/features/c2c/order/im'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <C2cOrderIm />
}
export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: await getC2cDefaultSeoMeta(t`modules_c2c_orders_im_index_page_bkd5cvmsnfsfsx0lk8zyo`),
    },
  }
}
