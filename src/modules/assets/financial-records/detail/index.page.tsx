import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'
import { RecordDetailLayout } from '@/features/assets/financial-records/record-detail/index'

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
