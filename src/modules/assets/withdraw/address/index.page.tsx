import { WithdrawAddress } from '@/features/assets/withdraw/address/withdraw-address'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <WithdrawAddress />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(
        t`modules_assets_withdraw_address_index_page_server_feyixphxkv__1npl5gysc`
      ),
    },
  }
}
