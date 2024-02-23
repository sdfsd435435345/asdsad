import { FinancialRecordLayout } from '@/features/assets/financial-record/financial-record'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

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
