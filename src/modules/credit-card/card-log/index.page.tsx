import CardLogs from '@/features/credit-card/card-log'
import { t } from '@lingui/macro'

export function Page() {
  return <CardLogs />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: `/login?redirect=${pageContext.path}`,
      documentProps: {
        title: t`features_credit_card_my_card_index_e5vmugvvgv`,
      },
    },
  }
}
