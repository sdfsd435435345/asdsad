import C2cOrderAppealUpload from '@/features/c2c/order/appeal-upload'
import { getC2cDefaultSeoMeta } from '@/helper/c2c/trade'
import { t } from '@lingui/macro'

export function Page() {
  return <C2cOrderAppealUpload />
}
export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: await getC2cDefaultSeoMeta(t`features_c2c_order_detail_appealing_c3ueu1kmp336ixezzlzgd`),
    },
  }
}
