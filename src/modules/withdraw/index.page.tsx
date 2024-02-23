/**
 * 外部对接 - 提现页面
 */
import { WithdrawLayout } from '@/features/assets/withdraw/withdraw-layout'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <WithdrawLayout page="open" />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.urlOriginal}`,
      documentProps: getAssetsDefaultSeoMeta(t`assets.common.withdraw`),
    },
  }
}
