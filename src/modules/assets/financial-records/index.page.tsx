import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'
import { FinancialRecordLayout } from '@/features/assets/financial-records/financial-record'

export function Page() {
  return <FinancialRecordLayout />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`assets.financial-record.title`),
    },
  }
}
