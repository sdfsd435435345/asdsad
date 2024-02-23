import { RecordDetailLayout } from '@/features/assets/financial-record/record-detail/index'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <RecordDetailLayout />
}

export async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      documentProps: getAssetsDefaultSeoMeta(t`assets.financial-record.recordDetail`),
    },
  }
}
