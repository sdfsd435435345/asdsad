import { WithdrawLayout } from '@/features/assets/withdraw/withdraw-layout'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <WithdrawLayout />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`assets.common.withdraw`),
    },
  }
}
